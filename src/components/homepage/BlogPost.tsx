import Image from 'next/image'
import Link from 'next/link'
import blog_feed_image from '@/images/blogs/blog-feed-img-1.webp'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


interface BlogPost {
    id: number
    image: any
    category: string
    date: string
    title: string
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: blog_feed_image,
        category: 'Business',
        date: '07 February, 2021',
        title: "Don't wait until you officially started business to line these up."
    },
    {
        id: 2,
        image: blog_feed_image,
        category: 'Business',
        date: '07 February, 2021',
        title: "Don't wait until you officially started business to line these up."
    },
    {
        id: 3,
        image: blog_feed_image,
        category: 'Business',
        date: '07 February, 2021',
        title: "Don't wait until you officially started business to line these up."
    }
]

export default function BlogPost() {
    return (
        <section className=" text-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-sm uppercase tracking-wider mb-2">Blog Post</p>
                    <h2 className="text-5xl font-bold">Latest Tips & Tricks</h2>
                </div>
                <div className="space-y-8 mt-20">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="flex items-center space-x-6 bg-[#282A37] py-14 px-16 rounded-xl">
                            <div className="flex-shrink-0">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={170}
                                    height={170}
                                    className="rounded-lg mr-10"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center text-lg text-gray-400 mb-2">
                                    <span>{post.category}</span>
                                    <span className="mx-2">-</span>
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-3xl font-semibold mb-2">{post.title}</h3>
                            </div>
                            <Link href={`/blog/${post.id}`} passHref>
                                <button className="bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300 flex items-center space-x-2">
                                    <span>Read More</span>
                                    <MdKeyboardDoubleArrowRight className="w-5 h-5" />
                                </button>
                            </Link >
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}