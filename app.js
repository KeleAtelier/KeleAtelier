const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

function openGallery() {
  tg.openTelegramLink("https://t.me/TU_CANAL");
}

function openSocials() {
  tg.openLink("https://instagram.com/TU_USUARIO");
}

function contact() {
  tg.openTelegramLink("https://t.me/TU_USUARIO");
}
