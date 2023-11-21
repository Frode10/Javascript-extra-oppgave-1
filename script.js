let output = document.getElementById("fnavn-output"); // output fornavn
let fnavnInput = document.getElementById("fnavn"); //fornavn input
let skjema = document.getElementById("skjema"); // skjema / add.eventlistener
let farge = document.getElementById("velgFarge"); // farge på tekst / add.eventlistener
let gebursdag = document.getElementById("gebursdag");

// Lytter til endringer på select dropdown funksjon.
// hvis noe endrer seg (change) så kjør function velgFarge
farge.addEventListener("change", velgFarge);
gebursdag.addEventListener("change", gebursdag);

skjema.addEventListener("submit", function (skjema) {
  // Hindrer at siden blir lastet på nytt/sendt videre ved submit.
  skjema.preventDefault();

  // henter value til 'fnavn' fra skjema.
  // Fnavn variabel 1. gang definert her
  let fnavn = fnavnInput.value;

  let gebursdagDato = new Date(gebursdag.value); // funksjon formatDate

  // Output fnavn ved submit
  output.innerText = `Riktig god jul, hilsen ${fnavn} ${formatDate(
    gebursdagDato
  )}`;

  // Tøm input field ved submit
  fnavnInput.value = "";
});

function velgFarge() {
  // velger velgFarge select og henter value (farge)
  // satt default selected i HTML select dropdown, viser "Velg farge"
  let velgFarge = document.getElementById("velgFarge").value;

  if (velgFarge === "rod") {
    output.style.color = "darkred";
  } else if (velgFarge === "gronn") {
    output.style.color = "darkgreen";
  } else if (velgFarge === "blaa") {
    output.style.color = "darkblue";
  } else {
    output.style.color = "grey";
  }
}

// kaller farge funksjon
velgFarge();

// let gebursdagDato = new Date(gebursdag.value); // se skjema arrow function.
// Funksjon for å formatere dato til "dd.mm.yy"
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Måneder er null-indeksert, derfor +1
  const year = date.getFullYear().toString().slice(-2); // Hent de siste to sifrene av året

  return `${day}.${month}.${year}`;
}

// Output fnavn ved submit
// output.innerText = `Riktig god jul, hilsen ${fnavn} ${formatDate(gebursdagDato)}`;
