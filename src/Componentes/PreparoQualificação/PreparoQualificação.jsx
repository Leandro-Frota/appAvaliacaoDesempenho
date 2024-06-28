import "./PreparoQualificacao.css"
import Question from "../Question/Question";
import { useEffect, useState } from "react";

function PreparoQualificacao({module}){

    const [valueQuestion1, setValueQuestion1] = useState(0)
    const [valueQuestion2, setValueQuestion2] = useState(0)
    const [valueQuestion3, setValueQuestion3] = useState(0)
    const [valueQuestion4, setValueQuestion4] = useState(0)
    const [valueQuestion5, setValueQuestion5] = useState(0)
    const [valueQuestion6, setValueQuestion6] = useState(0)
    const [valueSum,setValueSum] = useState(0)

    function captureValueQuestion1(value){
        setValueQuestion1(value)
    }
    function captureValueQuestion2(value){
        setValueQuestion2(value)
    }
    function captureValueQuestion3(value){
        setValueQuestion3(value)
    }
    function captureValueQuestion4(value){
        setValueQuestion4(value)
    }
    function captureValueQuestion5(value){
        setValueQuestion5(value)
    }
    function captureValueQuestion6(value){
        setValueQuestion6(value)
    }

   useEffect(()=>{ 
    const total = valueQuestion1 + valueQuestion2 + valueQuestion3 + valueQuestion4 + valueQuestion5+valueQuestion6;
    setValueSum(total);
    },[valueQuestion1,valueQuestion2,valueQuestion3,valueQuestion4,valueQuestion5,valueQuestion6]) // monitora as mudanças nas variáveis, qunando um dos valores muda o efeito é executado.

    // console.log(check)

    return(
        <div style ={{display: 'none'}} className="container">
            <h2><span>{module}</span>Preparo e qualificação</h2>
            <Question
            item="1.1"
            title='Conhecimento técnico'
            description='O empregado tem o conhecimento e habilidade necessários 
                        ao desenvolvimento das suas atividades, expressa confiança nas informações,
                        atividades e serviços prestados sob a sua responsabilidade.'
            pounds = {captureValueQuestion1}
            />
            <Question
            item="1.2"
            title='Capacidade analítica'
            description='Identifica, interpreta e avalia diferentes tipos de dados,
                         relacionando-os de forma lógica.'
            pounds = {captureValueQuestion2}
            />
             <Question
             item="1.3"
            title='Inovação'
            description='Executa as atividades de forma crítica, sugere e implanta novas práticas visando
                        a melhoria das atividades e processos.'
            pounds = {captureValueQuestion3}
            />
             <Question
            item="1.4"
            title='Geração de conhecimento'
            description='Busca, sistematiza, registra e dissemina o conhecimento de modo a transformá-lo
                        em vantagem para a empresa.'
            pounds = {captureValueQuestion4}
            />
            <Question
            item="1.5"
            title='Organização'
            description='Planeja e organiza adequadamente suas tarefas, materiais, documentos e outros
                        que utiliza para a realização do seu trabalho'
            pounds = {captureValueQuestion5}
            />
            <Question
            item="1.6"
            title='Comunicação'
            description='Escuta atentamente e expressa suas ideais verbalmente e por escrito , usando linguagem
                        clara e objetiva, certificando-se do entendimento das mensagens transmitidas.'
            pounds = {captureValueQuestion6}
            />

            <p className="pounds">Pontuação Preparo e Qualificação : {valueSum}</p>
            
            </div>
    )
    
}

export default PreparoQualificacao