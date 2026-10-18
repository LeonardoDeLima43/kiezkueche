console.log("Kiezküche läuft!");

const restaurantName = "Kiezküche";
const adresse = "Wrangelstraße 42, 10997 Berlin";

const öffnungsZeiten = {
  montag: "Ruhetag",
  dienstag: "11:30-22:00 Uhr",
  mittwoch: "11:30-22:00 Uhr",
  donnerstag: "11:30-22:00 Uhr",
  freitag: "11:30-22:00 Uhr",
  samstag: "11:30-22:00 Uhr",
  sonntag: "11:30-22:00 Uhr",
};

// Restaurantname anzeigen
document.getElementById("restaurant-name").textContent = restaurantName;

// Adresse anzeigen
document.getElementById("restaurant-adresse").textContent = adresse;

// Öffnungszeiten anzeigen
document.getElementById("öffnungsZeiten").textContent =
  `Dienstag–Sonntag: ${öffnungsZeiten.dienstag}, Montag: ${öffnungsZeiten.montag}`;

// Begrüßung erstellen und anzeigen
const begruessung = `Willkommen in der ${restaurantName} – wir freuen uns auf dich!`;
document.getElementById("welcome-message").textContent = begruessung;
