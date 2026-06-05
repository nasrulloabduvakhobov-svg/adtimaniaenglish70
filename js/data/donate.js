/* ===== Donate / Support configuration =====
   Ilovani qo'llab-quvvatlash uchun to'lov havolalari.
   - name:   hamyon nomi
   - icon:   ko'rsatiladigan emoji
   - note:   qo'shimcha matn (masalan karta yoki "Humo • TBC ••• 2612")
   - holder: qabul qiluvchi ism-familiyasi
   - link:   to'lov havolasi ("Ochish" tugmasi shu havolaga o'tkazadi)
   - number: (ixtiyoriy) nusxa olish uchun raqam; bo'lsa "Nusxa olish" tugmasi chiqadi
   enabled: false qilsangiz, qo'llab-quvvatlash tugmalari yashiriladi.
*/
window.ME70_DONATE = {
  enabled: true,
  wallets: [
    {
      id: "click",
      name: "Click",
      icon: "🔵",
      note: "Humo • TBC ••• 2612",
      holder: "NASRULLO ABDUVAKHOBOV",
      link: "https://my.click.uz/clickp2p/DA2CFEAC8CEF8821381B11BEFBD1FD5003154C2832945144350F1F0B0F8440A1",
      number: ""
    },
    {
      id: "paynet",
      name: "Paynet",
      icon: "🟢",
      note: "",
      holder: "NASRULLO ABDUVAKHOBOV",
      // Eslatma: domenni Paynet ilovasidan olingan to'liq havola bilan tekshiring.
      link: "https://app.paynet.uz/shared-transfer-qr/41f8dec3-f8fd-44c4-abc7-20c28863cb35",
      number: ""
    }
  ]
};
