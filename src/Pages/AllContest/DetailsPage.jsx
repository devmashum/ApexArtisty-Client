import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";


const DetailsPage = () => {
    const arts = useLoaderData();
    const { _id, name, img, short_description, participants_count, contest_prize, deadline, price } = arts;
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                cartId: _id,
                name: name,
                price: price,
                contest_prize: contest_prize,
                deadline: deadline,
                image: img,
                email: user.email
            }
            axiosPublic.post('/cart', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch the card
                        refetch();
                    }
                    else {
                        Swal.fire({
                            title: "You are not Logged IN",
                            text: "Please log in to add to the cart",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Please Log In !"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                //    send the user to the login page
                                navigate('/login', { state: { from: location } })
                            }
                        });
                    }
                })

        }

    }

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
                <div>
                    <h1 className="text-xl font-bold text-red-400">Price: $ {price}</h1>
                </div>
                <div className="card-actions justify-end">
                    <Link onClick={() => handleAddToCart(arts)} className="w-full" ><button className="btn text-xl text-white bg-gradient-to-r from-cyan-500 w-full to-blue-500 mt-10">Register</button></Link>
                </div>
            </div>
        </div>


    );
};

export default DetailsPage;