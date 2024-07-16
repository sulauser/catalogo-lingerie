import Masc from "./components/masc.jsx";
import Fem from "./components/fem.jsx";

import { Header } from "./App.js";

function App() {
  function showMasc(){
    document.getElementById("fem").style.display = "none"
    document.getElementById("masc").style.display = "inline"
    document.getElementById("buttonFem").style.color = "gray"
    document.getElementById("buttonMasc").style.color = "crimson"
  }

  function showFem(){
    document.getElementById("fem").style.display = "inline"
    document.getElementById("masc").style.display = "none"
    document.getElementById("buttonFem").style.color = "crimson"
    document.getElementById("buttonMasc").style.color = "gray"
  }

  return (
    <>
      <Header>
        <button onClick={showFem} id="buttonFem" style={{color:"red"}}> <h1>Feminino</h1> </button>
        <button onClick={showMasc} id="buttonMasc" style={{color: "gray"}}> <h1>Masculino</h1> </button>
      </Header>
      <main>
        <div id="masc" style={{display: "none"}}>
          <Masc></Masc>
        </div>
        <div id="fem">
          <Fem></Fem>
        </div>
      </main>
    </>
  );
}

export default App;
