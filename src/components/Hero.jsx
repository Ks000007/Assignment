
import {styles} from '../styles'
import {motion} from 'framer-motion'
import { ArcadeCanvas } from './canvas'
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    <div
      className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    >
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-[#cae9ea]' />
        <div className='w-1 sm:h-80 h-40 violet-gradient' />
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-[#D4D4D4]`}>
          Welcome to <br></br><span className='text-[#cae9ea]'>xyz Games</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-[#D4D4D4]`}>
          Unleash your true power <br className='sm:block hidden' />
          Game On!
        </p>
      </div>
    </div>
   

    <ArcadeCanvas/>
   
  </section>
  )
}

export default Hero