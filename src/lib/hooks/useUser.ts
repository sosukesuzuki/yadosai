import { useEffect, useState } from "react";
import firebase from "../firebase/firebase";
import { User } from "firebase";

export default function useUser(): User | null {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  }, []);

  return user;
}
