const number = Math.ceil(23*Math.random());
console.log(number);

const picture = document.getElementById('sg-pic');
const desc = document.getElementById('sg-desc');
const link = document.getElementById('sg-link');
const value = document.getElementById('sg-value');

if (number>22) {
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17894/0x0.jpg";
  picture.alt="Wystawa w budynku Starej Łaźni";
  desc.innerText="Rewitalizacja starej łaźni oraz bulwarów nad rzeką Czarna Hańcza w Suwałkach";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/rewitalizacja-starej-lazni-w-suwalkach.html";
  value.innerHTML="5 445 398,88 zł";
} else if (number>21){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17893/0x0.jpg";
  picture.alt="Dziecko maluje farbami na szkle";
  desc.innerText="Zbuntowane Anioły. Kreatywne i utalentowane";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/zbuntowane-anioly-kreatywne-i-utalentowane.html";
  value.innerHTML="1 755 250,68 zł";
} else if (number>20){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17892/0x0.jpg";
  picture.alt="Sala biblioteczna z regałami pełnymi książek.";
  desc.innerText="Fundusze europejskie odmieniły Bibliotekę Publiczną Miasta i Gminy Łapy";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/fundusze-europejskie-odmienily-biblioteke-publiczna-miasta-i-gminy-lapy.html";
  value.innerHTML="1 925 764,20 zł";
} else if (number>19){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17891/0x0.jpg";
  picture.alt="Wnętrze Gacówki z ceglanym piecem i restauracyjnymi stolikami";
  desc.innerText="Miejsce z klimatem do kulinarnych przygód";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/miejsce-z-klimatem-do-kulinarnych-przygod.html";
  value.innerHTML="1 167 231,05 zł";
} else if (number>18){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17890/0x0.jpg";
  picture.alt="Kolorowe i atrakcyjne stanowiska do nauki poprzez zabawę";
  desc.innerText="Epi-Centrum Nauki";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/laboratorium-mlodego-mistrza-i-odkrywcy-w-bialymstoku.html";
  value.innerHTML="17 444 844,44 zł";
} else if (number>17){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17889/0x0.jpg";
  picture.alt="Wystawa archeologiczna w przeszklonym pawilonie";
  desc.innerText="Park kulturowy Korycin - Milewszczyzna";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/park-kulturowy-korycin---milewszczyzna.html";
  value.innerHTML="4 613 958,10 zł";
} else if (number>16){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17888/0x0.jpg";  //tartak
  picture.alt="Maszyna do pracy w tartaku";
  desc.innerText="Rozwój przedsiębiorstwa Tartak Kołodno";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/rozwoj-przedsiebiorstwa-tartak-kolodno.html";
  value.innerHTML="538 080,00 zł";
} else if (number>15){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17887/0x0.jpg";  //okna atlant
  picture.alt="Szyby w zakładzie produkującym okna.";
  desc.innerText="Okna na zdrowie firmy ATLANT";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/okna-na-zdrowie-firmy-atlant.html";
  value.innerHTML="950 932,80 zł";
} else if (number>14){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17886/0x0.jpg";  //zalew w sokółce
  picture.alt="Drewniany pomost nad zalewem";
  desc.innerText="Modernizacja terenu nad zalewem w Sokółce";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/modernizacja-terenu-nad-zalewem-w-sokolce.html";
  value.innerHTML="3 083 112,29 zł";
} else if (number>13){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17897/0x0.jpg";  //bdk
  picture.alt="Zbliżenie na przeszklone poręcze na piętrach budynku";
  desc.innerText="Rewitalizacja Bielskiego Domu Kultury";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/rewitalizacja-bielskiego-domu-kultury.html";
  value.innerHTML="5 837 166,31 zł";
} else if (number>12){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17885/0x0.jpg";  //bulwary w choroszczy
  picture.alt="Tężnia solankowa";
  desc.innerText="Budowa bulwarów choroszczańskich";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/budowa-bulwarow-choroszczanskich.html";
  value.innerHTML="1 520 435,53 zł";
} else if (number>11){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17884/0x0.jpg"; // PMKL
  picture.alt="Wystawa sztuki ludowe wewnątrz dworu – ceramika, sztuka drewniana";
  desc.innerText="Remont drewnianego dworu z Bobry Wielkiej";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/remont-drewnianego-dworu-z-bobry-wielkiej.html";
  value.innerHTML="1 201 299,85 zł";
} else if (number>10){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17883/0x0.jpg"; // domek qpro
  picture.alt="Domek noclegowy - widok z zewnątrz";
  desc.innerText="Domek letniskowy nad jeziorem Serwy";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/domek-letniskowy-nad-jeziorem-serwy.html";
  value.innerHTML="362 524,54 zł";
} else if (number>9){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17882/0x0.jpg"; // marand
  picture.alt="Zbliżenie na panele fotowoltaiczne";
  desc.innerText="Elektrownia fotowoltaiczna MARAND-KOBYLIN";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/elektrownia-fotowoltaiczna-marand-kobylin.html";
  value.innerHTML="647 752,50 zł";
} else if (number>8){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17881/0x0.jpg";  // sokolka-dabrowa
  picture.alt="Widok na drogę wojewódzką";
  desc.innerText="Komfortowo i bezpiecznie z Sokółki do Dąbrowy Białostockiej";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/komfortowo-i-bezpiecznie-z-sokolki-do-dabrowy-bialostockiej.html";
  value.innerHTML="188 582 071,95 zł";
} else if (number>7){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17880/0x0.jpg";  // czapielowka
  picture.alt="Miejsce na ognisko przy rezerwacie Czapielówka";
  desc.innerText="Aktywny wypoczynek w otoczeniu zalewu Czapielówka w Czarnej Białostockiej";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/aktywny-wypoczynek-w-otoczeniu-zalewu-czapielowka-w-czarnej-bialostockiej.html";
  value.innerHTML="3 488 201,36 zł";
} else if (number>6){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17898/0x0.jpg";  // covid
  picture.alt="Ratowniczka medyczna idzie pomiędzy ambulansami";
  desc.innerText="Pomoc w walce z pandemią";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/srodki-na-walke-z-pandemia.html";
  value.innerHTML="50 545 084,58 zł";
} else if (number>5){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17879/0x0.jpg";  // hajnowka od nowa
  picture.alt="Dzieci bawią się na siatkowej konstrukcji";
  desc.innerText="Hajnówka OdNowa";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/hajnowka-odnowa.html";
  value.innerHTML="9 372 619,16 zł";
} else if (number>4){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17878/0x0.jpg";  // eurowash
  picture.alt="Zbliżenie na produkcję elementów myjni";
  desc.innerText="Technologia produkcji myjni bezdotykowych";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/technologia-produkcji-myjni-bezdotykowych.html";
  value.innerHTML="2 414 057,44 zł";
} else if (number>3){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17877/0x0.jpg"; // kulesze koscielne
  picture.alt="Odrestaurowane alejki i nowe ławki na placu w Kuleszach Kościelnych";
  desc.innerText="Zrewitalizowany plac w Kuleszach Kościelnych";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/zrewitalizowany-plac-w-kuleszach-koscielnych.html";
  value.innerHTML="465 676,61 zł";
} else if (number>2){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17876/0x0.jpg";  // szpital w hajnowce
  picture.alt="Sala pooperacyjna z aparaturą medyczną";
  desc.innerText="Szpital w Hajnówce zrealizował potężne inwestycje";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/szpital-w-hajnowce-zrealizowal-potezne-inwestycje.html";
  value.innerHTML="6 514 216,06 zł";
} else if (number>1){
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17875/0x0.jpg"; // iwet
  picture.alt="Zbliżenie na urządzenie";
  desc.innerText="Implanty chirurgiczne dla zwierząt firmy IWET";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/implanty-chirurgiczne-dla-zwierzat-firmy-iwet.html";
  value.innerHTML="94 315,00 zł";
} else {
  picture.src="https://rpo.wrotapodlasia.pl/resource/image/236/333/11980/17874/0x0.jpg"; //łomża centrum przesiadkowe
  picture.alt="Perony na dworcu autobusowym w Łomży";
  desc.innerText="Zrównoważona mobilność miejska w Łomży";
  link.href="https://rpo.wrotapodlasia.pl/pl/dowiedz_sie_wiecej_o_programie/poznaj_projekty/zrownowazona-mobilnosc-miejska-w-lomzy.html";
  value.innerHTML="29 047 649,05 zł";
}
