import { Helmet } from 'react-helmet';
import img from '../../assets/Hero/untitled folder/b5.jpg'
import phillip from '../../assets/about/phillip.jpg'
import Slider from '../Home/Slider/Slider';




const AboutUs = () => {
    return (
        <div className='bg-gray-100'>
            <Helmet><title>ApexArtistry | About Us</title></Helmet>
            <img className='w-full h-[500px] object-cover ' src={img} alt="" />

            <div className='lg:flex justify-center items-center w-full flex-row-reverse  bg-gray-100'>
                <div className='flex-1 '>
                    <div><img className="w-full  lg:block shadow-2xl p-10 " src={phillip} /></div>
                    <h2 className='-mt-10 text-center font-bold text-xl'>Phillip Sternberg</h2>
                </div>
                <div className='p-10 flex-1'>
                    <h1 className="lg:text-6xl text-4xl font-bold">About ApexArtistry</h1>
                    <p className="py-6 text-xl"> Welcome to ApexArtistry, a visionary platform founded by the passionate artist and entrepreneur, Philipp Sternberg. Born from the colorful streets where Philipp once wielded a spray can and dreams of creative freedom, ApexArtistry has evolved into a haven for artists worldwide.
                    </p>

                    <p>
                        Philipp Sternberg: A Visionary Founder:
                        Philipp Sternberg's journey from a street artist to the creator of ApexArtistry is a testament to the transformative power of art. His dream was simple yet profound – to build a platform that not only showcased diverse artistic talents but also provided tangible support to those who dared to dream.

                        The Genesis of ApexArtistry:
                        Philipp's vision for ApexArtistry was rooted in his own experiences as an artist striving for recognition and financial stability. He envisioned a platform that would not only appreciate the beauty of artistic expression but also actively contribute to the livelihoods of creative individuals.

                        Empowering Artists Worldwide:
                        At ApexArtistry, artists are invited to submit their work, regardless of medium or style. Philipp's commitment to providing financial support sets ApexArtistry apart. Users who connect with an artist's vision can contribute donations, providing a direct means of support for their creative endeavors.

                        Prizes for Exceptional Creativity:
                        Acknowledging excellence is a core principle at ApexArtistry. Artists whose work captivates audiences have the opportunity to receive prizes, including monetary rewards and increased exposure. Philipp believes in creating a community where artistic brilliance is not only acknowledged but also celebrated.

                        Turning Dreams into Reality:
                        For Philipp Sternberg, ApexArtistry is the realization of a dream. It goes beyond being just a platform; it's a global community that empowers artists to overcome financial barriers and pursue their creative passions. Each submission, donation, and prize awarded contributes to making artists' dreams a tangible reality.

                        Join Philipp Sternberg and the vibrant community at ApexArtistry. Together, let's embark on a journey to elevate art, support creativity, and make the world a more colorful and inspiring place.
                    </p>
                </div>

                <div>

                </div>


            </div>
            <h3 className='lg:text-7xl text-5xl text-center my-10'>
                Photo Gallery
            </h3>
            <div><Slider></Slider></div>
        </div>
    );
};

export default AboutUs;