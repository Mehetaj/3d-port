export default function Component() {
    return (
      <section className="min-h-screen bg-[#0a0a1f] py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="mb-20">
            <p className="text-cyan-500 mb-2 tracking-wider">INTRODUCTION</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Overview.</h2>
            <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
              I&apos;m a skilled software developer with experience in TypeScript and JavaScript, and
              expertise in frameworks like React, Node.js, and Three.js. I&apos;m a quick learner and
              collaborate closely with clients to create efficient, scalable, and user-friendly solutions
              that solve real-world problems. Let&apos;s work together to bring your ideas to life!
            </p>
          </div>
  
          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Web Developer", icon: "⬡" },
              { title: "React Native Developer", icon: "⬢" },
              { title: "Backend Developer", icon: "◎" },
              { title: "Content Creator", icon: "⬡" }
            ].map((skill, index) => (
              <div
                key={index}
                className="relative group rounded-xl bg-[#1a1a35] p-8 min-h-[200px]
                          border border-transparent hover:border-cyan-500/50
                          transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10" />
                
                {/* Icon */}
                <div className="text-4xl mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 
                              text-transparent bg-clip-text w-fit animate-pulse">
                  {skill.icon}
                </div>
  
                {/* Title */}
                <h3 className="text-white text-xl font-semibold">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }