import { UserAuth } from "../context/AuthContext";
import { db } from "../../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import styles from "./home.module.scss";
import { useEffect, useState } from "react";
import Card from "../ui/Card";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const { user } = UserAuth();

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

  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <section className={styles.explanationSection}>
          <div className={styles.explanation}>
            <h1>Welcome to Developers Academy</h1>
            <p>Learn and master the skills of software development</p>
          </div>
        </section>
        <section id="courses" className={styles.coursesSection}>
          <h2>Featured Courses</h2>
          <div className={styles.courseGrid}>
            <div className={styles.courseCard}>
              <img src="course1.jpg" alt="Course 1" />
              <h3>Web Development</h3>
              <p>Learn front-end and back-end web development techniques</p>
            </div>
            <div className={styles.courseCard}>
              <img src="course2.jpg" alt="Course 2" />
              <h3>Data Science</h3>
              <p>Master the art of analyzing and interpreting complex data</p>
            </div>
            <div className={styles.courseCard}>
              <img src="course3.jpg" alt="Course 3" />
              <h3>Mobile App Development</h3>
              <p>Create amazing mobile applications for iOS and Android</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
