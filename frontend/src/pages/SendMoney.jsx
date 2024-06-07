import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"

export const SendMoney = () =>{
    const [searchParams] = useSearchParams();
    const id = searchParams.get(`id`);
    console.log(`Id is ${id}`);
    const name = searchParams.get(`name`);
    console.log(`Name is ${name}`);

    const navigate = useNavigate();

    // dynamic ele
    const [amount, setAmount] = useState(0);
    
    return (
        <>
            <div className="bg-gray-50 h-screen flex justify-center">
                
                <div className="flex flex-col justify-center rounded-lg">
                    <div className="w-80 flex  justify-center rounded-lg">
                        <h2 className=" font-bold text-2xl">Send Money</h2>
                    </div>
                    <div className="w-80  bg-white p-5  mt-5 rounded-xl shadow-2xl">
                        <div class="flex items-center ">
                            <div class="rounded-full w-9 h-9 bg-green-500 text-center pt-1.5 font-semibold text-white"  > 
                                {name[0]}
                            </div>
                                <div className="pl-4 font-bold text-lg">
                                    {/* Change to users name */}
                                        {name}
                                </div>
                        </div> 
                        <div className="flex pt-5">
                            Amount (in $)
                        </div>
                        <div className="mt-2">
                            <input type="number" className="bg-gray-50 w-full rounded-md  p-1" placeholder="Enter Amount" onChange={ e => {
                                setAmount(parseInt(e.target.value));
                            }}></input>
                        </div>
                        <div className="pt-4">
                            <button className="text-white relative bg-green-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
                            onClick={ async () => {
                                await axios.post('http://localhost:3000/api/v1/account/transfer',{
                                    toAccount : id,
                                    amount : amount
                                }, {
                                    headers : {
                                        "Authorization" : `Bearer ${localStorage.token}`
                                    }
                                });

                                navigate("/dashboard");
                            }}>
                                Initiate Transfer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}