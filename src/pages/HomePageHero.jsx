
import HeroImg from '../assets/Hero.png'
import Img1 from '../assets/S1.png'
import Img2 from '../assets/S2.png'
import Img3 from '../assets/S3.png'
import Img4 from '../assets/S4.png'

export default function HomePageHero() {
    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='w-[1200px]'>
                <img src={HeroImg} alt='HeroImg' className='rounded-3xl' />
            </div>
            <div className='flex w-full h-12 mt-6 justify-evenly items-center text-lg p-10'>
                <div className='h-20 w-20'>
                    <img src={Img1} alt='Sponser' />
                </div>
                <div className='h-20 w-20'>
                    <img src={Img2} alt='Sponser' />
                </div>
                <div className='h-20 w-20'>
                    <img src={Img3} alt='Sponser' />
                </div>
                <div className='h-20 w-20'>
                    <img src={Img4} alt='Sponser' />
                </div>

            </div>
        </div>
    )
}
