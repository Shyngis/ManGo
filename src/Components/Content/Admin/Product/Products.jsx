import React, { useEffect, useState } from "react";

export const Products = () => {
  const [mainCat, setmainCat] = useState([]);
  const [selectValue, setselectValue] = useState("");
  const [selectSubValue, setselectSubValue] = useState("");
  const [subCat, setsubCat] = useState([]);
  const [subValue, setsubValue] = useState("");
  const [isEmpty, setisEmpty] = useState(null);
  const [products, setproducts] = useState([]);
  const [productValue, setproductValue] = useState("");
  const [inpActive, setinpActive] = useState(null);
  const [inpValue, setinpValue] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/maincategories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Posts:", data);
        setmainCat(data);
        // Handle the data (e.g., display it in your app)
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/subcategories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Posts:", data);
        setsubCat(data);
        // Handle the data (e.g., display it in your app)
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Posts:", data);
        setproducts(data);
        // Handle the data (e.g., display it in your app)
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  const handleCancel = () => {
    setinpActive(null);
  };

  const handleEdit = (id, title) => {
    setinpActive(id);
    setinpValue(title);
  };

  const handleSave = () => {
    console.log("inpActive=", typeof inpActive);

    const updatedProduct = {
      id: inpActive,
      categoryId: selectSubValue,
      title: inpValue,
    };

    fetch(`http://localhost:3000/products/${inpActive}`, {
      method: "PUT", // Use PUT for updating data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((response) => {
        console.log("response is=", response);

        if (!response.ok) {
          throw new Error("Failed to update the category");
        }
        return response.json();
      })
      .then((updatedData) => {
        const updatedProduct = products.map((cat) =>
          cat.id === updatedData.id ? updatedData : cat
        );
        console.log("updated data are=", updatedData);
        console.log("updatedmaincat are=", updatedProduct);

        setproducts(updatedProduct);
        setinpActive(null);
      })
      .catch((error) => {
        console.error("Error updating category:", error);
      });
  };

  const handleAdd = () => {
    if (productValue.trim() === "") {
      console.error("Input is empty! Please enter a value.");
      setisEmpty("Your field is empty");
      return;
    }

    console.log("length is=", products.length);

    const newProduct = {
      id: (products.length
        ? +products[products.length - 1].id + 1
        : +1
      ).toString(),
      categoryId: selectSubValue,
      title: productValue,
    }; // Create a new category object

    fetch("http://localhost:3000/products", {
      method: "POST", // Use POST for adding new data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => {
        console.log("Response is=", response);

        if (!response.ok) {
          throw new Error("Failed to add the category");
        }
        return response.json(); // Parse the JSON response
      })
      .then((addedData) => {
        console.log("Added data is=", addedData);

        // Update the main category list with the newly added category
        const updatedProduct = [...products, addedData];
        console.log("Updated main categories are=", updatedProduct);

        setproducts(updatedProduct); // Update state with the new category
        setproductValue(""); // Clear the input field
        setisEmpty(null);
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  const handleDelete = async (id, title) => {
    console.log("id type=", typeof id, "title is=", title);

    if (!window.confirm("Are you sure you want to delete this category?")) {
      return; // Exit if the user cancels the confirmation
    }

    try {
      // Step 1: Send DELETE request to the server
      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the category");
      }

      // Step 2: Update the state to remove the deleted category
      const updatedProduct = products.filter(
        (prod) => Number(prod.id) !== Number(id)
      );
      setproducts(updatedProduct);

      console.log(`Category with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };
  return (
    <div>
      <h2 class="text-center">Choose main and sub category</h2>
      <select
        class="form-select"
        aria-label="Default select example"
        value={selectValue}
        onChange={(e) => setselectValue(e.target.value)}
      >
        <option value="">--</option>
        {mainCat.map((mainCat) => (
          <>
            <option value={mainCat.id}>{mainCat.title}</option>
          </>
        ))}
      </select>
      <section className="mt-2">
        <select
          class="form-select"
          aria-label="Default select example"
          value={selectSubValue}
          onChange={(e) => setselectSubValue(e.target.value)}
        >
          <option value="">--</option>
          {subCat
            .filter((item) => item.mainId === selectValue)
            .map((subCat) => (
              <>
                <option value={subCat.id}>{subCat.title}</option>
              </>
            ))}
        </select>
      </section>

      <div>
        {" "}
        {selectSubValue !== "" && (
          <>
            <input
              type="text"
              className="form-control"
              style={{ backgroundColor: "lightgray" }}
              value={productValue}
              onChange={(e) => setproductValue(e.target.value)}
            />
            {isEmpty && <p className="text-danger">{isEmpty}</p>}
            <button className="btn btn-primary" onClick={handleAdd}>
              Add
            </button>
          </>
        )}
      </div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((prod) => prod.categoryId === selectSubValue) // Filter items based on `mainId`
            .map((filteredProd, index) => (
              <tr key={filteredProd.id}>
                <td>{index + 1}</td>
                <td>
                  {inpActive === filteredProd.id && (
                    <input
                      type="text"
                      className="form-control"
                      value={inpValue}
                      onChange={(e) => setinpValue(e.target.value)}
                    />
                  )}
                  {!(inpActive === filteredProd.id) && filteredProd.title}
                </td>
                <td>
                  {!(inpActive === filteredProd.id) && (
                    <>
                      <button
                        class="btn btn-sm btn-primary"
                        value={filteredProd.id}
                        onClick={() =>
                          handleEdit(filteredProd.id, filteredProd.title)
                        }
                      >
                        <i class="fa fa-edit"></i> Edit
                      </button>
                      <button
                        class="btn btn-sm btn-danger"
                        onClick={() =>
                          handleDelete(filteredProd.id, filteredProd.title)
                        }
                      >
                        <i class="fa fa-trash"></i> Delete
                      </button>{" "}
                    </>
                  )}

                  {inpActive === filteredProd.id && (
                    <>
                      <button
                        class="btn btn-sm btn-success"
                        onClick={handleSave}
                      >
                        <i class="fa fa-save"></i> Save
                      </button>
                      <button
                        className="btn btn-sm btn-secondary"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
