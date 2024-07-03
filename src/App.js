
import { useState } from 'react';
import './App.css';
import Cadastro from './Componentes/Cadastro/Cadastro.jsx';


import PreparoQualificacao from './Componentes/PreparoQualificação/PreparoQualificação.jsx';


function App() {

  const [name, setName] = useState("")
  const [office,setOffice] = useState("")
  const [registration,setRegistration] = useState("")
  const [management,setManagement] = useState("")
  const [displayRegister,setDisplayRegister] = useState("none")
  const [displayPrepareQualificacion, setPrepareQualificacion] = useState("none")

 

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

function onSubmitRegister(){
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    name,
    office,
    registration,
    management,
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
  
          <form onSubmit={onSubmitRegister} className="app">
            <h1>Avaliação de Desempenho</h1>
            <div className='btnContainer'>
              <div onClick={toggleRegister}  className='btnRegister'>Cadastro</div>
              <div onClick={togglePrepQual}  className='btnPreparationQualification'>Preparo e Qualificação</div>
            </div>
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
            />

        
        </form>
      );
}



export default App;
