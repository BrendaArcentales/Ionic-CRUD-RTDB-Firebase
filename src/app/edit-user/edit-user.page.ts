import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})

export class EditUserPage implements OnInit {
  updateUserForm: FormGroup;
  id: any;

  constructor(
    private aptService: UserService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getUser(this.id).valueChanges().subscribe(res => {
      this.updateUserForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateUserForm = this.fb.group({
      name: [''],
      email: [''],
      country: ['']
    })
    console.log(this.updateUserForm.value)
  }

  updateForm() {
    this.aptService.updateUser(this.id, this.updateUserForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}