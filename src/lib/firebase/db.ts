import firebase from "./firebase";

const db = firebase.firestore();

export const melonpanice = db.collection("food").doc("melonpanice");
export const salesHisory = db.collection("melonpanice_sales_history");

export default db;
