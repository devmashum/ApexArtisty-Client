import { Link, useLoaderData } from "react-router-dom";


const DetailsPage = () => {
    const arts = useLoaderData();
    const { _id, name, img, short_description, participants_count, contest_prize, deadline } = arts;

    return (
        <div className="card bg-base-100 shadow-xl px-5 py-5 pt-40">
            <figure>
                <img className=" w-[750px] h-80 object-cover" src={img} alt="Shoes" />

            </figure>
            <div className="card-body text-center">
                <p className="text-base text-red-400  font-bold btn btn-outline w-6/12 mx-auto"> Deadline: {deadline}</p>
                <h2 className="text-2xl font-bold">{name}</h2>
                <h2 className="font-bold">Participants: {participants_count}</h2>
                <p className="w-full"><span className="font-bold">Short Description:</span> {short_description}</p>
                <p className="w-full "><span className="font-bold">Contest Prize:</span>   {contest_prize}</p>

                <div className="card-actions justify-end">

                    <Link className="w-full" to={`/details/${_id}`}><button className="btn text-xl text-white bg-gradient-to-r from-cyan-500 w-full to-blue-500 mt-10">Register</button></Link>
                </div>
            </div>
        </div>


    );
};

export default DetailsPage;