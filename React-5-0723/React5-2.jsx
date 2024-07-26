import React, { useState, useEffect } from "react";
function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const lightStyles = {
        backgroundColor: '#fff',
        color: 'black'
    };
    const darkStyles = {
        backgroundColor:"#333",
        color:"white"
    };
    const buttonStyles = {
        padding:"10px 20px",
        fontSize:"16px",
        cursor:"pointer",
        backgroundColor:'#3490dc',
        color:'white',
        border:'none',
        borderRadius:'4px'
    };
    useEffect(function(){
        const timeoutId = setTimeout(() => {
            toggleDarkMode();        
        }, 3000);
        return function(){
            clearTimeout(timeoutId);
        };
    });

    function toggleDarkMode(){
        if(isDarkMode){
            setIsDarkMode(false);
        }else{
            setIsDarkMode(true);
        }
    }
    const bodyStyles={
        transition : 'background-color 0.3s, color 0.3s',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh',
        margin:'0',
        fontFamily:'Arial, sans-serif',
        ...(isDarkMode ? darkStyles : lightStyles)
    };
    return(
        <div style={bodyStyles}>
            <button onClick={toggleDarkMode} style={buttonStyles}>
                {isDarkMode ? "라이트 모드 전환" : "다크 모드 전환"}
            </button>
        </div>
    )
}

export default DarkModeToggle;