const words = [
  "Cloud",
  "Server",
  "Database",
  "Function",
  "Memory",
  "Frontend",
  "Backend",
  "DevOps",
  "Security",
  "Optimization",
];

document.getElementById("btn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  document.getElementById("word").innerText = words[randomIndex];
});
