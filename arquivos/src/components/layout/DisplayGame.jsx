import styles from '../../styles/DisplayGame.module.css'
import MoveLocation from '../game/MoveLocation'

export default function DisplayGame(){
    return (
        <div className={styles.displaygame}>
            <div>
                <MoveLocation imgAddress='images/jokepo.png'></MoveLocation>
            </div>
            <h1>VS</h1>
            <div>
                <MoveLocation imgAddress='images/jokepo.png'></MoveLocation>
            </div> 
            <div className={styles.div}>
                <MoveLocation imgAddress='images/pedra.png'></MoveLocation>
                <MoveLocation imgAddress='images/papel.png'></MoveLocation>
                <MoveLocation imgAddress='images/tesoura.png'></MoveLocation>
            </div> 
        </div>
    )
}