import Banner from "../Banner/Banner";
import Client from "../Client/Client";
import Deal from "../Deal/Deal";
import Gallery from "../Gallery/Gallery";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Deal></Deal>
            <Client></Client>
        </div>
    );
};

export default Home;