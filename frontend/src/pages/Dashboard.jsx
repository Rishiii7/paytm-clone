import { useEffect, useState } from "react"
import { Appbar } from "../component/Appbar"
import { Balance } from "../component/Balance"
import { Users } from "../component/Users"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useRecoilValue } from "recoil"
import {accountSelector, userAtomFamily} from '../atoms/Dashboard'

export const Dashboard = () => {
    const navigate = useNavigate();
    
    console.log("inside Dashboard");
    const accountInfo = useRecoilValue(accountSelector);
    console.log(`accountInfo is ${accountInfo}`);
    useEffect( ()=> {
        console.log(`accountInfo indise useEffect is ${accountInfo}`);
        if (!accountInfo) {
            navigate("/signin");
        }
    }, [accountInfo, navigate]);
    

    console.log(`into atom family in Dashboard pages`);
    console.log(localStorage.token);
    const userInfo = useRecoilValue(userAtomFamily(accountInfo.userId[0])) ;
    if(!accountInfo || !userInfo) {
        return <div>Loading ....</div>
    }
    console.log(`user information :- ${userInfo.firstName}`);

    return (
        <>
        <div className=" h-screen bg-gray-100 p-5">
            {/* Top bar */}
            <Appbar profile={userInfo.firstName}/>
            <Balance amount={accountInfo.balance} />
            <Users />


        </div>
        </>
    )
}