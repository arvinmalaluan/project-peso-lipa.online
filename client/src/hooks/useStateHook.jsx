import { useState } from "react";

const useStateHook = (props) => {
  const [value, setValue] = useState(props.initial_value);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  const onFocus = () => {
    setValue(true);
  };

  const onLeave = () => {
    setValue(false);
  };

  return {
    value,
    toggle,
    onFocus,
    onLeave,
  };
};

export default useStateHook;
