import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import FridgieImage from '../../assets/fridgie.jpg';


const projects = [
  {
    title: 'Fridgie',
    description: 'A collaborative meal planning application designed to organize recipes and simplify kitchen coordination.',
    image: FridgieImage,
    tags: ['React Native', 'Node.js', 'Firebase', 'Expo'],
    github: 'https://github.com/nairdrie/fridgie',
    live: 'https://github.com/nairdrie/fridgie-api',
    featured: true
  },
  {
    title: 'ProntoCMS',
    description: 'Coming Soon...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: [],
    featured: true
  },
  {
    title: 'PolyML',
    description: 'A collection of landing page redesigns focused on improving UI/UX for a financial technology product.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'Wordpress'],
    // github: 'https://github.com',
    live: 'https://polyml.com/financial-forecasting/',
    featured: false,
  },
  {
    title: 'Canadian Association of Paediatric Nurses',
    description: 'Completely redesigned website, custom admin panel with CMS, and payment/membership integration.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    tags: ['Node.js', 'Stripe', 'React', 'AWS', 'MySQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-xl hover:shadow-slate-100/50">
        {/* Image */}
        <div className={`relative overflow-hidden ${project.featured ? 'h-64 md:h-80' : 'h-48'}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
          
          {/* Links overlay */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-700 hover:text-slate-900 hover:bg-white transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-700 hover:text-slate-900 hover:bg-white transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>
          
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-slate-100 text-slate-600 hover:bg-slate-200 font-normal text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-32 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-600 font-medium tracking-wide mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            A selection of projects I've worked on, from open-source libraries to full-scale applications.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}