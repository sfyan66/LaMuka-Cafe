import aboutImg from '../assets/about-pic-primary.jpg'
import { Element } from 'react-scroll'

function About() {
  return (
    <Element name="About" className='my-[120px]'>
      <h1 className='text-[15vw] md:text-[min(6vw,90px)] text-white text-center pb-[70px]'>Our Story</h1>
      <div className='md:max-w-7xl max-w-5xl mx-auto md:flex gap-[60px] w-[85vw]'>
        <img src={aboutImg} alt="" className='md:h-[60vh] w-auto'/>
        <div className='py-[50px] md:py-0 flex w-[100%] text-[3vw] gap-5 md:text-[min(2vw,22px)] md:flex-1 text-[var(--text-third-c)] flex-col justify-between'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi earum, ut consequuntur pariatur fugiat aliquam voluptatem officia blanditiis ipsa laboriosam ad velit voluptate nisi saepe quisquam minima culpa eaque amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis! Delectus, perspiciatis ea beatae necessitatibus excepturi temporibus repudiandae. Tempora, vero!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis, quo placeat molestias laborum repudiandae id quod, consequatur similique nisi culpa dolore suscipit sint voluptates?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi iste aut odio fugit mollitia sit excepturi vero ullam, maxime, facilis repellendus fuga accusantium autem enim libero sint maiores. Rem.
          </p>
        </div>
      </div>
    </Element>
  )
}

export default About
