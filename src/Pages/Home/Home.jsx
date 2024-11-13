import CardItemDetails from "../../Components/CardItemDetails/CardItemDetails";
import Header from "../Header/Header";


const Home = () => {

    return (
        <div className="px-16">
            <Header></Header>
            <div>
                <div className="text-center mt-2">
                    <h2 className="text-4xl mb-3 pt-9 font-bold">Featured Properties</h2>
                    <h4 className="text-base font-semibold">We provide full service at every step.</h4>
                </div>
                <div>
                    <CardItemDetails></CardItemDetails>
                </div>
            </div>
        </div>
    );
};

export default Home;