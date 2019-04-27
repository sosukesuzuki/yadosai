import firebase from "./firebase";

type Params = {
  displayName: string;
  email: string;
  password: string;
};

export default async function({
  displayName,
  email,
  password
}: Params): Promise<void> {
  const userCredential = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  if (userCredential.user === null) throw new Error("ユーザーがnull");

  await userCredential.user.updateProfile({
    displayName
  });
}
