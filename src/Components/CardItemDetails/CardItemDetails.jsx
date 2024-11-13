
import CardItems from "../CardItems/CardItems";
import useDataDonation from "../Hooks/useDataDonation";


const CardItemDetails = () => {
    const {data} = useDataDonation()
    return (
        <div className="grid grid-cols-3 ml-10 ">
            {
                data.map(item => (<CardItems key={item.id} item={item}></CardItems>))
            }
        </div>
    );
};

export default CardItemDetails;