import React from 'react'
import "./login.css";
import { loginUrl } from './spotify'; 

function login() {
  return (
    <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"  alt= "logo" />
    <a href={loginUrl}> スポティファイを楽しむ</a>
    </div>
  )
}

export default login
