import { Button } from "../component/Button"
import { ButtonWarning } from "../component/ButtonWarning"
import { Heading } from "../component/Heading"
import { InputBox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"

export const Signin = () => {
    return (
        <>
        <div className="bg-gradient-to-r from-gray-400 to-gray-600 h-screen flex justify-center">
            <div className="flex flex-col justify-center ">
                <div className="w-80 h-max bg-white  shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] text-center rounded-lg p-4">
                    {/* Header component */}
                    <Heading label={"Sign In"} />
                    <SubHeading subText={"Enter your Credentails to access your account"} />
                    <InputBox label={"Email"} placeholder={"johndoes@gmail.com"} type={"email"}/>
                    <InputBox label={"Password"} placeholder={"********"} type={"password"}/>
                    
                    <Button label={"Sign In"} />
                    <ButtonWarning label={"Don't have an account?"} to={"/signup"} buttonText={"Sign Up"} />
                </div>
            </div>
            
        </div>
        </>
    )
}

// shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]