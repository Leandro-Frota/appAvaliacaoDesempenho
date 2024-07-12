import "./CompromissoComResultados.css"
import Question from "../Question/Question";
import { useEffect, useState } from "react";

function CompromissoComResultados({module,display,updateResumePrepQuali}){


    const [valueQuestion1, setValueQuestion1] = useState(0)
    const [valueQuestion2, setValueQuestion2] = useState(0)
    const [valueQuestion3, setValueQuestion3] = useState(0)

    const [valueSum,setValueSum] = useState(0)
    const [justifyQuestion1, setJustifyQuestion1] = useState("")
    const [justifyQuestion2, setJustifyQuestion2] = useState("")
    const [justifyQuestion3, setJustifyQuestion3] = useState("")

  
    const resumePrepQuali = {
        valueQuestion1,
        justifyQuestion1
    }
   

    console.log(resumePrepQuali)

    function captureValueQuestion1(value){
        setValueQuestion1(value)
    }
    function captureValueQuestion2(value){
        setValueQuestion2(value)
    }
    function captureValueQuestion3(value){
        setValueQuestion3(value)
    }
   
    function captureJustify1(value){
        setJustifyQuestion1(value)
    }
    function captureJustify2(value){
        setJustifyQuestion2(value)
    }
    function captureJustify3(value){
        setJustifyQuestion3(value)
    }
   
   useEffect(()=>{ 
    const total = valueQuestion1 + valueQuestion2 + valueQuestion3;
    setValueSum(total);
    },[valueQuestion1,valueQuestion2,valueQuestion3]) // monitora as mudanças nas variáveis, qunando um dos valores muda o efeito é executado.


    return(
        <div  className="container" style={{display: display}}>
            <h2><span>{module}</span>Compromisso Com Resultados</h2>
            <Question
            item="3.1"
            title='Eficiência e eficácia'
            description='Concretiza os objetivos do seu trabalho, cumprindo as tarefas que lhe são atribuídas
                        com qualidade, sem erros e dentro dos prazos estipulads'
            pounds = {captureValueQuestion1}
            captureJustifyItemA = {captureJustify1}
            />
            <Question
            item="3.2"
            title='Busca de orientação'
            description='Busca orientação pra solucionar problemas/dúvidas do dia-a-dia e resolver situações imprevistas'
            pounds = {captureValueQuestion2}
            captureJustifyItemA = {captureJustify2}
            />
             <Question
            item="3.3"
            title='Melhoria Contínua'
            description='Esforça-se para propor melhoria nos processos, rotinas e procedimentos, levando em consideração
                        otimização de recursos, custos e qualidade'
            pounds = {captureValueQuestion3}
            captureJustifyItemA = {captureJustify3}
            />
                      
            <p className="pounds">Compromisso com resultados: {valueSum}</p>

          
            
        </div>
    )
    
}

export default CompromissoComResultados
