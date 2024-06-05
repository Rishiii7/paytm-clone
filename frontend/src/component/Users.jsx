import { Button } from "./Button";
import { InputBox } from "./InputBox";


const USERS = ["User 1", "User 2", "User 3"];


export const Users = () =>{
    return (
        <>
            <div className="p-3">
                <div className="w-full">
                    <span className=" font-bold ">Users</span>
                    <InputBox label={""} type={"text"} placeholder={"Search users..."} />
                </div>
                <div>
                    {USERS.map( (user) => {
                        return (
                            <>
                                <div className="bg-blend">
                                    <div className="flex justify-between  px-2">
                                        <div className="pt-8 font-semibold">
                                            {user}
                                        </div>
                                        <div className="">
                                            <Button label={"Send Money"} />
                                        </div>

                                    </div>
                                    <hr></hr>
                                </div>
                                
                            </>
                        )
                    })}
                </div>

            </div>
        </>
    )
}