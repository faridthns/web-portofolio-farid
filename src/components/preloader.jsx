import { useEffect, useState } from "react"
import 'animate.css';


const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 5000)
    }, []);

    return (
        loading && (
            <div className='animate__animated animate__fadeOut animate__delay-4s w-screen h-screen fixed flex items-center justify-center bg-[#ECDFCC] border-2 border-myprimary z-50'>
                <img src="/images/load.gif" alt="preloader" width={100}/>
                <p className="text-secondary text-xl">Tunggu sebentar yaa...</p>
            </div>
        )
    )
}

export default Preloader