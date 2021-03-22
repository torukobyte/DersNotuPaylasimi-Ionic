import {Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    dersNot: any;

    constructor(private angularFireAuth: AngularFireAuth, private router: Router, private alertController: AlertController, private angularFirestore: AngularFirestore) {

    }

    ngOnInit() {
        try {
            this.nots();
        }catch (hata){
            console.log(hata);
        }
    }

    async out() {
        await this.angularFireAuth.signOut();
        await this.alert('', 'Çıkış Yaptınız');
        await this.router.navigateByUrl('giris');


    }

    nots() {
        this.angularFirestore.collection('Ders Notları').snapshotChanges().subscribe(data => {
            this.dersNot = data.map(s => {
                return {
                    id: s.payload.doc.id,
                    dersAd: s.payload.doc.data()['dersAd'],
                    not: s.payload.doc.data()['not'],
                    oNo: s.payload.doc.data()['oNo']
                };
            });
        });

    }

    async alert(header: string, message: string) {
        const alert = await this.alertController.create({
            header, message, buttons: ['OK']
        });

        await alert.present();
    }

}
