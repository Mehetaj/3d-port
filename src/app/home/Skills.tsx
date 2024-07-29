import Container from "@/components/Container";
import Title from "@/components/Title";
import bootstrap_logo from '@/images/logo/bootstrap.jpg'
import react_logo from '@/images/logo/react.png'
import next_logo from '@/images/logo/nextjs.png'
import node_logo from '@/images/logo/node.png'
import mongodb_logo from '@/images/logo/mongodb.png'
import Image from "next/image";

const Skills = () => {
    return (
        <Container>
            <div className="my-36">
                <Title heading="Skills & Experience" description="My Technical Skills" />

                <div className="my-20 lg:flex  justify-center gap-24">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 ml-10">
                        <div className="item">
                            <Image className="w-20 h-20 bg-gray-200 p-4 rounded-full" src={bootstrap_logo} alt="Bootstrap logo" />
                            <p className="text-left lg:text-center">Bootstrap</p>
                        </div>
                        <div className="item">
                            <Image className="w-20 h-20 bg-gray-200 p-4 rounded-full" src={react_logo} alt="Bootstrap logo" />
                            <p className="text-left lg:text-center">React JS</p>
                        </div>
                        <div className="item">
                            <Image className="w-20 h-20 bg-gray-200 p-4 rounded-full" src={next_logo} alt="Bootstrap logo" />
                            <p className="text-left lg:text-center">Next JS</p>
                        </div>
                        <div className="item">
                            <Image className="w-20 h-20 bg-gray-200 p-4 rounded-full" src={node_logo} alt="Bootstrap logo" />
                            <p className="text-left lg:text-center">Node JS</p>
                        </div>
                        <div className="item">
                            <Image className="w-20 h-20 bg-gray-200 p-4 rounded-full" src={mongodb_logo} alt="Bootstrap logo" />
                            <p className="text-left lg:text-center">MongoDB</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 mt-10 lg:mt-0">
                        <div className="flex gap-12">
                            <p className="text-violet-900 font-semibold text-xl">2023</p>
                            <div className="">
                                <h2 className="text-xl font-semibold">Frontend Developer</h2>
                                <p className="my-2">ByteZenith</p>
                                <h2 className="text-xl font-semibold">Full Stack Developer</h2>
                                <p className="my-2">Aminul IT Firm</p>
                            </div>
                        </div>
                        <div className="flex gap-12">
                            <p className="text-violet-900 font-semibold text-xl">2024</p>
                            <div className="">
                                <h2 className="text-xl font-semibold">Freelance Full stack developer</h2>
                                <p className="mt-2">Fiverr</p>
                                <p className="mt-2">Upwork</p>
                                <p className="mt-2">Linkedin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Skills;