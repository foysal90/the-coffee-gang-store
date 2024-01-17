import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updatedItem = useLoaderData();
  console.log(updatedItem);
  const { _id, title, photo, category, des, quantity, Supplier, Taste } =
    updatedItem;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const des = form.Details.value;
    const quantity = form.Quantity.value;
    const photo = form.photo.value;
    const Supplier = form.Supplier.value;
    const Taste = form.Taste.value;
    const category = form.category.value;
    const updatedCoffee = {
      title,
      des,
      Taste,
      quantity,
      Supplier,
      photo,
      category,
    };

    console.log(updatedCoffee);

    fetch(`http://localhost:5000/addCoffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        if (data.modifiedCount > 0) {
            Swal.fire({
                title: "Updated!",
                text: "Coffee information has been updated",
                icon: "success",
              });

        }
      });
  };

  return (
    <div>
      <div
        className="bg-[#F4F3F0] w-50 p-3 mx-auto my-8 rounded-2xl shadow-2xl shadow-blue-500/50"
        id="form"
      >
        <h1 className="text-center text-2xl font-bold mb-5 pt-5">
          Update Coffee {title}
        </h1>

        <form onSubmit={handleUpdate}>
          <div className="md:flex ">
            <div className="form-control md:w-1/2 m-2">
              <label className="label-text">Coffee Name </label>
              <label className="input-group w-full ">
                <input
                  className="input input-bordered bg-white w-full"
                  type="text"
                  name="title"
                  defaultValue={title}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 m-2">
              <label className="label-text">Quantity </label>
              <label className="input-group">
                <input
                  className="input input-bordered bg-white w-full"
                  type="text"
                  name="Quantity"
                  defaultValue={quantity}
                />
              </label>
            </div>
          </div>
          <div className="md:flex">
            <div className="form-control md:w-1/2 m-2">
              <label className="label-text">Supplier</label>
              <label className="input-group">
                <input
                  className="input input-bordered bg-white w-full"
                  type="text"
                  name="Supplier"
                  defaultValue={Supplier}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 m-2">
              <label className="label-text">Taste </label>
              <label className="input-group ">
                <input
                  className="input input-bordered bg-white w-full"
                  type="text"
                  name="Taste"
                  defaultValue={Taste}
                />
              </label>
            </div>
          </div>
          <div className=" md:flex">
            <div className="form-control md:w-1/2 m-2">
              <label className="label-text">Category</label>
              <label className="input-group">
                <input
                  className="input input-bordered bg-white w-full text-black"
                  type="text"
                  name="category"
                  defaultValue={category}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 m-2">
              <label className="label-text">Details</label>
              <label className="input-group">
                <input
                  className="input input-bordered bg-white w-full"
                  type="text"
                  name="Details"
                  defaultValue={des}
                />
              </label>
            </div>
          </div>
          <div className="form-control  mt-3">
            <label className="label-text">Photo</label>
            <label className="input-group">
              <input
                className="input input-bordered bg-white w-full"
                type="text"
                name="photo"
                defaultValue={photo}
              />
            </label>
          </div>
          <div>
            <input
              className="btn btn-block bg-green-900 w-full p-2 mt-2 rounded-xl  text-white text-xl font-bold"
              type="submit"
              value="Update Coffee "
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
