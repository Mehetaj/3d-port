import { projects } from "@/consonents";
import Image from "next/image";

export default function Component() {
    
  
    return (
      <section className="min-h-screen bg-[#0a0a1f]  px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <p className="text-cyan-500 mb-2 tracking-wider">MY WORK</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Projects.</h2>
            <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
              Following projects showcase my skills and experience through real-world examples of my
              work. Each project is briefly described with links to code repositories and live demos in it. It
              reflects my ability to solve complex problems, work with different technologies, and
              manage projects effectively.
            </p>
          </div>
  
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-xl bg-[#1a1a35] overflow-hidden transition-all duration-300
                           hover:shadow-xl hover:shadow-cyan-500/10"
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full transition-transform duration-300
                             group-hover:scale-110"
                  />
                  {/* Overlay with GitHub icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 
                                backdrop-blur-sm flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </div>
                </div>
  
                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`${tag.color} text-sm font-medium`}
                      >
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }