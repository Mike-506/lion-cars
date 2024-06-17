import Carousel from "@/components/Carousel";
import './style.css';
import carsData from '@/carsData/cars.json';

async function getCar(id) {
  const answer = await fetch(`http://localhost:4004/cars/${id}`);
  const data = await answer.json();
  return data;
}

function getCar1(id) {
  // Asumiendo que cada 'car' en tu arreglo tiene una propiedad 'id'
  return carsData.cars.find(car => car.id === id);
}


 function CarPage({ params }) {
  //const car = await getCar(params.id)

  const car = getCar1(params.id)

  const slides = car.slides;

  return(
      
      <div className="page">
      <h1 className='car-title text-center text-2xl font-bold'>{car.brand + " " + car.model}</h1>

      <div>
        <Carousel slides={slides}/>
      </div>

      <p className="car-desc px-[10%] text-center my-[3rem]">
        
        {car.description}
        
      </p>
      </div>
      
  )
}

export default CarPage;