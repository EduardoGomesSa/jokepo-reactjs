import { useEffect, useState } from 'react'
import styles from '../../styles/DisplayGame.module.css'
import MoveLocation from '../game/MoveLocation'

interface DisplayGameProps{
    onChange?: (address: string) => void
}

export default function DisplayGame(props:DisplayGameProps){
    const [move, setMove] = useState('images/jokepo.png')

    return (
        <div className={styles.displaygame}>
            <div>
                <MoveLocation imgAddress='images/jokepo.png'></MoveLocation>
            </div>
            <h1>VS</h1>
            <div>
                <MoveLocation imgAddress={move} onChange={e => setMove(e)}></MoveLocation>
            </div> 
            <div className={styles.div}>
                <MoveLocation imgAddress='images/pedra.png'></MoveLocation>
                <MoveLocation imgAddress='images/papel.png'></MoveLocation>
                <MoveLocation imgAddress='images/tesoura.png'></MoveLocation>
            </div> 
        </div>
    )
}