// taskItem.jsx
import styles from './TaskItem.module.css';

export const TaskItem = ({ task, editTask, deleteTask }) => {
    return (
        <li
            className={'${styles.container} ${task?.completed ? styles.success : styles.default}'}
            onClick={() => editTask(task.id, !task.completed)}
        >
            <div className={styles.item}>
                <div className={'${styles.id} ${task?.completed ? styles,idSuccess : styles.idDefault}'}>{task.id}</div>
                <div className={task?.completed ? styles.contentSuccess : styles.contentDefault}>{task.title}</div>
                <button 
                className="button-primary"
                onClick={(e)=> {
                    e.stopPropagation();
                    deleteTask(task.id);
                }}
                >❌</button>
            </div>
        </li>
    )
}