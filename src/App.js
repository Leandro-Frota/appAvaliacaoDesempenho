
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

 
  console.log(name, office, registration, management)

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
  console.log(listEmploy)
}

  return (
  
       <form className="app">
        <h1>Avaliação de Desempenho</h1>
        <Cadastro
         updateName={updateName}
         updateOffice={updateOffice}
         updateRegistration={updateRegistration}
         updateManagement={updateManagement}
         updateListEmploy = {updateListEmploy}
         />

        
        <PreparoQualificacao/>

        <button>Enviar</button>
      </form>
   

  );
}

export default App;
