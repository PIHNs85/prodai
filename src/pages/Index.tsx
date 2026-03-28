import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { videos, shorts, categories, searchVideos, filterByCategory } from "@/data/videos";
import { Zap } from "lucide-react";

const Index = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos = useMemo(() => {
    if (query) return searchVideos(query);
    return filterByCategory(activeCategory);
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Category chips */}
      <div className="sticky top-[57px] z-40 bg-background border-b border-border">
        <div className="max-w-[1800px] mx-auto px-4 py-3 flex gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat && !query
                  ? "bg-foreground text-background"
                  : "bg-secondary text-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 max-w-[1800px] mx-auto w-full px-4 py-6">
        {query && (
          <p className="text-sm text-muted-foreground mb-4">
            Showing results for "<span className="text-foreground">{query}</span>"
          </p>
        )}

        {/* Minis shelf — only show when not searching */}
        {!query && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-serif font-bold text-foreground">Minis</h2>
              </div>
              <Link to="/shorts" className="text-sm text-primary hover:text-primary/80 transition-colors">
                View all
              </Link>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {shorts.slice(0, 6).map((short) => (
                <Link
                  key={short.id}
                  to={`/shorts/${short.id}`}
                  className="group relative shrink-0 w-[140px] aspect-[9/16] rounded-xl overflow-hidden bg-secondary"
                >
                  <img
                    src={short.thumbnail}
                    alt={short.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-2">
                    <p className="text-[11px] font-medium text-foreground line-clamp-2 leading-tight">{short.title}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{short.views}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Series section */}
        <section>
          {!query && (
            <h2 className="text-lg font-serif font-bold text-foreground mb-4">Series</h2>
          )}
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground py-20">
              No series found.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
