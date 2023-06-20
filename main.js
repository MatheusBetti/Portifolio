let listaDeItens = [];
let itemAEditar;

const form = document.getElementById('form-itens');
const itensInput = document.getElementById('receber-item');
const listaDeCompras = document.getElementById('lista-de-itens');
const listaDeComprados = document.getElementById('itens-comprados');
const listaRecuperada = localStorage.getItem('listaDeItens');


//Armazenando no localStorage com setItem (lembrando que precisaremos usar o getItem para que os dados fiquem disponíveis na tela posteriormente)
function atualizaLocalStorage(){ 
    localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens))
};

if(listaRecuperada){
    listaDeItens = JSON.parse(listaRecuperada)
    mostrarItem();
}else{
    listaDeItens = [];
}



form.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    salvarItem();
    mostrarItem();
    itensInput.focus();
});

function salvarItem(){
    const comprasItem = itensInput.value;

    const checarDuplicado = listaDeItens.some((elemento)=>{
        return elemento.valor.toUpperCase() === comprasItem.toUpperCase()
        //console.log('passou aqui')
    })

    if(checarDuplicado) {
        alert("Compra já adicionada na lista!")
    }else{
        listaDeItens.push({
            valor: comprasItem,
            checar: false
        }) 
    }

    itensInput.value = ''
};

function mostrarItem(){
    listaDeCompras.innerHTML = ''
    listaDeComprados.innerHTML = ''
    
    listaDeItens.forEach((elemento, index)=>{
        
        if(elemento.checar){
            listaDeComprados.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" checked class="is-clickable" />  
                    <span class="itens-comprados is-size-5" value="">${elemento.valor} </span>
                </div>
                <div>
                    <i class="fa-regular fa-floppy-disk is-clickable"></i>
                    <i class="fa-regular is-clickable fa-pen-to-square editar"></i>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
            ` 
        }else {        
            listaDeCompras.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" class="is-clickable" />
                    <input type="text" class="is-size-5" value="${elemento.valor}" ${index != itemAEditar ? 'disabled' : ''}></input>
                </div>

                <div>
                    ${ index == itemAEditar ? '<i class="fa-regular fa-floppy-disk is-clickable" onclick="salvarEdicao()"></i>' :
                    '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>
            `
        }

        const inputsCheck = document.querySelectorAll('input[type="checkbox"]');

        inputsCheck.forEach((i)=>{
            i.addEventListener('click', (evento)=>{
                const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value'); //Posição do elemento dentro do array da lista de Itens
                listaDeItens[valorDoElemento].checar = evento.target.checked //Alterando para quando clicar, o check virar TRUE
                mostrarItem();
            })
        })
    })

    const deletarObjetos = document.querySelectorAll('.deletar');

    deletarObjetos.forEach((i)=>{
        i.addEventListener('click', (evento)=>{
            const valorDoElemento = evento.target.parentElement.parentElement.getAttribute('data-value'); //Posição do elemento dentro do array da lista de Itens
            const nomeDoItem = document.querySelector(`[data-value="${valorDoElemento}"] input[type="text"]`)
            alert(`Tem certeza que deseja apagar ${nomeDoItem.value} da lista?`)

            listaDeItens.splice(valorDoElemento, 1);
            mostrarItem();
        })
    })

    const editarItens = document.querySelectorAll('.editar');

    editarItens.forEach((i)=>{
        i.addEventListener('click', (evento)=>{
            itemAEditar = evento.target.parentElement.parentElement.getAttribute('data-value'); //Posição do elemento dentro do array da lista de Itens
            mostrarItem();
        })
    })
    atualizaLocalStorage()
}


function salvarEdicao(){
    const itemEditado = document.querySelector(`[data-value="${itemAEditar}"] input[type="text"]`) 
    listaDeItens[itemAEditar].valor = itemEditado.value;
    itemAEditar = -1;
    mostrarItem();
}


