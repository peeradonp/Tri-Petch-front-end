import classNames from "classnames"
import React from "react"
import OptionHandler from "./option-handler"
import SwiperHandler from "./swiper-handler"

const InfoHandler = ({ name, image, option, isReserved, offsetHeaderImage }) => {
    return (
        <div className='relative'>
            <div
                className={classNames("flex mt-[6vw]", {
                    "mb-5": offsetHeaderImage
                })}
            >
                <div
                    className={classNames({
                        "md:w-2/5 lg:w-1/2 w-0": !isReserved,
                        "lg:w-1/12": isReserved
                    })}
                />
                <div className='font-name px-8 w-2/3'>{name}</div>
            </div>
            <div className={classNames(image)} />
            <div className='md:block hidden'>
                {option.map((e, index) => (
                    <OptionHandler
                        key={index}
                        e={e}
                        index={index}
                        isReserved={isReserved}
                        isPrime={index + 1 === option.length}
                    />
                ))}
            </div>

            <div className='md:hidden block'>
                <SwiperHandler option={option} />
            </div>
        </div>
    )
}

export default InfoHandler
