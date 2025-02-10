import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset } from "./counterSlice";
import { addUser, deleteUser, updateUser } from "./userSlice";
import { fetchUsers } from "./fetchUsers";
import { TypescriptTesting } from "./TypescriptTesting";

window.activeIntervals = 0;

export const Testing = () => {
  // const count = useSelector((state) => state.counteri.value);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.user.users);
  const status = useSelector((state) => state.user.status);
  console.log("users =", users);
  console.log("status=", status);

  const handleAddUser = () => {
    dispatch(addUser({ id: 1, name: "John", age: 30, pol: "M" }));
  };

  const handleUpdateUser = () => {
    dispatch(updateUser({ id: 1, newData: { age: 31 } }));
  };

  const handleDeleteUser = () => {
    dispatch(deleteUser(1));
  };

  console.log("users =", users);
  console.log("status=", status);

  const [count, setCount] = useState(0);
  // const interval = setInterval(() => {
  //   console.log("debugf active intervals: ", window.activeIntervals);
  //   window.activeIntervals++;
  //   setCount((prevCount) => prevCount + 1);
  // }, 1000);

  // useEffect(() => {
  //   console.log("We added interval to global window");

  //   const interval = setInterval(() => {
  //     console.log("setinterval processing..");

  //     setCount((prevCount) => {
  //       console.log("setCount=", prevCount);

  //       return prevCount + 1;
  //     });
  //   }, 1000);

  //   return () => {
  //     console.log("setInterval stopped");

  //     clearInterval(interval);
  //   };
  // }, []);

  // console.log("count is everyrender=", count);

  return (
    <div
      style={{ minHeight: "400px", paddingTop: "50px" }}
      className="container"
    >
      <h3>Counter{count}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <p>{count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      {/* {count2}
      <button
        onClick={() => {
          count2 = count2 + 1;
          console.log(count2);
        }}
      >
        Increment
      </button>
     <h3>Имя: {user.name}</h3>
      <h3>Возраст: {user.age}</h3>
      <input type="text" value={user.name} onChange={handleNameChange} />
      <input type="text" value={user.age} onChange={handleAgeChange} /> */}

      <div
        style={{
          display: "flex",
          flex: 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "pink",
          height: "100px",
        }}
      >
        <p>Testing</p>
        <p>Testing</p>
        <p>Testing</p>
      </div>

      <div>
        <h1>Users</h1>
        <button onClick={handleAddUser}>Add User</button>
        <button onClick={handleUpdateUser}>Update User</button>
        <button onClick={handleDeleteUser}>Delete User</button>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age} years old
            </li>
          ))}
        </ul>
      </div>
      <TypescriptTesting />
    </div>
  );
};

// const [user, setUser] = useState({ name: "Margo", age: 23 });

// const handleNameChange = (event) => {
//   setUser({ ...user, name: event.target.value });
// };
// const handleAgeChange = (event) => {
//   setUser({ ...user, age: event.target.value });
// };
// Create a global array to track interval IDs

// clearInterval(interval);

// let fruitState = useState("bananas");
// let fruit = fruitState[0];
// let setFruit = fruitState[1];
// console.log(fruitState[1]);
