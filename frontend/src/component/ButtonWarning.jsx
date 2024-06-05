import { Link } from "react-router-dom"

export const ButtonWarning = ({label, buttonText, to}) => {
    return (
        <>
            <div className="py-2 flex justify-center text-gray-900">
                <div className="px-1 ">
                    {label}
                </div>
                <Link to={to} className="underline">
                    {buttonText}
                </Link>
                {/* Already have an account? Login */}
            </div>
        </>
    )
}