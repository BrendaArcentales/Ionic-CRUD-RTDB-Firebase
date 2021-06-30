import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeUserPageRoutingModule } from './make-user-routing.module';

import { MakeUserPage } from './make-user.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    MakeUserPageRoutingModule
  ],
  declarations: [MakeUserPage]
})
export class MakeUserPageModule { }