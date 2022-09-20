import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  debugErrorMap,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userInfo, setUserInfo] = useState({});

  const usersCollectionRef = collection(db, "users");

  const createUser = (email, password, firstName, lastName) => {
    //creating auth user
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredentials) => {
        const docRef = doc(db, "users", userCredentials.user.uid);
        //creating a linked user to store userInfo
        return setDoc(docRef, {
          firstName,
          lastName,
          role: "user",
        }).then(getUserInfo(userCredentials.user.uid));
      }
    );
  };

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const getUserInfo = async (id) => {
    const docSnap = await getDoc(doc(db, "users", id));
    setUserInfo(docSnap.data());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      getUserInfo(currentUser.uid);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, user, userInfo, logout, signin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
