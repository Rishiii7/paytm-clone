export const Balance = ({amount}) => {
    return (
        <>
            <div className="p-2  font-bold" >
                <span>
                    Your Balance
                </span>  
                <span className="px-3">
                    ${amount} 
                </span>  
            </div>
        </>
    )
}