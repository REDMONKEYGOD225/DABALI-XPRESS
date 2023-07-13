// Script JavaScript pour les animations
document.addEventListener("DOMContentLoaded", function(event) {
    // Ajoute une classe au header lorsque la page est scrollée
    window.addEventListener("scroll", function() {
      var header = document.querySelector("header");
      header.classList.toggle("scrolled", window.scrollY > 0);
    });
  
    // Ajoute une animation de défilement fluide pour les liens de navigation
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener("click", function(e) {
        e.preventDefault();
        var target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
      });
    }
  });
  // Récupérer le bouton et le formulaire
// Récupérer les références des éléments bouton et formulaire
function toggleOrderForm() {
  var orderForm = document.getElementById("order-form");
  orderForm.classList.toggle("hidden");
}
function toggleOrderForm() {
  var orderForm = document.getElementById("order-form");
  orderForm.classList.toggle("hidden");
}
function afficherImage() {
  const imageContainer = document.getElementById('image-container');
  const image = document.getElementById('image');
  
  image.src = "image/Menu23.png";
  imageContainer.classList.remove('hidden');
}
function fermerImage() {
  const imageContainer = document.getElementById('image-container');
  
  imageContainer.classList.add('hidden');
}

//chat box
function openDialog() {
  var dialog = document.getElementById("dialog");
  dialog.style.display = "block";
}

function closeDialog() {
  var dialog = document.getElementById("dialog");
  dialog.style.display = "none";
}

function sendMessage() {
    var userInput = document.getElementById("messageInput");
     var message = userInput.value;
  
     if (message !== "") {
      addMessage("Client", message);
       userInput.value = ""; // Réinitialiser le champ de saisie
  
       // Envoyer une réponse automatique après un délai
       setTimeout(function() {
         addMessage( "Service","Que pouvons-nous faire pour vous?");
       }, 
       1000);
    }
   }
   function addMessage(sender, message) {
       var chatMessages = document.getElementById("chatMessages");
       var newMessage = document.createElement("div");
       newMessage.className = "message";
       newMessage.innerHTML = "<strong>" + sender + ":</strong> " + message;
       chatMessages.appendChild(newMessage);
    
       // Faire défiler la boîte de dialogue vers le bas
       chatMessages.scrollTop = chatMessages.scrollHeight;
     }

  //feu d'artifice 
  function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");
  
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
  
    const x = Math.random() * screenWidth;
    const y = Math.random() * screenHeight;
  
    firework.style.left = x + "px";
    firework.style.top = y + "px";
  
    document.getElementById("fireworks").appendChild(firework);
  
    setTimeout(() => {
      firework.remove();
    }, 2000);
  }
  
  setInterval(() => {
    createFirework();
  }, 500);
  

// Récupérer la date de la prochaine CAN (13 janvier 2024)

