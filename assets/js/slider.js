const container = document.getElementById("scrollContainer");
document.getElementById("nextBtn").onclick = () => container.scrollBy({ left: 300, behavior: "smooth" });
document.getElementById("prevBtn").onclick = () => container.scrollBy({ left: -300, behavior: "smooth" });
