import CarCard from "@/components/CarCard"


async function fetchCars() {
  const answer = await fetch('http://localhost:4004/cars')
  const data = await answer.json()
  return data;
}

export default async function HomePage() {

  const cars = await fetchCars()

  return (
    <div className="page">

      <CarCard cars={cars}/>

    </div>
  )
}
