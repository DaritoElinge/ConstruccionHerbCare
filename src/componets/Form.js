import React, { useState } from 'react'
import "./loginform.css";

const Form = () => {

    const [popupSytle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(()=> showPopup("hide"), 3000)
    }
    return (
        <div className="cover">
            <div class="logo-login">
                <div className='herb-logo'></div>
                <h1>Iniciar Sesion</h1>
            </div>
            <input type='text' placeholder='Nombre de Usuario'/>
            <input type='password' placeholder='Contrasena'/>
            <div className='login-btn' onClick={popup}><p>Iniciar Sesion</p></div>

            <p className='text_login'>o inicia sesion usando:</p>
            <div className='alt-login'>
                
            </div>

            <div className={popupSytle}>
                <h3>Error al iniciar sesion</h3>
                <p>Usuario o contrasena incorrectos</p>
            </div>

        
        </div>
        
    )
}

export default Form

