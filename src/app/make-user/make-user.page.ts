import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-make-user',
  templateUrl: './make-user.page.html',
  styleUrls: ['./make-user.page.scss'],
})

export class MakeUserPage implements OnInit {
  UserForm: FormGroup;

  constructor(
    private aptService: UserService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.UserForm = this.fb.group({
      name: [''],
      email: [''],
      country: ['']
    })
  }

  formSubmit() {
    if (!this.UserForm.valid) {
      return false;
    } else {
      this.aptService.createUser(this.UserForm.value).then(res => {
        console.log(res)
        this.UserForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}