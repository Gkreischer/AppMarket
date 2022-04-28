import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CrudService } from 'src/app/services/crud.service';
import { Login } from 'src/app/shared/login';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: FormGroup;
  login: Login;

  constructor(private crud: CrudService, private fb: FormBuilder, private alert: AlertController, private storage: Storage) { }

  async ngOnInit() {

    this.buildForm();
    await this.storage.create();

  }

  buildForm() {
    this.formLogin = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  sendForm() {
    this.login = this.formLogin.value;
    console.log(this.login);
    this.crud.login('/auth/login', this.login).subscribe((res) => {
      this.storage.set('token', res);
    }, err => {
      console.error(err);
      this.showError(err);
    })
  }

  async showError(err: string) {
    const alert = await this.alert.create({
      header: 'Error',
      message: err,
      buttons: ['Ok']
    });

    await alert.present();

  }

}
