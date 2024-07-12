import "./Comportamento.css"
import Question from "../Question/Question";
import { useEffect, useState } from "react";

function Comportamento({module,display,updateResumePrepQuali}){


    const [valueQuestion1, setValueQuestion1] = useState(0)
    const [valueQuestion2, setValueQuestion2] = useState(0)
    const [valueQuestion3, setValueQuestion3] = useState(0)
    const [valueQuestion4, setValueQuestion4] = useState(0)

    const [valueSum,setValueSum] = useState(0)
    const [justifyQuestion1, setJustifyQuestion1] = useState("")
    const [justifyQuestion2, setJustifyQuestion2] = useState("")
    const [justifyQuestion3, setJustifyQuestion3] = useState("")
    const [justifyQuestion4, setJustifyQuestion4] = useState("")

  
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
    function captureValueQuestion4(value){
        setValueQuestion4(value)
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
    function captureJustify4(value){
        setJustifyQuestion4(value)
    }
   
   
   useEffect(()=>{ 
    const total = valueQuestion1 + valueQuestion2 + valueQuestion3 +valueQuestion4;
    setValueSum(total);
    },[valueQuestion1,valueQuestion2,valueQuestion3,valueQuestion4]) // monitora as mudanças nas variáveis, qunando um dos valores muda o efeito é executado.


    return(
        <div  className="container" style={{display: display}}>
            <h2><span>{module}</span>Comportamento</h2>
            <Question
            item="4.1"
            title='Equilibrio'
            description='Realiza seu trabalho de forma equilibrada, convivendo bem com as adversidades, pressões,
                        imprevistos, obstáculos e conflitos. Recebe bem críticas e as trata adequadamente admitindo erros.'
            pounds = {captureValueQuestion1}
            captureJustifyItemA = {captureJustify1}
            />
            <Question
            item="4.2"
            title='Relação interpessoal'
            description='Trata todos com respeito, presteza e educação independente da hierarquia. Demonstra paciência
                        e capacidade de conviver com os pares'
            pounds = {captureValueQuestion2}
            captureJustifyItemA = {captureJustify2}
            />
             <Question
            item="4.3"
            title='iniciativa'
            description='Antecipa-se tirando proveito de oportunidades e não deixando acontecer falhas que possam ser
                        evitados. Demonstra iniciativa diante de imprevistos e pressões.'
            pounds = {captureValueQuestion3}
            captureJustifyItemA = {captureJustify3}
            />
             <Question
            item="4.4"
            title='Disciplina'
            description='Apresenta-se em seu local de trabalho no horário, cumpre as normas da empresa e os compromissos
                        de trabalho, zelando também pelos bons costumes e equipamentos da empresa'
            pounds = {captureValueQuestion4}
            captureJustifyItemA = {captureJustify4}
            />
                      
            <p className="pounds">Pontuação Comportamento : {valueSum}</p>

          
            
        </div>
    )
    
}

export default Comportamento