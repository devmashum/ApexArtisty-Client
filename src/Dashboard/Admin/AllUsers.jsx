

const AllUsers = ({ user }) => {
    const { name, email } = user;
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>


        </div>
    );
};

export default AllUsers;