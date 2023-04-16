import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { brands } from "../constants";
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Services } from "../constants";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,

}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 200,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

        
        </div>

        <div className='mt-5'>
          <h3 className='text-primary font-bold text-[24px]'>{name}</h3>
        
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const ServiceCard = ({ index, title, icon }) => {
 return (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
    >
     <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col translucent-background'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-40 h-40 object-contain'
        />

        
      </div>
    </motion.div>
  </Tilt>
 )
 }
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
       
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       Our game studio is a team of passionate developers, artists, and designers who share a common goal of creating immersive gaming experiences that challenge and entertain players. We are dedicated to producing high-quality games that push the boundaries of creativity and innovation. Our focus is on delivering engaging gameplay, stunning visuals, and unforgettable stories that keep players coming back for more. At our core, we value teamwork, communication, and a commitment to excellence. We strive to create a positive and inclusive work environment that fosters creativity and empowers our team to realize their full potential.
      </motion.p>
      <motion.div variants={textVariant()}>
        <br></br>
        <h4 className="mt-4 text-tertiary text-[39px]"> 
        Brands we have worked with</h4>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {brands.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br></br>
        <h4 className="mt-4 text-tertiary text-[39px]"> 
        Services we offer</h4>
        <div className='mt-20 flex flex-wrap gap-7'>
        {Services.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");