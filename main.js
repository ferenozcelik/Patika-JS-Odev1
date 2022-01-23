let myName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");

let username = prompt("Adın:");

myName.innerHTML = `${username}`;

// İKİ FARKLI FONKSİYON

// 1. Yöntem:
function clock() {
  let locale = "tr-TR";

  let date = new Date();
  let time = date.toLocaleTimeString();
  let day = date.toLocaleDateString(locale, { weekday: "long" });
  myClock.innerHTML = `${time} ${day}`;
}
setInterval(clock, 1000);
// Her 1000 milisaniye yani her 1 saniyede bir clock() fonksiyonunu çalıştır
// Böylece her saniye fonksiyon çağrılacak ve time bilgisi güncellenecek

// 2. Yöntem:
// function clock() {
//   let date = new Date();
//   let sec = date.getSeconds();
//   let min = date.getMinutes();
//   let hrs = date.getHours();
//   let locale = "tr-TR";
//   let day = date.toLocaleDateString(locale, {weekday: "long"});

//   myClock.innerHTML = `${hrs}:${min}:${sec} ${day}`;
// }
// setInterval(clock, 1000);
