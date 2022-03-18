const number = Math.ceil(100*Math.random());
console.log(number);

const picture = document.getElementById('sg-pic');
const link = document.getElementById('sg-link');
const value = document.getElementById('sg-value');

if (number>95) {
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/10794/16347/0x0.jpg"; //suwałki
  link.innerHTML="Wystawa w budynku Starej Łaźni / Exhibition in the building of the Old Bathhouse";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/rewitalizacja-starej-lazni-w-suwalkach.html";
  value.innerHTML="5 445 398,88 zł";
} else if (number>90){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/10768/16273/0x0.jpg" // Kopernik
} else if (number>85){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/7635/12326/0x0.jpg" // Korycin
} else if (number>80){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/8761/13797/0x0.jpg"  //tartak
} else if (number>75){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/7367/11916/0x0.jpg"  //okna atlant
} else if (number>70){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/10797/16367/0x0.jpg"  //zalew w sokółce
} else if (number>65){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/10787/16295/0x0.jpg"  //bdk
} else if (number>60){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/10791/16322/0x0.jpg"  //bulwary w choroszczy
} else if (number>55){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/7199/11933/0x0.jpg" // PMKL
} else if (number>50){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/10792/16331/0x0.jpg" // domek qpro
} else if (number>45){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/8673/13703/0x0.jpg" // marand
} else if (number>40){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11679/17383/0x0.jpg"  // sokolka-dabrowa
} else if (number>35){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11013/16625/0x0.jpg"  // czapielowka
} else if (number>30){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11205/16852/0x0.jpg"  // covid
} else if (number>25){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/8679/13713/0x0.jpg"  // hajnowka od nowa
} else if (number>20){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/8688/17024/0x0.jpg"  // eurowash
} else if (number>15){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/8227/13099/0x0.jpg" // kulesze koscielne
} else if (number>10){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/8526/13482/0x0.jpg"  // szpital w hajnowce
} else if (number>5){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/7230/11694/0x0.jpg" // iwet
} else picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11110/16740/0x0.jpg"; //łomża centrum przesiadkowe
