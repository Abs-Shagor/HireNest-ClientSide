import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {

    return (
        <div >
            <Navbar></Navbar>
            <div  className='max-w-[1282px] mx-auto px-2 '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;