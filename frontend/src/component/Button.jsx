export const Button = ({label}) =>{
    return (
        <>
            <div className="pt-4 relative">
            <button type="button" class="text-white relative bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full">
               {label}
            </button>
            </div>
        </>
    )
}