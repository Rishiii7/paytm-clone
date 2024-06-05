import { Button } from "../component/Button"
import { ButtonWarning } from "../component/ButtonWarning"
import { Heading } from "../component/Heading"
import { InputBox } from "../component/InputBox"
import { SubHeading } from "../component/SubHeading"


export const Signup = () => {

    return (
        <>
            <div className="h-screen flex justify-center  bg-gradient-to-r from-gray-400 to-gray-600 ">
                {/*  */}
                <div className="flex flex-col justify-center">
                    {/* Card Component */}
                    <div className=" rounded-lg bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] w-80 text-center p-2 h-max px-4">
                        <Heading label={"Sign Up"} />
                        <SubHeading subText={"Enter your Information to create an account"} />
                        <InputBox label={"First Name"} placeholder={"John"} type={"text"}/>
                        <InputBox label={"Last Name"}  placeholder={"Doe"} type={"text"}/>
                        <InputBox label={"Email"}  placeholder={"johndoe@gmail.com"} type={"email"}/>
                        <InputBox label={"Password"}  placeholder={"********"} type={"password"}/>

                        {/* Button */}
                        <div>
                            <Button label={"Sign Up"}/>
                        </div>

                        <div >
                            <ButtonWarning label={"Already have an account?"} buttonText={"Login"} to={"/signin"}/>
                        </div>

                    </div>
                    {/* End of Card Component */}

                </div>
                {/* */}
            </div>
        </>
    )
}