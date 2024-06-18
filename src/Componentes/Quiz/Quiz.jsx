import './Quiz.css'

function Quiz(){
    return(
        <div className='wrapper'>
            <h3>Preparo e qualificação</h3>
            <div className='list'>            
                    <div className='question'>
                        <p>Conhecimento Técnico</p>
                    </div>
                    <div className='questionDescription'>
                       <p> O empregado tem o conhecimento e habilidade necessários
                        ao desenvolvimento das suas atividades, expressa confiança
                        nas informações, atividades e serviços prestados sob a sua responsabilidade
                        </p>
                    </div>
                    <div className='questionValues'>
                        <label for="inputA" htmlFor="inputA">A</label>
                        <input className='inputA' type="checkbox" />
                        <label htmlFor="inputB">B</label>
                        <input className='inputB' type="checkbox" />
                        <label htmlFor="inputC">C</label>
                        <input className='inpuC' type="checkbox" />
                     
                    </div>
         

            </div>

        </div>
    )
}

export default Quiz