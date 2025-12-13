import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
const experiences = [
  {
    title: 'Senior Software Developer (Full Stack)',
    company: 'Vretta Inc.',
    period: '2020 - Present',
    description: 'Architected client-side performance strategies for an e-assessment platform serving millions. Led the migration to a modern component-based UI architecture and implemented granular user analytics.',
    technologies: ['Angular', 'Node.js', 'MySQL', 'Redis', 'AWS', 'Python'],
  },
  {
    title: 'Web Application Developer (Full Stack)',
    company: 'Kenna Technology Solutions Inc.',
    period: '2019 - 2020',
    description: 'Developed a responsive global sales portal and revamped customer engagement flows. Streamlined the interface to reduce support ticket volume by 20%.',
    technologies: ['React', 'JavaScript', 'Java'],
  },
  {
    title: 'Mobile Game Developer',
    company: 'Adknown Inc.',
    period: '2018',
    description: 'Independently designed and deployed 12 cross-platform games for iOS and Android. Achieved 50,000+ organic downloads and optimized retention loops.',
    technologies: ['C#', 'Unity', 'Xcode', 'Android Studio'],
  },
  {
    title: 'Web Application Developer (Front End)',
    company: 'Sandbox Software Solutions Inc.',
    period: '2017',
    description: 'Developed accessible front-end interfaces for public sector clients. Ensured seamless functionality and strict compliance with WCAG 2.0 standards.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'WCAG 2.0'],
  }
];

function TimelineItem({ experience, index, isLast }: { experience: any; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[19px] top-10 bottom-0 w-px bg-slate-200" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-2 top-1 w-6 h-6 rounded-full bg-indigo-100 border-4 border-white shadow-sm flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-indigo-500" />
      </div>
      
      <div className="pb-12">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{experience.title}</h3>
              <div className="flex items-center gap-2 text-slate-600 mt-1">
                <Building2 className="w-4 h-4" />
                <span>{experience.company}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
              <Calendar className="w-3.5 h-3.5" />
              <span>{experience.period}</span>
            </div>
          </div>
          
          <p className="text-slate-600 leading-relaxed mb-4">
            {experience.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech: string) => (
              <span
                key={tech}
                className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="experience" className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-600 font-medium tracking-wide mb-3">Career</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            My professional journey building products at companies of all sizes.
          </p>
        </motion.div>
        
        <div>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.company}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}