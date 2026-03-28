import { Link } from "react-router-dom";
import type { Video } from "@/data/videos";

const VideoCard = ({ video }: { video: Video }) => {
  return (
    <div className="group flex flex-col">
      <Link to={`/video/${video.id}`} className="relative aspect-video rounded-xl overflow-hidden bg-secondary">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 bg-background/90 text-foreground text-xs px-1.5 py-0.5 rounded font-medium">
          {video.duration}
        </span>
      </Link>
      <div className="flex gap-3 mt-3">
        <Link to={`/channel/${video.channelId}`} className="shrink-0">
          <img
            src={video.channelAvatar}
            alt={video.channelName}
            className="w-9 h-9 rounded-full object-cover"
          />
        </Link>
        <div className="min-w-0">
          <Link to={`/video/${video.id}`}>
            <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
              {video.title}
            </h3>
          </Link>
          <Link to={`/channel/${video.channelId}`} className="text-xs text-muted-foreground hover:text-foreground transition-colors mt-1 block">
            {video.channelName}
          </Link>
          <p className="text-xs text-muted-foreground">
            {video.views} · {video.uploadedAgo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
