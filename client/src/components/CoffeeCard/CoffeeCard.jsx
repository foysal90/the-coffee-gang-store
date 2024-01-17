import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit, FaEye } from "react-icons/fa";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  

  const { _id, title, photo, category, des, quantity, Supplier, Taste } =
    coffee;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addCoffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side shadow-xl  m-5">
        <figure>
          <img className="w-48 h-48 px-4 rounded-lg" src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full p-5">
          <div>
            <h2 className="card-title">Title: {title}</h2>
            <p>Details: {des}</p>
            <p>Supplier: {Supplier}</p>
            <p>Taste: {Taste}</p>
            <p>Category: {category}</p>
            <p> Qty: {quantity}</p>
          </div>

          <div>
            <div className="card-actions justify-end">
              <Link to={`/coffeeDetails/${_id}`}>
              <button className="btn btn-danger bg-green-600 mb-3">
                <FaEye className="w-4 h-8 " />
              </button></Link>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/updateCoffee/${_id}`}>
                <button
                  
                  className="btn btn-danger bg-yellow-600 mb-3"
                >
                  <FaEdit className="w-4 h-8 " />
                </button>
              </Link>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-danger bg-red-600 mb-3"
              >
                <FaDeleteLeft className="w-4 h-8 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
