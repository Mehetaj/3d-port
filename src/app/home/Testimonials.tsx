'use client'
import Container from "@/components/Container";
import Title from "@/components/Title";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type ResponsiveType = {
    [key: string]: {
        breakpoint: { max: number; min: number };
        items: number;
    };
};

const Testimonials: React.FC = () => {
    const responsive: ResponsiveType = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Container>
            <div className="mt-60">
                <Title heading="Testimonials" description="What my clients say" />
                <div className="my-14">
                    <Carousel responsive={responsive} arrows={false} showDots={true} >
                        <div className="mx-4 mb-10">
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                                <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="John Smith" />
                                </div>
                                <div className="p-6">
                                    <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
                                    <hr />
                                    <p className="mt-4">
                                        <span className="inline-block pe-2 [&>svg]:w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 448 512">
                                                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                            </svg>
                                        </span>
                                        Delectus impedit saepe officiis ab aliquam repellat rem unde
                                        ducimus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mx-4 mb-10">
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                                <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt="Lisa Cudrow" />
                                </div>
                                <div className="p-6">
                                    <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                                    <hr />
                                    <p className="mt-4">
                                        <span className="inline-block pe-2 [&>svg]:w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 448 512">
                                                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                            </svg>
                                        </span>
                                        Neque cupiditate assumenda in maiores repudi mollitia
                                        architecto.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mx-4 mb-10">
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                                <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="Maria Smantha" />
                                </div>
                                <div className="p-6">
                                    <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                                    <hr />
                                    <p className="mt-4">
                                        <span className="inline-block pe-2 [&>svg]:w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 448 512">
                                                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                            </svg>
                                        </span>
                                        Lorem ipsum dolor sit amet eos adipisci, consectetur
                                        adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mx-4 mb-10">
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                                <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="John Smith" />
                                </div>
                                <div className="p-6">
                                    <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
                                    <hr />
                                    <p className="mt-4">
                                        <span className="inline-block pe-2 [&>svg]:w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 448 512">
                                                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                            </svg>
                                        </span>
                                        Delectus impedit saepe officiis ab aliquam repellat rem unde
                                        ducimus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mx-4 mb-10">
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                                <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
                                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt="Lisa Cudrow" />
                                </div>
                                <div className="p-6">
                                    <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
                                    <hr />
                                    <p className="mt-4">
                                        <span className="inline-block pe-2 [&>svg]:w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 448 512">
                                                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                            </svg>
                                        </span>
                                        Neque cupiditate assumenda in maiores repudi mollitia
                                        architecto.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mx-4 mb-10">
                            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                                <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
                                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                                    <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="Maria Smantha" />
                                </div>
                                <div className="p-6">
                                    <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
                                    <hr />
                                    <p className="mt-4">
                                        <span className="inline-block pe-2 [&>svg]:w-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 448 512">
                                                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                                            </svg>
                                        </span>
                                        Lorem ipsum dolor sit amet eos adipisci, consectetur
                                        adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </Container>
    );
};

export default Testimonials;
