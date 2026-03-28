import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTopMovies } from "@/hooks/use-itunes";
import { Skeleton } from "@/components/ui/skeleton";

const MovieDetail = () => {
  const { trackId } = useParams<{ trackId: string }>();
  const { data: movies, isLoading } = useTopMovies();
  const movie = movies?.find((m) => m.trackId === Number(trackId));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <Skeleton className="w-full h-[50vh]" />
        <div className="max-w-4xl mx-auto px-4 py-12 space-y-4">
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-40 w-full" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-primary mb-4">Movie Not Found</h1>
          <Link to="/" className="text-primary hover:text-primary/80 underline">Back to Movies</Link>
        </div>
      </div>
    );
  }

  // Get 3 other movies for "More Movies" section
  const relatedMovies = movies?.filter((m) => m.trackId !== movie.trackId).slice(0, 3) ?? [];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <img
          src={movie.artworkHero}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto flex items-end gap-6">
          <img
            src={movie.artworkCard}
            alt={`${movie.title} poster`}
            className="hidden md:block w-32 lg:w-40 rounded-lg shadow-2xl border border-border/20 flex-shrink-0"
            style={{ aspectRatio: "2/3" }}
          />
          <div>
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-4">{movie.title}</h1>
            <p className="text-foreground text-lg md:text-xl">
              {movie.genre} | {movie.year} | Dir. {movie.director}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-serif text-primary mb-6">About</h2>
            {movie.description ? (
              <p className="text-foreground text-lg leading-relaxed">{movie.description}</p>
            ) : (
              <p className="text-muted-foreground italic">No description available.</p>
            )}
            <a
              href={movie.trackViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              View on iTunes
            </a>
          </div>

          {/* Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-secondary/50 rounded-lg p-6 space-y-4 sticky top-24">
              <h3 className="text-2xl font-serif text-primary mb-4">Details</h3>
              <div className="border-b border-border pb-3">
                <p className="text-muted-foreground text-sm font-medium">Director</p>
                <p className="text-foreground text-base mt-1">{movie.director}</p>
              </div>
              <div className="border-b border-border pb-3">
                <p className="text-muted-foreground text-sm font-medium">Genre</p>
                <p className="text-foreground text-base mt-1">{movie.genre}</p>
              </div>
              <div className="border-b border-border pb-3">
                <p className="text-muted-foreground text-sm font-medium">Runtime</p>
                <p className="text-foreground text-base mt-1">{movie.runtime}</p>
              </div>
              <div className="border-b border-border pb-3">
                <p className="text-muted-foreground text-sm font-medium">Rating</p>
                <p className="text-primary text-xl mt-1">{movie.rating}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm font-medium">Release Date</p>
                <p className="text-foreground text-base mt-1">{movie.releaseDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* More Movies */}
        {relatedMovies.length > 0 && (
          <div className="mt-16 space-y-8">
            <h2 className="text-3xl font-serif text-primary mb-8">More Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedMovies.map((r) => (
                <Link key={r.trackId} to={`/movie/${r.trackId}`} className="group cursor-pointer">
                  <img
                    src={r.artworkCard}
                    alt={r.title}
                    className="w-full aspect-[2/3] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <h3 className="text-foreground text-lg font-medium mt-3 group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MovieDetail;
