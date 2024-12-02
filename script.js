document.addEventListener("DOMContentLoaded", function() {
  const loaderMessage = document.getElementById('loader-message');
  const messages = [
      "Aguarda um pouco... estamos a filmar uma cena!",
      "Estás prestes a entrar na 'Matrix'... aguenta só mais um segundo!",
      "Cenas estão a ser filmadas. Não saias da sala, é só um segundo!",
      "O filme está a carregar…",
      "Bastidores em preparação!",
      "Gravação em andamento...",
      "Luzes, câmara, ação...",
      "Guionistas a criar magia!",
      "O filme vai começar em breve!",
      "Só um momento..."
  ];

  let messageIndex = 0;

  function updateMessage() {
      loaderMessage.textContent = messages[messageIndex];
      messageIndex = (messageIndex + 1) % messages.length;

      // Set a longer interval for a specific message
      if (loaderMessage.textContent === "Aguarda um pouco... estamos a filmar uma cena!") {
          setTimeout(updateMessage, 5000); // 5 seconds for this message
      } else {
          setTimeout(updateMessage, 2000); // 2 seconds for other messages
      }
  }

  // Start the message update
  updateMessage();

  // Show the content and hide the loader after a longer delay
  setTimeout(function() {
      document.getElementById('content').style.display = 'block';
      document.getElementById('loader').style.display = 'none';
  }, 5000); // Adjust the delay time as needed
});

const carousel = document.querySelector('.carousel');
const dots = document.querySelectorAll('.dot');

// Estado inicial
let currentIndex = 0;
const totalDots = dots.length; // Total de botões (pontos)

// Atualizar o carrossel para mostrar a imagem correspondente
function updateCarousel(index) {
  // Calcular a posição para mover o carrossel
  const offset = -index * 410; // Move 455px para cada imagem
  carousel.style.transform = `translateY(${offset}px)`;

  // Atualizar a aparência das bolinhas
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Adicionar evento de clique nas bolinhas
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    if (index >= totalDots - 1) { 
      // Se clicar no último botão (sem imagem), volta para o início
      currentIndex = 0;
    } else {
      // Senão, atualiza para o botão clicado
      currentIndex = index;
    }
    updateCarousel(currentIndex);
  });
});

// Configurar a bolinha inicial como ativa
updateCarousel(currentIndex);

document.querySelectorAll('.fotos img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.classList.add('hovered');
    });
});


document.querySelectorAll('.navbar-btn').forEach(button => {
  button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);

      // Alterna a visibilidade do conteúdo
      targetContent.classList.toggle('show'); // Se estiver visível, esconde, e se estiver escondido, mostra
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const titulo = document.querySelector('.titulo3');
  const texto = document.querySelector('.texto2');

  // Adiciona a classe 'visible' após a página carregar
  setTimeout(() => {
      titulo.classList.add('visible');
      texto.classList.add('visible');
  }, 500); // Delay de 500ms
});

document.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.titulo2, .texto1, .titulo3, .texto2'); // Seleciona todos os elementos relevantes
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
      const position = el.getBoundingClientRect(); // Posição do elemento em relação ao viewport

      if (position.top < windowHeight - 100) { // Se o elemento estiver quase visível
          el.classList.add('visible'); // Adiciona a classe para a animação
      }
  });
});

function addScrollAnimation(selector) {
  const elements = document.querySelectorAll(selector);
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
      const position = el.getBoundingClientRect();

      if (position.top < windowHeight - 100) {
          el.classList.add('visible');
      }
  });
}

document.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.titulo2, .texto1, .titulo3, .texto2'); // Seleciona todas as classes
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
      const position = el.getBoundingClientRect();

      if (position.top < windowHeight - 100) {
          el.classList.add('visible'); // Adiciona classe para animar
      }
  });
});
