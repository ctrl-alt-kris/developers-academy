import styles from './card.module.scss';
import { useNavigate } from 'react-router-dom';

const Card = (course, clickedCourse) => {
  return (
    <div
      key={course.id}
      className={styles.card}
      onClick={() => clickedCourse(course.id)}
    >
      <img className={styles.card_image} src={course.image} />

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
