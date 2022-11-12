import { UserAuth } from '../context/AuthContext';
import { db } from '../../firebase-config';
import { getDoc, doc } from 'firebase/firestore';
import styles from './home.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Lesson = () => {
  const { user } = UserAuth();

  const { courseId, lessonId } = useParams();

  useEffect(() => {
    const getLesson = async () => {
      const docRef = doc(db, 'courses', courseId, 'lessons', lessonId);
      const data = await getDoc(docRef);
      console.log(data.data());
    };

    getLesson();
  }, []);

  if (user) {
    return <div className={styles.content}>lesson</div>;
  }
};

export default Lesson;
