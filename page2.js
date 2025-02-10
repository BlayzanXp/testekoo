const profiles = [
    {
        name: "Guilherme Augusto Mendes de Lima",
        age: 17,
        status: "Online recentemente",
        interests: ["Pau mandado"],
        sexo: "Homem",
        description: "",
        photos: ["guilherme.jfif"]
    },
    {
        name: "André Thomaz",
        age: 16,
        status: "Online nunca",
        sexo: "Homem",
        interests: ["gosto de jogar vôlei, toca violão e jogar"],
        description: "estudioso e atleta, apenas o básico, para mais detalhes apenas dando match bb😉", 
        photos: ["andre.jfif"]
    },
    {
        name: "Maria Eduarda Paulino Sutter",
        age: 16,
        status: "Online agora",
        sexo: "Não seria hétero?",
        interests: ["Leitura", "Tecnologia", "Arte"],
        description: "Extrovertida",
        photos: ["sophia1.jpg", "sophia2.jpg"]
    }
];

let currentProfileIndex = 0;
let currentPhotoIndex = 0;

// Atualiza o perfil exibido na página
function updateProfile() {
    if (currentProfileIndex >= profiles.length) {
        alert("Fim dos perfis!"); // Quando não houver mais perfis
        return;
    }

    const profile = profiles[currentProfileIndex];
    document.querySelector(".match-photo").src = profile.photos[currentPhotoIndex];
    document.querySelector(".match-name").textContent = `${profile.name}, ${profile.age}`;
    document.querySelector(".match-status").textContent = profile.status;
    document.querySelector(".match-interests").textContent = `Interesses: ${profile.interests.join(", ")}`;
}

// Exibe a próxima foto do perfil atual
function nextPhoto() {
    const profile = profiles[currentProfileIndex];
    currentPhotoIndex = (currentPhotoIndex + 1) % profile.photos.length;
    document.querySelector(".match-photo").src = profile.photos[currentPhotoIndex];
}

// Avança para o próximo perfil
function nextProfile() {
    currentProfileIndex++;
    currentPhotoIndex = 0; // Reset para a primeira foto
    if (currentProfileIndex < profiles.length) {
        updateProfile();
    } else {
        alert("Você viu todos os perfis!");
        currentProfileIndex = 0; // Reinicia o índice para ver os perfis novamente, se necessário
        updateProfile();
    }
}

// Ações ao curtir ou passar
function passMatch() {
    nextProfile(); // Avança para o próximo perfil
}

function likeMatch() {
    alert(`Você curtiu o perfil de ${profiles[currentProfileIndex].name}!`);
    nextProfile(); // Avança para o próximo perfil
}

// Inicializa o primeiro perfil na página
document.addEventListener("DOMContentLoaded", updateProfile);

function goToCouplesPage() {
    window.location.href = "casais.html"; // Redireciona para a página de casais
}


