import { useEffect, useState } from "react";
import { getName } from "../localstorage";

export default function useIsRegisterd() {
  const [isRegisterd, setIsRegisterd] = useState(false);
  useEffect(() => {
    const name = getName();
    setIsRegisterd(!!name);
  });
  return isRegisterd;
}
