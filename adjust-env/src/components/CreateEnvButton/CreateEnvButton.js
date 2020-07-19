import React from 'react';
import "./CreateEnvButton.css";

const CreateEnvButton = () => {

    const creatingNewEnvironment = () => {
        fetch("http://localhost:4000/createEnvironment/")
            .then(res => res.json())
            .then(res => {
                if(res==="environmentSetupSuccess"){
                    alert("Successfully Created Environment !!!")
                }else if (res ==="environmentSetupFailed") {
                    alert("Unable to create Environment !!!");
                }else if(res === "improperEnvironment") {
                    alert("you are not Using Windows !!!");
                }else {
                    alert("unknown error occured");
                }
            })
            .catch((Error)=>{
                alert("can't reach server !!!")
            })
    }

    return (
        <div className="create-env-container">
            <button className="btn" onClick={creatingNewEnvironment}>Create New Environment</button>
        </div>
    )
}

export default CreateEnvButton;