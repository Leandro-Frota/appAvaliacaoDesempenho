
import { useState } from 'react';
import './App.css';
import Cadastro from './Componentes/Cadastro/Cadastro.jsx';
import PreparoQualificacao from './Componentes/PreparoQualificação/PreparoQualificação.jsx';
import TrabalhoEmEquipe from './Componentes/TrabalhoEmEquipe/TrabalhoEmEquipe.jsx'
import ButtonsMenu from './Componentes/ButtonsMenu/ButtonsMenu.jsx';
import Header from './Componentes/Header/Header.jsx';
import CompromissoComResultados from './Componentes/CompromissoComResultados/CompromissoComResultados.jsx';
import Comportamento from './Componentes/Comportamento/Comportamento.jsx'
import DesenvolvimentoProfissional from "./Componentes/DesenvolvimentoProfissional/DesenvolvimentoProfissional.jsx"


function App() {

  const [name, setName] = useState("")
  const [office,setOffice] = useState("")
  const [registration,setRegistration] = useState("")
  const [management,setManagement] = useState("")
  const [displayRegister,setDisplayRegister] = useState("none")
  const [displayPrepareQualificacion, setPrepareQualificacion] = useState("none")
  const [displayTrabalhoEmEquipe, setTrabalhoEmEquipe] = useState("none")
  const [displayCompromissoComResultado, setDisplayTrabalhoComResultado] = useState("none")
  const [displayComportamento, setDisplayComportamento] = useState("none")
  const [displayDesProf,setDisplayDesenvolvimentoProfissional] = useState("none")


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
    setDisplayTrabalhoComResultado('none')
    setDisplayComportamento("none")
    setDisplayDesenvolvimentoProfissional("none")
  }else{
    setDisplayRegister("none")
  }

}

function togglePrepQual(){
  if(displayPrepareQualificacion === "none" ){
    setDisplayRegister("none")
    setPrepareQualificacion("")
    setTrabalhoEmEquipe("none")
    setDisplayDesenvolvimentoProfissional("none")
  }else{
    setPrepareQualificacion("none")
  }
}
function toggleTrabalhoEmEquipe(){
  if(displayTrabalhoEmEquipe === "none" ){
    setDisplayRegister("none")
    setPrepareQualificacion("none")
    setTrabalhoEmEquipe("")
    setDisplayDesenvolvimentoProfissional("none")
  }else{
    setTrabalhoEmEquipe("none")
  }
}
function toggleCompromissoComResultado(){
  if(displayCompromissoComResultado === "none") {
    setDisplayRegister("none")
    setPrepareQualificacion("none")
    setTrabalhoEmEquipe("none")
    setDisplayTrabalhoComResultado("")
    setDisplayDesenvolvimentoProfissional("none")
  }else{
    setDisplayTrabalhoComResultado("none")
  }
}
function toggleComportamento(){
  if(displayComportamento === "none") {
    setDisplayRegister("none")
    setPrepareQualificacion("none")
    setTrabalhoEmEquipe("none")
    setDisplayTrabalhoComResultado("none")
    setDisplayDesenvolvimentoProfissional("none")
    setDisplayComportamento("")
  }else{
    setDisplayComportamento("none")
  }
}

function toggleDesProf(){
  if(displayDesProf === "none") {
    setDisplayRegister("none")
    setPrepareQualificacion("none")
    setTrabalhoEmEquipe("none")
    setDisplayTrabalhoComResultado("none")
    setDisplayComportamento("none")
    setDisplayDesenvolvimentoProfissional("")
  }else{
    setDisplayDesenvolvimentoProfissional("none")
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
                  <ButtonsMenu
                 name={"Compromisso com resultado"}
                 onClick = {toggleCompromissoComResultado}/>
                  <ButtonsMenu
                 name={"Comportamento"}
                 onClick = {toggleComportamento}/>
                 <ButtonsMenu 
                   name={"Desenvolvimento Prossional"}
                   onClick = {toggleDesProf}/>
                          
              </div>
              <div className='formContainer'>
                <Cadastro
                display={displayRegister}
                updateName={updateName}
                updateOffice={updateOffice}
                updateRegistration={updateRegistration}
                updateManagement={updateManagement}
                DesenvolvimentProfissional = {false}
                />
                <PreparoQualificacao
                display={displayPrepareQualificacion}
                module="1."
                
               
                />
                <TrabalhoEmEquipe
                display={displayTrabalhoEmEquipe}
                module="2."
                
                />
                <CompromissoComResultados
                display={displayCompromissoComResultado}
                module="3."/>
             
                <Comportamento
                display={displayComportamento}
                module="4."/>
                
                <DesenvolvimentoProfissional
                display = {displayDesProf}
                module = '5.'/>
               </div>
          </section>

        
        </div>
      );
}



export default App;
