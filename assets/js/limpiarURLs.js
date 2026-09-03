(function () {
  const isProduction = window.location.hostname === "libraserver.site";

  if (!isProduction) {
    return;
  }

  const routes = {
    "index.html": "/",
    "blog.html": "/blog",
    "cv.html": "/cv",
    "pc.html": "/pc",
    "post.html": "/post",
    "privacy.html": "/privacy"
  };

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a[href]").forEach(function (link) {
      const href = link.getAttribute("href");

      if (!href || href.startsWith("#") || href.startsWith("http")) {
        return;
      }

      const [path, query] = href.split("?");

      if (routes[path]) {
        link.href = routes[path] + (query ? "?" + query : "");
      }
    });
  });
})();