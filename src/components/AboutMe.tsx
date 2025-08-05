'use client'
import React ,{useContext} from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LangContext } from '@/context/LangContext';


function AboutMe() {
  const { lang } = useContext(LangContext);

  const downloadCV = () => {
    const link = document.createElement('a');
    if (lang === 'french') {
      link.href = '/CV - Randriamiarisoa Henintsoa Lucas.pdf'; // Path to your CV file
      link.download = 'CV_-_Randriamiarisoa_Henintsoa_Lucas.pdf'; // Name of the downloaded file
    }
    else {
      link.href = '/Resume - Randriamiarisoa Henintsoa Lucas.pdf'; // Path to your CV file
      link.download = 'Resume_-_Randriamiarisoa_Henintsoa_Lucas.pdf'; // Name of the downloaded file
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-[#20272F] md:px-30 px-10 py-20 ' id='about'>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.5}}
          viewport={{ once: true }}
          className='md:w-1/2'>
            <Image
                src="/about.png"
                alt="Me"
                width={300}
                height={300}
            />
        </motion.div>
        <div className='md:w-1/2'>
            <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5}}
            className='md:text-2xl text-xl text-center text-[#2AD883] font-bold md:text-left mt-4 md:mt-0'>{lang === 'english' ? 'About me' : 'À propos de moi'}</motion.h2>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mt-2'>
                <h3 className='text-md text-white font-bold md:text-lg'>
                  {
                    lang === 'english' ? <>Who am I?</> : <>Qui suis-je?</>
                  }
                  </h3>
                <p className='text-[#686868] text-sm md:text-sm text-justify'>
                 {
                  lang === 'english' ? <>I am currently an IT student at the Institut Supérieur Polytechnique de Madagascar, where I study a wide range of subjects in computer science, including web development, advanced algorithms, artificial intelligence, electronics, and mathematics.
My main focus is web development, a field where I discovered my passion. I have already worked on several websites with my teammates as part of academic projects, and I’ve also built personal projects that reflect my strong interest in this area.
                 </> :
                  <>Je suis actuellement étudiant en informatique à l'Institut Supérieur Polytechnique de Madagascar, où j’étudie divers domaines de l’informatique, notamment le développement web, les algorithmes avancés, l’intelligence artificielle, l’électronique et les mathématiques.

                  Je me spécialise principalement dans le développement web, un domaine dans lequel j’ai découvert ma passion. J’ai déjà réalisé plusieurs sites web avec mes coéquipiers dans le cadre de projets académiques, et j’ai également mené des projets personnels qui témoignent de mon intérêt pour ce domaine.
                  </>
                  }
                </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className='mt-6'>
                <h3 className='text-md text-white font-bold md:text-lg'>
                  {
                    lang === 'english' ? <>What do I do?</> : <>Que fais-je?</>
                  }
                </h3>
                <p className='text-[#686868] text-sm md:text-sm text-justify'>
                  {
                    lang === 'english' ? <>I specialize in designing user interfaces (UI) and user experiences (UX), and I turn these designs into fully functional websites using JavaScript, primarily with the React and Express frameworks.</> :
                    <>Je conçois des interfaces utilisateur (UI) et des expériences utilisateur (UX), puis je les transforme en sites web fonctionnels en utilisant le langage JavaScript, principalement avec les frameworks React et Express.</>
                  }
                </p>
            </motion.div>

            <motion.button 
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            viewport={{ once: true }}
            className='text-sm bg-[#2AD883] text-black px-4 py-2 rounded-md cursor-pointer mt-4 flex items-center hover:bg-[#1f9b6c] transition-colors' onClick={() => downloadCV()}>
              <Image src='/download.svg' alt='downloadCV' width={20} height={20}/>
              {
                lang === 'english' ? <span className='ms-2 '>Download my CV</span> : <span className='ms-2 '>Télécharger mon CV</span>
              }
              
            </motion.button>
        </div>
    </div>
  )
}

export default AboutMe