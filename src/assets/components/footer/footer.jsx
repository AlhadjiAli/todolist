// footer.jsx

import styles from './Footer.module.css';

export const Footer = ({ completedTask }) => {
    if (completedTask) {
        return (
            <footer>
                <code className={styles.footer}>
                    Avec TaskFlow tu as éliminer <span className='important'> {completedTask}</span> tâche
                    {completedTask > 1 ? "s" : ""} !
                </code>
                {/* <p>Copyright &copy; TaskFlow 2023</p> */}
            </footer>
        )
    }
    return null;

}