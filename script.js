// زر الوضع الليلي/النهاري
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // حفظ الوضع في التخزين المحلي
  const mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("mode", mode);
});

// تطبيق الوضع المحفوظ عند تحميل الصفحة
window.addEventListener("load", () => {
  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// وميض عند الضغط على أزرار التنقل
const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active-glow");
    setTimeout(() => {
      btn.classList.remove("active-glow");
    }, 400);
  });
});
