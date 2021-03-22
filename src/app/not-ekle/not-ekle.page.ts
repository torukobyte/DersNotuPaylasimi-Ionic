import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {AngularFirestore} from '@angular/fire/firestore';
import firebase from 'firebase';

@Component({
    selector: 'app-not-ekle',
    templateUrl: './not-ekle.page.html',
    styleUrls: ['./not-ekle.page.scss'],
})
export class NotEklePage implements OnInit {
    dersAd: string;
    fullNot: string;

    constructor(private router: Router, private alertController: AlertController, private angularFirestore: AngularFirestore) {
    }

    ngOnInit() {
    }

    async notAdd() {
        try {
            await this.angularFirestore.collection('Ders Notları').add({
                dersAd: this.dersAd,
                not: this.fullNot,
                oNo: firebase.auth().currentUser.email
            });
            await this.alert(this.dersAd+" ders notu","Başarıyla paylaşıldı!")
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
