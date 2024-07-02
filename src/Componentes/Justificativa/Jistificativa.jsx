import './Justificativa.css'


function Justify({captureJustify,valueA}){

    function handleTextArea(e){
        captureJustify(e.target.value)
    }
    // console.log(valueA)

    return (
        <div className="justifyContainer">
            <label htmlFor="">Justificativa</label>
            <textarea disabled= {!valueA} onChange={handleTextArea} name="justify" placeholder="Digite aqui a justicativa..." rows={4} cols={40} />
        </div>
    )

}

export default Justify