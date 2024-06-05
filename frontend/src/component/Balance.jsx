export const Balance = ({amount}) => {
    return (
        <>
            <div className="p-2  font-bold" >
                <span>
                    Your Balance
                </span>  
                <span className="px-5">
                    ${amount} 
                </span>  
            </div>
        </>
    )
}