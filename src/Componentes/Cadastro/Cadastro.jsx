import './Cadastro.css'

function Cadastro() {
    return (
        <form className='form'>
            <h2>Cadastro Funcionário</h2>
            <section className='wrapperEmploy'>
                <div className='input'>
                    <label htmlFor="nameEmploye">1.Nome</label>
                    <input className='nameEmploye' type="text" placeholder='Nome completo' />
                </div>
                <div className='input'>
                    <label htmlFor="office">2.Cargo</label>
                    <input className='office' type="text" placeholder='Cargo' />
                </div>
                <div className='input'>
                    <label htmlFor="registration">3.Matricula</label>
                    <input className='registration' type="number" placeholder='Matrícula' />
                </div>
                <div className='input'>
                    <label htmlFor="registration">4.Gerência</label>
                    <input className='registration' type="text" placeholder='Gerência' />
                </div>
                <button className='btnSaveEmploy'>Enviar</button>

            </section>
        </form>
    )
}

export default Cadastro
