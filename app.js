const request = require('node-superfetch');

class oxygenAPI {
  constructor(key) {
 
  this.token = key;  
    
  if(!this.key) throw new Error('[API] Key Girilmemiş!');
 }
  
  async saat() {
  const { body } = await request.get("https://api.oxygenbot.cf/api/saat?key="+ this.key);
  if (body.error) throw new Error('[API] Bir Problem Çıktı : ' + body.error);  
  return body;
  }
}
module.exports = oxygenAPI;