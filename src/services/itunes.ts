export interface ITunesMovie {
  id: string;
  trackId: number;
  title: string;
  genre: string;
  year: string;
  director: string;
  runtime: string;
  releaseDate: string;
  rating: string;
  description: string;
  artworkCard: string;
  artworkHero: string;
  trackViewUrl: string;
}

interface RSSEntry {
  "im:name": { label: string };
  "im:image": { label: string; attributes: { height: string } }[];
  category: { attributes: { label: string } };
  "im:releaseDate": { label: string; attributes: { label: string } };
  id: { label: string; attributes: { "im:id": string } };
}

interface LookupResult {
  trackId: number;
  trackName: string;
  artistName: string;
  primaryGenreName: string;
  releaseDate: string;
  trackTimeMillis?: number;
  contentAdvisoryRating?: string;
  longDescription?: string;
  shortDescription?: string;
  artworkUrl100: string;
  trackViewUrl?: string;
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatRuntime(ms?: number): string {
  if (!ms) return "N/A";
  const minutes = Math.round(ms / 60000);
  return `${minutes} minutes`;
}

function makeArtwork(url: string, size: string): string {
  // iTunes artwork URLs end with /NNxNN*.jpg — replace dimensions
  return url.replace(/\/\d+x\d+[^/]*$/, `/${size}.jpg`);
}

export async function fetchTopMovies(limit = 25): Promise<ITunesMovie[]> {
  // Step 1: Get top movies from RSS feed
  const rssUrl = `https://itunes.apple.com/us/rss/topmovies/limit=${limit}/json`;
  const rssRes = await fetch(rssUrl);
  if (!rssRes.ok) throw new Error("Failed to fetch iTunes RSS feed");
  const rssData = await rssRes.json();
  const entries: RSSEntry[] = rssData?.feed?.entry ?? [];

  if (entries.length === 0) return [];

  // Step 2: Get detailed info via lookup API (batch by IDs)
  const ids = entries.map((e) => e.id.attributes["im:id"]);
  const lookupUrl = `https://itunes.apple.com/lookup?id=${ids.join(",")}&entity=movie`;
  const lookupRes = await fetch(lookupUrl);
  const lookupData = await lookupRes.json();
  const lookupMap = new Map<number, LookupResult>();
  for (const r of lookupData.results ?? []) {
    if (r.wrapperType === "track") {
      lookupMap.set(r.trackId, r);
    }
  }

  // Step 3: Merge RSS + lookup data, filter to 2025/2026 releases
  const movies: ITunesMovie[] = [];
  for (const entry of entries) {
    const trackId = Number(entry.id.attributes["im:id"]);
    const detail = lookupMap.get(trackId);
    const releaseYear = detail
      ? new Date(detail.releaseDate).getFullYear().toString()
      : entry["im:releaseDate"].label.slice(0, 4);

    if (releaseYear !== "2025" && releaseYear !== "2026") continue;

    const artworkBase = detail?.artworkUrl100 ?? entry["im:image"][2]?.label ?? "";

    movies.push({
      id: slugify(detail?.trackName ?? entry["im:name"].label),
      trackId,
      title: detail?.trackName ?? entry["im:name"].label,
      genre: detail?.primaryGenreName ?? entry.category.attributes.label,
      year: releaseYear,
      director: detail?.artistName ?? "Unknown",
      runtime: formatRuntime(detail?.trackTimeMillis),
      releaseDate: entry["im:releaseDate"].attributes.label,
      rating: detail?.contentAdvisoryRating ?? "NR",
      description:
        detail?.longDescription ?? detail?.shortDescription ?? "",
      artworkCard: makeArtwork(artworkBase, "600x600bb"),
      artworkHero: makeArtwork(artworkBase, "1400x1400bb"),
      trackViewUrl: detail?.trackViewUrl ?? entry.id.label,
    });
  }

  return movies;
}
