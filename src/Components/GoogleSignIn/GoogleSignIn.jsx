import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const GoogleSignIn = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { googleSignIn } = useAuth();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
            })
            .catch(error => console.log(error))

        navigate('/');
    }
    return (
        <div>
            <hr />
            <div className="bg-gradient-to-r from-cyan-500 to-blue-400">
                <button onClick={handleGoogleSignIn} className="w-full flex flex-col justify-center items-center p-5 text-3xl font-bold text-white">Login with Goolge < FcGoogle /> </button>
            </div>
        </div>
    );
};

export default GoogleSignIn;