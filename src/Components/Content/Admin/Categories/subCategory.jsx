import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const subCategory = () => {
  const [mainCat, setmainCat] = useState([]);
  const [subCat, setsubCat] = useState([]);
  const [selectValue, setselectValue] = useState("");
  const [inpActive, setinpActive] = useState(null);
  const [inpValue, setinpValue] = useState("");
  console.log("selected values is:", selectValue);
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

  const handleCancel = () => {
    setinpActive(null);
  };

  const handleEdit = (id, title) => {
    setinpActive(id);
    setinpValue(title);
  };

  const handleSave = () => {
    console.log("inpActive=", typeof inpActive);

    const updatedCategory = {
      id: inpActive,
      mainId: selectValue,
      title: inpValue,
    };

    fetch(`http://localhost:3000/subcategories/${inpActive}`, {
      method: "PUT", // Use PUT for updating data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCategory),
    })
      .then((response) => {
        console.log("response is=", response);

        if (!response.ok) {
          throw new Error("Failed to update the category");
        }
        return response.json();
      })
      .then((updatedData) => {
        const updatedSubCat = subCat.map((cat) =>
          cat.id === updatedData.id ? updatedData : cat
        );
        console.log("updated data are=", updatedData);
        console.log("updatedmaincat are=", updatedSubCat);

        setsubCat(updatedSubCat);
        setinpActive(null);
      })
      .catch((error) => {
        console.error("Error updating category:", error);
      });
  };

  console.log(typeof inpActive);

  const [catValue, setcatValue] = useState("");
  console.log("catValue is=", catValue);
  const [isEmpty, setisEmpty] = useState(null);
  const handleAdd = () => {
    if (catValue.trim() === "") {
      console.error("Input is empty! Please enter a value.");
      setisEmpty("Your field is empty");
      return;
    }

    console.log("length is=", subCat.length);

    const newCategory = {
      id: (subCat.length ? +subCat[subCat.length - 1].id + 1 : +1).toString(),
      mainId: selectValue,
      title: catValue,
    }; // Create a new category object

    fetch("http://localhost:3000/subcategories", {
      method: "POST", // Use POST for adding new data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
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
        const updatedSubCat = [...subCat, addedData];
        console.log("Updated main categories are=", updatedSubCat);

        setsubCat(updatedSubCat); // Update state with the new category
        setcatValue(""); // Clear the input field
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
      const response = await fetch(
        `http://localhost:3000/subcategories/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the category");
      }

      // Step 2: Update the state to remove the deleted category
      const updatedSubCat = subCat.filter(
        (cat) => Number(cat.id) !== Number(id)
      );
      setsubCat(updatedSubCat);

      console.log(`Category with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div>
      <h2 class="text-center">Choose a Main Category</h2>
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

      <div>
        {" "}
        {selectValue !== "" && (
          <>
            <input
              type="text"
              className="form-control"
              style={{ backgroundColor: "lightgray" }}
              value={catValue}
              onChange={(e) => setcatValue(e.target.value)}
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
          {subCat
            .filter((subcat) => subcat.mainId === selectValue) // Filter items based on `mainId`
            .map((filteredSubCat, index) => (
              <tr key={filteredSubCat.id}>
                <td>{index + 1}</td>
                <td>
                  {inpActive === filteredSubCat.id && (
                    <input
                      type="text"
                      className="form-control"
                      value={inpValue}
                      onChange={(e) => setinpValue(e.target.value)}
                    />
                  )}
                  {!(inpActive === filteredSubCat.id) && filteredSubCat.title}
                </td>
                <td>
                  {!(inpActive === filteredSubCat.id) && (
                    <>
                      <button
                        class="btn btn-sm btn-primary"
                        value={filteredSubCat.id}
                        onClick={() =>
                          handleEdit(filteredSubCat.id, filteredSubCat.title)
                        }
                      >
                        <i class="fa fa-edit"></i> Edit
                      </button>
                      <button
                        class="btn btn-sm btn-danger"
                        onClick={() =>
                          handleDelete(filteredSubCat.id, filteredSubCat.title)
                        }
                      >
                        <i class="fa fa-trash"></i> Delete
                      </button>{" "}
                    </>
                  )}

                  {inpActive === filteredSubCat.id && (
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
