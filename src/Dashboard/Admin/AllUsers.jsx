

const AllUsers = ({ user }) => {
    const { name, email } = user;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className="lg:w-80">Name</th>
                            <th className="lg:w-80">Email</th>
                            <th className="lg:w-20">Role</th>
                            <th className="lg:w-20">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>User</td>
                            <td className="btn">X</td>

                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;