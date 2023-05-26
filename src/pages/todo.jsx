import React, { useState } from "react";
export function Todo() {
  const [topic, setTopic] = useState(""); //state for topic
  const [todo, setTodo] = useState(""); // state for todo
  const [visible, setVisible] = useState(false); //state for current data visibility
  const [todos, setTodos] = useState([]); // state for storing and displaying todos in table
  const addtodo = () => {
    // //localStorage.clear();             //to clear local storage uncomment this line
    // setVisible(true);
    // //setTodos({topic,todo});        //setting data in object form in setTodo useState
    // const todoData = {
    //   Topic: topic,
    //   Todo: todo,
    // };
    // setTodos(todoData);
    // // var abc = [];
    // var get = JSON.parse(localStorage.getItem("todos")) || [];
    // // abc = [get != null ? get : null];
    // get.push(todoData); //pushing object of todo and topic in abc array
    // // setTodos(todoData);   //updating state of todos
    // // console.log({ abc });
    // console.log(todos, "hhh", todoData);
    // localStorage.setItem("TodoData", JSON.stringify(get));

    var get = JSON.parse(localStorage.getItem("todos")) || [];

    let value = {
      topic,
      todo,
    };

    get.push(value);

    localStorage.setItem("todos", JSON.stringify(get));

  };

  return (
    <div>
      <h3>
        Topic:{" "}
        <input
          value={topic}
          placeholder="enter head of todo here"
          onChange={(e) => setTopic(e.target.value)}
        ></input>
      </h3>
      <h3>
        Todo:{" "}
        <input
          value={todo}
          placeholder="Write your todo here"
          onChange={(e) => setTodo(e.target.value)}
        ></input>
      </h3>
      <button onClick={addtodo}>add todo</button>
      {visible ? (
        <div>
          <p>Topic: {topic}</p>
          <p>Todo: {todo}</p>
        </div>
      ) : null}
      <table className="datatable" style={{alignContent:"center"}}>
        <thead>
          <tr>
            <th>topic</th>
            <th>todo</th>
          </tr>
        </thead>
        <tbody>
          {/* {localStorage.getItem("todos").map((data) => {
            return (
              <tr>
                <td>{data.topic}</td>
                <td>{data.todo}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>
  );
}
