import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img2 from '../../../assets/Hero/b2.jpg'
import img3 from '../../../assets/Hero/b3.jpg'
import img5 from '../../../assets/Hero/b5.jpg'
import img6 from '../../../assets/Hero/b6.jpg'

const Banner = () => {


    return (
        <Carousel className="text-center">
            <div className="lg:w-full lg:h-[700px]">
                <img className=" object-cover" src={img6} />

            </div>

            <div className="lg:w-full lg:h-[700px] ">
                <img className=" object-contain" src={img3} />

            </div>
            <div className="lg:w-full lg:h-[700px] ">
                <img className="object-cover" src={img2} />

            </div>


            <div className="lg:w-full lg:h-[700px] ">
                <img className="object-cover" src={img5} />

            </div>

        </Carousel>
    );
};

export default Banner;