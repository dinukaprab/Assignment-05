if (window.location.href.endsWith("/index.html")) {
  var newUrl = window.location.href.replace("/index.html", "");
  history.replaceState({}, document.title, newUrl);
} else if (window.location.href.endsWith("/")) {
  var newUrl = window.location.href.slice(0, -1);
  history.replaceState({}, document.title, newUrl);
}

function redirect() {
  window.location.href = window.location.origin + "/login";
}

document
  .querySelectorAll(".sub-btn , .next-btn , .try-btn")
  .forEach((button) => {
    button.addEventListener("mouseenter", function (e) {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty("--x", `${x}px`);
      button.style.setProperty("--y", `${y}px`);
    });
  });

const currentYear = new Date().getFullYear();
document.getElementById("footer").innerHTML = `
  &copy; ${currentYear} Quiz.App <br/> Developed by <a href="https://github.com/dinukaprab" target="_blank">Dinuka Prabath.</a>
  `;
