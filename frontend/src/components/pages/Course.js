import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import ResponsivePlayer from "../video/responsivePlayer";
import { db } from "../../firebase-config";
import { useParams } from "react-router-dom";
import { addDoc, collection, doc, setDoc, getDoc } from "firebase/firestore";

const Course = () => {
  const { user } = UserAuth();
  const [progress, setProgress] = useState();
  const [url, setUrl] = useState("");

  let { courseId, lessonId } = useParams();

  useEffect(() => {
    const getLesson = async () => {
      const docRef = doc(db, "courses", courseId, "lessons", lessonId);
      const data = await getDoc(docRef);
      console.log(data.data());
      setUrl(data.data().url);
    };

    getLesson();
  }, []);
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

  return <ResponsivePlayer onProgress={onProgress} url={url} />;
};

export default Course;
