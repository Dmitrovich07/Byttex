function toggleAnswer(button) {
  const parentItem = button.closest(".questions-item");
  const isActive = parentItem.classList.contains("active");

  document.querySelectorAll(".questions-item.active").forEach(item => {
    item.classList.remove("active");
  });

  if (!isActive) {
    parentItem.classList.add("active");
    button.classList.add("active");
  }
}