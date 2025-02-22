import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';

const articlesData = [
  {
    title: "Renewable Energy Gains Momentum Worldwide",
    source: "Global Energy Report",
    date: "July 10, 2025",
    description:
      "Record investments and breakthrough technologies are driving a global shift toward clean power.",
    link: "/article1",
    category: "renewable",
  },
  {
    title: "Challenges and Opportunities in Fossil Fuels",
    source: "Energy Insights Daily",
    date: "July 8, 2025",
    description:
      "Fossil fuels face regulatory pressures and innovative transformations to remain competitive in the modern energy mix.",
    link: "/article2",
    category: "fossil",
  },
  {
    title: "Energy Policy Reforms: A Global Perspective",
    source: "Policy Watch",
    date: "July 6, 2025",
    description:
      "Global governments are overhauling policies to foster a transition toward sustainable, low‑carbon economies.",
    link: "/article3",
    category: "policy",
  },
  {
    title: "Cutting-edge Innovations in Energy Efficiency",
    source: "Tech Green",
    date: "July 4, 2025",
    description:
      "Smart grids, IoT, and AI analytics are revolutionizing energy conservation and driving efficiency gains.",
    link: "/article4",
    category: "efficiency",
  },
  {
    title: "GreenIQ’s Vision for Sustainable Power",
    source: "GreenIQ Blog",
    date: "July 2, 2025",
    description:
      "Explore how advanced technologies empower communities with actionable insights for a sustainable energy future.",
    link: "/article5",
    category: "renewable",
  },
];

export default function Home() {
  const [articles, setArticles] = useState(articlesData);
  const [query, setQuery] = useState("");

  // For scroll reveal animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    reveals.forEach(elem => observer.observe(elem));
  }, [articles]);

  // Live search functionality
  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();
    setQuery(q);
    if (!q) {
      setArticles(articlesData);
    } else {
      const filtered = articlesData.filter(
        (article) =>
          article.title.toLowerCase().includes(q) ||
          article.description.toLowerCase().includes(q)
      );
      setArticles(filtered);
    }
  };

  useEffect(() => {
    // Attach event listener for live search from the navbar input
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
      searchInput.addEventListener("input", handleSearch);
    }
    return () => {
      if (searchInput) {
        searchInput.removeEventListener("input", handleSearch);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container my-8">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="lg:w-1/4 mb-8 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h5 className="font-bold mb-4">Categories</h5>
              <ul className="space-y-2">
                <li><a href="/" className="text-blue-600 hover:underline">All Articles</a></li>
                <li><a href="/category/renewable" className="text-blue-600 hover:underline">Renewable Energy</a></li>
                <li><a href="/category/fossil" className="text-blue-600 hover:underline">Fossil Fuels</a></li>
                <li><a href="/category/policy" className="text-blue-600 hover:underline">Energy Policy</a></li>
                <li><a href="/category/efficiency" className="text-blue-600 hover:underline">Energy Efficiency</a></li>
              </ul>
            </div>
          </aside>
          {/* Articles Grid */}
          <section className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="articlesContainer">
              {articles.map((article, idx) => (
                <ArticleCard key={idx} article={article} />
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
}
