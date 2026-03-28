import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { shorts, getShort, getChannel } from "@/data/videos";
import { ThumbsUp, ThumbsDown, MessageCircle, Share2, ChevronUp, ChevronDown } from "lucide-react";

const formatNumber = (n: number) => {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
};

const Shorts = () => {
  const { shortId } = useParams<{ shortId: string }>();
  const [infiniteShorts, setInfiniteShorts] = useState(() => {
    const repeated = [...shorts, ...shorts, ...shorts];
    return repeated;
  });
  const initialIndex = shortId ? shorts.findIndex((s) => s.id === shortId) + shorts.length : shorts.length;
  const [currentIndex, setCurrentIndex] = useState(Math.max(initialIndex, 0));
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [disliked, setDisliked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (currentIndex >= infiniteShorts.length - shorts.length) {
      setInfiniteShorts(prev => [...prev, ...shorts]);
    } else if (currentIndex < shorts.length && infiniteShorts.length > shorts.length * 3) {
      const newStart = Math.max(0, currentIndex - shorts.length);
      setInfiniteShorts([...shorts, ...infiniteShorts.slice(0, infiniteShorts.length - shorts.length)]);
      setCurrentIndex(newStart + shorts.length);
    }
  }, [currentIndex, infiniteShorts.length]);

  const currentShort = infiniteShorts[currentIndex];
  const channel = currentShort ? getChannel(currentShort.channelId) : undefined;

  const goNext = () => {
    setCurrentIndex(currentIndex + 1);
  };
  const goPrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const toggleLike = (id: string) => {
    setLiked((p) => ({ ...p, [id]: !p[id] }));
    setDisliked((p) => ({ ...p, [id]: false }));
  };
  const toggleDislike = (id: string) => {
    setDisliked((p) => ({ ...p, [id]: !p[id] }));
    setLiked((p) => ({ ...p, [id]: false }));
  };

  if (!currentShort) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">No shorts found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-4 px-4">
        <div className="flex items-center gap-4">
          {/* Short card */}
          <div className="relative w-[360px] h-[640px] bg-secondary rounded-2xl overflow-hidden flex-shrink-0">
            <img
              src={currentShort.thumbnail}
              alt={currentShort.title}
              className="w-full h-full object-cover"
            />

            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent p-4">
              <Link to={`/channel/${currentShort.channelId}`} className="flex items-center gap-2 mb-2">
                <img src={currentShort.channelAvatar} alt={currentShort.channelName} className="w-8 h-8 rounded-full object-cover" />
                <span className="text-sm font-medium text-foreground">{currentShort.channelName}</span>
              </Link>
              <h2 className="text-sm font-medium text-foreground leading-snug">{currentShort.title}</h2>
              <p className="text-xs text-muted-foreground mt-1">{currentShort.views} · {currentShort.uploadedAgo}</p>
            </div>

            {/* Duration badge */}
            <div className="absolute top-3 right-3 bg-background/80 text-foreground text-xs px-2 py-1 rounded-full font-medium">
              {currentShort.duration}
            </div>
          </div>

          {/* Side actions */}
          <div className="flex flex-col items-center gap-6">
            <button onClick={goPrev} disabled={currentIndex === 0} className="p-2 rounded-full bg-secondary hover:bg-muted disabled:opacity-30 transition-colors text-foreground">
              <ChevronUp className="w-6 h-6" />
            </button>

            <button onClick={() => toggleLike(currentShort.id)} className={`flex flex-col items-center gap-1 ${liked[currentShort.id] ? "text-primary" : "text-foreground"}`}>
              <div className="w-12 h-12 rounded-full bg-secondary hover:bg-muted flex items-center justify-center transition-colors">
                <ThumbsUp className="w-6 h-6" fill={liked[currentShort.id] ? "currentColor" : "none"} />
              </div>
              <span className="text-xs">{formatNumber(currentShort.likes + (liked[currentShort.id] ? 1 : 0))}</span>
            </button>

            <button onClick={() => toggleDislike(currentShort.id)} className={`flex flex-col items-center gap-1 ${disliked[currentShort.id] ? "text-primary" : "text-foreground"}`}>
              <div className="w-12 h-12 rounded-full bg-secondary hover:bg-muted flex items-center justify-center transition-colors">
                <ThumbsDown className="w-6 h-6" fill={disliked[currentShort.id] ? "currentColor" : "none"} />
              </div>
              <span className="text-xs">Dislike</span>
            </button>

            <div className="flex flex-col items-center gap-1 text-foreground">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xs">{formatNumber(currentShort.commentsCount)}</span>
            </div>

            <button className="flex flex-col items-center gap-1 text-foreground">
              <div className="w-12 h-12 rounded-full bg-secondary hover:bg-muted flex items-center justify-center transition-colors">
                <Share2 className="w-6 h-6" />
              </div>
              <span className="text-xs">Share</span>
            </button>

            <button onClick={goNext} className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors text-foreground">
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="absolute bottom-4 flex gap-1.5">
          {shorts.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i + shorts.length)}
              className={`w-2 h-2 rounded-full transition-colors ${(currentIndex % shorts.length) === i ? "bg-primary" : "bg-muted-foreground/30"}`}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shorts;
