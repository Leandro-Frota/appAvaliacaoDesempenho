import './Justificativa.css'


function Justify({captureJustify}){

    function handleTextArea(e){
        captureJustify(e.target.value)
    }

    return (
        <div className="justifyContainer">
            <label htmlFor="">Justificativa</label>
            <textarea onChange={handleTextArea} name="justify" placeholder="Digite aqui a justicativa..." rows={4} cols={40} />
        </div>
    )

}

export default Justify