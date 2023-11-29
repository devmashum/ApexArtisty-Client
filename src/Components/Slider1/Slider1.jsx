// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Slider1.css';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


import useManageContest from '../../Hooks/useManageContest';

const Slider1 = () => {
    const [arts] = useManageContest();
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {

                    arts.map(art => <SwiperSlide key={art._id}>
                        <img src={art.img} />
                    </SwiperSlide>
                    )
                }

            </Swiper>
        </>
    );
}
export default Slider1;