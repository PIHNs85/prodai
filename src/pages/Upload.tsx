import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Upload as UploadIcon, Film, Zap, AlertCircle } from "lucide-react";
import { SHORTS_MAX_DURATION_SECONDS, SHORTS_MAX_FILE_SIZE_MB, SHORTS_MAX_FILE_SIZE_BYTES } from "@/data/videos";

type UploadType = "video" | "short";

const Upload = () => {
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [uploadType, setUploadType] = useState<UploadType>("video");

  const validateFile = (file: File) => {
    setFileError("");

    if (uploadType === "short") {
      if (file.size > SHORTS_MAX_FILE_SIZE_BYTES) {
        setFileError(`Short videos must be under ${SHORTS_MAX_FILE_SIZE_MB}MB. This file is ${(file.size / (1024 * 1024)).toFixed(1)}MB.`);
        setFileName("");
        return false;
      }

      // Check duration via video element
      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => {
        URL.revokeObjectURL(video.src);
        if (video.duration > SHORTS_MAX_DURATION_SECONDS) {
          setFileError(`Short videos must be ${SHORTS_MAX_DURATION_SECONDS} seconds or less. This video is ${Math.ceil(video.duration)} seconds.`);
          setFileName("");
        }
      };
      video.src = URL.createObjectURL(file);
    }

    setFileName(file.name);
    return true;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) validateFile(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) validateFile(file);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl">
          <h1 className="text-2xl font-serif font-bold text-foreground text-center mb-6">Upload</h1>

          {/* Toggle: Video vs Short */}
          <div className="flex bg-secondary rounded-xl p-1 mb-6">
            <button
              onClick={() => { setUploadType("video"); setFileName(""); setFileError(""); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                uploadType === "video" ? "bg-foreground text-background" : "text-foreground hover:bg-muted"
              }`}
            >
              <Film className="w-4 h-4" /> Video
            </button>
            <button
              onClick={() => { setUploadType("short"); setFileName(""); setFileError(""); }}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                uploadType === "short" ? "bg-foreground text-background" : "text-foreground hover:bg-muted"
              }`}
            >
              <Zap className="w-4 h-4" /> Short
            </button>
          </div>

          {/* Limits info for shorts */}
          {uploadType === "short" && (
            <div className="flex items-start gap-2 bg-primary/10 border border-primary/20 rounded-lg p-3 mb-4 text-xs text-foreground">
              <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Short video limits:</p>
                <p className="text-muted-foreground mt-0.5">Max duration: {SHORTS_MAX_DURATION_SECONDS} seconds · Max file size: {SHORTS_MAX_FILE_SIZE_MB}MB</p>
              </div>
            </div>
          )}

          <div
            className={`border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center transition-colors cursor-pointer ${
              dragOver ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground"
            }`}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-input")?.click()}
          >
            {fileName ? (
              <>
                {uploadType === "short" ? <Zap className="w-12 h-12 text-primary mb-4" /> : <Film className="w-12 h-12 text-primary mb-4" />}
                <p className="text-sm text-foreground font-medium">{fileName}</p>
                <p className="text-xs text-muted-foreground mt-1">File selected — upload coming soon</p>
              </>
            ) : (
              <>
                <UploadIcon className="w-12 h-12 text-muted-foreground mb-4" />
                <p className="text-sm text-foreground font-medium">
                  Drag and drop {uploadType === "short" ? "a short video" : "a video file"}
                </p>
                <p className="text-xs text-muted-foreground mt-1">or click to browse</p>
              </>
            )}
            <input
              id="file-input"
              type="file"
              accept="video/*"
              className="hidden"
              onChange={handleFileSelect}
            />
          </div>

          {fileError && (
            <div className="flex items-center gap-2 mt-3 text-destructive text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {fileError}
            </div>
          )}

          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder={uploadType === "short" ? "Short title" : "Video title"}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Description"
              rows={uploadType === "short" ? 2 : 4}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
            />
            <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/80 transition-colors">
              Upload {uploadType === "short" ? "Short" : "Video"} (Coming Soon)
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Upload;
