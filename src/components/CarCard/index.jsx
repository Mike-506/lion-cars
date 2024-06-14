'use client'

import Link from 'next/link';
import Image from 'next/image';
import './style.css';

const CarCard = ({ cars }) => {

  return (
    <ul className='grid-container'>
    {
      cars.map(car => (
        <li key={ car.id }
        className='grid-item rounded-md shadow-box'>
          
        <div className='car-brand-container'>  
          <h5 className="text-xl font-bold">
        
          {car.brand + ' ' + car.model}
        
        </h5>
        </div>
      
      <Image
        src={car.img}
        width={500}
        height={320}
        alt={car.model}
        className='carImg rounded-md'
      />
      
        <div className='card-p'>
        <p><strong>Engine: </strong>{car.engine}</p>
        <p><strong>Made: </strong>{car.made}</p>
        <p><strong>Torque: </strong>{car.torque}</p>
        <p><strong>Passengers: </strong>{car.passengers}</p>
        <p><strong>HP: </strong>{car.hp}</p>
        <p><strong>Price: </strong>{car.price}</p>
        </div>

      <div className='cars-button cursor-default w-full'>  
      <Link 
      href={`cars/${ car.id }`}
      key={car.id} >
        <button className='rounded-lg'>
          See more details...
        </button>
      </Link>
      </div>  

    </li>
      ))
    }
    </ul>
  )
}

export default CarCard;