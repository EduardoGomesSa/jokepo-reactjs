import styles from '../../styles/DisplayGame.module.css'
import MoveLocation from '../game/MoveLocation'

export default function DisplayGame(){
    return (
        <div className={styles.displaygame}>
            <div>
                <MoveLocation></MoveLocation>
            </div>
            <h1>VS</h1>
                <div>
                    <MoveLocation></MoveLocation>
                </div> 
            <div>
                <MoveLocation></MoveLocation>
                <MoveLocation></MoveLocation>
                <MoveLocation></MoveLocation>
            </div> 
        </div>
    )
}