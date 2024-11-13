import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import useDataDonation from "../../Components/Hooks/useDataDonation";


const CardViewDetails = () => {
    const [singleData, setSingleData] = useState({});
    const { id } = useParams();
    const { data } = useDataDonation();
    useEffect(() => {
        if (data) {
            const singleData = data.find((item) => item.id == id);

            setSingleData(singleData)
        }
    }, [data, id]);
    const { estate_title, segment_name, price,status, area, location, facilities, image, description } = singleData || {}
    return (
        <div className="px-16 mt-14">
            
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div  className="w-[650px]">
                    <figure><img className="rounded-lg h-[500px]" src={image} /></figure>
                </div>
                <div className="card-body w-[1000px]">
                    <h2 className="card-title">{estate_title}</h2>
                    <p className="text-base font-semibold mt-2">Description: <span className="text-base font-normal">{description}</span></p>
                    <p className="mt-3 font-medium text-base">{segment_name}</p>
                    <div className=" ">
                        <p className="text-base  font-medium mb-2">Area: <span className="text-sm font-normal">{area}</span></p>
                        <h2 className="text-lg font-semibold">Facilities:</h2>
                        <h3 className="grid grid-flow-row">{facilities && facilities.map((facilities, index) => (
                            <span key={index} className="text-base text-[#666]">★ {facilities}</span>
                        ))}</h3>
                    </div>
                        <p className="text-base font-medium">Price: <span  className="text-sm font-normal">{price}</span></p>
                        <p>{location}</p>
                    <div className="card-actions">
                        <button className="px-4 py-2 bg-[#f52c51] text-white rounded-lg">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardViewDetails;