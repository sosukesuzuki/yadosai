import format from "date-fns/format";
import db, { melonpanice, salesHisory } from "./firebase/db";

export default async function sellMelonpanIce(): Promise<void> {
  try {
    await db.runTransaction(async transaction => {
      const melonpaniceDoc = await transaction.get(melonpanice);
      if (!melonpaniceDoc.exists) {
        throw "Document does not exist!";
      }

      const newStock = melonpaniceDoc.data()!.stock - 1;
      transaction.update(melonpanice, { stock: newStock });
    });
  } catch (error) {
    throw error;
  }

  await salesHisory.add({
    createdAt: format(new Date(), "YYYY/MM/DD HH:MM")
  });
}
