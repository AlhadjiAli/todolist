// header.jsx
// Le composant qui affiche l'entete de la page

import reactLogo
  from '../../../assets/react.svg'; // TODO:  Ajouter le logo de TaskFlow a gauche de l'ecran
import styles from './Header.module.css';

export const Header = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <img src={reactLogo} alt="Logo" width={50} height={50} />
                <div>
                    <h1>TaskFlow</h1>
                    <div className="color-gray">
                        <code>Application de gestion de tâches </code>
                    </div>                
                </div>
            </div>
            <code className="color-primary">
                V.1.0
            </code>
        </div>
    )
}