
const Card = ({ art }) => {
    const { name, img, short_description } = art;
    return (
        <div>

            <div className="card bg-base-100 shadow-xl px-5 py-5">
                <figure>
                    <img className=" w-80 h-80" src={img} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title h-20">{name}</h2>
                    <p className="w-full h-20">{short_description}</p>

                    <div className="card-actions justify-end">

                        <button className="btn btn-primary mt-10">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;