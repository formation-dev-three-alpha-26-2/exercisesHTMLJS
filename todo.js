const listOl = document.getElementById("list");
const button = document.getElementById("button");
const input = document.getElementById("newtodo");
const searchinput = document.getElementById("search");
const clear = document.getElementById("clear");
const buttonDate = document.getElementById("sort");

let todos = [];

if (JSON.parse(localStorage.getItem("todos"))) {
  todos = JSON.parse(localStorage.getItem("todos"));
} else {
  todos = [];
}

// ou bien haka short way : const todos = JSON.parse(localStorage.getItem("todos")) || []

// JSON.stringify tconverti données ml etat initiale lel chaine
// JSON.parse   tconverti ml chaine lel etat initale
// localstorage.getitem  tjiblna données qui été sauvegardé fl storage mtaa navigateur
//localstorage.setitem tsauvegardilna données fl storage mtaa naviagteur

let counter = todos.length;

const genererId = () => {
  counter++;
  return counter;
};

const affichertodos = () => {
  listOl.innerHTML = "";

  todos.forEach((el) => {
    let todo = document.createElement("li");
    let deletebutton = document.createElement("button");
    let editbutton = document.createElement("button");
    deletebutton.textContent = "delete";
    editbutton.textContent = "edit";
    todo.textContent = el.value;

    if (el.completed === true) {
      todo.style.textDecoration = "line-through";
      todo.style.opacity = "0.6";
    }

    todo.addEventListener("click", () => {
      el.completed = !el.completed;

      localStorage.setItem("todos", JSON.stringify(todos));
      affichertodos();
    });

    editbutton.addEventListener("click", () => {
      console.log(el.value);

      todo.innerHTML = `<input type="text" id = "editinput" value= ${el.value}>`;

      let editinput = document.getElementById("editinput");

      editinput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
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

  console.log(inputvalue);

  let newtodo = {
    id: genererId(),
    value: inputvalue,
    date: new Date().toLocaleString(),
    completed: false,
  };

  todos.push(newtodo);
  input.value = "";
  localStorage.setItem("todos", JSON.stringify(todos));

  affichertodos();
  nombreDetache();
});



const deleteF = (id) => {
  todos = todos.filter((el) => {
    return el.id !== id;
  });
  localStorage.setItem("todos", JSON.stringify(todos));

  affichertodos();
  nombreDetache();
};





const edit = (id, valeur) => {
  todos = todos.map((el) => {
    if (el.id === id) {
      console.log(el);

      return (el = {
        ...el,
        value: valeur,
      });
    }
    return el;
  });

  console.log(todos);
  localStorage.setItem("todos", JSON.stringify(todos));

  affichertodos();
};





const nombreDetache = () => {
  let p = document.querySelector("p");

  p.textContent = "Tasks: " + todos.length;
};

nombreDetache();






clear.addEventListener("click", () => {
  todos = [];

  listOl.innerHTML = "";
  localStorage.setItem("todos", JSON.stringify(todos));

  nombreDetache();
});




buttonDate.addEventListener("click", () => {
  todos = todos.sort((a, b) => new Date(b.date) - new Date(a.date));
  localStorage.setItem("todos", JSON.stringify(todos));

  affichertodos();
});





searchinput.addEventListener("input", (event) => {
  console.log(event.target.value, "event");
  let searchdata = JSON.parse(localStorage.getItem("todos"));
  todos = searchdata.filter((el) => {
    return el.value.includes(event.target.value);
  });

  affichertodos();
});
