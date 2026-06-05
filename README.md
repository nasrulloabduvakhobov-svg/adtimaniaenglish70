# MedEnglish70

**Ingliz tili zamonlarini o'rganish** uchun web ilova — **Grammar** va **Grammar Tests** bo'limlari. Interfeys **o'zbek, ingliz va rus** tillarida. Statik (build talab qilmaydi): istalgan brauzerda va Telegram ichida ishlaydi, hatto **offline** ham.

🔗 Community havolasi: `adtimaniaenglish70`
📣 Telegram kanal: https://t.me/adtimania
💬 Aloqa: https://t.me/khusanboyevc

---

## Bo'limlar

| Bo'lim | Tavsif |
|---|---|
| 📘 **Grammar** | 16 ta ingliz zamoni — har birida qoida, formula (tasdiq/inkor/so'roq), qachon ishlatilishi, belgi so'zlar va misollar (3 tilda) |
| 🧠 **Grammar Tests** | Har bir zamon uchun **20 savollik 10 ta test** (jami **160 test / 3200+ savol**). Savollar avtomatik generatsiya qilinadi |

Maqsad: foydalanuvchi barcha zamonlarni **yoddan biladi** va mustahkam o'zlashtiradi. Yutuqlar (o'zlashtirilgan zamonlar, bajarilgan testlar, o'rtacha ball) brauzerda saqlanadi.

### Grammar Tests qanday ishlaydi
Savollar shablon emas — ular **generator** orqali yasaladi: ega (I, She, The doctor, ...) + fe'l (examine, treat, ...) + vaqt iborasi (every day, yesterday, by then, ...) kombinatsiyasidan grammatik to'g'ri gap tuziladi. To'g'ri javob — shu zamonga mos fe'l shakli, noto'g'ri variantlar (distraktorlar) esa boshqa zamonlardagi shakllar. Har bir test **deterministik** (har safar bir xil 20 savol), variantlar tartibi esa har gal aralashtiriladi.

---

## Mahalliy ishga tushirish

```bash
python3 -m http.server 8080
# yoki
npx serve .
```
Brauzerda `http://localhost:8080`.

> Service Worker (offline) faqat `http(s)` da ishlaydi.

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

- **Zamon qoidalari/misollari:** `js/data/grammar.js`
- **Testlar kengligi:** `js/data/grammarTests.js` — `verbs` ro'yxatiga fe'l, `subjects` ga ega, `times` ga vaqt iborasi qo'shsangiz, savollar xilma-xilligi avtomatik oshadi. `testsPerTense` (10) va `questionsPerTest` (20) sonlarini ham shu yerda o'zgartirish mumkin.
- **Interfeys matnlari:** `js/i18n.js` (uz/en/ru).

---

## Texnik tafsilotlar
- Sof HTML + CSS + Vanilla JS (framework yo'q, build yo'q).
- Hash-routing: `#/grammar`, `#/grammar-tests/present-simple/1`.
- Savol generatori (seeded RNG) → har test deterministik va o'ziga xos.
- PWA: `manifest.json` + `sw.js` → o'rnatish va offline.
- Telegram Web App SDK (mavzu/expand), bo'lmasa ham ishlaydi.
- Dark / Light mavzu, to'liq mobil moslik.
