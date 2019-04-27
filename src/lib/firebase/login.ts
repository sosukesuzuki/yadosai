import firebase from "./firebase";

type Params = {
  email: string;
  password: string;
};

export default async function login({
  email,
  password
}: Params): Promise<void> {
  await firebase.auth().signInWithEmailAndPassword(email, password);
}
