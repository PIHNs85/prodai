import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { getChannel, getVideosByChannel } from "@/data/videos";

const ChannelPage = () => {
  const { channelId } = useParams<{ channelId: string }>();
  const channel = getChannel(channelId || "");
  const channelVideos = getVideosByChannel(channelId || "");

  if (!channel) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Channel not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Banner */}
      <div className="h-32 md:h-48 bg-gradient-to-r from-primary/30 to-secondary" />

      {/* Channel info */}
      <div className="max-w-[1800px] mx-auto w-full px-4 -mt-10 mb-6">
        <div className="flex items-end gap-4">
          <img
            src={channel.avatar}
            alt={channel.name}
            className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-4 border-background"
          />
          <div className="pb-2">
            <h1 className="text-2xl font-serif font-bold text-foreground">{channel.name}</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {channel.subscribers} subscribers · {channel.totalViews} views
            </p>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2 max-w-xl">
              {channel.description}
            </p>
          </div>
          <button className="ml-auto mb-2 px-6 py-2 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/80 transition-colors shrink-0">
            Subscribe
          </button>
        </div>
      </div>

      {/* Videos */}
      <main className="flex-1 max-w-[1800px] mx-auto w-full px-4 pb-8">
        <h2 className="text-lg font-medium text-foreground mb-4">Videos</h2>
        {channelVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
            {channelVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground py-12 text-center">No videos yet.</p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ChannelPage;
