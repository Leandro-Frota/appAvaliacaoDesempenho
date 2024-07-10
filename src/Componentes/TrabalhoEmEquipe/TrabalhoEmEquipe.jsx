import "./TrabalhoEmEquipe.css"
import Question from "../Question/Question";
import { useEffect, useState } from "react";

function TrabalhoEmEquipe({module,display,updateResumePrepQuali}){


    const [valueQuestion1, setValueQuestion1] = useState(0)
    const [valueQuestion2, setValueQuestion2] = useState(0)

    const [valueSum,setValueSum] = useState(0)
    const [justifyQuestion1, setJustifyQuestion1] = useState("")
    const [justifyQuestion2, setJustifyQuestion2] = useState("")

  
    const resumePrepQuali = {
        valueQuestion1,
        justifyQuestion1
    }
    // updateResumePrepQuali("resumePrepQuali")

    console.log(resumePrepQuali)

    function captureValueQuestion1(value){
        setValueQuestion1(value)
    }
    function captureValueQuestion2(value){
        setValueQuestion2(value)
    }
   
    function captureJustify1(value){
        setJustifyQuestion1(value)
    }
    function captureJustify2(value){
        setJustifyQuestion2(value)
    }
   
   useEffect(()=>{ 
    const total = valueQuestion1 + valueQuestion2;
    setValueSum(total);
    },[valueQuestion1,valueQuestion2]) // monitora as mudanças nas variáveis, qunando um dos valores muda o efeito é executado.


    return(
        <div  className="container" style={{display: display}}>
            <h2><span>{module}</span>Trabaho em equipe</h2>
            <Question
            item="2.1"
            title='interação'
            description='Interage e mantém com relacionamento com os seus pares,chefias e outras equipes,
                        contribuindo para o trabalho de outras áreas'
            pounds = {captureValueQuestion1}
            captureJustifyItemA = {captureJustify1}
            />
            <Question
            item="2.2"
            title='Cooperação'
            description='Coopera no compartilhamento de ideias, atividades e soluções com os membros da sua 
                        equipe e demais áreas, dispondo-se a auxiliar colegas e executar outros serviços quando solicitados'
            pounds = {captureValueQuestion2}
            captureJustifyItemA = {captureJustify2}
            />
                      
            <p className="pounds">Pontuação Trabalho em equipe : {valueSum}</p>

            <button >Enviar</button>
            
        </div>
    )
    
}

export default TrabalhoEmEquipe

