import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import contact from '../../assets/Hero/contact.jpg'
import img from '../../assets/Hero/untitled folder/b4.jpg'
import { Helmet } from 'react-helmet';


const Contact = () => {
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
        <div >
            <Helmet><title>ApexArtistry | Contact</title></Helmet>

            <img className='w-full h-[500px] object-cover ' src={contact} alt="" />


            <div className='lg:flex justify-center items-center w-full flex-row-reverse bg-gray-100 lg:p-10'>

                <div className='p-10 flex-1'>
                    <div>
                        <h3 className="m-5">Dear Valued Customer,

                            If you encounter any issues or have any questions, please don't hesitate to reach out to us. Our dedicated team is here to assist you promptly and ensure your experience with us is seamless.</h3>
                        <form onSubmit={handleContactForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" className="input input-bordered" required />
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
                                <button type="submit" className="btn btn-info btn-outline text-xl">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='flex-1'>
                    <img className="w-full hidden lg:block shadow-2xl p-10 bg-gradient-to-r from-cyan-400 to-blue-600 " src={img} />
                </div>

            </div>

        </div>

    );
};

export default Contact;