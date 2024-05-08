const Hero = "Udyr";
const XP = Math.floor(Math.random() * 15000);
let Nivel = "";

if (XP >= 0 && XP <= 1000) {
  Nivel = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
  Nivel = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
  Nivel = "Prata";
} else if (XP >= 5001 && XP <= 7000) {
  Nivel = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
  Nivel = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
  Nivel = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
  Nivel = "Imortal";
} else if (XP >= 10001) {
  Nivel = "Radiante";
}

const Message = `O Herói de nome ${Hero} está no nível de ${Nivel}`
console.log(Message);
