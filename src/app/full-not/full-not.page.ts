import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-full-not',
    templateUrl: './full-not.page.html',
    styleUrls: ['./full-not.page.scss'],
})
export class FullNotPage implements OnInit {

    not: any;
    ad: any;
    oNo: any;
    id: any;

    constructor(private activatedRoute: ActivatedRoute, private angularFirestore: AngularFirestore, private alertController: AlertController, private router: Router) {
        this.id = this.activatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
        try {
            this.nots();
        } catch (hata) {
            console.log(hata);
        }
    }

    nots() {
        this.angularFirestore.doc('Ders Notları/' + this.id).valueChanges().subscribe(sonuc => {
            this.not = sonuc['not'],
                this.ad = sonuc['dersAd'],
                this.oNo = sonuc['oNo'];
        });

    }

    async del() {
        try {
            await this.angularFirestore.collection('Ders Notları/').doc(this.id).delete();
            await this.alert(this.ad, 'Silindi');
            await this.router.navigateByUrl('home');
        } catch (hata) {
            await this.alert('Opps', hata.message);
        }

    }

    async alert(header: string, message: string) {
        const alert = await this.alertController.create({
            header, message, buttons: ['OK']
        });

        await alert.present();
    }

}
