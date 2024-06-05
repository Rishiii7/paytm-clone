export const SendMoney = () =>{
    return (
        <>
            <div className="bg-gray-50 h-screen flex justify-center">
                
                <div className="flex flex-col justify-center rounded-lg">
                    <div className="w-80 flex  justify-center rounded-lg">
                        <h2 className=" font-bold text-2xl">Send Money</h2>
                    </div>
                    <div className="w-80  bg-white p-5  mt-5 rounded-xl shadow-2xl">
                        <div class="flex items-center ">
                            <div class="rounded-full w-9 h-9 bg-green-500 text-center pt-1 font-semibold text-white"  > 
                                A 
                            </div>
                                <div className="pl-4 font-bold text-lg">
                                    {/* Change to users name */}
                                    Friend's Name
                                </div>
                        </div> 
                        <div className="flex pt-5">
                            Amount (in $)
                        </div>
                        <div className="mt-2">
                            <input type="text" className="bg-gray-50 w-full rounded-md  p-1" placeholder="Enter Amount"></input>
                        </div>
                        <div className="pt-4">
                            <button className="text-white relative bg-green-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full">
                                Initiate Transfer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}