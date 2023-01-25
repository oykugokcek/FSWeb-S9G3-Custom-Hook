// const [geceModu, setGeceModu] = useState(false);
import { useState } from "react";
import { useLocalStorage } from "./localStorageKullan";

const geceModuAc = (key, initialMode) => {
  const { storedValue, setValue } = useLocalStorage(key, initialMode);

  const [geceModu, setGeceModu] = useState(storedValue);

  const handleGeceModu = () => {
    setGeceModu(!geceModu);
    setValue(geceModu);
  };

  return { geceModu, handleGeceModu };
};
// const localStorageMode = useLocalStorage("mode", initialMode);
// console.log("Gece modu değişti");
// return localStorageMode;

export default geceModuAc;
