import styles from '../../styles/MoveLocation.module.css'

interface MoveLocationProps{
    imgAddress: string
    onChange?: (address: string) => void
}

export default function MoveLocation(props: MoveLocationProps){
    return (
        <div className={styles.moveLocation}>
            <img src={props.imgAddress} alt="imagem da jogada escolhida pelo usuario"/>
        </div>
    )
}