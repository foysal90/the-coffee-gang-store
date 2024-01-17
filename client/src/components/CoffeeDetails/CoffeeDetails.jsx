import { useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const singleCoffee = useLoaderData();
  console.log(singleCoffee);
  const { _id, title, photo, category, des, quantity, Supplier, Taste } =
    singleCoffee;
  return (
    <div>
      <h1>Coffee Details of {title}</h1>
      <div className="card card-side shadow-xl  m-5">
        <figure>
          <img className="w-48 h-48 px-4 rounded-lg" src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full p-5">
          <div>
            <h2 className="card-title font-extrabold">Title: {title}</h2>
            <p>Details: {des}</p>
            <p>Supplier: {Supplier}</p>
            <p>Taste: {Taste}</p>
            <p>Category: {category}</p>
            <p> Qty: {quantity}</p>
          </div>

         </div>
         <div/>
         <div/>
    </div>
    </div>
  );
};

export default CoffeeDetails;
