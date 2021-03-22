import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-edit-not',
    templateUrl: './edit-not.page.html',
    styleUrls: ['./edit-not.page.scss'],
})
export class EditNotPage implements OnInit {
    dersAd: any;
    fullNot: any;
    id: any;

    constructor(private activatedRoute: ActivatedRoute, private angularFirestore: AngularFirestore, private alertController: AlertController,private router:Router) {
        this.id = this.activatedRoute.snapshot.params['id'];
    }

    ngOnInit() {
        this.nots(this.id);
    }

    nots(id: string) {
        this.angularFirestore.doc('Ders Notları/' + id).valueChanges().subscribe(sonuc => {
            this.fullNot = sonuc['not'],
                this.dersAd = sonuc['dersAd'];
        });

    }

    async editNot() {
        await this.angularFirestore.doc('Ders Notları/' + this.id).update({
            dersAd: this.dersAd,
            not: this.fullNot
        });
        await this.alert(this.dersAd,"Güncellendi")
        await this.router.navigateByUrl('home')


    }

    async alert(header: string, message: string) {
        const alert = await this.alertController.create({
            header, message, buttons: ['OK']
        });

        await alert.present();
    }

}
