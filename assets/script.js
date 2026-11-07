
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "";
  document.querySelectorAll(".nav-links a[data-page]").forEach(a => {
    if (a.dataset.page === page) a.classList.add("active");
  });

  const menu = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if(menu && nav){
    menu.addEventListener("click", () => nav.classList.toggle("open"));
  }

  document.querySelectorAll("[data-demo-form]").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = form.dataset.message || "Thank you. Your request has been recorded for this demo website.";
      document.body.appendChild(toast);
      form.reset();
      setTimeout(() => toast.remove(), 4200);
    });
  });

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
});
