import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';


@Component({
    selector: 'app-uye-ol',
    templateUrl: './uye-ol.page.html',
    styleUrls: ['./uye-ol.page.scss'],
})
export class UyeOlPage implements OnInit {

    ad: string;
    soyad: string;
    sifre: string;
    okulNo: any;
    oNo:any;

    constructor(private angularFireAuth: AngularFireAuth, private router: Router,private alertController:AlertController) {
    }

    ngOnInit() {
    }

    noGenerator() {
        let result = '';
        let characters = '123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < 8; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.okulNo = result;
    }

    async reg() {
        try {
            await this.noGenerator();
            this.oNo = this.okulNo;
            this.okulNo = this.okulNo + '@ankara.edu.tr';
            await this.angularFireAuth.createUserWithEmailAndPassword(this.okulNo, this.sifre).then(() => console.log('Kayıt tamamlandı'));
            await this.alert("Ad: "+ this.ad +" Soyad: "+ this.soyad,"Okul No: "+this.oNo)
            await this.router.navigateByUrl('giris');
        }catch (hata){
            await this.alert("Opps!",hata.message);
        }

    }
     async alert(header: string, message: string) {
        const alert = await this.alertController.create({
            header, message, buttons: ['OK']
        });

        await alert.present();
    }

}
