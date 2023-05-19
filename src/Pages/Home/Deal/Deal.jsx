import { Link } from 'react-router-dom';
import deaImg from '../../../assets/deal-img.jpg'


const Deal = () => {
    return (
        <div className='w-full carousel h-96 my-36'>
            <div className='relative'>
                <img src={deaImg} alt="" />
                <div className='absolute top-14 md:top-28 left-12 md:left-1/4 lg:top-16 lg:left-1/3 rancho'>
                    <h1 className=' text-5xl lg:text-9xl font-bold'>Deal Of The Day</h1>
                    <p className=' text-xl lg:text-3xl font-bold mt-2'><span className='text-pink-500'>UPTO 35% OFF</span> ON ALL OTHER TEDDY BEAR PRODUCTS</p>
                    <Link to={'/allToy'}><button className='btn bg-pink-600 border-0 px-14 text-xl font-bold mt-4  md:mt-10 ms-10 md:ms-16 lg:ms-56'>Shop</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default Deal;