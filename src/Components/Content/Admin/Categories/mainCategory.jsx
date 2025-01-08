import React, { useEffect, useState } from "react";

export const mainCategory = () => {
  const [mainCat, setmainCat] = useState([]);

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

  const handleCancel = () => {
    setinpActive(null);
  };

  const handleEdit = (id, title) => {
    setinpActive(id);
    setinpValue(title);
  };

  const handleSave = () => {
    console.log("inpActive=", typeof inpActive);

    const updatedCategory = { id: inpActive, title: inpValue };

    fetch(`http://localhost:3000/maincategories/${inpActive}`, {
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
        const updatedMainCat = mainCat.map((cat) =>
          cat.id === updatedData.id ? updatedData : cat
        );
        console.log("updated data are=", updatedData);
        console.log("updatedmaincat are=", updatedMainCat);

        setmainCat(updatedMainCat);
        setinpActive(null);
      })
      .catch((error) => {
        console.error("Error updating category:", error);
      });
  };

  console.log(typeof inpActive);

  const [catValue, setcatValue] = useState("");
  const [isEmpty, setisEmpty] = useState(null);
  console.log("catValue is=", catValue);

  const handleAdd = () => {
    if (catValue.trim() === "") {
      console.error("Input is empty! Please enter a value.");
      setisEmpty("Your field is empty");
      return;
    }

    console.log("length is=", mainCat.length);

    const newCategory = {
      id: (mainCat.length
        ? +mainCat[mainCat.length - 1].id + 1
        : +1
      ).toString(),
      title: catValue,
    }; // Create a new category object

    fetch("http://localhost:3000/maincategories", {
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
        const updatedMainCat = [...mainCat, addedData];
        console.log("Updated main categories are=", updatedMainCat);

        setmainCat(updatedMainCat); // Update state with the new category
        setcatValue(""); // Clear the input field
        setisEmpty(null);
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  const handleDelete = async (id, title) => {
    console.log("id type=", typeof id, "title is=", title);
    const confirmationMessage = `
    Are you sure you want to delete the category "${title}"?
    
    This action will also:
    - Permanently delete all subcategories linked to this category.
    - Remove any associated products.

    This action cannot be undone. Please confirm.
  `;

    if (!window.confirm(confirmationMessage)) {
      return; // Exit if the user cancels the confirmation
    }

    try {
      // Step 1: Send DELETE request to the server
      const response = await fetch(
        `http://localhost:3000/maincategories/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete the category");
      }

      const subcategoriesResponse = await fetch(
        `http://localhost:3000/subcategories?mainId=${id}`
      );
      const subcategories = await subcategoriesResponse.json();

      // Delete each subcategory individually
      await Promise.all(
        subcategories.map((sub) =>
          fetch(`http://localhost:3000/subcategories/${sub.id}`, {
            method: "DELETE",
          })
        )
      );

      // Step 2: Update the state to remove the deleted category
      const updatedMainCat = mainCat.filter(
        (cat) => Number(cat.id) !== Number(id)
      );
      setmainCat(updatedMainCat);

      console.log(`Category with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div>
      <div class="container mt-4">
        <h2 class="text-center">Main Category</h2>

        <div>
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
            {mainCat.map((mainCat, index) => (
              <tr key={mainCat.id}>
                <td>{index + 1}</td>
                <td>
                  {inpActive === mainCat.id && (
                    <input
                      type="text"
                      className="form-control"
                      value={inpValue}
                      onChange={(e) => setinpValue(e.target.value)}
                    />
                  )}
                  {!(inpActive === mainCat.id) && mainCat.title}
                </td>
                <td>
                  {!(inpActive === mainCat.id) && (
                    <>
                      <button
                        class="btn btn-sm btn-primary"
                        value={mainCat.id}
                        onClick={() => handleEdit(mainCat.id, mainCat.title)}
                      >
                        <i class="fa fa-edit"></i> Edit
                      </button>
                      <button
                        class="btn btn-sm btn-danger"
                        onClick={() => handleDelete(mainCat.id, mainCat.title)}
                      >
                        <i class="fa fa-trash"></i> Delete
                      </button>{" "}
                    </>
                  )}

                  {inpActive === mainCat.id && (
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
    </div>
  );
};
