import styles from '../../styles/MoveLocation.module.css'

interface MoveLocationProps{
    imgAddress: string
    onChange: (address: string) => void
}

export default function MoveLocation(props: MoveLocationProps){
    var add = props.imgAddress
    const select = () =>{
        props.onChange(add = props.imgAddress)
    }

    return (
        <div className={styles.moveLocation}>
            <img src={props.imgAddress} alt="" onClick={select} />
        </div>
    )
}