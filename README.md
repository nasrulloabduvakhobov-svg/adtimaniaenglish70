# MedLingua

Xorijiy tillarni o'rganish uchun web ilova — **Grammar, Reading, Vocabulary, Tests** va **Grammar Tests** bo'limlari. Interfeys **o'zbek, ingliz va rus** tillarida. Statik (build talab qilmaydi): istalgan brauzerda va Telegram ichida ishlaydi, hatto **offline** ham.

🔗 Community havolasi: `adtimaniaenglish70`
📣 Telegram kanal: https://t.me/Med_Lingua
💬 Aloqa: https://t.me/khusanboyevc

---

## Bo'limlar

| Bo'lim | Tavsif |
|---|---|
| 📘 **Grammar** | 16 ta ingliz zamoni — qoida, formula (tasdiq/inkor/so'roq), qachon ishlatilishi, belgi so'zlar va misollar (3 tilda) |
| 📖 **Reading** | Tibbiyot/salomatlik mavzusidagi matnlar 5 darajada (Elementary, Pre-Intermediate, Intermediate, Upper-Intermediate, Advanced) + comprehension testlari |
| 🎧 **Listening** | 70 ta tinglash mashqi (35 tibbiy + 35 umumiy). Matn yashirin, brauzer TTS orqali tinglanadi, so'ng savollar |
| ✍️ **Writing** | 30 ta yozish topshirig'i (15 tibbiy + 15 umumiy): ko'rsatma, foydali iboralar, so'z sanagich, avtomatik saqlash va namuna javob |
| 🎙️ **Speaking** | 30 ta gapirish mavzusi (15 tibbiy + 15 umumiy): savollar, iboralar, namuna talaffuz (TTS) va o'z ovozini yozib olish (offline) |
| 🗂️ **Vocabulary** | Muloqot, tibbiyot va eng ko'p ishlatiladigan ingliz so'zlari (en/uz/ru) — qidiruv, kategoriya filtri, "o'rganildi" ⭐ belgisi |
| ✅ **Tests** | Lug'atdan **avtomatik** 20 talik testlar (1–20, 21–40, ...). Lug'at o'sgani sayin testlar soni avtomatik ko'payadi |
| 🧠 **Grammar Tests** | Har bir zamon uchun **20 savollik 10 ta test** (160 test / 3200+ savol), generator orqali |

Maqsad: foydalanuvchi zamonlarni va so'zlarni yoddan biladi, o'qish mahoratini oshiradi. Yutuqlar (o'rganilgan so'z, bajarilgan test, o'qilgan matn, o'rtacha ball) brauzerda saqlanadi.

### Grammar Tests qanday ishlaydi
Savollar generator orqali yasaladi: ega + fe'l + vaqt iborasi kombinatsiyasidan grammatik to'g'ri cloze-gap tuziladi, masalan: `He ___ (examine) the patient every day.` → to'g'ri javob `examines`. Noto'g'ri variantlar boshqa zamonlardagi shakllardan olinadi. Har test deterministik (bir xil 20 savol), variantlar tartibi aralashadi.

---

## Mahalliy ishga tushirish

```bash
python3 -m http.server 8080
# yoki
npx serve .
```
Brauzerda `http://localhost:8080`. (Service Worker / offline faqat `http(s)` da ishlaydi.)

---

## Deploy — bepul jonli havola

### GitHub Pages (havola ichida `adtimaniaenglish70` bo'ladi)
1. Repo: **`adtimaniaenglish70`**.
2. **Settings → Pages → Source: Deploy from a branch → `main` / `root`**.
3. Havola: `https://<username>.github.io/adtimaniaenglish70/`

### Netlify (1 daqiqa)
https://app.netlify.com/drop ga papkani tashlang.

---

## Telegram'ga ulash
- **Oddiy:** jonli havolani kanalga tashlang.
- **Mini App:** [@BotFather](https://t.me/BotFather) → `/newapp` → **Web App URL** sifatida havolani kiriting.

---

## Kontentni kengaytirish (kod bilmasdan)
- **Lug'at:** `js/data/vocabulary.js` — yangi `{ en, uz, ru, cat, pos }` qo'shing; **Tests avtomatik ko'payadi** (har 20 so'zga 1 test).
- **Reading:** `js/data/reading.js` — `level` = `elementary` | `pre` | `inter`, har matnga `questions`.
- **Zamon qoidalari:** `js/data/grammar.js`.
- **Grammar testlari kengligi:** `js/data/grammarTests.js` (`verbs`, `subjects`, `times`).
- **Interfeys matnlari:** `js/i18n.js` (uz/en/ru).

---

## Texnik tafsilotlar
- Sof HTML + CSS + Vanilla JS (framework yo'q, build yo'q).
- Hash-routing: `#/grammar`, `#/reading/int-1`, `#/tests/3`, `#/grammar-tests/present-simple/1`.
- PWA: `manifest.json` + `sw.js` (o'rnatish + offline).
- Telegram Web App SDK (mavzu/expand), bo'lmasa ham ishlaydi.
- Dark / Light mavzu, to'liq mobil moslik.


---

## Brend materiallari (assets/)

| Fayl | Tavsif | Ishlatish |
|---|---|---|
| `icon.svg` | Ilova/favicon ikonkasi | Brauzer va PWA |
| `assets/logo-mark.svg` | Faqat emblema (kvadrat) | Kanal avatari, profil rasm |
| `assets/logo-full.svg` | Emblema + "MedLingua" matni | Kanal shapkasi, hujjatlar |
| `assets/post-banner.svg` | 1080×1080 post banneri | Telegram/Instagram posti |

**SVG ni PNG ga aylantirish (post uchun):**
1. SVG faylni brauzerda oching.
2. Skrinshot oling **yoki** onlayn `svg2png` xizmatidan foydalaning (masalan cloudconvert).
3. Telegram'ga rasm sifatida joylang.

Ranglar: `#10b8b4` (teal) → `#6366f1` (indigo). Shrift: Arial/Helvetica (bold).
