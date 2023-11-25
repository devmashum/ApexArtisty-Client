import { useLoaderData } from "react-router-dom";
import Card from "./Card";

import img from '../../assets/Hero/untitled folder/b6.jpg'

const AllContest = () => {
    const arts = useLoaderData();

    return (
        <div>
            <img className="w-full  h-[500px] object-cover" src={img} alt="" />
            <div className=" grid grid-cols-3 gap-5 mb-10">

                {
                    arts.map(art => <Card key={art._id} art={art}></Card>)
                }
            </div>
        </div>
    );
};

export default AllContest;