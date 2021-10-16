import React from "react";
import styled from "styled-components/macro";
import imgHeader from "../../assets/cortada.jpg"
import logo from "../../assets/logo.png"

import { Button } from "antd";

export default function Header(){
return (
    <Container>
        <h1 className="text">Learning Quest</h1>
        <img src={imgHeader} alt="background" className = "img"></img>
        <img src={logo} alt="Header logo" className = "logo"></img>
        <div className="items">
            <h2 className="headerText1">Matérias</h2>
            <h2 className="headerText2">Perfil</h2>
            <div className="logout">
                <h2 className="headerText3">Sair</h2>
            </div>
        </div>
    </Container>
);
}

const Container = styled.div`
    width: 100%;
    display: block;
    position: relative;
    background-color: #A6EE6E;
    .img{
        width: 100%;
        height: 160px;
    }
    .logo{
        position: absolute;
        width: 180px;
        height: 150px;
        left: 180px;
        top: 1px;
    }
    .text{
        color: white;
        position: absolute;
        margin-left: 40%;
        margin-top: 50px;
        font-family: Noto Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 40px;
    }
    .items{
        display: flex;
        // justify-content: space-between;
        background: #A6EE6E;
        border: 1px solid #000000;
        box-sizing: border-box;
        box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 0px 0px 8px 8px;
        .headerText1{
            margin-left: 20vw;
        }
        .headerText2{
            margin-left: 20vw;
        }
        .logout{
            margin-left: 20vw;
            border: 2px solid black;
            border-radius: 10px;
            width: 5vw;


            .headerText3{
                text-align: center;
            }
        }
    }
`;

