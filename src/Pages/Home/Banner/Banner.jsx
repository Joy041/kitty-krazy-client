import banner2 from '../../../assets/banner-1.jpg'
import banner4 from '../../../assets/banner-3.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[870px]">
            <div className="carousel-item relative w-full">
                <img src={banner2} className="w-full block" />
                <div className='absolute md:top-64 top-52 md:left- lg:left-96'>
                    <div className='flex md:flex-row flex-col-reverse lg:justify-between items-center'>
                        <div>
                            <h1 className='text-5xl font-bold block ms-28 md:ms-8 lg:ms-0 md:me-8 mt-6 md:mt-0'>BEST KIDS STORE <br /> & ONLINE SHOP </h1>
                            <p className=' font-semibold block ms-28 md:ms-8 lg:ms-0 me-8'>Pick the best toy for your kid. Make play time a <br /> blast with our finest toys. Give the gift for happiness <br /><span className='text-center'> of your children !!</span></p>
                        </div>
                        <img src={banner4} className='w-1/3 rounded-xl' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;