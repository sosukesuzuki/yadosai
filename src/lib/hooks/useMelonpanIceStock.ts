import { useEffect, useState } from "react";
import db from "../db";

export default function useMelonpanIceStock() {
  const [stock, setStock] = useState<number | null>(null);
  useEffect(() => {
    db.collection("food")
      .doc("melonpanice")
      .get()
      .then(documentSnapshot => {
        const melonpanice = documentSnapshot.data();
        if (melonpanice == null) throw new Error("データベース接続エラー");
        setStock(melonpanice.stock);
      });
  });
  return stock;
}