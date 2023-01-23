import styles from '../styles/Display.module.css'
import DisplayGame from '../components/DisplayGame'

export default function Display(){
    return (
        <main className={styles.display}>
                <DisplayGame></DisplayGame>
        </main>
        
    )
}