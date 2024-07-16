import { useEffect, useState } from 'react'
import './QuestionDesProfRecProf.css'


function QuizDesProfRecInt({description, pounds, item,pontuation,captureNameCourse1}){

    const [valueA, setValueA] = useState(false)
    const [valueTotal, setValueTotal] = useState(0)
    

    pounds(valueTotal)

 
    function capturePoundsA(e){
       
        setValueA(e.target.checked)
    }

    function captureCourse(e){
       
        captureNameCourse1(e.target.checked)
    }


   

    useEffect(()=>{

        if(valueA){
            setValueTotal(pontuation)
             }},[valueA])
    
    return(
        <div>
                      
                <div className='quizContainer'>
                        <div className='quizContent'>                
                                {/* <div className='quizContentType'>
                                    <p><span>{item}</span>{title}</p>
                                    
                                </div> */}
                                <div className='quizContentTypeDescription'>
                                <p><span>{item}</span> {description}</p>
                                </div>
                                <div className='quizContentTypeValours'>
                                    <div className='nameCourse'>
                                        <input onChange={captureCourse} type="text" placeholder='Nome do curso' />
                                    </div>
                                    <div>
                                        <label htmlFor="inputA">Tem Certificado?</label>
                                        <input  onChange={capturePoundsA} className='inputA' type="checkbox" />
                                    </div>
                                    
                                </div>
                            
                        </div> 
                                   
                </div>
                
                
        </div>
    )


           
}

export default QuizDesProfRecInt