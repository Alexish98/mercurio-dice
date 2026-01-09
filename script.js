const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
let messages = ["Hola, mamaaaa, miau. Hoy me he despertado, he comido, he dormido y he vuelto a comer pensando en ti. Ha sido un día muy duro. Te quiero, miau.", 
    "Si hoy no te digo ‘te quiero’, no es porque no te quiera… es porque estaba durmiendo. Pero ahora sí: TE QUIERO, MIAU.",
    "Mama, recuerda beber agua, miau. Yo no lo hago, pero tú sí deberías. Alguien tiene que ser responsable en esta familia.",
    "Dicen que soy independiente, miau. Mentira. Soy dependiente de ti, de la comida y de llenar la ropa de pelo.",
    "Cuando sonríes, miau, yo ronroneo a distancia. No sé cómo funciona la física, pero confía en mí.",
    "He decidido perdonarte por irte… pero solo porque sé que volverás con regalos, miau.",
    "Si hoy el mundo pesa demasiado, miau, déjalo un rato en el suelo y ven a acariciarme. Yo lo vigilo.",
    "Mama, no olvides que eres muy valiente. Yo lo sé porque yo solo soy valiente cuando hay comida cerca, miau.",
    "A veces no respondo cuando me llamas, miau. No es desprecio. Es personalidad.",
    "Si alguien te dice qué tienes que hacer con tu vida, miau, ignóralo. Haz como yo: duerme primero y decide luego. Muerdele también",
    "Te mando un abrazo invisible, miau. Si no lo notas es porque soy muy sigilosa.",
    "Recuerda: si algo sale mal hoy, siempre puedes volver a intentarlo mañana… o echarte una siesta. Lo segundo suele ser más efectivo, miau.",
    "Mama, eres mi cosa favorita de este mundo. No se lo digas a la comida, miau.",
    "Aunque no esté contigo ahora, miau, sigo ocupando el 90% de tu corazón. El otro 10% lo dejo para otras personas, porque soy muy generosa.",
    "Si hoy te sientes cansada, miau, es porque has querido mucho. Eso gasta energía. Eres una super deportista, eh?",
    "Buenas noches, mama. Sueña bonito. Yo vigilo la casa… a 11.000 km de distancia… durmiendo. Miau.",
    "Mama, si algún día dudas de ti, miau, mírame a mí: soy perfecta y he salido de ti. ¿Coincidencia? No lo creo.",
    "Pase lo que pase ahí fuera, miau, aquí siempre tendrás un ronroneo esperándote. Siempre.",
    "Me gusta esa conción que dice: Por eso esperaba con la carita empapada que llegaras con Rosis, con mil Rosis para mi. Porque ya sabes que me encantan esas locas no me importa si es muy tonta, soy asiiiiii.",
    "¿Dia de autoestima baja? Recuerda, soy una princesa. Es significa que tu eres la reina. Ya sabes... :P",
]

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = usernameInput.value.toLowerCase().trim();
  const password = passwordInput.value.toLowerCase();

  if (username === "rosi" && password === "maduixa") {
    // hide login
    document.getElementById("login-area").style.display = "none";

    // get today's date as a string (e.g., "2025-11-23")
    const today = new Date().toISOString().split("T")[0];

    // check if we already stored a message for today
    let dailyMessage = localStorage.getItem("dailyMessage");
    let dailyMessageDate = localStorage.getItem("dailyMessageDate");

    if (dailyMessageDate === today && dailyMessage) {
      // already have today's message
      document.getElementById("wisdom").textContent = dailyMessage;
    } else {
      // pick a random message
      const randomIndex = Math.floor(Math.random() * messages.length);
      dailyMessage = messages[randomIndex];

      // save it for today
      localStorage.setItem("dailyMessage", dailyMessage);
      localStorage.setItem("dailyMessageDate", today);

      sentenceArea.textContent = dailyMessage;
    }

    // show the sentence area
    sentenceArea.style.display = "block";

  } else {
    document.getElementById("wrong-message").textContent =
      "Miau! Usuario o contraseña incorrectos! Miau!";
  }

});
