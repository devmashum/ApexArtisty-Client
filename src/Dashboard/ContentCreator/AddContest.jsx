import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import DashboardHeader from "../../Shared/DashboardHeader";


const AddContest = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    const handleContestAdd = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const img = form.img.value;
        const participants_count = form.participants_count.value;
        const description = form.description.value;
        const deadline = form.deadline.value;
        const price = form.price.value;
        const contest_winner_name
            = form.contest_winner_name
                .value;
        const artist_name = form.artist_name.value;
        console.log(name, email);
        const formData = {
            name: name,
            email: email,
            img: img,
            participants_count: participants_count,
            description: description,
            deadline: deadline,
            price: price,
            contest_winner_name
                : contest_winner_name,
            artist_name: artist_name


        }


        axiosPublic.post('/arts', formData)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Contest Added to the DataBase!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <DashboardHeader heading={'Add Your Contest'}></DashboardHeader>

            <div>

                <form onSubmit={handleContestAdd} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Artist Name</span>
                        </label>
                        <input type="text" name="artist_name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Art Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Art Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" name="img" placeholder="Image URL" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Participants (optional)
                            </span>
                        </label>
                        <input type="number" name="participants_count" defaultValue={'0'} className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Short Description (optional)
                            </span>
                        </label>
                        <input type="text" name="description" placeholder="Short Description" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Contest Winner Name (optional)

                            </span>
                        </label>
                        <input type="text" name="contest_winner_name" placeholder="Contest Winner Name" className="input input-bordered" />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" defaultValue={'0'} className="input input-bordered" required />

                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-info btn-outline text-xl">Send</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddContest;