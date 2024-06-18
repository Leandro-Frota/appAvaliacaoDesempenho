import "./PreparoQualificacao.css"
import Question from "../Question/Question";
import { useState } from "react";



function PreparoQualificacao(){

    const [valueQuestion1, setValueQuestion1] = useState(0)

    function captureValueQuestion1(value){
        setValueQuestion1(value)
    }

    // console.log(check)

    return(
        <div className="container">
            <h2>Preparo e qualificação</h2>
            <Question
            title='Conhecimento técnico'
            description='O empregado tem o conhecimento e habilidade necessários 
                        ao desenvolvimento das suas atividades, expressa confiança nas informações,
                        atividades e serviços prestados sob a sua responsabilidade'
            pounds = {captureValueQuestion1}
            />

            <p className="pounds">Pontuação Preparo e Qualificação : {valueQuestion1}</p>

        </div>
    )
    
}

export default PreparoQualificacao