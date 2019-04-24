import db, { melonpanice } from "./db";

export default function sellMelonpanIce(): Promise<void> {
  return db.runTransaction(transaction => {
    return transaction.get(melonpanice).then(melonpaniceDoc => {
      if (!melonpaniceDoc.exists) {
        throw "Document does not exist!";
      }

      const newStock = melonpaniceDoc.data()!.stock - 1;
      transaction.update(melonpanice, { stock: newStock });
    });
  });
}
