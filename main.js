$(document).ready(function() {
    const form = $('.form')
    const tarefa = []
    form.on('submit', function(e) {
        e.preventDefault()
        addLinha()
    });

    function addLinha() {
        const inputTarefa = $('#tarefa').val()
        tarefa.push(inputTarefa)

        const ul = $('<ul>')
        tarefa.forEach(function(tarefa) {
            const li = $('<li>').text(tarefa)
            ul.append(li)
        });

        $('#lista-tarefas').empty().append(ul)
        line()
    }

    function line() {
        $('#lista-tarefas li').off('click').on('click', function() {
            $(this).toggleClass('line-through')
        })
    }
})
