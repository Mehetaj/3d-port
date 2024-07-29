
import Container from '@/components/Container';
import { FaRegPaperPlane } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdOutlineGroupWork } from "react-icons/md";
import hero_picture from '@/images/profile/hero.jpg'
import Image from 'next/image';

const Hero = () => {
    return (
        <Container>
            <div className='md:flex justify-between items-center md:h-[60vh]'>
                <div className='flex gap-10 xl:gap-40 items-center'>
                    <div className='text-5xl flex flex-col gap-10 '>
                        <CiFacebook className='cursor-pointer' />
                        <TiSocialLinkedinCircular className='cursor-pointer' />
                        <MdOutlineGroupWork className='cursor-pointer' />
                    </div>
                    <div>
                        <h2 className='text-4xl xl:text-6xl font-semibold text-gray-700'>Mehetaj Khandaker👋</h2>
                        <div className='flex gap-4 items-center my-3 text-2xl'>
                            <hr className='w-20 text-black bg-black h-[2px]' />
                            <p>Full Stack Developer</p>
                        </div>
                        <p className='text-gray-500'>I'm creative web developer based in Bangladesh, <br />  and I'm very passionate and dedicated to my work..</p>

                        <button className='bg-gray-800 text-white px-7 rounded-xl py-4 flex items-center gap-2 mt-5 hover:bg-gray-600 transition-all'>
                            Say Hello
                            <FaRegPaperPlane />
                        </button>
                    </div>
                </div>
                <div className='w-full md:w-96 h-[450px] bg-black xl:mr-[180px] mt-10 md:mt-0'>
                    <Image className='w-full h-full' src={hero_picture} alt='Hero Picture'/>
                </div>
            </div>
        </Container>
    );
};

export default Hero;