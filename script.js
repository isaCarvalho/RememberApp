(async function fill() 
{
    var n = await fetch("tarefas.json")
    let tarefas = await n.json();

    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    console.log(tarefas)
    
    let ul = document.getElementById("ul");

    tarefas.forEach(tarefa => {
        let li = document.createElement('li');
    
        li.innerHTML = `<img src="/images/todo.png" alt="${tarefa.nome}"> ${tarefa.nome}
        <a href="#" onclick="apagar('${tarefa.nome}')"><img src="/images/lixeira.png" alt="excluir tarefa" class="lixeira"></a>`;
        ul.appendChild(li);
    })
})

function showModal()
{
    let modal = document.querySelector('.modal');

    if (modal.style.visibility == 'hidden')
        modal.style.visibility = 'visible'
    else
        modal.style.visibility = 'hidden'
}

function salvar(event)
{
    console.log(event);

    fetch('writeFile.php', {
        method: "POST",
        body: new FormData(event.target)
    })
}

function apagar(nome)
{
    console.log(nome);
}