import CarCard from "@/components/CarCard";
import cars1 from '../carsData/cars.json';


async function fetchCars() {
  const answer = await fetch('http://localhost:4004/cars')
  const data = await answer.json()
  return data;
}

export default  function HomePage() {

 // const cars = await fetchCars()

  const cars = cars1.cars;

  return (
    <div className="page">

      <CarCard cars={cars}/>

    </div>
  )
}
