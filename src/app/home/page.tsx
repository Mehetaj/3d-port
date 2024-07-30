import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Services from './Services';
import Skills from './Skills';
import Testimonials from './Testimonials';



const HomeLayout = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
        </>
    );
};

export default HomeLayout;