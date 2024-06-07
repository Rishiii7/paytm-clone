export const Appbar = ({profile}) => {
    return (
        <>
            <div className="p-2">
                <div className=" flex justify-between font-serif">
                    <span className=" font-bold text-2xl">
                        Payments Apps
                    </span>
                    <div className="flex items-center gap-3 ">
                        <span>Hello, {profile}</span>
                        <div className="flex items-center justify-center px-1.5 bg-black rounded-full text-white h-8 w-8 text-center">
                            {profile[0].toUpperCase()}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}