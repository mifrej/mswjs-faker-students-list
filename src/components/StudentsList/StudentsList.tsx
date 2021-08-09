import {FC} from 'react';
import {useSelector} from 'react-redux';
import styles from './StudentsList.module.scss';
import {getStudentsSelector} from '../../modules/Students';
import {StudentCard} from '../StudentCard';

export const StudentsList:FC = () => {
  const students = useSelector(getStudentsSelector);

  return (
    <div className={styles.studentsList}>
      {students.map((student) => <StudentCard {...student} key={student.id} />)}
    </div>
  );
};
