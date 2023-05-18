import banner2 from '../../../assets/banner-1.jpg'
import banner4 from '../../../assets/banner-3.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[870px] ">
            <div className="carousel-item relative w-full">
                <img src={banner2} className="w-full block" />
                <div className='absolute md:top-56 lg:top-32 top-52 right-8 lg:left-0'>
                    <div className='flex md:flex-row flex-col-reverse lg:justify-evenly items-center'>
                        <div>
                            <h1 className=' text-4xl md:text-6xl lg:text-7xl font-bold block ms-28 md:ms-8 lg:ms-0 md:me-8 mt-6 md:mt-0'>BEST KIDS STORE <br /> & ONLINE SHOP </h1>
                            <p className=' font-semibold md:text-xl mt-3 block ms-28 md:ms-8 lg:ms-0 me-8'>Pick the best toy for your kid. Make play time a <br /> blast with our finest toys. Give the gift for happiness <br /><span className='text-center'> of your children !!</span></p>
                            <button className='btn bg-pink-600 border-0 px-14 text-md md:text-xl font-bold mt-4  md:mt-10 ms-28 md:ms-8  lg:ms-0 rancho'>Go to Shop</button>
                        </div>
                        <img src={banner4} className='w-1/3 rounded-xl' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;