import { useState } from "react";
const [value, setValue] = useState();

const changeSingleValue = (value_param) => {
  setValue(value_param);
};

const exports = {
  changeSingleValue,
  value,
};

export default exports;

const useStateHook = (props) => {
  const [value, setValue] = useState(props.initial_value);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  const changeSingleValue = (value_param) => {
    setValue(value_param);

    return value;
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
    changeSingleValue,
  };
};
