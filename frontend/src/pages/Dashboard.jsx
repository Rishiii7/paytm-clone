import { Appbar } from "../component/Appbar"
import { Balance } from "../component/Balance"
import { Users } from "../component/Users"

export const Dashboard = () => {
    return (
        <>
        <div className=" h-screen bg-gray-100 p-5 font-serif">
            {/* Top bar */}
            <Appbar />
            <Balance amount={"5000"} />
            <Users />


        </div>
        </>
    )
}