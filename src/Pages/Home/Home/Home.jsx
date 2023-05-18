import Banner from "../Banner/Banner";
import Client from "../Client/Client";
import Deal from "../Deal/Deal";
import Gallery from "../Gallery/Gallery";
import Toys from "../Toys/Toys";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Toys></Toys>
            <Deal></Deal>
            <Client></Client>
        </div>
    );
};

export default Home;