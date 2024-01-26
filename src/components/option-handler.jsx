import classNames from "classnames"

const OptionHandler = ({ e, index, isReserved, isPrime }) => {
    const formattedIndex = (index + 1).toString().padStart(2, "0")

    return (
        <div key={index} style={{ background: e.bg }} className='min-h-[240px] flex py-6 w-full'>
            <div
                className={classNames({
                    "w-2/5 lg:w-1/2": !isReserved,
                    "lg:w-1/12": isReserved
                })}
            />
            <div
                className={classNames("grid content-center px-8 md:w-1/2 w-full", {
                    "w-2/3 md:w-1/2": isReserved
                })}
            >
                <div className='flex items-center space-x-[10px] mb-5'>
                    <span
                        className={classNames("custom-underline", {
                            "custom-underline-prime": isPrime,
                            "text-[#8F6BE8]": isReserved && isPrime
                        })}
                    >
                        {formattedIndex}
                    </span>
                    <span className='font-title'>{e.title}</span>
                </div>
                <div
                    className={classNames("font-detail xl:pr-[10vw] pr-4", {
                        "text-white": isPrime
                    })}
                >
                    {e.detail}
                </div>
            </div>
        </div>
    )
}

export default OptionHandler
