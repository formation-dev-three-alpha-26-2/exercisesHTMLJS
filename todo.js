let todos = [
  {
    id: 1,
    value: "Apprendre JS",
    date: "2026-03-02",
    completed: false,
  },
  {
    id: 2,
    value: "hello",
    date: "2026-03-02",
    completed: false,
  },
  {
    id: 3,
    value: "Apprendre html",
    date: "2026-03-02",
    completed: false,
  },
];

const listOl = document.getElementById("list");
const button = document.getElementById("button");
const input = document.querySelector("input");

const affichertodos = () => {
  listOl.innerHTML = "";

  todos.forEach((el) => {
    let todo = document.createElement("li");
    let deletebutton = document.createElement("button");
    deletebutton.textContent = "delete";
    todo.textContent = el.value;

    deletebutton.addEventListener("click", () => {
      deleteF(el.id);
      
    });
    listOl.append(todo, deletebutton);
  });
};

affichertodos();

button.addEventListener("click", () => {
  let inputvalue = input.value;

  let newtodo = {
    id: genererId(),
    value: inputvalue,
    date: new Date().toLocaleString(),
    completed: false,
  };

  todos.push(newtodo);

  affichertodos();
});




const deleteF = (id) => {

  todos = todos.filter((el) => {
    return el.id !== id;
  });


affichertodos()
};

let counter = 3;

const genererId = () => {
  counter++;
  return counter;
};
