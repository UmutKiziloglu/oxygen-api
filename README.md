# oxygen-api'ye Hoşgeldiniz
Oxygen-api Modülü  api.oxygenbot.cf Altyapısını Kullanarak Farklı Bir Request Modülü Kullanmadan Kolaylık Sağlamaktır

# Kurulum

    npm install oxygen-api --save
Glitch için ise:

    pnpm install oxygen-api --save

# Kullanım
Main Dosyanınızın İçine Yazınız;
 

    const oxygenAPI =  require('oxygen-api')
	oxygen = new oxygenAPI("API_KEY");
	
	oxygenAPI.saat().then(saat=> {
	console.log(saat.data.bolge)
	console.log(saat.data.zamandilimi)
	console.log(saat.data.tamtarih)
	console.log(saat.data.gunyazilis)
	console.log(saat.data.gun)
	console.log(saat.data.hafta)
	console.log(saat.data.ay)
	console.log(saat.data.yil)
	console.log(saat.data.saat)
	console.log(saat.data.dakika)
	console.log(saat.data.saniye)
	})

## Bilgilendirme

 - Modülde Şuan Sadece Saat API'si Var Yakın Zamanda Tüm API'ler Aktarılacak
 - API Sitesi : api.oxygenbot.cf
 - Keyler Sadece Kurucu Tarafından Verilir
 - Kurucu :  ΘΧΨGΞΠ#1907 (312962543591096322)

