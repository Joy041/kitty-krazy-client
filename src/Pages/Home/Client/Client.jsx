import clientBg from '../../../assets/clientbg-1.jpg'
import client1 from '../../../assets/client-1.jpg'
import client2 from '../../../assets/client-2.jpg'
import client3 from '../../../assets/client-3.jpg'

const Client = () => {
    return (
        <div className="carousel w-full h-[500px] text-white">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={clientBg} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle me-3">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute  transform -translate-y-1/2 mx-6 md:left-32 lg:left-1/3  top-1/2">
                        <h1 className='text-5xl font-bold text-center'>What our Happy Clients Say</h1>
                        <p className='text-center mt-8'> I love this website. It has a great selection of products for children of all ages, <br /> innovative and trendy. I will be a returning customer for ever! Especially since the <br /> shipping is so fast and comfortable!  </p>
                        <img src={client1} className='w-14 rounded-full mx-auto mt-3' alt="" />
                    </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={clientBg} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle me-3">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 mx-6 md:left-32 lg:left-1/3  top-1/2">
                    <h1 className='text-5xl font-bold text-center'>What our Happy Clients Say</h1>
                    <p className='text-center mt-8'> I have been buying toys and games from this store for my kids for many many years. <br /> The guys form the shop know exactly what our children need and want. <br /> And they are always in trend. I totally recommend them! </p>
                    <img src={client2} className='w-14 rounded-full mx-auto mt-3' alt="" />
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={clientBg} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle me-3">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute  transform -translate-y-1/2 mx-6 md:left-32 lg:left-1/3  top-1/2">
                    <h1 className='text-5xl font-bold text-center'>What our Happy Clients Say</h1>
                    <p className='text-center mt-8'> Ordered some toys for my yongest kids and was very pleased with the quick shipping time, <br /> great communication from operator side, and cute packaging when the products <br /> arrived! I will definitely order from them again! </p>
                    <img src={client3} className='w-14 rounded-full mx-auto mt-3' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Client;