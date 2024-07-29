import Container from "@/components/Container";
import Title from "@/components/Title";
import { PiMedalThin } from "react-icons/pi";
import { IoBagAddOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";



const About = () => {
    return (
        <Container>
            <div>
                <Title heading="About Me" description="My Introduction" key="1" />
                <div className="lg:flex gap-32 justify-center items-center mb-4 mt-20">
                    <div className="flex justify-center">
                        <div className="w-60 h-60 md:w-96 lg:h-96 bg-black"></div>
                    </div>
                    <div>
                        <div className="md:flex gap-10 justify-center mt-2">
                            <div className="flex flex-col justify-center text-center shadow-lg p-4 md:px-7 md:py-4 border rounded-xl">
                                <div className="flex justify-center items-center">
                                    <PiMedalThin className="text-3xl text-center" />
                                </div>
                                <h2 className="text-xl font-semibold">Experience</h2>
                                <p className="text-gray-600 mt-2">8+ Years</p>
                            </div>
                            <div className="flex flex-col justify-center text-center shadow-lg p-4 md:px-7 md:py-4 border rounded-xl">
                                <div className="flex justify-center items-center">
                                    <IoBagAddOutline className="text-3xl text-center" />
                                </div>
                                <h2 className="text-xl font-semibold">Completed</h2>
                                <p className="text-gray-600 mt-2">40+ Projects</p>
                            </div>
                            <div className="flex flex-col justify-center text-center shadow-lg p-4 md:px-7 md:py-4 border rounded-xl">
                                <div className="flex justify-center items-center">
                                    <BiSupport className="text-3xl text-center" />
                                </div>
                                <h2 className="text-xl font-semibold">Support</h2>
                                <p className="text-gray-600 mt-2">Online 24/7</p>
                            </div>
                        </div>
                        <p className="text-center lg:text-left mt-5 text-gray-600 text-xl md:w-[70%] mx-auto">
                            Full Stack Developer, I create web pages with UI  / UX user interfaces, I have years of experience and  many clients are happy with the projects carried out.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;