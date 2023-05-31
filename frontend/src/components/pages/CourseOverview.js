import { UserAuth } from "../context/AuthContext";
import { db } from "../../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import styles from "./CourseOverview.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";

const CourseOverview = () => {
  const [lessons, setLessons] = useState([]);
  const { courseId } = useParams();
  const { user, userInfo } = UserAuth();

  const navigate = useNavigate();

  const clickedCourse = (lessonId) => {
    navigate(`/course/${courseId}/${lessonId}`);
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
      <section className={styles.content}>
        {lessons &&
          lessons.map((lesson) => {
            return Card(lesson, clickedCourse);
          })}
      </section>
    );
  }
};

export default CourseOverview;
