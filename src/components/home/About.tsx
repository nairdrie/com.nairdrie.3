import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { name: 'Angular', level: 95 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'MySQL', level: 92 },
  { name: 'AWS', level: 82 },
  { name: 'Python', level: 80 },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-700 font-medium">{name}</span>
        <span className="text-slate-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-indigo-600 font-medium tracking-wide mb-3">About</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Passionate about building
              <span className="text-slate-400 block">great software</span>
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I'm a Senior Software Engineer with 6+ years of experience architecting scalable platforms and high-concurrency systems. 
                Currently based in Toronto, I specialize in full-stack development, combining robust Node.js backends with intuitive Angular/React interfaces to serve millions of users.
              </p>
              <p>
                When I'm not coding, I'm an active builder—shipping independent mobile apps, 
                developing Web3 browser extensions, or helping organizations modernize their 
                payment infrastructure.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-4xl font-bold text-slate-900">6+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <div className="text-4xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-500">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <div className="text-4xl font-bold text-slate-900">1M+</div>
                <div className="text-sm text-slate-500">Users Served</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}