
export const InputBox = ({label, placeholder, type}) =>{
    return (
        <>
            <div className="p-2">
                {/* Label */}
                <label className="block m-1 text-md font-medium text-gray-900  text-left">{label}</label>
                {/* Input field */}
                <input type={type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
            </div>
        </>
    )
}