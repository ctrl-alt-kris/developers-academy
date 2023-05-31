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

  return <ResponsivePlayer url={url} />;
};

export default Course;
