import "./PreparoQualificacao.css"
import Question from "../Question/Question";
import { useState } from "react";



function PreparoQualificacao(){

    const [check, setCheck] = useState(false)

    function captureCheck(check){
        setCheck(check)
    }

    console.log(check)

    return(
        <div>
            <h2>Preparo e qualificação</h2>
            <Question
            title='Conhecimento técnico'
            description='O empregado tem o conhecimento e habilidade necessários 
                        ao desenvolvimento das suas atividades, expressa confiança nas informações,
                        atividades e serviços prestados sob a sua responsabilidade'
            pounds = {captureCheck}
            />

        </div>
    )
    
}

export default PreparoQualificacao