import styles from '../../styles/Display.module.css'
import DisplayGame from '../layout/DisplayGame'
import Header from './Header'
import Footer from './Footer'

export default function Display(){
    return (
        <main className={styles.display}>
                <Header></Header>
                <DisplayGame></DisplayGame>
                <Footer></Footer>
        </main>
        
    )
}