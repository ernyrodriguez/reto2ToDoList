/*TIPS: *No olvides utilizar el almacenamiento local (localStorage)
 para que las tareas queden guardadas en caso
 de que la aplicación se cierre.*/
function displayFooter() {
  let page = `      
     
      <footer class="footer">
       
        <span class="todo-count"><strong>${countPend()}</strong> pendiente(s)</span>
        
        <ul class="filters">
          <li>
            <a onclick="showAll() "class="selected filtro" href="#/">Todos</a>
          </li>
          <li>
            <a onclick="showPend()" class="filtro" href="#/active">Pendientes</a>
          </li>
          <li>
            <a onclick="showComp()" class="filtro" href="#/completed">Completados</a>
          </li>
        </ul>
        <button onclick="borrarCompletados()" id="clear-completed" class="clear-completed">Borrar completados</button>
      </footer>
    `
  document.querySelector('.footer').innerHTML = page
}

// Codigo DOM #1

// Codigo DOM #2

// Codigo DOM #3
// Permite que la acción eliminar impacte el DOM del HTML, acá debes agegar algoritmo de eliminar tarea

function activateDeleteListeners() {
  let deleteBtn = document.querySelectorAll('.deleteBtn')
  deleteBtn.forEach((db, i) => {
    db.addEventListener('click', () => {
      //Llamar la función que elimina la tarea
    })
  })
}
// Codigo DOM #4
// Permite que la acción editar de las 2 listas desplegables "prioridad" y "categoría" impacte el DOM del HTML cuando cambies de opción, inserta este código tal cual, el reto está en saber en qué parte de tu código debes usarlo.

function activateEditListeners() {
  const editBtn = document.querySelectorAll('.editBtn')
  const updateController = document.querySelectorAll('.update-controller')
  const inputs = document.querySelectorAll('.input-controller textarea')
  const prioritySelects = document.querySelectorAll(
    '.edit-controller select'
  )[0]
  const categorySelects = document.querySelectorAll(
    '.edit-controller select'
  )[1]

  editBtn.forEach((eb, i) => {
    eb.addEventListener('click', () => {
      updateController[i].style.display = 'block'
      inputs[i].disabled = false

      prioritySelects.value = itemsArray[i].priority
      categorySelects.value = itemsArray[i].category
    })
  })

  prioritySelects.addEventListener('change', (event) => {
    const selectedIndex = event.target.selectedIndex
    itemsArray[i].priority = event.target.options[selectedIndex].text
    localStorage.setItem('items', JSON.stringify(itemsArray))
  })

  categorySelects.addEventListener('change', (event) => {
    const selectedIndex = event.target.selectedIndex
    itemsArray[i].category = event.target.options[selectedIndex].text
    localStorage.setItem('items', JSON.stringify(itemsArray))
  })
}
// Codigo DOM #5

// Codigo DOM #6

//El sistema debe permitir EDITAR o MODIFICAR una tarea.

//El sistema debe permitir ELIMINAR una tarea.

//El sistema debe permitir AGREGAR una o varias tareas tarea.

//El sistema deber permitir MARCAR una tarea como completada

//El sistema debe permitir dar diferentes PRIORIDADES a las tareas
//EJEMPLO:

//Sacar la basura - Prioridad: media

//El sistema debe permitir visualizar tareas por CATEGORÍAS o ETIQUETAS
//EJEMPLO:

/*Categorías disponibles: PENDIENTE, COMPLETADO o TODASE.T.C */

//Recordar llamar las funciones displayItems() y displayFooter() para mostrar
//las tareas en pantalla
displayFooter()
