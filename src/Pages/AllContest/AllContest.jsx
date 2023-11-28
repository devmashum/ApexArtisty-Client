import { useLoaderData } from "react-router-dom";
import Card from "./Card";

import img from '../../assets/Hero/untitled folder/b6.jpg'
import { useState } from "react";

const AllContest = () => {
    const arts = useLoaderData();
    const [filteredData, setFilteredData] = useState(arts);
    const search = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setFilteredData(arts.filter((item) =>
            item.name.toLowerCase().includes(searchTerm)
        ));
    }

    return (
        <div>


            <img className="w-full  h-[500px] object-cover" src={img} alt="" />

            <div className='lg:flex justify-center items-center w-full flex-row-reverse  bg-gray-100'>

                <div className='p-10'>
                    <h1 className="lg:text-5xl text-2xl font-bold">Discover Inspiring Artistry</h1>
                    <p className="py-6">Unleash your creative journey with our powerful search tool. Dive into a world of captivating paintings, sculptures, and more. Whether you're seeking vibrant abstracts or timeless classics, find the perfect masterpiece to ignite your imagination. Explore, experience, and embrace the beauty of art at your fingertips. Start your artistic exploration now!</p>
                    <div >
                        <input type="text"
                            onKeyUp={search} placeholder="Search here with an Art name......." className="input input-bordered input-success w-full" />

                    </div>

                </div>

            </div>
            <div className=" grid lg:grid-cols-3 gap-5 mb-10">

                {
                    filteredData.map(art => <Card key={art._id} art={art}></Card>)
                }
            </div>
        </div>
    );
};

export default AllContest;