import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { getVideo, getChannel, getCommentsByVideo, videos } from "@/data/videos";
import { ThumbsUp, ThumbsDown, Share2, Flag, ChevronDown, ChevronUp } from "lucide-react";

const formatNumber = (n: number) => {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toString();
};

const VideoDetail = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const video = getVideo(videoId || "");
  const channel = video ? getChannel(video.channelId) : undefined;
  const videoComments = getCommentsByVideo(videoId || "");
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [descExpanded, setDescExpanded] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [localComments, setLocalComments] = useState(videoComments);

  const relatedVideos = videos.filter((v) => v.id !== videoId).slice(0, 8);

  if (!video) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Video not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setLocalComments([
      {
        id: `local-${Date.now()}`,
        videoId: video.id,
        author: "You",
        avatar: "https://picsum.photos/seed/you/40/40",
        text: commentText.trim(),
        likes: 0,
        dislikes: 0,
        timeAgo: "Just now",
      },
      ...localComments,
    ]);
    setCommentText("");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-[1800px] mx-auto w-full px-4 py-6">
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Video player placeholder */}
            <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center overflow-hidden">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
            </div>

            {/* Title */}
            <h1 className="text-xl font-serif font-bold text-foreground mt-4 leading-tight">
              {video.title}
            </h1>

            {/* Channel + actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
              <div className="flex items-center gap-3">
                <Link to={`/channel/${video.channelId}`}>
                  <img src={video.channelAvatar} alt={video.channelName} className="w-10 h-10 rounded-full object-cover" />
                </Link>
                <div>
                  <Link to={`/channel/${video.channelId}`} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {video.channelName}
                  </Link>
                  {channel && <p className="text-xs text-muted-foreground">{channel.subscribers} subscribers</p>}
                </div>
                <button className="ml-4 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/80 transition-colors">
                  Subscribe
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center bg-secondary rounded-full overflow-hidden">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm transition-colors border-r border-border ${liked ? "text-primary" : "text-foreground hover:bg-muted"}`}
                  >
                    <ThumbsUp className="w-5 h-5" fill={liked ? "currentColor" : "none"} />
                    {formatNumber(video.likes + (liked ? 1 : 0))}
                  </button>
                  <button
                    onClick={handleDislike}
                    className={`flex items-center px-4 py-2 text-sm transition-colors ${disliked ? "text-primary" : "text-foreground hover:bg-muted"}`}
                  >
                    <ThumbsDown className="w-5 h-5" fill={disliked ? "currentColor" : "none"} />
                  </button>
                </div>
                <button className="flex items-center gap-1.5 px-4 py-2 bg-secondary text-foreground text-sm rounded-full hover:bg-muted transition-colors">
                  <Share2 className="w-5 h-5" /> Share
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="mt-4 bg-secondary rounded-xl p-3 cursor-pointer" onClick={() => setDescExpanded(!descExpanded)}>
              <p className="text-sm text-foreground font-medium">
                {video.views} · {video.uploadedAgo}
              </p>
              <p className={`text-sm text-foreground mt-1 whitespace-pre-wrap ${descExpanded ? "" : "line-clamp-2"}`}>
                {video.description}
              </p>
              <button className="flex items-center gap-1 text-xs text-muted-foreground mt-1 hover:text-foreground">
                {descExpanded ? <><ChevronUp className="w-4 h-4" /> Show less</> : <><ChevronDown className="w-4 h-4" /> Show more</>}
              </button>
            </div>

            {/* Comments */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-foreground mb-6">{localComments.length} Comments</h2>
              <form onSubmit={handleComment} className="flex gap-3 mb-8">
                <img src="https://picsum.photos/seed/you/40/40" alt="You" className="w-10 h-10 rounded-full object-cover shrink-0" />
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    className="w-full bg-transparent border-b border-border pb-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  {commentText && (
                    <div className="flex justify-end gap-2 mt-2">
                      <button type="button" onClick={() => setCommentText("")} className="px-3 py-1.5 text-sm text-foreground hover:bg-secondary rounded-full">Cancel</button>
                      <button type="submit" className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-full hover:bg-primary/80 font-medium">Comment</button>
                    </div>
                  )}
                </div>
              </form>

              <div className="space-y-6">
                {localComments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full object-cover shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground">{comment.author}</span>
                        <span className="text-xs text-muted-foreground">{comment.timeAgo}</span>
                      </div>
                      <p className="text-sm text-foreground mt-1">{comment.text}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
                          <ThumbsUp className="w-4 h-4" /> {comment.likes > 0 && comment.likes}
                        </button>
                        <button className="text-xs text-muted-foreground hover:text-foreground">
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                        <button className="text-xs text-muted-foreground hover:text-foreground font-medium">Reply</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: related videos */}
          <aside className="xl:w-[400px] shrink-0 space-y-4">
            <h3 className="text-sm font-medium text-foreground">Related videos</h3>
            {relatedVideos.map((v) => (
              <Link key={v.id} to={`/video/${v.id}`} className="flex gap-2 group">
                <div className="relative w-40 shrink-0 aspect-video rounded-lg overflow-hidden bg-secondary">
                  <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute bottom-1 right-1 bg-background/90 text-foreground text-[10px] px-1 py-0.5 rounded">{v.duration}</span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-medium text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">{v.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{v.channelName}</p>
                  <p className="text-xs text-muted-foreground">{v.views} · {v.uploadedAgo}</p>
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VideoDetail;
