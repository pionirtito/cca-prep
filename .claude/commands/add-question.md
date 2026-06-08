---
description: Dodaj novo pitanje u bazu (uz proveru duplikata i ažuriranje glossary-ja)
argument-hint: nalepi tekst pitanja sa opcijama, tacnim odgovorom i objasnjenjem
---

Korisnik želi da doda pitanje u CCA-F bazu. Prati radni tok iz `CLAUDE.md` precizno:

1. Parsiraj uneti sadržaj: tekst pitanja, opcije A–D, tačan odgovor (ako je dat),
   odgovor korisnika (ako je dat), i zvanično objašnjenje (ako je dato).
2. Odredi domen (1–5) iz teme. Ako nije jasno, pitaj.
3. Proveri duplikate kroz sve `data/domain*.json` poređenjem teksta pitanja.
   Ako već postoji, NE dupliraj — javi korisniku i ponudi da dopuniš `claude_notes`/glossary.
4. Ako je novo: dodeli sledeći slobodan `id`, popuni šemu, izračunaj `status`.
5. Napiši `claude_notes` na srpskom — kratko objasni zašto je tačan odgovor tačan i koje
   su zamke u pogrešnim opcijama.
6. Ažuriraj `glossary.json` (dvosmerno, vidi CLAUDE.md).
7. Validiraj JSON. Prikaži korisniku šta si dodao.

Argument korisnika: $ARGUMENTS
