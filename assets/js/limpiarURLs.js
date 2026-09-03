(function () {
  if (!["libraserver.site", "www.libraserver.site"].includes(window.location.hostname)) {
    return;
  }

  const routes = {
    "/index.html": "/",
    "/blog.html": "/blog",
    "/cv.html": "/cv",
    "/pc.html": "/pc",
    "/post.html": "/post",
    "/privacy.html": "/privacy"
  };

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");

    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    ) {
      return;
    }

    const url = new URL(href, window.location.href);

    if (url.origin !== window.location.origin) {
      return;
    }

    const target = routes[url.pathname];

    if (!target) {
      return;
    }

    link.href = target + url.search + url.hash;
  });
})();