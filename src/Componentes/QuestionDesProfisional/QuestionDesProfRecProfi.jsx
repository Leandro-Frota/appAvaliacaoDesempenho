import { useEffect, useState } from 'react'
import './QuestionDesProfRecProf.css'


function QuizDesProfRecInt({description, pounds, item,pontuation,captureNameCourse1}){

    const [valueA, setValueA] = useState(false)
    const [valueTotal, setValueTotal] = useState(0)
    const [valueCourse,setValueCourse] = useState("")
    

    pounds(valueTotal)
    captureNameCourse1(valueCourse)

 
    function capturePoundsA(e){
       
        setValueA(e.target.checked)
    }

    function captureCourse(e){
       
        setValueCourse(e.target.value)
    }

    useEffect(()=>{

        if(valueA){
            setValueTotal(pontuation)
        }else{
            setValueTotal(0)
        }
            
            },[valueA])
    
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