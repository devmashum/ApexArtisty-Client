import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Reviews = () => {
    const axiosPublic = useAxiosPublic();

    const { data: reviews = [], } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews');
            return res.data;
        }
    });
    return (
        <div className='mb-40'>

            <div className="mx-auto text-center md:w-4/12 my-4 mt-20">

                <h3 className="text-4xl uppercase border-b-2 py-4">Customer Reviews</h3>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='mx-24 my-16 flex flex-col items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className='text-2xl text-yellow-600'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;