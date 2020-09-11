const request = require('node-superfetch');

class oxygenAPI {
  constructor(key) {
 
  this.key = key;  
    
  if(!this.key) throw new Error('Key Girilmemiş!');
 }
  
  async saat() {
  const { body } = await request.get("https://api.oxygenbot.cf/api/saat?key="+ this.key);
  if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);  
  return body;
  }
  async steam(q) {
    const { body } = await request.get("https://api.oxygenbot.cf/api/steam?q="+ q +"&key="+ this.key);
    if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);  
    return body;
    }
    async steam(q) {
      const { body } = await request.get("https://api.oxygenbot.cf/api/steam?q="+ q +"&key="+ this.key);
      if (body.error) throw new Error('Bir Problem Çıktı : ' + body.error);  
      return body;
      }
      async sifre(lenght) {
        if (!lenght) throw new Error("Şifre oluşturucu genişliği girilmedi!")
        const { body } = await request.get("https://api.oxygenbot.cf/api/sifre"+ lenght +"?key="+ this.token);
          if (body.error) throw new Error('Bir sorun oluştu;\n'+ body.error); 
        return body.cikti
     }
}
module.exports = oxygenAPI;