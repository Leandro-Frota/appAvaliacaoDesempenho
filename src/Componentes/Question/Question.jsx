import './Question.css'

function Quiz({title,description, pounds}){

    
    function capturePounds(e){
        pounds(e.target.checked)
    }

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
                            <input  onChange={capturePounds} className='inputA' type="checkbox" />
                        </div>
                        <div>
                            <label htmlFor="inputB">B</label>
                            <input className='inputB' type="checkbox" />
                        </div>
                        <div>
                            <label htmlFor="inputC">C</label>
                            <input className='inputC' type="checkbox" />
                        </div>
                    </div>
            </div>                    
     </div>

            )
}

export default Quiz