import React ,{useState} from 'react';
import './App.css';
import Navbar from "../Navbar/Navbar";
import LeftBar from "../LeftBar/LeftBar";
import RightBar from "../RightBar/RightBar";
import CreateEnvButton from "../CreateEnvButton/CreateEnvButton";

const initialProcessInfoObject ={
  "process1":`Desktop\\Program Files\\P1\\PROCESS1.ENV`,
  "process2":`Desktop\\Program Files\\P2\\PROCESS2.ENV`
}

function App() {

  const [processName,setProcessName] = useState("");
  const [processInfoObject,setProcessInfoObject] = useState(initialProcessInfoObject);
  const [key,setKey] = useState("");
  const [value,setValue] = useState("");
  
  const fetchProcessInfo = (processName) => {
    fetch(`http://localhost:4000/getEnvironment/${processName}`)
        .then(res=>res.json())
        .then(res =>{
          if(res === "improperEnvironment") {
            setProcessName("");
           alert("You are not using Windows"); 
          }else if (res === "environmentGetFailed") {
            setProcessName("");
            alert("can't get environmwnt right now !!!")
          }else if(res === "wrongProcess") {
            setProcessName("");
            alert("wrong process Name , No process with such name")
          } else if (typeof(res) === "object") {
            setProcessInfoObject(res);
          } else {
            setProcessName("");
            alert("Can't get process , unknown error");
          }
        })
        .catch(error => alert("Some error occurred on Server"))
  }

  const getMeProcessInfo = (e) => {
    e.preventDefault();
    fetchProcessInfo(processName);

}

  const setNewKeyValuePair = (e) => {
    e.preventDefault();
    
    if(processName.trim() === "" ) {
      alert("process name must be filled")
      setKey("");
      setValue("");
    }else {
      if(key.trim() ==="" || value.trim() === "") {
        alert("both key and value fields must be filled")
      } else {
        fetch(`http://localhost:4000/setEnvironment/${processName}/${key}/${value}`)
          .then(res => res.json())
          .then(res => {
            if(res === "improperEnvironment") {
            alert("You are not using Windows"); 
            }else if (res === "environmentSetFailed") {
              alert("can't get environmwnt right now !!!")
            }else if(res === "wrongProcess") {
              alert("wrong process Name , No process with such name")
            } else if ( res === "environmentSetSuccess") {
              fetchProcessInfo(processName);
            } else {
              alert("Can't get process , unknown error");
            }
            
          })
          .catch(error => {
            alert("Some error Occured at server");
          })
        setKey("");
        setValue("");
      }
    }
    

    
  }

  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <CreateEnvButton />
        
        <LeftBar 
          getMeProcessInfo={getMeProcessInfo} 
          processName={processName} 
          setProcessName={setProcessName} 
          myKey={key}
          myValue={value}
          setMyKey={setKey}
          setMyValue={setValue}
          setNewKeyValuePair={setNewKeyValuePair}
        />

        <RightBar processInfoObject = {processInfoObject} />
      
      </div>
    </div>
  );
}

export default App;
