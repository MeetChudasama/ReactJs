import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [employee, setEmployee] = useState({firstName: "", lastName: "", age: ""})
  const [isUpdate, setIsUpdate] = useState(false);

  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id == id);
    if (dt !== undefined) {
      setIsUpdate(true);
      const newobj = dt[0]
      setEmployee(newobj)
    }
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm("Do you really want to delete this data?")) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  const handleSave = () => {
    const id = Math.floor(Math.random() *100)
    setData(newData => [...newData, {...employee, id: id}])
  };
bs
  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(employee.id);

    console.log(index);
      const dt = [...data]
      dt[index].firstName = employee.firstName
      dt[index].lastName = employee.lastName
      dt[index].age = employee.age

      setData(dt)
      handleClear()
  };

  const handleClear = () => {
    setEmployee({})
    setIsUpdate(false);
  };

  return (
    <>
      <div className="container">
        <div className="form-floating mb-3 mt-5">
          <input
            className=" form-control"
            type="text"
            placeholder="First name"
            onChange={(e) =>
              setEmployee({ ...employee, firstName: e.target.value })
            }
            value={employee.firstName || ""}
            id="formId1"
          />
          <label htmlFor="formId1">First name: </label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Last name"
            onChange={(e) =>
              setEmployee({ ...employee, lastName: e.target.value })
            }
            value={employee.lastName || ""}
            id="formId2"
          />
          <label htmlFor="formId2">Last name: </label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Age"
            onChange={(e) => setEmployee({ ...employee, age: e.target.value })}
            value={employee.age || ""}
            id="formId3"
          />
          <label htmlFor="formId3">Age: </label>
        </div>

        <div className="d-flex justify-content-end">
          {!isUpdate ? (
            <button
              type="button"
              className="me-2 ms-4 btn btn-primary"
              onClick={() => handleSave()}
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              className="me-2 btn btn-warning"
              onClick={() => handleUpdate()}
            >
              Update
            </button>
          )}

          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleClear()}
          >
            Clear
          </button>
        </div>

        <table className="mt-4 table table ">
          <thead>
            <tr>
              <td>Sr No.</td>
              <td>Id</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Age</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button
                      type="button"
                      className="me-2 btn btn-primary"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
