const inputPrincipal = document.querySelector('.input');
const botonAgregar = document.querySelector('.boton-agregar');
const contenedor = document.querySelector('.contenedor');

class Item {
    constructor(tarea) {
        this.crearDiv(tarea);
    }

    crearDiv(tarea) {
        const inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.classList.add('item-input');
        inputItem.value = tarea;
        inputItem.disabled = true;

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const botonEditar = document.createElement('button');
        botonEditar.classList.add('boton-editar');
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>';

        const botonRemover = document.createElement('button');
        botonRemover.classList.add('boton-remover');
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>';

        itemDiv.appendChild(inputItem);
        itemDiv.appendChild(botonEditar);
        itemDiv.appendChild(botonRemover);

        contenedor.appendChild(itemDiv);

        botonEditar.addEventListener('click', () => {
            if (inputItem.disabled) {
                inputItem.disabled = false;
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>';
            } else {
                inputItem.disabled = true;
                botonEditar.innerHTML = '<i class="fas fa-lock"></i>';
            }
        });

        botonRemover.addEventListener('click', () => {
            contenedor.removeChild(itemDiv);
        });
    }
}

function chequearInput() {
    const tarea = inputPrincipal.value;
    if (tarea !== '') {
        new Item(tarea);
        inputPrincipal.value = '';
    }
}

botonAgregar.addEventListener('click', chequearInput);
