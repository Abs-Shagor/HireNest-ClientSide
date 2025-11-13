import { useEffect } from 'react';

const PrivateJob = () => {
    // To show the upperside of the page we use the below method
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    return (
        <div>
            Private...
        </div>
    );
};

export default PrivateJob;