import { testimonials } from "@/consonents";
import Image from "next/image";


export default function Component() {
  return (
    <section className="min-h-screen bg-[#0a0a1f]  px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#1a1a35] rounded-3xl p-8 md:p-16">
          {/* Header */}
          <div className="mb-16">
            <p className="text-cyan-500 mb-2 tracking-wider">WHAT OTHERS SAY</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white">Testimonials.</h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#151030] p-8 rounded-2xl flex flex-col justify-between min-h-[320px]"
              >
                {/* Quote mark */}
                <div className="text-4xl text-white mb-4">&quot;</div>

                {/* Testimonial text */}
                <p className="text-white text-lg leading-relaxed flex-grow">
                  {testimonial.testimonial}
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex-grow">
                    <p className="text-cyan-500">
                      <span className="opacity-80">@</span>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.designation}</p>
                  </div>
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-12 h-12 rounded-full object-cover"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}