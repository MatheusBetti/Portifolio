import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo}) =>{
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{background:corDeFundo}} >
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador