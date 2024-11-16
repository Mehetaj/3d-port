import { experiences } from "@/consonents";
import Image from "next/image";

  
  export default function Experience() {
    return (
      <section className="min-h-screen bg-[#0a0a1f] py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-cyan-500 mb-2 tracking-wider">WHAT I HAVE DONE SO FAR</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white">Work Experience.</h2>
          </div>
  
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-gradient-to-b from-cyan-500/50 to-purple-500/50" />
  
            {/* Experience Cards */}
            <div className="space-y-24">
              {experiences.map((experience, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot with company icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full border-4 border-[#1a1a35] bg-[#0a0a1f] flex items-center justify-center overflow-hidden">
                      <Image
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap text-sm text-gray-400">
                      {experience.date}
                    </div>
                  </div>
  
                  {/* Content card - alternating sides */}
                  <div className={`relative ${
                    index % 2 === 0 ? 'pr-1/2 text-right' : 'pl-1/2 text-left'
                  } pb-24`}>
                    <div className={`${
                      index % 2 === 0 ? 'mr-24' : 'ml-24'
                    } bg-[#1a1a35] p-8 rounded-2xl`}>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-cyan-500 mb-4">{experience.company_name}</p>
                      <ul className={`space-y-2 text-gray-400 ${
                        index % 2 === 0 ? 'text-right' : 'text-left'
                      }`}>
                        {experience.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="text-sm md:text-base">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }