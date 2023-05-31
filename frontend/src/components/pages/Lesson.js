import { UserAuth } from '../context/AuthContext';
import { db } from '../../firebase-config';
import { getDoc, doc } from 'firebase/firestore';
import styles from './home.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Lesson = () => {
  const { user } = UserAuth();
  const [lessonData, setLessonData] = useState();

  const { courseId, lessonId } = useParams();

  useEffect(() => {
    const getLesson = async () => {
      const docRef = doc(db, 'courses', courseId, 'lessons', lessonId);
      const data = await getDoc(docRef);
      setLessonData(data.data());
    };

    getLesson();
  }, []);

  console.log(lessonData);
  if (user) {
    return (
      <div>
        <h1>{lessonData.name}</h1>
      </div>
    );
  }
};

export default Lesson;
