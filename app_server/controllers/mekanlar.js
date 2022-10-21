var express = require("express");

/* GET home page. */
const anaSayfa = function (req, res, next) {
  res.render("anasayfa", {
    baslik: "Anasayfa",
    sayfaBaslik: {
      siteAd: "MekanBul",
      slogan: "Yakınlardaki Mekanları Bul!",
    },
    mekanlar: [
      {
        ad: "Anadolu Pide",
        puan: 4,
        adres: "Centrum Garden AVM",
        imkanlar: ["pide", "kebap", "künefe"],
        mesafe: "10km",
      },
      {
        ad: "Mc Donald's",
        puan: 3,
        adres: "İyaş Park AVM",
        imkanlar: ["Kahve", "Çay", "Kek"],
        mesafe: "5km",
      },
      {
        ad: "Domino's Pizza",
        puan: 5,
        adres: "Isparta",
        imkanlar: ["pizza", "suffle"],
        mesafe: "12km",
      },
    ],
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekanbilgisi", {
    baslik: "Mekan Bilgisi",
    mekanBaslik: "Anadolu Pide",
    mekanDetay: {
      ad: "Anadolu Pide",
      puan: "4",
      adres: "Centrum Garden",
      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "9:00",
          kapanis:"23:00",
          kapali: false,
        },
        {
          gunler: "Cumartesi-Pazar",
          acilis: "8:00",
          kapanis: "22:00",
          kapali: false,
        },
      ],
      imkanlar: ["pide", "kebap", "künefe", "Salata"],
      koordinatlar: {
        enlem: "37.7",
        boylam: "30.5",
      },
      yorumlar: [
        {
          yorumYapan: "Yusuj206",
          yorumMetni: "Fena pide yapiyür ha.",
          tarih: "20 Ekim 2022",
          puan: "4",
        },
      ],
    },
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};