/* 个人网站交互脚本：移动端导航 / 滚动淡入 / 作品集筛选 */

// 移动端菜单
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// 滚动淡入
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

// 作品集分类筛选
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".work-card");
if (chips.length && cards.length) {
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const cat = chip.dataset.cat;
      cards.forEach((card) => {
        const show = cat === "all" || card.dataset.cat === cat;
        card.style.display = show ? "flex" : "none";
      });
    });
  });
}
