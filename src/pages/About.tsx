import { useState } from "react";
import { Instagram, Twitter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const About = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = "First name is required";
    if (!formData.lastName.trim()) errs.lastName = "Last name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Invalid email";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: "" }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-16 md:py-28">
        {/* Bio Section — asymmetric two-column */}
        <section className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              About Reel&nbsp;Thoughts
            </h1>
          </div>
          <div className="space-y-5">
            <p className="text-foreground/80 text-base leading-relaxed">
              Reel Thoughts began in 2019 as a passion project by film critic Marcus Chen, who wanted to create a space where cinema could be discussed with both critical rigor and genuine enthusiasm. What started as a weekly newsletter has grown into a comprehensive film review platform, covering everything from major studio releases to independent gems and international cinema.
            </p>
            <p className="text-foreground/80 text-base leading-relaxed">
              Our approach is simple: every film deserves thoughtful consideration. We believe that criticism should be accessible without sacrificing depth, engaging without pandering. Whether it's a blockbuster or an art house premiere, we examine the craft, the storytelling, and the cultural context that makes each film unique.
            </p>
            <p className="text-foreground/80 text-base leading-relaxed">
              Today, Reel Thoughts publishes multiple reviews each week, special features on cinema history, and in-depth interviews with filmmakers. Our community of readers spans the globe, united by a love of the art form and a curiosity about what makes great cinema work.
            </p>

            <div className="pt-4 space-y-1">
              <a href="mailto:hello@reelthoughts.com" className="block text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">
                hello@reelthoughts.com
              </a>
              <p className="text-foreground/60">(555) 742-8839</p>
            </div>
          </div>
        </section>

        {/* Social Icons — centered */}
        <div className="flex items-center justify-center gap-5 py-16">
          <a href="https://instagram.com/reelthoughts" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/50 hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/reelthoughts" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-foreground/50 hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://letterboxd.com/reelthoughts" target="_blank" rel="noopener noreferrer" aria-label="Letterboxd" className="text-foreground/50 hover:text-primary transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><circle cx="8" cy="12" r="4" opacity="0.8"/><circle cx="16" cy="12" r="4" opacity="0.8"/><circle cx="12" cy="12" r="4" opacity="0.6"/></svg>
          </a>
        </div>

        {/* Contact Form — clean, minimal */}
        <section className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name row */}
            <div>
              <p className="text-foreground/70 text-sm font-medium mb-3">Name</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-muted-foreground text-xs mb-1.5">
                    First Name <span className="text-muted-foreground/60">(required)</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b px-0 py-2 text-foreground text-sm focus:outline-none focus:border-primary transition-colors ${errors.firstName ? "border-destructive" : "border-border"}`}
                  />
                  {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-muted-foreground text-xs mb-1.5">
                    Last Name <span className="text-muted-foreground/60">(required)</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full bg-transparent border-b px-0 py-2 text-foreground text-sm focus:outline-none focus:border-primary transition-colors ${errors.lastName ? "border-destructive" : "border-border"}`}
                  />
                  {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-muted-foreground text-xs mb-1.5">
                Email <span className="text-muted-foreground/60">(required)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-transparent border-b px-0 py-2 text-foreground text-sm focus:outline-none focus:border-primary transition-colors ${errors.email ? "border-destructive" : "border-border"}`}
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-muted-foreground text-xs mb-1.5">
                Message <span className="text-muted-foreground/60">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`w-full bg-transparent border px-3 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors min-h-[140px] resize-vertical rounded-sm ${errors.message ? "border-destructive" : "border-border"}`}
              />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="px-8 py-2.5 border border-foreground/30 text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Submit"}
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
