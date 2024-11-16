import Container from "@/components/shared/Container";
import Title from "@/components/shared/Title";
import { MdDeveloperBoard } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";




const Services = () => {
    return (
        <Container>
            <div>
                <Title heading="Services" description="What I offer" />
                <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    <div className="shadow-lg p-12 rounded-xl">
                        <MdDeveloperBoard className="w-14 h-14" />
                        <h2 className="my-4 text-xl font-bold">Frontend Development with React JS or Next JS</h2>
                        <div
                            className="relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] w-28">
                            <span>View More <FaLongArrowAltRight className="inline" /></span>
                        </div>
                    </div>
                    <div className="shadow-lg p-12 rounded-xl">
                        <MdDeveloperBoard className="w-14 h-14" />
                        <h2 className="my-4 text-xl font-bold">Backend Development with Node.js, MongoDB, and PostgreSQL</h2>
                        <div
                            className="relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] w-28">
                            <span>View More <FaLongArrowAltRight className="inline" /></span>
                        </div>
                    </div>
                    <div className="shadow-lg p-12 rounded-xl">
                        <MdDeveloperBoard className="w-14 h-14" />
                        <h2 className="my-4 text-xl font-bold">Full Stack Development (MERN)</h2>
                        <div
                            className="relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] w-28">
                            <span>View More <FaLongArrowAltRight className="inline" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Services;