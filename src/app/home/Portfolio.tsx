import Container from "@/components/Container";
import Title from "@/components/Title";
import { FaLongArrowAltRight } from "react-icons/fa";


const Portfolio = () => {
    return (
        <Container>
            <div className="mt-60">
                <Title heading="Portfolio" description="Recent Works" />
                <div className="mt-20 grid grid-cols-4 gap-10">
                    <div className="p-7 shadow-2xl rounded-xl border w-[370px]">
                        <div className=" h-80 bg-black">
                            <img src="" alt="Work sample" />
                        </div>
                        <h2 className="my-3 text-xl font-semibold">Style Print Ecommmerce Website</h2>
                        <div
                            className="relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] w-28">
                            <span>Visit there <FaLongArrowAltRight className="inline" /></span>
                        </div>
                    </div>
                    <div className="p-7 shadow-2xl rounded-xl border w-[370px]">
                        <div className=" h-80 bg-black">
                            <img src="" alt="Work sample" />
                        </div>
                        <h2 className="my-3 text-xl font-semibold">Style Print Ecommmerce Website</h2>
                        <div
                            className="relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] w-28">
                            <span>Visit there <FaLongArrowAltRight className="inline" /></span>
                        </div>
                    </div>
                    <div className="p-7 shadow-2xl rounded-xl border w-[370px]">
                        <div className=" h-80 bg-black">
                            <img src="" alt="Work sample" />
                        </div>
                        <h2 className="my-3 text-xl font-semibold">Style Print Ecommmerce Website</h2>
                        <div
                            className="relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] w-28">
                            <span>Visit there <FaLongArrowAltRight className="inline" /></span>
                        </div>
                    </div>
                    <div className="p-7 shadow-2xl rounded-xl border w-[370px]">
                        <div className=" h-80 bg-black">
                            <img src="" alt="Work sample" />
                        </div>
                        <h2 className="my-3 text-xl font-semibold">Style Print Ecommmerce Website</h2>
                        <div
                            className="relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] w-28">
                            <span>Visit there <FaLongArrowAltRight className="inline" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Portfolio;