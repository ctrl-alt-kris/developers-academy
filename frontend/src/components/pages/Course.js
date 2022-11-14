import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import ResponsivePlayer from "../video/responsivePlayer";
import { db } from "../../firebase-config";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const Course = () => {
  const { user } = UserAuth();
  const [progress, setProgress] = useState();

  let courseId = useParams();

  const onProgress = (played) => {
    saveProgress(played);
  };

  const saveProgress = async (played) => {
    console.log(user.uid);
    const docRef = doc(db, "users", user.uid);
    const colRef = collection(docRef, "courseProgress");
    const newDoc = doc(colRef, courseId);
    return setDoc(newDoc, { ...played });
  };

  console.log(progress);

  return <ResponsivePlayer onProgress={onProgress} />;
};

export default Course;
