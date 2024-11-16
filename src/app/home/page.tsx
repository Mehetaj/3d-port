import ContactMe from '@/components/shared/ContactMe';
import About from '../../components/homepage/About';
import Hero from '../../components/homepage/Hero';
import Portfolio from '../../components/homepage/Portfolio';
import Services from '../../components/homepage/Services';
import Skills from '../../components/homepage/Skills';
import Testimonials from '../../components/homepage/Testimonials';
import GetNews from '@/components/shared/GetNews';
import BlogPost from '@/components/homepage/BlogPost';
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
            <BlogPost />
            <GetNews />
        </>
    );
};

export default HomeLayout;