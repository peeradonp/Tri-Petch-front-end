import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

const SwiperHandler = ({ option }) => {
    return (
        <Swiper
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className='mySwiper bg-[#F5F4F9]'
        >
            {option?.map((e, index) => {
                const formattedIndex = (index + 1).toString().padStart(2, "0")
                return (
                    <SwiperSlide key={formattedIndex}>
                        <div className='grid content-center px-5 min-h-[210px] select-none py-12'>
                            <div className='flex items-center space-x-[10px] mb-5'>
                                <span className='custom-underline'>{formattedIndex}</span>
                                <span className='font-title'>{e.title}</span>
                            </div>
                            <div className='font-detail'>{e.detail}</div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default SwiperHandler
