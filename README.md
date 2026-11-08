# Quinara — interactieve ontwerppreview

Fictief merk, eigen browsergames, uitsluitend virtuele credits. Geen betaalfuncties,
geen uitkeerbare prijzen, geen externe spelintegraties. Alleen voor 18+.

## Bouwen en bekijken

```sh
python3 gen.py
python3 -m http.server 8742
```

Open `http://localhost:8742`. De generator bouwt 19 hoofdpagina's en 31 aparte
spelpagina's vanuit één catalogus. `style.css`, `app.js` en `games.js` zijn gedeelde
bronbestanden. De uitgegeven HTML en `catalog.json` worden meegecommit voor statische
hosting; pas die bestanden niet los aan.

## Pagina's

Home, Alle spellen, Nieuw, Slots, Jackpots, Crash & Arcade, Tafelspellen,
Live Casino, Bingo, Sport, Toernooien, Acties, Quinara Extra, Klantenservice,
Verantwoord spelen, Account, Inloggen, Registreren en Hulp bij inloggen.

## Spellen

- 10 thema's op een eigen 5×3-slotengine
- Quinara Wiel en Gameshows: eigen radengine
- Dauwdrop: acht rijen met willekeurige keuzes
- Hoger of Lager en Alle tafels: eigen kaartvergelijking
- Reactie: virtuele multiplier met cash-out
- Roulette: eigen kleurenrad met twaalf vakken
- Blackjack: vereenvoudigde eenentwintig
- Baccarat: vereenvoudigde vergelijking van twee handen
- Poker: Vijfkaarten Paar met één wisselbeurt
- 5 bingo-varianten op dezelfde engine (75 of 90 getallen)
- 6 fictieve sportvoorspellingen, nooit echte wedstrijden

De generieke tafelbenamingen beschrijven vereenvoudigde eigen demo's, geen
externe tafelproducten. Regels en uitbetalingstabellen staan bij iedere pagina.
Er is geen onafhankelijk gecertificeerd uitbetalingspercentage.

## Lokale demofuncties

- Demo-login: `demo@quinara.test` / `Quinara-Demo-2026`
- Gastspelen, credits resetten, favorieten en deelname-status
- Lokale demo-registratie; gebruik geen echte persoonsgegevens of wachtwoorden
- Sessiepauzeherinnering, niet bedoeld als bindende uitsluiting
- Contactformulier toont alleen een lokale bevestiging en verstuurt niets

Demo-accounts, wachtwoorden, credits en voorkeuren staan in localStorage: dit is
geen productie-authenticatie. Een hersteldienst, mailserver en synchronisatie
bestaan niet. Wissen kan via Account.

## Animatie en toegankelijkheid

CSS en Web Animations, zonder runtimebibliotheken. Verminderde beweging wordt
ondersteund. De drawer heeft focusbeheer, Escape, een focuslus en sluitknop.
Forms hebben labels; spelresultaten gebruiken live-regio's. De carrousel kan
worden gepauzeerd en staat bij verminderde beweging standaard stil.

## Verificatie

De browsercontroles in `tests/smoke.cjs` gebruiken Playwright als lokale testtool
(niet als onderdeel van de website). Ze controleren alle pagina's, login, zoeken,
menu, toernooiaanmelding, contact en elf engine-scenario's. Stel `BASE` in om
hetzelfde tegen een live preview uit te voeren. Bijvoorbeeld:

```sh
NODE_PATH=/pad/naar/playwright/node_modules node tests/smoke.cjs
```

Fonts komen van Google Fonts. Emoji-afbeeldingen verschillen per platform.
De GitHub Pages-submap wordt ondersteund door relatieve links; er is geen router
of serverconfiguratie nodig. Routes hebben de extensie `.html`.
