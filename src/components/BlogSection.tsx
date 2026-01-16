import { useEffect, useRef, useState } from "react";
import { blogLinks } from "../data/blogLinks";
import { Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Dev Tutorials", "Project Writeups", "Personal Insights"];

const blogPosts = [
  {
  id: 1,
  title: "My Growth Journey as a Developer",
  excerpt:
    "A personal reflection on my journey into software development—from confusion and self-doubt to consistency, resilience, and continuous growth.",
  category: "Personal Journey",
  readTime: "6 min",
  date: "Dec 20, 2024",
  tags: ["Developer Journey", "Growth Mindset", "Learning", "Consistency"],
},
  {
    id: 2,
    title: "From Concept to Deployment: E-Commerce Journey",
    excerpt:
      "A complete walkthrough of building and deploying a full-stack e-commerce platform from scratch.",
    category: "Project Writeups",
    readTime: "12 min",
    date: "Dec 15, 2024",
    tags: ["MERN", "E-Commerce", "AWS"],
  },
  {
    id: 3,
    title: "Why I Chose the MERN Stack for My Projects",
    excerpt:
      "Personal reflections on choosing the right technology stack and how MERN has shaped my development journey.",
    category: "Personal Insights",
    readTime: "5 min",
    date: "Dec 10, 2024",
    tags: ["MERN", "Career", "Tech"],
  },
  {
    id: 4,
    title: "Mastering React Hooks: A Complete Guide",
    excerpt:
      "Deep dive into React Hooks - useState, useEffect, useContext, and custom hooks with practical examples.",
    category: "Dev Tutorials",
    readTime: "10 min",
    date: "Dec 5, 2024",
    tags: ["React", "Hooks", "JavaScript"],
  },
  {
    id: 5,
    title: "Video Editing Tips for Developers",
    excerpt:
      "How developers can leverage video editing skills to create better content and enhance their personal brand.",
    category: "Personal Insights",
    readTime: "6 min",
    date: "Dec 1, 2024",
    tags: ["DaVinci", "Content", "Branding"],
  },
  {
    id: 6,
    title: "Building a Real-time Chat Application",
    excerpt:
      "Step-by-step guide to creating a real-time chat app using Socket.io, React, and Node.js.",
    category: "Project Writeups",
    readTime: "15 min",
    date: "Nov 25, 2024",
    tags: ["Socket.io", "Real-time", "MERN"],
  },
];

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-2 md:py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="section-title">BLOG</h2>
          <p className="section-subtitle mx-auto">
            Thoughts, tutorials, and insights from my journey as a developer and content creator.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 reveal">
          {currentPosts.map((post, index) => (
            <article
              key={post.id}
              className="glass-card p-6 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="tag-chip">{post.category}</span>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* WORKING REDIRECT */}
              <a
                href={blogLinks[post.id]}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium relative z-10"
              >
                Read More
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 reveal">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 glass-card disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-medium ${
                    currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "glass-card text-muted-foreground"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 glass-card disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
