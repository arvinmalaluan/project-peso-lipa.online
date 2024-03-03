const idGetter = (id) => {
  return document.getElementById(id);
};

const onHoverSide = () => {
  const id_1 = idGetter("toggle-for-side-r"),
    id_2 = idGetter("toggle-for-side-l"),
    id_3 = idGetter("toggle-for-side-n"),
    side = idGetter("side-bar");

  id_3.classList.add("hidden");

  if (side.classList.contains("ml-[-260px]")) {
    id_1.classList.remove("hidden");
  } else {
    id_2.classList.remove("hidden");
  }
};

const onHoverSideLeave = () => {
  const id_1 = idGetter("toggle-for-side-r"),
    id_2 = idGetter("toggle-for-side-l"),
    id_3 = idGetter("toggle-for-side-n");

  id_3.classList.remove("hidden");

  !id_1.classList.contains("hidden") && id_1.classList.add("hidden");
  !id_2.classList.contains("hidden") && id_2.classList.add("hidden");
};

const hoverUtils = {
  onHoverSide,
  onHoverSideLeave,
};

export default hoverUtils;
