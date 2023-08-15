Page Object Model (POM) je návrhový vzor v test automatizácii, ktorý slúži na organizáciu a správu automatizovaných testov v testovacej sade. Tento vzor zabezpečuje oddelenie testovacieho kódu od samotnej implementácie testovaných stránok.


Konkrétne, POM rozdeľuje testovanie webovej aplikácie na dva oddelené kódy:

Testovací kód: tento kód zahŕňa logiku testovania, ako sú interakcie s webovými stránkami, overenie správnosti vykonania akcií a overenie výsledkov testovania.
Kód objektov stránky (Page Objects): tento kód zahŕňa definície objektov, ktoré predstavujú prvky na webovej stránke (napr. tlačidlá, polia na vstupe, odkazy atď.) a ich správanie. Každý objekt stránky má svoju vlastnú triedu, ktorá implementuje metódy pre interakciu s príslušnými prvky na stránke.

Výhodou použitia POM je to, že testovací kód sa stáva jednoduchším a ľahšie udržiavateľným, pretože neobsahuje žiadne informácie o interakcii s prvkami na webovej stránke. Kód objektov stránky poskytuje abstraktnú reprezentáciu prvkov na webovej stránke, ktorá je potom využívaná testovacím kódom. Tento prístup umožňuje jednoduchšiu údržbu automatizovaných testov v prípade zmien na webovej stránke, pretože zmeny sa robia len v kóde objektov stránky.