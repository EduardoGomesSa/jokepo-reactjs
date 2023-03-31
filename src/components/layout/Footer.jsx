import Link from 'next/link'
import styles from '../../styles/Footer.module.css'

export default function Footer(){
    return (
        <div className={styles.footer}>
            <span>&copy;Eduardo - 2023</span>
            <span>
                <Link target='_blank' href='https://github.com/EduardoGomesSa'>
                    <img className={styles.images} src="images/github.png" alt="" />
                </Link>
                <Link target='_blank' href='https://www.linkedin.com/in/eduardo-gomes-de-s%C3%A1-8997491a4/'>
                    <img className={styles.images} src="images/linkedln.png" alt="" />
                </Link>   
            </span>
        </div>
    )
}