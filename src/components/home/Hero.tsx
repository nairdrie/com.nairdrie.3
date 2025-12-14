import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export default function Hero() {
  const [text, setText] = useState("");
  
  const fullText = "Hello, I'm";
  const normalSpeed = 30; // Very fast for normal letters
  const commaPause = 400; // The pause after the comma

  // Calculate the total duration manually to sync the next animations
  // We have 10 characters total. 
  // 9 characters run at normalSpeed, 1 character (the comma) triggers the commaPause.
  const totalTypingTime = ((fullText.length - 1) * normalSpeed + commaPause);
  const subsequentDelay = totalTypingTime / 1000;

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId = 0;

    const typeCharacter = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        
        // Check the character we just typed to determine the delay for the NEXT one
        const charJustTyped = fullText[currentIndex - 1];
        const nextDelay = charJustTyped === ',' ? commaPause : normalSpeed;
        
        currentIndex++;
        timeoutId = setTimeout(typeCharacter, nextDelay);
      }
    };

    // Start immediately
    typeCharacter();

    return () => clearTimeout(timeoutId);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 bg-gradient-to-b from-slate-50 to-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 1 }}
          className="min-h-[2rem]"
        >
          <p className="text-indigo-600 font-medium tracking-wide mb-4 text-lg">
            {text}
            <motion.span
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                times: [0, 0.5, 0.5, 1], // Square wave blink (hard on/off)
                ease: "linear",
              }}
              className="inline-block ml-1 font-bold"
            >
              _
            </motion.span>
          </p>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: subsequentDelay }}
          className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6"
        >
          Nick Airdrie
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: subsequentDelay + 0.1 }}
          className="text-xl md:text-2xl text-slate-600 font-light mb-8 leading-relaxed"
        >
          Software Engineer crafting elegant solutions
          <br className="hidden md:block" />
          <span className="text-slate-400">to complex problems</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: subsequentDelay + 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a 
            href="https://github.com/nairdrie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/nairdrie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:hello@nairdrie.com"
            className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: subsequentDelay + 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-base rounded-full transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-xl hover:shadow-slate-900/20"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="ghost" 
            className="text-slate-600 hover:text-slate-900 px-8 py-6 text-base rounded-full"
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: subsequentDelay + 1, duration: 0.6 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-slate-400 hover:text-slate-600 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}