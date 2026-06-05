/* ===== Donate / Support configuration =====
   Ilovani qo'llab-quvvatlash uchun hamyon ma'lumotlari.
   >>> RAQAMLARNI VA QABUL QILUVCHI ISMINI O'ZINGIZNIKIGA O'ZGARTIRING <<<
   - number: karta yoki telefon raqami (foydalanuvchi nusxa oladi)
   - holder: qabul qiluvchi ism-familiyasi
   - type:   "card" yoki "phone" (faqat ko'rsatish uchun)
   - link:   (ixtiyoriy) to'lov havolasi bo'lsa, "Ochish" tugmasi chiqadi; bo'lmasa ""
   enabled: false qilsangiz, qo'llab-quvvatlash tugmalari yashiriladi.
*/
window.ME70_DONATE = {
  enabled: true,
  wallets: [
    { id: "uzum",   name: "Uzum Bank", icon: "🟣", type: "card",  number: "8600 0000 0000 0000", holder: "ISM FAMILIYA", link: "" },
    { id: "click",  name: "Click",     icon: "🔵", type: "phone", number: "+998 90 000 00 00",   holder: "ISM FAMILIYA", link: "" },
    { id: "paynet", name: "Paynet",    icon: "🟢", type: "phone", number: "+998 90 000 00 00",   holder: "ISM FAMILIYA", link: "" }
  ]
};
