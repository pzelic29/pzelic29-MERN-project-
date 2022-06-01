# Projektne faze
 - Opis projekta
 - Početna struktura aplikacije
 - Prototip
 - Konzultacije
 - Finalna verzija
 - Obrana projekta
#Opis projekta
Potrebno je napisati kratki opis projekta. Opis mora sadržavati popis funkcionalnosti koje će biti implementirane (npr. "prijava korisnika", "unos novih poruka", "pretraživanje poruka po autoru" itd...) Napraviti ću aplikaciju za praćenje osobnih prihoda i rashoda. Kroz aplikaciju će se moći ...

# Početna struktura aplikacije
Potrebno je inicijalizirati početnu strukturu backend i frontend aplikacija. Aplikacije moraju biti u odvojenim mapama koje su već inicijalizirane. Ukoliko radite aplikaciju sa statičkim frontend sadržajem, onda u mapi mora biti izvorni kôd aplikacije

# Prototip
U ovoj fazi bi trebali imati "grubu" verziju svoje aplikacije. Ova verzija bi trebala imati implementirane osnovne funkcionalnosti koje su navedene u opisu projekta. Ne očekuje se da su implementirane SVE funkcionalnosti niti da su postojeće funkcionalnosti potpuno ispravne.

# Konzultacije
Nakon izrade prototipa potrebno se javiti nastavniku za termin konzultacija. Na konzultacijama ćete ukratko pokazati svoj prototip te će se po potrebi napraviti modifikacija početnih zahtjeva. Dovršeni projekti bez ove faze neće biti prihvaćeni.

# Finalna verzija
Nakon demonstracije prototipa možete nastaviti sa razvojem aplikacije i implementacijom svih funkcionalnosti. Prilikom razvoja potrebno je voditi dnevnik aktivnosti prema zadanim uputama.

# Obrana projekta
Zadnja faza je obrana projekta - nakon završetka finalne verzije svoje aplikacije javite se nastavniku za dogovor oko termina obrane projekta.

# Opis projekta
Ideja je napraviti aplikaciju za djeljenje najdražih mjesta koje je korisnik posjetio ili želi posjetiti(atrakcije,znamenitosti,muzeji,kafići,restorani) s drugim korisnicima. Svojevrsna Places to do lista.Korisnik će moći gledati,uređivati, brisati i dodavati nova mjesta, ali neće moći brisati ili uređivati mjesta drugih korisnika(moći će ih samo pregledavati). Samo logirani korinisci će moći dodavati nova mjesta. Biti će omogućena autentifikacija i autorizacija korisnika. Projekt će imati nekoliko stranica homepage(prikaz svih korisnika)-svaki korisnik će imati prikazanog avatara,username i broj mjesta koje je dodao, login/signup,stranica za dodavanje novih mjesta, stranica za pregled mjesta korisnika. Klikom na korisnika prikazat će se njegova mjesta(svako mjesto će imati sliku, kratki i duži opis, lokaciju, GPS - prikaz na karti (realizacija preko API-ja)), mogućnost brisanja i uređivanja-klikom na uredi korisniku će se prikazati strnica za uređivanje mjesta. Stranica sa Loginom/Signupom će imati switch mode ovisno o tome postoji li korisnik ili ne postoji.

### Tehnologije
* Frontend - React,Bootstrap
* Backend - Node.js,Express
* Baza - MongoDB
### Popis funkcionalnosti
* Login/SignUp
* Dodavanje mjesta 
* Brisanje mjesta
* Uređivanje mjesta
* Pregled na Google kartama
