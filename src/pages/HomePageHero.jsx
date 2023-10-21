
import HeroImg from '../assets/Hero.png'

export default function HomePageHero() {
    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='w-[1200px]'>
                <img src={HeroImg} alt='HeroImg' />
            </div>
            <div className='bg-orange-200 flex w-full h-12 mt-6 justify-evenly items-center text-lg'>
                <div>Sponsor</div>
                <div>Sponsor</div>
                <div>Sponsor</div>
                <div>Sponsor</div>
                <div>Sponsor</div>
            </div>
        </div>
    )
}
