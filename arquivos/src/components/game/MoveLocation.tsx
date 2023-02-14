import styles from '../../styles/MoveLocation.module.css'

interface MoveLocationProps{
    imgAddress: string
    play?: number
    onChange?: (address: string) => void
}

export default function MoveLocation(props: MoveLocationProps){
    // const select = () =>{
    //     if(props.play === 1){
    //         props.onChange('images/pedra.png')
    //     }else if(props.play === 2){
    //         props.onChange('images/papel.png')
    //     }else if(props.play === 3){
    //         props.onChange('images/tesoura.png')
    //     }  
    // }

    return (
        <div className={styles.moveLocation}>
            <img src={props.imgAddress} alt=""/>
        </div>
    )
}