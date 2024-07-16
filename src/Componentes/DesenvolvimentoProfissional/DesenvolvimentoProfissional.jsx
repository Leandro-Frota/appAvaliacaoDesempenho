import "./DesenvolvimentoProfissional.css"
import QuizDesProfRecInt from "../QuestionDesProfisional/QuestionDesProfRecProfi";
import { useEffect, useState } from "react";

function DesenvolvimentoProfissional({module,display,updateResumePrepQuali}){


    const [valueQuestion1, setValueQuestion1] = useState(0)
     const [valueSum,setValueSum] = useState(0)
    const [nameCourse1, setNameCourse1] = useState("")
  
  
    const resumePrepQuali = {
        valueQuestion1,
        nameCourse1
    }


    console.log(resumePrepQuali)

    function captureValueQuestion1(value){
        setValueQuestion1(value)
    }
      
    function captureNameCourse1(value){
        setNameCourse1(value)
    }
 


   useEffect(()=>{ 
    const total = valueQuestion1;
    setValueSum(total);
    },[valueQuestion1]) // monitora as mudanças nas variáveis, qunando um dos valores muda o efeito é executado.



    return(
        <div  className="container" style={{display: display}}>
            <h2><span>{module}</span>Desenvolvimento Profissional</h2>
            <p>Pariticipação em cursos com certificados emitidos no período compreendido entre os dias 
                01/01/2023 e 31/12/2023. NECESSARIO ANEXAR CÓPIA DO CERTIFICADO.
            </p>
            <QuizDesProfRecInt
            item="5.1"
            description='O empregado tem o conhecimento e habilidade necessários 
                        ao desenvolvimento das suas atividades, expressa confiança nas informações,
                        atividades e serviços prestados sob a sua responsabilidade.'
            pounds = {captureValueQuestion1}
            captureNameCourse1 = {captureNameCourse1}
            pontuation = {4}
            />

            <p className="pounds">Pontuação Desenvolvimento Profissional: {valueSum}</p>

        </div>
    )
    
}

export default DesenvolvimentoProfissional
