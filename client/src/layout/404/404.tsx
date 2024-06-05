import img404 from '@/assets/ResponseCode/404 NotFound.png';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';

const NotFoundComp = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Page Not Found</h1>
                <p className="text-lg text-gray-600 mb-4">Sorry, the page you are looking for does not exist.</p>
                <Link to={'/'}>
                    <img src={img404} alt="404 Not Found" className="max- w-auto h-[400px] mb-4" />
                </Link>
            </div>
        </>
    );
}

export default NotFoundComp;
