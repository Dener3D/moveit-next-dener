import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Dener3D.png" alt="Dener Alves Silva"/>
            <div>
                <strong>Dener Alves</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>
                {level}
                </p>
            </div>
        </div>
    );
}