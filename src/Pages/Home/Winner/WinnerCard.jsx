import { PiMedalBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const WinnerCard = ({ winner }) => {
    const { img, name, participants_count, short_description, contest_prize, _id, role
    } = winner;
    return (

        <div>

            <div className="card bg-base-100 shadow-xl px-5 py-5">
                <figure>
                    <img className=" w-80 h-80" src={img} alt="Shoes" />
                </figure>
                <div className="card-body">

                    <h2 className="card-title h-20">{name}</h2>


                    {
                        role ? <> <h2 className="card-title w-2/3 justify-start btn btn-outline bg-green-500 text-white "><PiMedalBold />{role}</h2></> : <><h2 className="card-title w-2/3 justify-start btn btn-outline  text-white "></h2></>
                    }
                    <h2 className="font-bold">Participants: {participants_count}</h2>
                    <p className="w-full h-20">{short_description}</p>
                    <p className="w-full h-20">{contest_prize}</p>




                    <div className="card-actions justify-end">

                        <Link className="w-full" to={`/details/${_id}`}><button className="btn text-xl text-white bg-gradient-to-r from-cyan-500 w-full to-blue-500 mt-10">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WinnerCard;