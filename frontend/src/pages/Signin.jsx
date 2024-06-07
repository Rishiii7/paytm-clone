import { useState } from "react"
import { Button } from "../component/Button"
import { ButtonWarning } from "../component/ButtonWarning"
import { Heading } from "../component/Heading"
import { InputBox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    return (
        <>
        <div className="bg-gradient-to-r from-gray-400 to-gray-600 h-screen flex justify-center">
            <div className="flex flex-col justify-center ">
                <div className="w-80 h-max bg-white  shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] text-center rounded-lg p-4">
                    {/* Header component */}
                    <Heading label={"Sign In"} />
                    <SubHeading subText={"Enter your Credentails to access your account"} />
                    <InputBox onChange={ e => {
                        setUsername(e.target.value);
                    }} label={"Email"} placeholder={"johndoes@gmail.com"} type={"email"}/>
                    <InputBox onChange={ e => {
                        setPassword(e.target.value);
                    }} label={"Password"} placeholder={"********"} type={"password"}/>
                    
                    <Button label={"Sign In"}  onClick={ async ()=>{
                        const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
                            username,
                            password
                        });
                        // store token in loacl storage
                        console.log(response);
                        localStorage.setItem("token", response.data.token);
                        navigate("/dashboard");
                        
                    }}/>
                    <ButtonWarning label={"Don't have an account?"} to={"/signup"} buttonText={"Sign Up"} />
                </div>
            </div>
            
        </div>
        </>
    )
}

// shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]