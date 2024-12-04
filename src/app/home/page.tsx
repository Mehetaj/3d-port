import ContactMe from '@/components/shared/ContactMe';
import About from '../../components/homepage/About';
import Hero from '../../components/homepage/Hero';
import Portfolio from '../../components/homepage/Portfolio';
import Testimonials from '../../components/homepage/Testimonials';
import GetNews from '@/components/shared/GetNews';
import Experience from '@/components/homepage/Experience';



const HomeLayout = () => {
    return (
        <>
            <Hero />
            <About />
            {/* <Skills /> */}
            {/* <Services /> */}
            {/* <Experience /> */}
            <Portfolio />
            <Testimonials />

            <ContactMe />
            <GetNews />
        </>
    );
};

export default HomeLayout;