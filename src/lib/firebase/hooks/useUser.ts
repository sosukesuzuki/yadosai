import { useEffect, useState } from "react";
import firebase from "../firebase";
import { User } from "firebase";

export default function useUser(): User | null {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return user;
}
