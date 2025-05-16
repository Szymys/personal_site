document.addEventListener("DOMContentLoaded", function() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  const text = el.getAttribute("data-text") || "";
  el.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      setTimeout(type, 160);
    }
  }
  type();
});
