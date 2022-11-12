import { UserAuth } from "../context/AuthContext";
import { db } from "../../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import styles from "./home.module.scss";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../ui/Card";

const CourseOverview = () => {
  const [lessons, setLessons] = useState([]);
  const { courseId } = useParams();
  const { user, userInfo } = UserAuth();
  const navigate = useNavigate();

  const clickedCourse = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  useEffect(() => {
    const getLessons = async () => {
      const docRef = collection(db, "courses", courseId, "lessons");
      const data = await getDocs(docRef);
      let parsedData = [];
      data.forEach((doc) => {
        let id = doc.id;
        parsedData.push({ ...doc.data(), id });
      });

      setLessons(parsedData);
    };

    getLessons();
  }, []);

  if (user) {
    return (
      <div className={styles.content}>
        {lessons &&
          lessons.map((lesson) => {
            return Card(lesson, clickedCourse);
          })}
      </div>
    );
  }
};

export default CourseOverview;
