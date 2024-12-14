import React, { useEffect, useState } from "react";

export const mainCategory = () => {
  const [mainCat, setmainCat] = useState([]);
  const [selValue, setselValue] = useState("");
  const [changedValue, setchangedValue] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/posts")
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

  const [inpActive, setinpActive] = useState(null);
  const handleEdit = (id) => {
    setinpActive(id);
  };

  console.log(typeof inpActive);

  return (
    <div>
      <div class="container mt-4">
        <h2 class="text-center">Bootstrap Table Example</h2>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mainCat.map((mainCat) => (
              <tr key={mainCat.id}>
                <td>{mainCat.id}</td>

                <td>
                  {inpActive === mainCat.id && (
                    <input type="text" value={mainCat.title} />
                  )}
                  {!(inpActive === mainCat.id) && mainCat.title}
                </td>
                <td>
                  <button
                    class="btn btn-sm btn-primary"
                    value={mainCat.id}
                    onClick={() => handleEdit(mainCat.id, mainCat.title)}
                  >
                    <i class="fa fa-edit"></i> Edit
                  </button>

                  <button class="btn btn-sm btn-danger">
                    <i class="fa fa-trash"></i> Delete
                  </button>
                </td>
                <td>
                  {inpActive === mainCat.id && (
                    <>
                      <button class="btn btn-sm btn-success">
                        <i class="fa fa-save"></i> Save
                      </button>
                      <button
                        className="btn btn-sm btn-secondary"
                        // onClick={handleCancel}
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
