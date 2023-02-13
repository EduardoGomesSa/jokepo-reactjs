import styles from '../../styles/MoveLocation.module.css'

interface MoveLocationProps{
    imgAddress: string
    play: number
    onChange: (address: string) => void
}

export default function MoveLocation(props: MoveLocationProps){
    const select = () =>{
        if(props.play === 1){
            props.onChange(props.imgAddress = 'images/pedra.png')
        }else if(props.play === 2){
            props.onChange(props.imgAddress = 'images/papel.png')
        }else if(props.play === 3){
            props.onChange(props.imgAddress = 'images/tesoura.png')
        }  
    }

    return (
        <div className={styles.moveLocation}>
            <img src={props.imgAddress} alt="" onClick={select} />
        </div>
    )
}