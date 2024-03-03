import { useLocation } from "react-router-dom";

const useLocationHook = (name) => {
  const location = useLocation();
  const { hash, pathname, search } = location;

  if (name === pathname) {
    return true;
  } else {
    return false;
  }
};

export default useLocationHook;
