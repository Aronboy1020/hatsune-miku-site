// Seleciona o iframe do player
const player = document.getElementById('youtube-player');

// Seleciona todos os links de vídeo recomendados
const videoLinks = document.querySelectorAll('.leitor-de-id');

// Adiciona um evento de clique para cada link
videoLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede que o link abra uma nova aba
        
        // Extrai o ID do vídeo do link (URL)
        const videoUrl = new URL(link.href);
        const videoId = videoUrl.searchParams.get('v');
        
        // Atualiza o src do iframe com o novo vídeo
        player.src = `https://www.youtube.com/embed/${videoId}`;
    });
});
