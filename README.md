# **Projekat Web Travel**
Jednostavna aplikacija za upravljanje rezervacijama putovanja kreirana pomoću MERN stack-a.
U aplikaciji se nalaze operacije koje su tražene u zahtjevu.

# Napomena
Frontend je urađen u React-u i urađen je samo za Usera, odnosno nema Admin Dashboarda. Backend je urađen u potpunosti
s tim što se sve njegove radnje izvršavaju pokretanjem API-a za unos, uređivanje i brisanje putovanja, komentara i korisnika.
Ja sam testirao API u Postmanu što ću također pokazati u kratkom video isječku. Za bazu sam koristio MongoDB gdje sam istu
kreirao i njome upravljao pomoću aplikacije Atlas. Sve je povezano u kodu, baza, frontend i backend. Upustvo za pokretanje
ću napisati u pasusu ispod. 

## Konfiguracija
Prije pokretanja same aplikacije potrebno je pomoću cmd-a ili terminala ući u folder backend naredbom `cd backend` te pokrenuti naredbu `npm i` ili `npm install`.
Nakon što se instaliraju svi moduli i paketi, potrebno je vratiti se nazad naredbom `cd..` te ući u folder frontend naredbom `cd frontend`
te pokrenuti instalaciju paketa naredbom `npm install`. Nakon što se instaliraju svi paketi u folderu frontend kucate naredbu `npm start`
gdje se pokreće frontend i otvara automatski na vašem web browseru, ako ne onda ukucate ručno link "localhost:3000". Da bi aplikacija radila u potpunosti potrebno je pokrenuti i backend i frontend dio. Nakon što ste pokrenuli frontend dio aplikacije, potrebno je da otvorite novi terminal pomoću Navigacijskog dugmeta Terminal->New Terminal, gdje se otvara novi terminal u kojem odlazite u folder backend
naredbom `cd backend`, a zatim kucate `npm run start-dev` te se pokreće backend dio aplikacije, odnosno serverski dio na url-u "localhost:5000". Na taj način ste uspješno pokrenuli aplikaciju i možete da upravljate njome preko frontend dijela na putanji "localhost:3000". U fajlu .env nalazi se link za bazu kreiranu u Altas aplikaciji. Baza se naziva dbtravel_250

"# webTravel-app" 
