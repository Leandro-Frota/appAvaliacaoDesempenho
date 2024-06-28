
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
  const [display,setDisplay] = useState('none')

 
  console.log(name, office, registration, management)
  console.log(display)


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

function toggle(){

}



  return (
  
       <form className="app">
        <h1>Avaliação de Desempenho</h1>
        <div className='btnContainer'>
          <div  className='btnRegister'>Cadastro</div>
          <div className='btnPreparationQualification'>Preparo e Qualificação</div>
        </div>
        <Cadastro
        display={display}
         updateName={updateName}
         updateOffice={updateOffice}
         updateRegistration={updateRegistration}
         updateManagement={updateManagement}
         updateListEmploy = {updateListEmploy}
         />

        
        <PreparoQualificacao module="1."/>

        {/* <button>Enviar</button>  */}
      </form>
   

  );
}

export default App;
