
import { useState } from 'react';
import './App.css';
import Cadastro from './Componentes/Cadastro/Cadastro.jsx';


import PreparoQualificacao from './Componentes/PreparoQualificação/PreparoQualificação.jsx';


function App() {

  const [name, setName] = useState("")
  const [office,setOffice] = useState("")
  const [registration,setRegistration] = useState("")
  const [management,setManagement] = useState("")
  const [listEmploy, setListEmploy] = useState([])
  const [displayRegister,setDisplayRegister] = useState("none")
  const [displayPrepareQualificacion, setPrepareQualificacion] = useState("none")

  // console.log(displayPrepareQualificacion)
  console.log(displayRegister)


 
  console.log(name, office, registration, management,listEmploy)



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


function updateListEmploy({name, office, registration, management}){
  const register = [name, office, registration, management]
  setListEmploy(...listEmploy,register)
  
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


  return (
  
          <form className="app">
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
            updateListEmploy = {updateListEmploy}
            />

            <PreparoQualificacao
            display={displayPrepareQualificacion}
            module="1."
            />

       
        </form>
      );
}



export default App;
