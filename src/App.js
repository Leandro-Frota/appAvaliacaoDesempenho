
import { useState } from 'react';
import './App.css';
import Cadastro from './Componentes/Cadastro/Cadastro.jsx';
import PreparoQualificacao from './Componentes/PreparoQualificação/PreparoQualificação.jsx';
import TrabalhoEmEquipe from './Componentes/TrabalhoEmEquipe/TrabalhoEmEquipe.jsx'


function App() {

  const [name, setName] = useState("")
  const [office,setOffice] = useState("")
  const [registration,setRegistration] = useState("")
  const [management,setManagement] = useState("")
  const [displayRegister,setDisplayRegister] = useState("none")
  const [displayPrepareQualificacion, setPrepareQualificacion] = useState("none")
  const [displayTrabalhoEmEquipe, setTrabalhoEmEquipe] = useState("none")
  // const [resumeItemPrepQuali, setResumeItemPrepQuali] = useState()
 
  // console.log(resumeItemPrepQuali)

function updateName(name){
    setName(name)
}

function updateOffice(office){
    setOffice(office)
}

function updateRegistration(registration){
  setRegistration(registration)
}
function updateManagement(management){
  setManagement(management)
}




function toggleRegister(){
  if(displayRegister === "none" ){
    setPrepareQualificacion("none")
    setDisplayRegister("")
  }else{
    setDisplayRegister("none")
  }

}

function togglePrepQual(){
  if(displayPrepareQualificacion === "none" ){
    setDisplayRegister("none")
    setPrepareQualificacion("")
  }else{
    setPrepareQualificacion("none")
  }
}
function toggleTrabalhoEmEquipe(){
  if(displayTrabalhoEmEquipe === "none" ){
    setDisplayRegister("none")
    setPrepareQualificacion("none")
    setTrabalhoEmEquipe("")
  }else{
    setTrabalhoEmEquipe("none")
  }
}

function onSubmitRegister(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    name,
    office,
    registration,
    management,
    // resumeItemPrepQuali
  });
  
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  
  fetch("http://localhost:8000/cadastro", requestOptions)
    .then((response) =>{
    if(response.status !== 200){
      throw new Error("Erro ao realizar cadastro")
    }
     alert("Cadastro realizado com sucesso")
    })
    .then((result) => console.log(result))
    .catch((error) => 
      alert("Erro no cadastro"));
}


  return (
  
          <div onSubmit={onSubmitRegister} className="app">
            <h1>Avaliação de Desempenho</h1>
            <section className='mainContainer'>
              <div className='btnContainer'>
                <div onClick={toggleRegister}  className='btnRegister'>Cadastro</div>
                <div onClick={togglePrepQual}  className='btnPreparationQualification'>Preparo e Qualificação</div>
                <div onClick={toggleTrabalhoEmEquipe}  className='btnPreparationQualification'>Trabalho em equipe</div>
                
              </div>
              <div className='formContainer'>
                <Cadastro
                display={displayRegister}
                updateName={updateName}
                updateOffice={updateOffice}
                updateRegistration={updateRegistration}
                updateManagement={updateManagement}
                />
                <PreparoQualificacao
                display={displayPrepareQualificacion}
                module="1."
                // updateResumePrepQuali = {updateResumePrepQuali}
                />
                <TrabalhoEmEquipe
                display={displayTrabalhoEmEquipe}
                module="1."
                // updateResumePrepQuali = {updateResumePrepQuali}
                />
              </div>
          </section>

        
        </div>
      );
}



export default App;
