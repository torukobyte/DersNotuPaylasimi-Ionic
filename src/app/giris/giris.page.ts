import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-giris',
    templateUrl: './giris.page.html',
    styleUrls: ['./giris.page.scss'],
})
export class GirisPage implements OnInit {

    sifre: any;
    okulNo: any;
    oNo: any;

    constructor(private angularFireAuth: AngularFireAuth, private router: Router, private alertController: AlertController) {
    }

    ngOnInit() {
    }

    async log() {
        try {
            this.oNo = this.okulNo + '@ankara.edu.tr';
            await this.angularFireAuth.signInWithEmailAndPassword(this.oNo, this.sifre).then(() => console.log('giriş başarılı'));
            await this.alert('<<Önemli>>',"Sevgili öğrenciler,topluluk kurallarına aykırı paylaşımlar disiplin cezası ile sonuçlanacaktır")
            await this.router.navigateByUrl('home')
        }catch(hata){
            await this.alert("Opps!",hata.message)
        }


    }

    async alert(header: string, message: string) {
        const alert = await this.alertController.create({
            header, message, buttons: ['OK']
        });

        await alert.present();
    }

}
