window.addEventListener("load", () => {
  const themeButton = document.getElementById("theme-button");
  let isDark = false;

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    isDark = !isDark;

    !isDark
      ? (document.getElementById("theme-button").innerHTML = "Dark")
      : (document.getElementById("theme-button").innerHTML = "White");
  });
});
