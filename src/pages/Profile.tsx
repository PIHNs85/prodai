import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoCard from "@/components/VideoCard";
import { Link } from "react-router-dom";
import { videos, shorts, channels } from "@/data/videos";
import { Settings, Grid3X3, Zap, User, Film } from "lucide-react";

type ProfileTab = "videos" | "shorts" | "about";

const Profile = () => {
  const [activeTab, setActiveTab] = useState<ProfileTab>("videos");

  // Mock current user as channel ch1
  const user = channels[0];
  const userVideos = videos.filter((v) => v.channelId === user.id);
  const userShorts = shorts.filter((s) => s.channelId === user.id);

  const tabs: { id: ProfileTab; label: string; icon: React.ReactNode }[] = [
    { id: "videos", label: "Videos", icon: <Grid3X3 className="w-4 h-4" /> },
    { id: "shorts", label: "Shorts", icon: <Zap className="w-4 h-4" /> },
    { id: "about", label: "About", icon: <User className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Banner */}
      <div className="h-32 md:h-48 bg-gradient-to-r from-primary/20 via-accent/10 to-secondary" />

      {/* Profile header */}
      <div className="max-w-[1800px] mx-auto w-full px-4 -mt-10 mb-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-background"
          />
          <div className="flex-1 pb-2">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground">{user.name}</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {user.subscribers} subscribers · {userVideos.length} videos · {userShorts.length} shorts
            </p>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{user.description}</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground text-sm rounded-full hover:bg-muted transition-colors shrink-0 mb-2">
            <Settings className="w-4 h-4" /> Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <div className="max-w-[1800px] mx-auto px-4 flex gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <main className="flex-1 max-w-[1800px] mx-auto w-full px-4 py-6">
        {activeTab === "videos" && (
          userVideos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
              {userVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Film className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No videos yet.</p>
            </div>
          )
        )}

        {activeTab === "shorts" && (
          userShorts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {userShorts.map((short) => (
                <Link
                  key={short.id}
                  to={`/shorts/${short.id}`}
                  className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-secondary"
                >
                  <img src={short.thumbnail} alt={short.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-3">
                    <p className="text-xs font-medium text-foreground line-clamp-2">{short.title}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">{short.views}</p>
                  </div>
                  <span className="absolute top-2 right-2 bg-background/80 text-foreground text-[10px] px-1.5 py-0.5 rounded-full">{short.duration}</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">No shorts yet.</p>
            </div>
          )
        )}

        {activeTab === "about" && (
          <div className="max-w-2xl space-y-6">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Description</h3>
              <p className="text-sm text-muted-foreground">{user.description}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-lg font-bold text-foreground">{user.subscribers}</p>
                  <p className="text-xs text-muted-foreground">Subscribers</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-lg font-bold text-foreground">{user.totalViews}</p>
                  <p className="text-xs text-muted-foreground">Total Views</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-lg font-bold text-foreground">{userVideos.length}</p>
                  <p className="text-xs text-muted-foreground">Videos</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <p className="text-lg font-bold text-foreground">{userShorts.length}</p>
                  <p className="text-xs text-muted-foreground">Shorts</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground mb-2">Joined</h3>
              <p className="text-sm text-muted-foreground">{user.joinedDate}</p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
