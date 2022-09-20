import { UserAuth } from "../context/AuthContext";
import { db } from "../../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import styles from "./home.module.scss";
import { useEffect, useState } from "react";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const { user, userInfo } = UserAuth();

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
            return (
              <div key={course.id} className={styles.card}>
                <img
                  className={styles.card_image}
                  src="https://i.redd.it/b3esnz5ra34y.jpg"
                />

                <div className={styles.card_title}>
                  <p>{course.name}</p>
                </div>
                <div className={styles.card_blurb}>
                  <p>this is a test paragraph</p>
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  return <div className={styles.content}>Landing page goes here</div>;
};

export default Home;
