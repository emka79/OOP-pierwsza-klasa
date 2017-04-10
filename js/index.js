function Telefon(marka, cena, kolor, rocznik){
        this.marka = marka;
        this.cena = cena;
        this.kolor = kolor;
        this.rocznik = rocznik;
    }

Telefon.prototype.printInfo = function(){
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + " a rocznik to " + this.rocznik + ".");
};
        
var GalaxyS6 = new Telefon('Samsung', 2500, 'czarny', 2012);  
var Iphone6S = new Telefon('Apple', 2600, 'złoty', 2016);
var OnePlusOne = new Telefon('OnePlusOne', 1300, 'czarny', 2014);


GalaxyS6.printInfo();
Iphone6S.printInfo();
OnePlusOne.printInfo();


