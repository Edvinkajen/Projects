// Optional: tiny “active link” highlight for menu
(function () {
  const path = location.pathname.replace(/\/+$/, "");
  document.querySelectorAll(".menu a").forEach(a => {
    const href = a.getAttribute("href");
    if (!href) return;

    // Only mark contact when you're on /contact
    if (href.includes("contact") && path.endsWith("/contact")) a.classList.add("active");
    if ((href === "./" || href === "/") && (path === "" || path === "/index.html")) a.classList.add("active");
  });
})();
