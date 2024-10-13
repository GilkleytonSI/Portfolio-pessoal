const filtros = document.querySelectorAll('.filtro');
const projetos = document.querySelectorAll('.projeto');

filtros.forEach(filtro => {
    filtro.addEventListener('click', function() {
        // Remove a classe ativo de todos os botões
        filtros.forEach(btn => btn.classList.remove('ativo'));
        // Adiciona a classe ativo ao botão clicado
        this.classList.add('ativo');

        const categoria = this.getAttribute('data-filter');

        projetos.forEach(projeto => {
            if (categoria === 'todos' || projeto.getAttribute('data-category') === categoria) {
                projeto.style.display = 'block';
            } else {
                projeto.style.display = 'none';
            }
        });
    });
});
