import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ListComponent, ContactsComponent, CardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ListComponent, ContactsComponent]
})
export class UsersModule { }
