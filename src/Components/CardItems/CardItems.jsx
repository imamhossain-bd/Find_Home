import { Link } from "react-router-dom";



const CardItems = ({ item }) => {
    const {id, estate_title, segment_name, price, status, area, location, facilities, image } = item || {}
    return (
        <div className="">
            <div className="card relative card-compact mt-14 w-96 bg-base-100 shadow-xl">
                <div className="absolute mt-8 ml-8">
                    <h2 className="px-4 text-white py-1 rounded-lg text-center bg-[#f52c51]">{status}</h2>
                </div>
                <figure>
                    <img className="rounded-lg" src={image} />
                </figure>
                <div className="card-body mx-3">
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="text-lg font-medium">{segment_name}</p>
                    <p className="text-base text-[#666] mb-4 mt-4"> {location}</p>
                    <h2 className="grid grid-cols-2 mb-3 gap-3">
                        {facilities && facilities.map((facilities, index) => (
                            <span key={index} className="text-base text-[#666]"> {facilities}</span>
                        ))}
                    </h2>
                    <p className="text-lg font-medium">Area: <span className="font-normal text-base">{area}</span></p>
                    <p className="text-lg font-medium">Price: <span className="font-normal text-base">{price}</span></p>
                    <Link to={`card-view-details/${id}`}>
                    <button className="px-3 py-2 bg-[#FF385C] text-white rounded-lg text-sm">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardItems;