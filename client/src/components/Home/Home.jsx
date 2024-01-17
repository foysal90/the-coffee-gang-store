import  { useEffect, useState } from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Home = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addCoffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, []);
 
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
