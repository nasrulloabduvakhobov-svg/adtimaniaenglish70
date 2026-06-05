# MedEnglish70

**Tibbiyot uchun ingliz tili** — Grammar, Reading, Vocabulary va Tests. Interfeys **o'zbek, ingliz va rus** tillarida. Statik (build talab qilmaydi) web ilova: istalgan brauzerda va Telegram ichida ishlaydi, hatto **offline** ham.

🔗 Reja qilingan community havolasi: `adtimaniaenglish70`
📣 Telegram kanal: https://t.me/adtimania
💬 Aloqa: https://t.me/khusanboyevc

---

## Bo'limlar

| Bo'lim | Tavsif |
|---|---|
| **Grammar** | 16 ta ingliz zamoni — qoida, formula (tasdiq/inkor/so'roq), qachon ishlatilishi, belgi so'zlar va misollar (3 tilda) |
| **Reading** | Tibbiyot mavzusidagi matnlar 3 darajada (Elementary / Pre-Intermediate / Intermediate) + comprehension testlari |
| **Vocabulary** | Tibbiy va eng ko'p ishlatiladigan ingliz so'zlari (en/uz/ru), qidiruv, kategoriya filtri, "o'rganildi" yulduzchasi |
| **Tests** | Lug'atdan **avtomatik** 20 talik testlar (1–20, 21–40, ...). Lug'at o'sgani sayin testlar soni avtomatik ko'payadi |
| **Grammar Tests** | Har bir zamon bo'yicha alohida test (savollar aralashtiriladi) |

Yutuqlar (o'rganilgan so'z, bajarilgan test, o'qilgan matn, o'rtacha ball) brauzerda saqlanadi.

---

## Mahalliy ishga tushirish

Faqat statik fayllar. Oddiy server bilan:

```bash
# Python
python3 -m http.server 8080
# yoki Node
npx serve .
```

Keyin brauzerda `http://localhost:8080` ni oching.

> `index.html` ni to'g'ridan-to'g'ri ham ochsa bo'ladi, lekin Service Worker (offline) faqat `http(s)` da ishlaydi.

---

## Deploy — bepul jonli havola olish

### Variant A — GitHub Pages (tavsiya etiladi, havola `adtimaniaenglish70` ni o'z ichiga oladi)

1. GitHub'da **`adtimaniaenglish70`** nomli yangi (bo'sh) repozitoriya yarating.
2. Shu papkadagi fayllarni push qiling.
3. Repo → **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `root`**.
4. 1–2 daqiqada havola tayyor bo'ladi:
   ```
   https://<github-username>.github.io/adtimaniaenglish70/
   ```
   Shu havolani foydalanuvchilarga ulashing — istalgan brauzer va Telegram'da ochiladi.

### Variant B — Netlify (eng tez, 1 daqiqa)

1. https://app.netlify.com/drop ga kiring.
2. Shu papkani drag-and-drop qiling.
3. Darhol `https://<nom>.netlify.app` havolasi paydo bo'ladi (nomni sozlamalardan o'zgartirsa bo'ladi).

---

## Telegram'ga ulash

- **Oddiy yo'l:** jonli havolani (yuqoridagi) kanalga/postga tashlang — bosgan odam Telegram brauzerida ochadi.
- **Mini App (ilova ko'rinishida):** [@BotFather](https://t.me/BotFather) → bot yarating → `/newapp` (yoki bot menyusida **Menu Button → Web App URL**) → jonli havolani kiriting. Shunda foydalanuvchilar bot ichida tugma orqali ilovani ochadi.

---

## Kontentni kengaytirish

Barcha ma'lumotlar oddiy JS massivlarida — kod bilmasa ham qo'shsa bo'ladi:

- **Lug'at (3000 so'zgacha):** `js/data/vocabulary.js` — har bir qator:
  ```js
  { en: "word", uz: "so'z", ru: "слово", cat: "medical", pos: "n" },
  ```
  Yangi so'z qo'shsangiz, **Tests bo'limidagi testlar avtomatik ko'payadi** (har 20 so'zga 1 ta test).
- **Reading (70 matngacha):** `js/data/reading.js` — `level` qiymati `elementary` | `pre` | `inter`. Har matnga `questions` qo'shing.
- **Grammar testlari (zamoniga 30 tagacha):** `js/data/grammarTests.js` — tegishli zamon `id` siga savol qo'shing.
- **Interfeys matnlari:** `js/i18n.js` (uz/en/ru).

---

## Texnik tafsilotlar

- Sof HTML + CSS + Vanilla JS (framework yo'q, build yo'q) → har joyda ishlaydi.
- Hash-routing (`#/grammar`, `#/tests/1`, ...) — server sozlamasi shart emas.
- PWA: `manifest.json` + `sw.js` → telefonga "ilova" sifatida o'rnatish va offline ishlash.
- Telegram Web App SDK qo'llab-quvvatlanadi (mavzu/expand), lekin bo'lmasa ham ilova ishlayveradi.
- Dark / Light mavzu, to'liq mobil moslik.
