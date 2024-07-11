
import { useState } from 'react';
import './App.css';
import Cadastro from './Componentes/Cadastro/Cadastro.jsx';
import PreparoQualificacao from './Componentes/PreparoQualificação/PreparoQualificação.jsx';
import TrabalhoEmEquipe from './Componentes/TrabalhoEmEquipe/TrabalhoEmEquipe.jsx'
import ButtonsMenu from './Componentes/ButtonsMenu/ButtonsMenu.jsx';
import Header from './Componentes/Header/Header.jsx';


function App() {

  const [name, setName] = useState("")
  const [office,setOffice] = useState("")
  const [registration,setRegistration] = useState("")
  const [management,setManagement] = useState("")
  const [displayRegister,setDisplayRegister] = useState("none")
  const [displayPrepareQualificacion, setPrepareQualificacion] = useState("none")
  const [displayTrabalhoEmEquipe, setTrabalhoEmEquipe] = useState("none")


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
    setTrabalhoEmEquipe("none")
  }else{
    setDisplayRegister("none")
  }

}

function togglePrepQual(){
  if(displayPrepareQualificacion === "none" ){
    setDisplayRegister("none")
    setPrepareQualificacion("")
    setTrabalhoEmEquipe("none")
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
            <Header title={"Avaliação de desempenho"} />
            <section className='mainContainer'>
              <div className='btnContainer'>
                <ButtonsMenu
                 name={"Cadastro"}
                 onClick = {toggleRegister}/>
                 <ButtonsMenu
                 name={"Preparo e Qualificação"}
                 onClick = {togglePrepQual}/>
                   <ButtonsMenu
                 name={"Trabalho em equipe"}
                 onClick = {toggleTrabalhoEmEquipe}/>                
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
               
                />
                <TrabalhoEmEquipe
                display={displayTrabalhoEmEquipe}
                module="2."
                
                />
              </div>
          </section>

        
        </div>
      );
}



export default App;
