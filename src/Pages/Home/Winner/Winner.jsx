

import useManageContest from '../../../Hooks/useManageContest';
import WinnerCard from './WinnerCard';
import img from '../../../assets/Hero/untitled folder/b3.jpg'


const Winner = () => {
    const [arts] = useManageContest()

    return (
        <div>


            <div className='lg:flex justify-center items-center w-full flex-row-reverse  bg-gray-100'>
                <div className='flex-1'>
                    <img className="w-full hidden lg:block shadow-2xl p-10 bg-gradient-to-r from-cyan-400 to-blue-600 " src={img} />
                </div>
                <div className='p-10 flex-1'>
                    <h1 className="lg:text-5xl text-3xl font-bold">Celebrating Artistic Triumphs</h1>
                    <p className="py-6">Description: Immerse yourself in our Winner's Circle, a space dedicated to showcasing the incredible talents that define our artistic community. Discover the latest champions whose creations have captured hearts and minds. From awe-inspiring paintings to groundbreaking sculptures, this is where creativity meets recognition. Join us in applauding the artists who have earned their place in the spotlight. Explore the Winner's Section and be inspired by the excellence that defines our vibrant artistic community.
                    </p>
                </div>

            </div>
            <div className='grid lg:grid-cols-3 gap-3 mt-10'>
                {
                    arts.filter(art => art.role).map(winner => <WinnerCard key={winner._id} winner={winner}></WinnerCard>)
                }
            </div>


        </div>
    );
};

export default Winner;