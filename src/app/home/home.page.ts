import { Component, OnInit } from '@angular/core';
import { User } from '../shared/User';
import { UserService } from './../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  Users = [];

  constructor(
    private aptService: UserService
  ) { }

  ngOnInit() {
    this.fetchUsers();
    let userRes = this.aptService.getUserList();
    userRes.snapshotChanges().subscribe(res => {
      this.Users = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Users.push(a as User);
      })
    })
  }

  fetchUsers() {
    this.aptService.getUserList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteUser(id) {
    console.log(id)
    if (window.confirm('Esta seguro que desea eliminar el usuario?')) {
      this.aptService.deleteUser(id)
    }
  }
}
