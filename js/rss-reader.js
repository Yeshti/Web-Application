const feedSelector = document.getElementById("feed-selector");
const contentDiv = document.getElementById("content");

function loadFeed(feedUrl) {
  contentDiv.innerHTML = "<p>Loading feed…</p>";

  const rss2jsonURL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`;

  fetch(rss2jsonURL)
    .then(res => res.json())
    .then(data => {
      if (!data.items || data.items.length === 0) {
        contentDiv.innerHTML = "<p>No articles found.</p>";
        return;
      }

      contentDiv.innerHTML = ""; // Clear old content

      data.items.forEach(article => {
        const articleEl = document.createElement("article");
        articleEl.innerHTML = `
          <h3><a href="${article.link}" target="_blank" rel="noopener">${article.title}</a></h3>
          <p>${article.description}</p>
        `;
        contentDiv.appendChild(articleEl);
      });
    })
    .catch(err => {
      console.error("Fetch error:", err);
      contentDiv.innerHTML = "<p>Unable to load the feed. Please try again later.</p>";
    });
}

// Initial load
loadFeed(feedSelector.value);

// On feed change
feedSelector.addEventListener("change", () => {
  loadFeed(feedSelector.value);
});
