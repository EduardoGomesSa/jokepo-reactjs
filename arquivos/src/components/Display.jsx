import styles from '../styles/Display.module.css'
import DisplayGame from '../components/DisplayGame'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Display(){
    return (
        <main className={styles.display}>
                <Header></Header>
                <DisplayGame></DisplayGame>
                <Footer></Footer>
        </main>
        
    )
}