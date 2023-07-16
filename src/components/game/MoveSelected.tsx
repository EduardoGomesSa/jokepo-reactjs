interface MoveSelectedProps{
    imgAddress: string
    onChange?: (address: string) => void
}

export default function MoveSelected(props: MoveSelectedProps){
    return (
        <div className={styles.moveSelected}>
            <img src={props.imgAddress} alt="imagem da jogada escolhida pelo usuario"/>
        </div>
    )
}