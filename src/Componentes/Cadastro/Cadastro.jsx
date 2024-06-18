import './Cadastro.css'

function Cadastro(props) {

    function captureName(e){
        props.updateName(e.target.value)
    }

    function captureOffice(e){
        props.updateOffice(e.target.value)
    }

    function captureRegistration(e){
        props.updateRegistration(e.target.value)
    }

    function captureManagement(e){
        props.updateManagement(e.target.value)
    }  


    return (
        <div className='form' onSubmit={props.updateListEmploy}>
            <h2>Cadastro Funcionário</h2>
            <section className='wrapperEmploy'>
                <div className='input'>
                    <label htmlFor="nameEmploye">1.Nome</label>
                    <input  onChange={captureName} className='nameEmploye' type="text" placeholder='Nome completo' />
                </div>
                <div className='input'>
                    <label htmlFor="office">2.Cargo</label>
                    <input  onChange={captureOffice} className='office' type="text" placeholder='Cargo' />
                </div>
                <div className='input'>
                    <label htmlFor="registration">3.Matricula</label>
                    <input onChange={captureRegistration} className='registration' type="number" placeholder='Matrícula' />
                </div>
                <div className='input'>
                    <label htmlFor="registration">4.Gerência</label>
                    <input  onChange={captureManagement} className='registration' type="text" placeholder='Gerência' />
                </div>
                {/* <button className='btnSaveEmploy'>Enviar</button> */}

            </section>
        </div>
    )
}

export default Cadastro
