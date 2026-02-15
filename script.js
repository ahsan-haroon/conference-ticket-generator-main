const uploadBox = document.querySelector(".upload-box");
const fileInput = document.getElementById("avatar");
const form = document.querySelector(".form");

uploadBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  uploadBox.style.background = "rgba(255,255,255,0.1)";
});

uploadBox.addEventListener("dragleave", () => {
  uploadBox.style.background = "rgba(255,255,255,0.05)";
});

uploadBox.addEventListener("drop", (e) => {
  e.preventDefault();
  uploadBox.style.background = "rgba(255,255,255,0.05)";
  fileInput.files = e.dataTransfer.files;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Ticket Generated Successfully 🚀");
});
