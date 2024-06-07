import { useRecoilValue } from "recoil";
import { Button } from "./Button";
import { usersAtom } from "../atoms/Dashboard";
import { useNavigate } from "react-router-dom";

// const USERS = ["User 1", "User 2", "User 3"];

export const Users = () => {
    const USERS = useRecoilValue(usersAtom);
    console.log(USERS);
    const navigate = useNavigate();

    return (
        <div className="pt-6 h-screen">
            <div className="">
                <span className="text-2xl font-bold">Users</span>
                <div className="pt-3">
                    <input 
                        className="w-full rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="Search users..."
                    />
                </div>
            </div>
            <div className="mt-6 space-y-4">
                {USERS.map((user, ind) => {
                    return (
                        <div key={ind} className="bg-white px-4 rounded-lg shadow-md">
                            <div className="flex justify-between items-center">
                                <div className="text-lg font-semibold">
                                    {user.firstName}
                                </div>
                                <div className="">
                                    <Button label={"Send Money"} onClick={ (e) => {
                                        navigate(`/send?id=${user._id}&name=${user.firstName}`);
                                    }}/>
                                </div>
                            </div>
                            {/* <hr className="mt-2" /> */}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
