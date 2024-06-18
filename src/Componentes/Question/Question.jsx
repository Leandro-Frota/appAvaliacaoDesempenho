import { useEffect, useState } from 'react'
import './Question.css'

function Quiz({title,description, pounds}){

    const [valueA, setValueA] = useState(false)
    const [valueB, setValueB] = useState(false)
    const [valueC, setValueC] = useState(false)
    const [valueTotal, setValueTotal] = useState(0)

    pounds(valueTotal)

    console.log(valueA,valueB,valueC,valueTotal)



    function capturePoundsA(e){
        // pounds(e.target.checked)
        setValueA(e.target.checked)
    }

    function capturePoundsB(e){
        // pounds(e.target.checked)
        setValueB(e.target.checked) 
    }

    function capturePoundsC(e){
        // pounds(e.target.checked)
        setValueC(e.target.checked)  
    }

    useEffect(()=>{

        if(valueA && !valueB && !valueC){
            setValueTotal(7)
             
         }else if(!valueA && valueB && !valueC){
            setValueTotal(4)

         }else if(!valueA && !valueB && valueC){
            setValueTotal(1)

         }else if(!valueA && !valueB && !valueC){
            setValueTotal(0)
         }else {
            setValueTotal(0)
            alert("Marque apenas 1 check por item")
         }
     
     
    },[valueA, valueB, valueC])
    
    return(

        <div className='quizContainer'>


            <div className='quizContent'>                
                    <div className='quizContentType'>
                        <p>{title}</p>
                    </div>
                    <div className='quizContentTypeDescription'>
                       <p> {description}</p>
                    </div>
                    <div className='quizContentTypeValours'>
                        <div>
                            <label htmlFor="inputA">A</label>
                            <input  onChange={capturePoundsA} className='inputA' type="checkbox" />
                        </div>
                        <div>
                            <label htmlFor="inputB">B</label>
                            <input onChange={capturePoundsB} className='inputB' type="checkbox" />
                        </div>
                        <div>
                            <label htmlFor="inputC">C</label>
                            <input onChange={capturePoundsC}  className='inputC' type="checkbox" />
                        </div>
                    </div>
            </div>                    
     </div>

            )
}

export default Quiz