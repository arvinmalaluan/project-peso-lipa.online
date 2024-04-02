export function showSideMenu() {
  const element = document.getElementById("side-nav-small-screen");
  element.classList.remove("hidden");
}

export function hideSideMenu() {
  const element = document.getElementById("side-nav-small-screen");
  element.classList.add("hidden");
}
