import styles from '../../styles/MoveLocation.module.css'

interface MoveLocationProps{
    imgAddress: string
}

export default function MoveLocation(props: MoveLocationProps){
    return (
        <div className={styles.moveLocation}>
            <img src={props.imgAddress} alt="" />
        </div>
    )
}