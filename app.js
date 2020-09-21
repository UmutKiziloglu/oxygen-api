const request = require('node-superfetch');

class oxygenAPI {
  constructor(key) {

    this.key = key;

    if (!this.key) throw new Error('Key Girilmemiş!');
  }

  async saat() {
    const { body } = await request.get("https://api.oxygenbot.cf/api/saat?key=" + this.key);
    if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);
    return body;
  }
  async random_profil() {
    const { body } = await request.get("https://api.oxygenbot.cf/api/random-profil?key=" + this.key);
    if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);
    return body;
  }
  async covid19() {
    const { body } = await request.get("https://api.oxygenbot.cf/api/covid19?key=" + this.key);
    if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);
    return body;
  }
  async steam(oyun) {
    if (!oyun) throw new Error("Oyun İsmi Giriniz!")
    const { body } = await request.get("https://api.oxygenbot.cf/api/steam?q=" + q + "&key=" + this.key);
    if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);
    return body;
  }
  async sifre(lenght) {
    if (!lenght) throw new Error("Şifre Uzunluğu Giriniz!")
    const { body } = await request.get("https://api.oxygenbot.cf/api/sifre?q=" + lenght + "?key=" + this.token);
    if (body.error) throw new Error('Bir sorun oluştu;\n' + body.error);
    return body.cikti
  }
  async pokedex(pokemon) {
    if (!pokemon) throw new Error("Pokemon İsmi Giriniz!")
    const { body } = await request.get("https://api.oxygenbot.cf/api/steam?q=" + pokemon + "&key=" + this.key);
    if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);
    return body;
  }
  async havadurumu(sehir) {
    if (!sehir) throw new Error("Şehir İsmi Giriniz!")
    const { body } = await request.get("https://api.oxygenbot.cf/api/havadurumu?q=" + sehir + "&key=" + this.key);
    if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);
    return body;
  }
  async resim(type, isim) {
    if (!type) throw new Error("Tip Giriniz!")

    if (type === "search") {
      if (!isim) throw new Error("İsim Giriniz!")
      const { body } = await request.get("https://api.oxygenbot.cf/api/unsplash?type=" + "search" + "&q=" + isim + "&key=" + this.key);
      if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);
      return body;
    }
    if (type === "random") {
      const { body } = await request.get("https://api.oxygenbot.cf/api/unsplash?type=" + "random" + "&key=" + this.key);
      if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);
      return body;
    }
  }
  async ceviri(kelime, dil1, dil2) {
    if (!kelime) throw new Error("Kelime Giriniz!")
    if (!dil1) throw new Error("Birincil Dil Giriniz!")
    if (!dil2) throw new Error("İkincil Dil Giriniz!")

    const { body } = await request.get("https://api.oxygenbot.cf/api/ceviri?q=" + kelime + "&dil1=" + dil1 + "&dil2=" + dil2 + "&key=" + this.key);
    if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);
    return body;
  }
  async sondakika() {
    if (!kelime) throw new Error("Kelime Giriniz!")
    if (!dil1) throw new Error("Birincil Dil Giriniz!")
    if (!dil2) throw new Error("İkincil Dil Giriniz!")

    const { body } = await request.get("https://api.oxygenbot.cf/api/sondakika" + "&key=" + this.key);
    if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);
    return body;
  }
}
module.exports = oxygenAPI;