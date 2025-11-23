const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
let messages = ["Te quiero mucho y te echo de menos, mama! Miaaaaaaaauuuuuu! Llama a tu papa mucho para que pueda verte, miau miau.", 
    "Puede que estés muy estresada, miau. Y a veces parece que es imposible seguir adelante, miau miau. ¡Pero yo creo en tí! Si vas poco a poco, lo conseguirás. ¡Estoy segura! MIAAAAAAAAAAUUUUUUUUUUU!!!!!!!",
    "¡Oye, miau! Llevame a España contigo, miau. ¡Yo también quiero comer jamón, miau miau miau miau!",
    "Ven a visitarme pronto, mama ¡quiero dormir contigo y darte alergia! Puedes traer tambien a ese chico de la última vez. ¡Me gustaba morderle! Miau.",
    "Gracias por cuidarme, mama. Gracias por salvarme. Gracias por ser mi mama, miau",
    "Yo tambien estoy aprendiendo català. Cuando me lleves contigo comeré muchas butifarras. ¡I calçots també!",
    "A veces te equivocas, pero no pasa nada, miau! Porque aprendes, miau. La próxima vez lo haras mejor! No existe el fracaso porque todo te lleva más cerca de tu objetivo, miau. Siempre puedes volver a intentarlo. Como cuando intentava morder a ese chico que me visitó. Fracasé muchas veces, miau! Pero un dia conseguiré comerme su dedo!",
    "¿Te sientes sola, mama? Yo no, porque se que estas pensando en mí, miau. Por eso, no te sientas sola, porque yo siempre estoy pensando en ti, miauuuu!!!!",
    "Ese chico, Alex o cómo se llame, miau, es bastante estupido. Te hizo llorar así que tendré que comermelo. Traelo otra vez aqui y le castigaré como merece, miau!",
    "A veces cuando me siento triste pienso en todas las cosas buenas que me han pasado y me doy cuenta de que soy muy afortunada. Sobretodo porque te tengo a ti, miau. ¡¡Te quiero!!",
    "No tienes que llevar la carga tu sola, miau! Si te sientes triste, agobiada o enfadada puedes decirmelo, miau. No voy a decir nada, solo voy a hacerte compañia. Normalmente es suficiente, miau",
    "Aunque llueva mucho, el sol termina por volver. Nos echa de menos, igual que yo a ti. ¡Miau!",
    "Tengo un poco de envidia. Tienes muchas personas que te quieren mucho y te cuidan muy bien, miau. Pero supongo que no puedo quejarme, porque yo te tengo a tí, que eres la mejor! Miau!",
    "Al final todo sale bien. Incluso cuando sale mal, tambien sale bien. ¿Cómo?¿Que no tiene sentido? ¡Da igual! MIIIIIIIIIIAAAAAAAAAAUUUUUUUUUUU",
    "Cuando hagas pasta, recuerda echar un buen puñado de sal mientras el agua hierve, miau. ¡Si no quedará muy sosa!",
    "Los indices bursátiles están en un mal momento. Creo que no es un buen momento para invertir, miau. ¡Mejor comprame mas chuches!",
    "Si no me das 5 kilos de comida ahora mismo me como a Money. ¡Una princesa necesita estar bien alimentada, miau!",
    "媽媽，告訴爸爸給我多買點糖果。我吃膩了飼料和蟲。公主需要優質食物。",
    "Miau, miau, miau. Significa que te quiero. ¡Pero eso ya lo sabias!",
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