import './PreparoQualificacao.css'

function PreparoQualificacao(){
    return(
        <div className='wrapperPreparationQaulification'>
            <h3>Preparo e qualificação</h3>
            <ol className='listPrepQualification'>
                <li>
                    <div>
                        <p>Conhecimento Técnico</p>
                    </div>
                    <div>
                       <p> O empregado tem o conhecimento e habilidade necessários
                        ao desenvolvimento das suas atividades, expressa confiança
                        nas informações, atividades e serviços prestados sob a sua responsabilidade
                        </p>
                    </div>
                    <div>
                        <label htmlFor="inputA">A</label>
                        <input className='inputA' type="checkbox" />
                        <label htmlFor="inputB">B</label>
                        <input className='inputB' type="checkbox" />
                        <label htmlFor="inputC">C</label>
                        <input className='inpuC' type="checkbox" />
                     
                    </div>
                </li>
                <li>Capacidade analítica</li>
                <li>Inovação</li>
                <li>Geração de conhecimento</li>
                <li>Organização</li>
                <li>Comunicação</li>
                <li>Autodesenvolvimento</li>
            </ol>

        </div>
    )
}

export default PreparoQualificacao