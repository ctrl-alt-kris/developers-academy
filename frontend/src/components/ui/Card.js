import styles from "./card.module.scss";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const Card = (course, clickedCourse) => {
  return (
    <div
      key={course.id}
      className={styles.card}
      onClick={() => clickedCourse(course.id)}
    >
      <img
        className={styles.card_image}
        src="https://i.redd.it/b3esnz5ra34y.jpg"
      />

      <div className={styles.card_title}>
        <p>{course.name}</p>
      </div>
      <div className={styles.card_blurb}>
        <p>{course.blurb}</p>
      </div>
    </div>
  );
};

export default Card;