import { Link } from 'react-router-dom';
import errorImg from '../../assets/errorimg.png'

const Error = () => {
    return (
        <div>
            <Link to={'/'}><button className=' bg-pink-600 border-0 text-xl font-bold rancho btn my-12 ms-8'>Go to Home</button></Link>
            <img src={errorImg} className='mx-auto' alt="" />
        </div>
    );
};

export default Error;