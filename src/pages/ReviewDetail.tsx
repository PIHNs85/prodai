import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reviews } from "@/data/reviews";
import { reviewImages } from "@/data/images";

const ReviewDetail = () => {
  const { id } = useParams<{ id: string }>();
  const review = reviews.find((r) => r.id === id);

  if (!review) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-primary mb-4">Review Not Found</h1>
          <Link to="/" className="text-primary hover:text-primary/80 underline">Back to Reviews</Link>
        </div>
      </div>
    );
  }

  const images = reviewImages[review.id];
  const relatedReviews = reviews.filter((r) => r.id !== review.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <img
          src={images?.hero}
          alt={review.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-primary mb-4">{review.title}</h1>
          <p className="text-foreground text-lg md:text-xl">
            {review.genre} | {review.year} | Dir. {review.director}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Review */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-serif text-primary mb-6">Review</h2>
            {review.reviewParagraphs.map((p, i) => (
              <p key={i} className="text-foreground text-lg leading-relaxed">{p}</p>
            ))}
          </div>

          {/* Details Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-secondary/50 rounded-lg p-6 space-y-4 sticky top-24">
              <h3 className="text-2xl font-serif text-primary mb-4">Details</h3>
              <div className="border-b border-border pb-3">
                <p className="text-muted-foreground text-sm font-medium">Director</p>
                <p className="text-foreground text-base mt-1">{review.director}</p>
              </div>
              <div className="border-b border-border pb-3">
                <p className="text-muted-foreground text-sm font-medium">Cast</p>
                <p className="text-foreground text-base mt-1">{review.cast}</p>
              </div>
              <div className="border-b border-border pb-3">
                <p className="text-muted-foreground text-sm font-medium">Runtime</p>
                <p className="text-foreground text-base mt-1">{review.runtime}</p>
              </div>
              <div className="border-b border-border pb-3">
                <p className="text-muted-foreground text-sm font-medium">Rating</p>
                <p className="text-primary text-xl mt-1">{review.ratingStars}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm font-medium">Release Date</p>
                <p className="text-foreground text-base mt-1">{review.releaseDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-serif text-primary">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images?.gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Still from ${review.title}`}
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Related Reviews */}
        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-serif text-primary mb-8">More Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedReviews.map((r) => {
              const rImages = reviewImages[r.id];
              return (
                <Link key={r.id} to={`/review/${r.id}`} className="group cursor-pointer">
                  <img
                    src={rImages?.card}
                    alt={r.title}
                    className="w-full aspect-[2/3] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <h3 className="text-foreground text-lg font-medium mt-3 group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReviewDetail;