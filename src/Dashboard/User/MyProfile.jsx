import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DashboardHeader from "../../Shared/DashboardHeader";

const MyProfile = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const handleContactForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;

        const formData = {
            name: name,
            email: email,
            subject: subject,
            message: message
        }

        axiosPublic.post('/contact', formData)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your message has been sent to the customer service!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div className="max-w-[425px] lg:max-w-full md:max-w-full">
            <DashboardHeader heading={'My Profile'}></DashboardHeader>
            <div className="p-5 flex flex-col  m-2 text-xl">
                <h1><span className="font-bold text-black">User Name:</span> {user?.displayName}</h1>
                <h1><span className="font-bold text-black">User Email: </span>{user?.email}</h1>
            </div>
            <div>
                <h3 className="m-5">Dear Valued Customer,

                    If you encounter any issues or have any questions, please don't hesitate to reach out to us. Our dedicated team is here to assist you promptly and ensure your experience with us is seamless.</h3>
                <form onSubmit={handleContactForm} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" name="subject" placeholder="Subject" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <input type="text" placeholder="Your Message" className="input input-bordered h-20" name="message" required />

                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-outline text-xl">Send</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default MyProfile;