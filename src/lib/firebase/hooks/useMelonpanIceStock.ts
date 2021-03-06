import { useEffect, useState } from "react";
import { melonpanice } from "../db";

export default function useMelonpanIceStock() {
  const [stock, setStock] = useState<number | null>(null);
  useEffect(() => {
    const unsubscribe = melonpanice.onSnapshot(doc => {
      const { stock } = doc.data()!;
      setStock(stock);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return stock;
}
