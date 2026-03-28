export interface Channel {
  id: string;
  name: string;
  avatar: string;
  subscribers: string;
  description: string;
  joinedDate: string;
  totalViews: string;
}

export interface Comment {
  id: string;
  videoId: string;
  author: string;
  avatar: string;
  text: string;
  likes: number;
  dislikes: number;
  timeAgo: string;
  replies?: Comment[];
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelId: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  uploadedAgo: string;
  duration: string;
  description: string;
  likes: number;
  dislikes: number;
  category: string;
  videoUrl: string;
}

export const channels: Channel[] = [
  {
    id: "ch1",
    name: "TechVision AI",
    avatar: "https://picsum.photos/seed/ch1/100/100",
    subscribers: "2.4M",
    description: "Exploring the frontier of artificial intelligence, machine learning, and the future of technology.",
    joinedDate: "Jan 15, 2019",
    totalViews: "180M",
  },
  {
    id: "ch2",
    name: "CodeCraft",
    avatar: "https://picsum.photos/seed/ch2/100/100",
    subscribers: "890K",
    description: "Tutorials, tips, and deep dives into software engineering and system design.",
    joinedDate: "Mar 22, 2020",
    totalViews: "45M",
  },
  {
    id: "ch3",
    name: "Design Daily",
    avatar: "https://picsum.photos/seed/ch3/100/100",
    subscribers: "1.1M",
    description: "UI/UX design inspiration, Figma tutorials, and design system breakdowns.",
    joinedDate: "Jun 8, 2018",
    totalViews: "92M",
  },
  {
    id: "ch4",
    name: "Startup Grind",
    avatar: "https://picsum.photos/seed/ch4/100/100",
    subscribers: "560K",
    description: "Interviews with founders, startup advice, and entrepreneurship stories.",
    joinedDate: "Sep 1, 2021",
    totalViews: "28M",
  },
  {
    id: "ch5",
    name: "GameDev Pro",
    avatar: "https://picsum.photos/seed/ch5/100/100",
    subscribers: "750K",
    description: "Game development tutorials, Unity & Unreal tips, and indie dev logs.",
    joinedDate: "Nov 12, 2019",
    totalViews: "55M",
  },
  {
    id: "ch6",
    name: "Data Science Hub",
    avatar: "https://picsum.photos/seed/ch6/100/100",
    subscribers: "1.8M",
    description: "Data analysis, Python tutorials, and machine learning walkthroughs.",
    joinedDate: "Feb 28, 2017",
    totalViews: "210M",
  },
];

export const videos: Video[] = [
  {
    id: "v1",
    title: "GPT-5 is Here: Everything You Need to Know",
    thumbnail: "https://picsum.photos/seed/v1/640/360",
    channelId: "ch1",
    channelName: "TechVision AI",
    channelAvatar: "https://picsum.photos/seed/ch1/100/100",
    views: "2.1M views",
    uploadedAgo: "3 days ago",
    duration: "18:42",
    description: "OpenAI just dropped GPT-5 and it's a game changer. In this video we break down all the new features, capabilities, and what it means for the future of AI. From multimodal understanding to real-time reasoning, this is the biggest leap we've seen yet.",
    likes: 84000,
    dislikes: 1200,
    category: "Technology",
    videoUrl: "",
  },
  {
    id: "v2",
    title: "Build a Full-Stack App in 30 Minutes with AI",
    thumbnail: "https://picsum.photos/seed/v2/640/360",
    channelId: "ch2",
    channelName: "CodeCraft",
    channelAvatar: "https://picsum.photos/seed/ch2/100/100",
    views: "540K views",
    uploadedAgo: "1 week ago",
    duration: "32:15",
    description: "Watch me build a complete full-stack application using AI-powered tools. We'll go from zero to deployed in under 30 minutes.",
    likes: 22000,
    dislikes: 340,
    category: "Programming",
    videoUrl: "",
  },
  {
    id: "v3",
    title: "The Design System That Scales — Figma Masterclass",
    thumbnail: "https://picsum.photos/seed/v3/640/360",
    channelId: "ch3",
    channelName: "Design Daily",
    channelAvatar: "https://picsum.photos/seed/ch3/100/100",
    views: "320K views",
    uploadedAgo: "2 weeks ago",
    duration: "45:30",
    description: "Learn how to build a design system in Figma that actually scales. We cover tokens, components, variants, and auto-layout best practices.",
    likes: 15000,
    dislikes: 180,
    category: "Design",
    videoUrl: "",
  },
  {
    id: "v4",
    title: "How I Raised $10M for My AI Startup",
    thumbnail: "https://picsum.photos/seed/v4/640/360",
    channelId: "ch4",
    channelName: "Startup Grind",
    channelAvatar: "https://picsum.photos/seed/ch4/100/100",
    views: "890K views",
    uploadedAgo: "5 days ago",
    duration: "24:18",
    description: "The full story of how we went from idea to $10M Series A. Lessons learned, mistakes made, and what I'd do differently.",
    likes: 41000,
    dislikes: 620,
    category: "Business",
    videoUrl: "",
  },
  {
    id: "v5",
    title: "Making a AAA-Quality Game as a Solo Dev",
    thumbnail: "https://picsum.photos/seed/v5/640/360",
    channelId: "ch5",
    channelName: "GameDev Pro",
    channelAvatar: "https://picsum.photos/seed/ch5/100/100",
    views: "1.2M views",
    uploadedAgo: "4 days ago",
    duration: "28:55",
    description: "Can one person make a game that looks and feels AAA? I spent 2 years trying. Here's what happened.",
    likes: 67000,
    dislikes: 890,
    category: "Gaming",
    videoUrl: "",
  },
  {
    id: "v6",
    title: "Python Data Analysis — Complete Beginner Course",
    thumbnail: "https://picsum.photos/seed/v6/640/360",
    channelId: "ch6",
    channelName: "Data Science Hub",
    channelAvatar: "https://picsum.photos/seed/ch6/100/100",
    views: "3.4M views",
    uploadedAgo: "1 month ago",
    duration: "1:52:30",
    description: "Everything you need to start analyzing data with Python. Covers pandas, numpy, matplotlib, and real-world projects.",
    likes: 120000,
    dislikes: 2100,
    category: "Education",
    videoUrl: "",
  },
  {
    id: "v7",
    title: "Why React Server Components Change Everything",
    thumbnail: "https://picsum.photos/seed/v7/640/360",
    channelId: "ch2",
    channelName: "CodeCraft",
    channelAvatar: "https://picsum.photos/seed/ch2/100/100",
    views: "410K views",
    uploadedAgo: "3 weeks ago",
    duration: "22:10",
    description: "React Server Components are the biggest paradigm shift since hooks. Let's break down what they are and why they matter.",
    likes: 19000,
    dislikes: 450,
    category: "Programming",
    videoUrl: "",
  },
  {
    id: "v8",
    title: "AI-Generated Art: The Ethics Debate",
    thumbnail: "https://picsum.photos/seed/v8/640/360",
    channelId: "ch1",
    channelName: "TechVision AI",
    channelAvatar: "https://picsum.photos/seed/ch1/100/100",
    views: "1.8M views",
    uploadedAgo: "2 weeks ago",
    duration: "35:22",
    description: "Is AI-generated art real art? We talk to artists, developers, and ethicists to explore all sides of this heated debate.",
    likes: 72000,
    dislikes: 8900,
    category: "Technology",
    videoUrl: "",
  },
  {
    id: "v9",
    title: "Redesigning Spotify — A UX Case Study",
    thumbnail: "https://picsum.photos/seed/v9/640/360",
    channelId: "ch3",
    channelName: "Design Daily",
    channelAvatar: "https://picsum.photos/seed/ch3/100/100",
    views: "680K views",
    uploadedAgo: "6 days ago",
    duration: "19:45",
    description: "What if we redesigned Spotify from scratch? Here's my take on improving the UX of one of the world's most popular apps.",
    likes: 31000,
    dislikes: 520,
    category: "Design",
    videoUrl: "",
  },
  {
    id: "v10",
    title: "The $0 to $1M ARR Playbook",
    thumbnail: "https://picsum.photos/seed/v10/640/360",
    channelId: "ch4",
    channelName: "Startup Grind",
    channelAvatar: "https://picsum.photos/seed/ch4/100/100",
    views: "450K views",
    uploadedAgo: "1 week ago",
    duration: "41:08",
    description: "A step-by-step breakdown of how SaaS companies go from zero revenue to $1M ARR. Real examples and actionable tactics.",
    likes: 23000,
    dislikes: 310,
    category: "Business",
    videoUrl: "",
  },
  {
    id: "v11",
    title: "Procedural World Generation in Unreal Engine 5",
    thumbnail: "https://picsum.photos/seed/v11/640/360",
    channelId: "ch5",
    channelName: "GameDev Pro",
    channelAvatar: "https://picsum.photos/seed/ch5/100/100",
    views: "920K views",
    uploadedAgo: "10 days ago",
    duration: "38:20",
    description: "Create infinite, procedurally generated worlds in UE5. Covering PCG framework, biomes, and optimization techniques.",
    likes: 48000,
    dislikes: 670,
    category: "Gaming",
    videoUrl: "",
  },
  {
    id: "v12",
    title: "Machine Learning in Production — Best Practices",
    thumbnail: "https://picsum.photos/seed/v12/640/360",
    channelId: "ch6",
    channelName: "Data Science Hub",
    channelAvatar: "https://picsum.photos/seed/ch6/100/100",
    views: "280K views",
    uploadedAgo: "3 weeks ago",
    duration: "27:45",
    description: "Deploying ML models is hard. Here are the best practices for model serving, monitoring, and iteration in production environments.",
    likes: 14000,
    dislikes: 190,
    category: "Education",
    videoUrl: "",
  },
];

export const comments: Comment[] = [
  { id: "c1", videoId: "v1", author: "AIEnthusiast", avatar: "https://picsum.photos/seed/u1/40/40", text: "This is absolutely mind-blowing. The reasoning capabilities alone are worth the upgrade.", likes: 342, dislikes: 5, timeAgo: "2 days ago" },
  { id: "c2", videoId: "v1", author: "SkepticalDev", avatar: "https://picsum.photos/seed/u2/40/40", text: "I'll believe it when I see real benchmarks. Marketing demos always look impressive.", likes: 128, dislikes: 24, timeAgo: "2 days ago" },
  { id: "c3", videoId: "v1", author: "MLResearcher", avatar: "https://picsum.photos/seed/u3/40/40", text: "The multi-modal capabilities are the real story here. Being able to reason across text, images, and code simultaneously is huge.", likes: 567, dislikes: 3, timeAgo: "1 day ago" },
  { id: "c4", videoId: "v2", author: "JuniorDev2025", avatar: "https://picsum.photos/seed/u4/40/40", text: "This is exactly what I needed! Built my first app following along. Thank you!", likes: 89, dislikes: 1, timeAgo: "5 days ago" },
  { id: "c5", videoId: "v2", author: "SeniorArchitect", avatar: "https://picsum.photos/seed/u5/40/40", text: "Good for prototyping but I wouldn't ship this to production without significant refactoring.", likes: 210, dislikes: 15, timeAgo: "4 days ago" },
  { id: "c6", videoId: "v3", author: "FigmaFanatic", avatar: "https://picsum.photos/seed/u6/40/40", text: "Best Figma tutorial I've ever seen. The token system explanation was crystal clear.", likes: 445, dislikes: 2, timeAgo: "1 week ago" },
  { id: "c7", videoId: "v4", author: "FounderLife", avatar: "https://picsum.photos/seed/u7/40/40", text: "Refreshingly honest take on fundraising. Most people only share the wins.", likes: 312, dislikes: 8, timeAgo: "3 days ago" },
  { id: "c8", videoId: "v5", author: "IndieDev", avatar: "https://picsum.photos/seed/u8/40/40", text: "This gives me so much motivation. If one person can do this, what's stopping me?", likes: 890, dislikes: 4, timeAgo: "2 days ago" },
  { id: "c9", videoId: "v5", author: "GameDesigner", avatar: "https://picsum.photos/seed/u9/40/40", text: "The art direction is incredible for a solo project. What tools are you using for the environment?", likes: 156, dislikes: 1, timeAgo: "3 days ago" },
  { id: "c10", videoId: "v6", author: "DataNewbie", avatar: "https://picsum.photos/seed/u10/40/40", text: "Finally a course that doesn't skip the fundamentals. Subscribed!", likes: 1200, dislikes: 12, timeAgo: "3 weeks ago" },
  { id: "c11", videoId: "v8", author: "TraditionalArtist", avatar: "https://picsum.photos/seed/u11/40/40", text: "As an artist, this video really helped me understand the nuances. It's not black and white.", likes: 678, dislikes: 45, timeAgo: "1 week ago" },
  { id: "c12", videoId: "v9", author: "UXLead", avatar: "https://picsum.photos/seed/u12/40/40", text: "Some great ideas here but the navigation changes would confuse existing users.", likes: 234, dislikes: 18, timeAgo: "4 days ago" },
];

export interface Short {
  id: string;
  title: string;
  thumbnail: string;
  channelId: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  uploadedAgo: string;
  duration: string;
  description: string;
  likes: number;
  dislikes: number;
  commentsCount: number;
}

export const shorts: Short[] = [
  { id: "s1", title: "AI writes code in 10 seconds 🤯", thumbnail: "https://picsum.photos/seed/s1/405/720", channelId: "ch1", channelName: "TechVision AI", channelAvatar: "https://picsum.photos/seed/ch1/100/100", views: "4.2M views", uploadedAgo: "2 days ago", duration: "0:45", description: "Watch GPT-5 write a complete function in seconds", likes: 210000, dislikes: 3200, commentsCount: 1840 },
  { id: "s2", title: "CSS trick you didn't know existed", thumbnail: "https://picsum.photos/seed/s2/405/720", channelId: "ch2", channelName: "CodeCraft", channelAvatar: "https://picsum.photos/seed/ch2/100/100", views: "1.8M views", uploadedAgo: "5 days ago", duration: "0:58", description: "This one-liner CSS trick will blow your mind", likes: 89000, dislikes: 1100, commentsCount: 920 },
  { id: "s3", title: "Logo redesign in 60 seconds ✨", thumbnail: "https://picsum.photos/seed/s3/405/720", channelId: "ch3", channelName: "Design Daily", channelAvatar: "https://picsum.photos/seed/ch3/100/100", views: "2.5M views", uploadedAgo: "1 week ago", duration: "1:02", description: "Speed redesign of a popular brand logo", likes: 145000, dislikes: 2800, commentsCount: 1200 },
  { id: "s4", title: "Startup idea that made $1M in 30 days", thumbnail: "https://picsum.photos/seed/s4/405/720", channelId: "ch4", channelName: "Startup Grind", channelAvatar: "https://picsum.photos/seed/ch4/100/100", views: "6.1M views", uploadedAgo: "3 days ago", duration: "1:15", description: "This simple SaaS idea generated $1M in its first month", likes: 320000, dislikes: 8900, commentsCount: 4500 },
  { id: "s5", title: "Unreal Engine 5 in 30 seconds 🎮", thumbnail: "https://picsum.photos/seed/s5/405/720", channelId: "ch5", channelName: "GameDev Pro", channelAvatar: "https://picsum.photos/seed/ch5/100/100", views: "3.3M views", uploadedAgo: "4 days ago", duration: "0:32", description: "Quick UE5 nanite demo that looks photorealistic", likes: 178000, dislikes: 2100, commentsCount: 1600 },
  { id: "s6", title: "Python one-liner that saves hours", thumbnail: "https://picsum.photos/seed/s6/405/720", channelId: "ch6", channelName: "Data Science Hub", channelAvatar: "https://picsum.photos/seed/ch6/100/100", views: "2.9M views", uploadedAgo: "1 week ago", duration: "0:38", description: "Replace 50 lines of code with this pandas trick", likes: 156000, dislikes: 1800, commentsCount: 1100 },
  { id: "s7", title: "The future of coding is here 🚀", thumbnail: "https://picsum.photos/seed/s7/405/720", channelId: "ch1", channelName: "TechVision AI", channelAvatar: "https://picsum.photos/seed/ch1/100/100", views: "5.7M views", uploadedAgo: "6 days ago", duration: "1:18", description: "AI pair programming is changing everything", likes: 290000, dislikes: 5400, commentsCount: 3200 },
  { id: "s8", title: "Dark mode done RIGHT", thumbnail: "https://picsum.photos/seed/s8/405/720", channelId: "ch3", channelName: "Design Daily", channelAvatar: "https://picsum.photos/seed/ch3/100/100", views: "1.4M views", uploadedAgo: "2 weeks ago", duration: "0:52", description: "Most apps get dark mode wrong. Here's how to do it right.", likes: 72000, dislikes: 890, commentsCount: 640 },
];

export const SHORTS_MAX_DURATION_SECONDS = 120;
export const SHORTS_MAX_FILE_SIZE_MB = 500;
export const SHORTS_MAX_FILE_SIZE_BYTES = SHORTS_MAX_FILE_SIZE_MB * 1024 * 1024;

export const categories = [
  "All",
  "Technology",
  "Programming",
  "Design",
  "Business",
  "Gaming",
  "Education",
];

export function getVideosByChannel(channelId: string): Video[] {
  return videos.filter((v) => v.channelId === channelId);
}

export function getShortsByChannel(channelId: string): Short[] {
  return shorts.filter((s) => s.channelId === channelId);
}

export function getCommentsByVideo(videoId: string): Comment[] {
  return comments.filter((c) => c.videoId === videoId);
}

export function getChannel(channelId: string): Channel | undefined {
  return channels.find((c) => c.id === channelId);
}

export function getVideo(videoId: string): Video | undefined {
  return videos.find((v) => v.id === videoId);
}

export function getShort(shortId: string): Short | undefined {
  return shorts.find((s) => s.id === shortId);
}

export function searchVideos(query: string): Video[] {
  const q = query.toLowerCase();
  return videos.filter(
    (v) =>
      v.title.toLowerCase().includes(q) ||
      v.channelName.toLowerCase().includes(q) ||
      v.category.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q)
  );
}

export function filterByCategory(category: string): Video[] {
  if (category === "All") return videos;
  return videos.filter((v) => v.category === category);
}
