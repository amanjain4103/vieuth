import React from 'react';
import "./LeftBar.css";

const LeftBar = ({getMeProcessInfo,processName,setProcessName,myKey,setMyKey,myValue,setMyValue,setNewKeyValuePair}) => {


    
    

    return (
        <div className="left-bar-container">
            <form onSubmit={getMeProcessInfo}>
                <input type="text" value={processName} onChange={(e)=>setProcessName(e.target.value)} className="process-name-input" placeholder="PROCESS Name" />
                <button className="btn" type="submit">Info</button>
            </form>
            
            <br />
            <br />
            <div className="key-value-pair-container">
                <h2>Add New Key Value Pair :</h2>
                <form onSubmit={setNewKeyValuePair}>
                    <input 
                        type="text" 
                        className="process-name-input" 
                        placeholder="KEY" 
                        value={myKey}
                        onChange={(e) => setMyKey(e.target.value)}
                    /><br />
                    <h2 style={{marginLeft:"100px"}}>=</h2>
                    <input 
                        type="text"    
                        className="process-name-input" 
                        placeholder="VALUE" 
                        value={myValue}
                        onChange={(e) => setMyValue(e.target.value)}
                    />
                    <br /><br />
                    <button className="btn" style={{marginLeft:"30px"}} type="submit">Add Key=Value</button>
                </form>
            </div>
        </div>
    )
}

export default LeftBar;