import './Cadastro.css'

function Cadastro({updateName,updateOffice,updateRegistration,updateManagement,updateListEmploy, display}) {
     console.log(display)
    function captureName(e){
       updateName(e.target.value)
    }

    function captureOffice(e){
        updateOffice(e.target.value)
    }

    function captureRegistration(e){
        updateRegistration(e.target.value)
    }

    function captureManagement(e){
        updateManagement(e.target.value)
    }  


    return (
        <div className='form' onSubmit={updateListEmploy} style={{display: {display}}}>
            <h2>Cadastro Funcionário</h2>
            <section className='wrapperEmploy'>
                <div className='input'>
                    <label htmlFor="nameEmploye">1.Nome</label>
                    <input  onChange={captureName} className='nameEmploye' type="text" placeholder='Nome completo' required/>
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
           

            </section>
        </div>
    )
}

export default Cadastro
