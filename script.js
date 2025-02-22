// Sample articles data (expandable as needed)
const articlesData = [
    {
      title: "Renewable Energy Gains Momentum Worldwide",
      source: "Global Energy Report",
      date: "July 10, 2025",
      description:
        "Record investments and breakthrough technologies are driving a global shift toward clean power.",
      link: "article1.html",
      category: "renewable",
    },
    {
      title: "Challenges and Opportunities in Fossil Fuels",
      source: "Energy Insights Daily",
      date: "July 8, 2025",
      description:
        "Fossil fuels face regulatory pressures and innovative transformations to remain competitive in the modern energy mix.",
      link: "article2.html",
      category: "fossil",
    },
    {
      title: "Energy Policy Reforms: A Global Perspective",
      source: "Policy Watch",
      date: "July 6, 2025",
      description:
        "Global governments are overhauling policies to foster a transition toward sustainable, low‑carbon economies.",
      link: "article3.html",
      category: "policy",
    },
    {
      title: "Cutting-edge Innovations in Energy Efficiency",
      source: "Tech Green",
      date: "July 4, 2025",
      description:
        "Smart grids, IoT, and AI analytics are revolutionizing energy conservation and driving efficiency gains.",
      link: "article4.html",
      category: "efficiency",
    },
    {
      title: "GreenIQ’s Vision for Sustainable Power",
      source: "GreenIQ Blog",
      date: "July 2, 2025",
      description:
        "Explore how advanced technologies empower communities with actionable insights for a sustainable energy future.",
      link: "article5.html",
      category: "renewable",
    },
  ];
  
  // Check if the page defines a current category (for category pages)
  const currentCategoryElement = document.getElementById("currentCategory");
  const currentCategory = currentCategoryElement ? currentCategoryElement.value.toLowerCase() : null;
  
  // Utility: Filter articles by current category and search query
  function getFilteredArticles(query = "") {
    let filtered = articlesData;
    if (currentCategory) {
      filtered = filtered.filter(article => article.category === currentCategory);
    }
    if (query) {
      filtered = filtered.filter(
        article =>
          article.title.toLowerCase().includes(query) ||
          article.description.toLowerCase().includes(query)
      );
    }
    return filtered;
  }
  
  // Render articles with fade animation
  function renderArticles(articles) {
    const container = document.getElementById("articlesContainer");
    if (!container) return;
    container.innerHTML = "";
    articles.forEach((article) => {
      const colDiv = document.createElement("div");
      colDiv.className = "col-md-6 col-lg-4 mb-4 reveal";
      colDiv.innerHTML = `
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text"><small class="text-muted">${article.source} · ${article.date}</small></p>
            <p class="card-text">${article.description}</p>
            <div class="mt-auto">
              <a href="${article.link}" class="btn btn-primary btn-sm">Read More</a>
            </div>
          </div>
        </div>
      `;
      container.appendChild(colDiv);
    });
    initScrollReveal();
  }
  
  // IntersectionObserver for scroll reveal animations
  function initScrollReveal() {
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
  }
  
  // Initial render
  renderArticles(getFilteredArticles());
  
  // Live search filtering with fade transition
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const container = document.getElementById("articlesContainer");
      container.classList.add("animate__animated", "animate__fadeOut");
      setTimeout(() => {
        renderArticles(getFilteredArticles(query));
        container.classList.remove("animate__fadeOut");
      }, 300);
    });
  }
  
  // Back-to-Top button functionality
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", function () {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // Dark Mode Toggle functionality
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    // Check stored theme on load
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      themeToggle.textContent = "Light Mode";
    } else {
      themeToggle.textContent = "Dark Mode";
    }
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "Light Mode";
      } else {
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "Dark Mode";
      }
    });
  }
  