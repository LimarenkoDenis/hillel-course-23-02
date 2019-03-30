import { CommentsComponent } from './users/comments/comments.component';
import { SettingsComponent } from './users/settings/settings.component';
import { ListComponent } from './users/list/list.component';
import { CardComponent } from './users/card/card.component';
import { ContactsComponent } from './users/contacts/contacts.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // redirect
  {
    path: '', redirectTo: 'users', pathMatch: 'full'
  },
  {
    path: 'users', component: ListComponent
  },
  {
    path: 'contact/:cardID', component: CardComponent
  },
  {
    path: 'contacts', component: ContactsComponent, children: [
      {
        path: '', redirectTo: 'settings', pathMatch: 'full'
      },
      {
        path: 'settings', component: SettingsComponent
      },
      {
        path: 'comments', component: CommentsComponent
      }
    ]
  },
  {
    path: 'market', loadChildren: './market/market.module#MarketModule'
  }
];
