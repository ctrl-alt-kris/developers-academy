import { UserAuth } from "../context/AuthContext";
import { db } from "../../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import styles from "./home.module.scss";
import { useEffect, useState } from "react";
import Card from "../ui/Card";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const { user, userInfo } = UserAuth();

  const navigate = useNavigate();

  const clickedCourse = (courseId) => {
    navigate(`overview/${courseId}`);
  };

  useEffect(() => {
    const getCourses = async () => {
      const data = await getDocs(collection(db, "courses"));

      let parsedData = [];
      data.forEach((doc) => {
        let id = doc.id;
        parsedData.push({ ...doc.data(), id });
      });

      setCourses(parsedData);
    };

    getCourses();
  }, []);

  if (courses) {
    console.log(courses);
  }

  if (user) {
    return (
      <div className={styles.content}>
        {courses &&
          courses.map((course) => {
            return Card(course, clickedCourse);
          })}
      </div>
    );
  }

  return <div className={styles.content}>Landing page goes here</div>;
};

export default Home;
