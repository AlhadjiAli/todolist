// taskList.jsx

import { TaskItem } from '../taskItem/taskItem';
import styles from './TaskList.module.css';

export const TaskList = ({
    tasksList,
    incompletedTasks,
    editTask,
    deleteTask,
}) => {

    const taskList = tasksList.map((task) => (
        <TaskItem
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
        />
    ))

    if (taskList && taskList.length > 0) {
        return (
            <div className="box">

                <h2 className={styles.title}>
                    {incompletedTasks > 0 && (
                        <>📋 Il te reste encore <span className='important'>{incompletedTasks}</span> tache a accomplie !</>

                    )}

                    {incompletedTasks === 0 && (
                        <> 👍 Super ! Tu es un homme objectif, Tu as atteint ton but !</>
                    )}

                </h2>

                {tasksList && tasksList.length > 0 && (
                    <ul className={styles.container}>{taskList}</ul>
                )}
            </div>
        );
    }
    return (
        <div className="box">
            <h2 className={styles.emptyState}>
                👋 Salut , tu n'as rien a faire ! Profite de temps libre !
            </h2>
        </div>
    );



};