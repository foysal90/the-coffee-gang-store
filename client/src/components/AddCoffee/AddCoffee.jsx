
import "./AddCoffee.css";

const AddCoffee = () => {
 
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const des = form.Details.value;
    const quantity = form.Quantity.value;
    const photo = form.photo.value;
    const Supplier = form.Supplier.value;
    const Taste = form.Taste.value;
    const category = form.category.value;
    const newCoffee = {
      title,
      des,
      Taste,
      quantity,
      Supplier,
      photo,
      category
    };

    console.log(newCoffee);

    fetch("http://localhost:5000/addCoffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("item added successfully");
          form.reset();
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
          Add New Coffee
        </h1>

        <form onSubmit={handleForm}>
          <div className="md:flex ">
            <div className="form-control md:w-1/2 m-2">
              <label className="label-text">Coffee Name </label>
              <label className="input-group w-full ">
                <input
                  className="input input-bordered bg-white w-full"
                  type="text"
                  name="title"
                  placeholder="Coffee Name"
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
                  placeholder="Quantity"
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
                  placeholder="Supplier Name"
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
                  placeholder="Taste"
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
                  placeholder="Category"
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
                  placeholder="Details"
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
                placeholder="Enter Photo url"
              />
            </label>
          </div>
          <div>
            <input
              className="btn btn-block bg-green-900 w-full p-2 mt-2 rounded-xl  text-white text-xl font-bold"
              type="submit"
              value="Add Coffee "
            />
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default AddCoffee;

