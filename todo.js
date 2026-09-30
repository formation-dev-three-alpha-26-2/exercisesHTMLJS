let todos = [
  {
    id: 1,
    value: "ApprendreJS",
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
    value: "Apprendrehtml",
    date: "2026-03-02",
    completed: false,
  },
];

const listOl = document.getElementById("list");
const button = document.getElementById("button");
const input = document.querySelector("input");

console.log(todos);

const affichertodos = () => {
  listOl.innerHTML = "";

  todos.forEach((el) => {
    let todo = document.createElement("li");
    let deletebutton = document.createElement("button");
    let editbutton = document.createElement("button");
    deletebutton.textContent = "delete";
    editbutton.textContent = "edit";
    todo.textContent = el.value;

    todo.addEventListener("click", () => {
      el.completed = true;
      todo.style.textDecoration = "line-through";
      todo.style.opacity = "0.6";
    });

    editbutton.addEventListener("click", () => {
      console.log(el.value);

      todo.innerHTML = `<input type="text" id = "editinput" value= ${el.value}>`;

      let editinput = document.getElementById("editinput");

      editinput.addEventListener("keydown", (event) => {
    if ( event.key === "Enter") {
      // lcondition hedhi bech mnkhaliwch lfunction mtaa ledit tekhdm alla ay key nkhaliwha tekhdm kn maa lentrée bech enty tnjm tediti w tapi nrml fl clavvier
      edit(el.id, editinput.value);

  }
      });
    });

    deletebutton.addEventListener("click", () => {
      deleteF(el.id);
    });

    listOl.append(todo, deletebutton, editbutton);
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
  nombreDetache();
});

const deleteF = (id) => {
  todos = todos.filter((el) => {
    return el.id !== id;
  });

  affichertodos();
  nombreDetache();
};

const edit = (id, valeur) => {


  todos = todos.map((el) => {
    if (el.id === id) {
      console.log(el);
      
      return (
        el = {
        ...el,
        value: valeur,
      });
    }
    return el;
  });

  console.log(todos);
  
  affichertodos()
};




const nombreDetache = () => {
  let p = document.querySelector("p");

  p.textContent = "Tasks: " + todos.length;
};

nombreDetache();

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
  todos = [];

  listOl.innerHTML = "";
  nombreDetache();
});

let counter = 3;

const genererId = () => {
  counter++;
  return counter;
};
