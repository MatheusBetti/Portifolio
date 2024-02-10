import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) =>{

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = function(evento){
        evento.preventDefault();
        props.aoColaboradorCadastrado({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu Nome"></CampoTexto>
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite seu Cargo"></CampoTexto>
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
                <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} label="Time" itens={props.times}></ListaSuspensa>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario