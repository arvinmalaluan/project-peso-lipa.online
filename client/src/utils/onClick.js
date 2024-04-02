const idGetter = (id) => {
  return document.getElementById(id);
};

const onClickSide = (event, id) => {
  const getId = idGetter("side-bar");

  if (id === "toggle-for-side-r") {
    getId.classList.remove("ml-[-260px]");
  } else if (id === "toggle-for-side-l") {
    getId.classList.add("ml-[-260px]");
  } else if (id === "toggle-for-side-n") {
    console.log("neutral");
  } else {
    console.log("not found: ", id);
  }
};

document.body.addEventListener("click", (e) => {
  if (e.target.id === "show-side-nav-small-device") {
    alert("hi");
  }
});

const utils = {
  onClickSide,
};

export default utils;
