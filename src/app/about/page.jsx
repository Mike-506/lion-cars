import './style.css';
import Image from 'next/image';

export default function About() {
  return (
      <div className='about-page mx-[8%] text-justify page'>

      <h3 className='text-2xl font-bold text-center my-10'>About us</h3>
      <p className='welcome'>Welcome to Lion Cars! We’re passionate about connecting car enthusiasts with their dream vehicles. Whether you’re looking for a sports car, a luxury car, or both, we’ve got you covered.</p>

      <Image className="img-about" src="https://hips.hearstapps.com/hmg-prod/images/two-people-reaching-an-agreement-about-a-car-sale-royalty-free-image-1665671206.jpg" alt="sales" width={800} height={550}
      />

      <div>
        <div className='about-title'>Our Mission</div>
          <p>
            At Lion Cars, our mission is to make the car-buying process seamless, enjoyable, and transparent. We believe that finding the perfect car should be an exciting adventure, not a hassle. Our team of experts is dedicated to providing you with accurate information, helpful resources, and outstanding customer service.
          </p>  
      </div>

      <div className='text-justify mt-5'>
        <div className='about-title'>Why Choose Us?</div>
          <ul>
            <li>- Wide Selection: Explore our extensive inventory of new and used cars from top brands.</li>
            <li>- Quality Assurance: Every vehicle undergoes rigorous inspections to ensure reliability.</li>
            <li>- Competitive Pricing: We offer competitive prices and financing options to fit your budget.</li>
            <li>- Exceptional Service: Our friendly staff is here to assist you at every step of the way.</li>  
          </ul>
      </div>
      
      </div> 
  )
}
