import './formulario.css'

function Formulario() {
    return (
        <form>
            <section className='wrapperEmprloy'>
                <label htmlFor="nameEmploye">Nome</label>
                <input className='nameEmploye' type="text" placeholder='Nome' />
                <label htmlFor="office">Cargo</label>
                <input className='office' type="text" placeholder='Cargo' />
                <label htmlFor="registration">Matricula</label>
                <input className='registration' type="number" placeholder='Matrícula' />

            </section>
        </form>
    )
}

export default Formulario
