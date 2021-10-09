import React, { useState, useEffect } from "react";
const getLocalStorage = () => {
  const list = localStorage.getItem("tasks");
  if (list) return JSON.parse(list);
  return [];
};
function App() {
  const [value, setValue] = useState("");
  const [id, setId] = useState(-1);
  const [tasks, setTasks] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ alert: false, type: "", text: "" });

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      setAlert({
        alert: true,
        type: "show-empty-value",
        text: "please write a value before submiting",
      });
      return;
    }
    if (id !== -1) {
      setTasks(
        tasks.map((item, index) => {
          if (index === id) {
            return value;
          }
          return item;
        })
      );
      setId(-1);
      setAlert({
        alert: true,
        type: "show-item-updated",
        text: "Item has been updated",
      });
    } else {
      setTasks([...tasks, value]);

      setAlert({
        alert: true,
        type: "show-item-added",
        text: "Item has been added",
      });
    }
    setValue("");
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({ ...alert, alert: false });
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section className="container">
      <h1 className="text-header">to do app</h1>
      <p className={alert.alert ? alert.type : null}>{alert.text}</p>
      <form onSubmit={(e) => HandleSubmit(e)}>
        <input
          type="text"
          placeholder="write task here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" type="submit">
          {id === -1 ? "Add item" : "edit"}
        </button>
      </form>
      <div className="todoList">
        {tasks.map((task, index) => {
          return (
            <div key={index} className="task">
              <h5>{task}</h5>
              <div>
                <i
                  className="fas fa-trash"
                  onClick={() => {
                    setTasks(tasks.filter((task, id) => id !== index));
                    setAlert({
                      alert: true,
                      type: "show-item-removed",
                      text: "Item has been removed",
                    });
                  }}
                ></i>
                /
                <i
                  className="fas fa-edit"
                  onClick={() => {
                    setValue(task);
                    setId(index);
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          setTasks([]);
          setAlert({
            alert: true,
            type: "show-empty-list",
            text: "List is Empty",
          });
        }}
      >
        Clear Items
      </button>
    </section>
  );
}

export default App;
