import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CardComponent } from './card/card.component';
import { SettingsComponent } from './settings/settings.component';
import { CommentsComponent } from './comments/comments.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListComponent, ContactsComponent, CardComponent, SettingsComponent, CommentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [ListComponent, ContactsComponent, CardComponent, SettingsComponent, CommentsComponent]
})
export class UsersModule { }
