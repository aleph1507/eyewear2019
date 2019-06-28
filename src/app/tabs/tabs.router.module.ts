import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        // path: 'main',
        path: 'main',
        children: [
          {
            path: '',
            loadChildren: '../main/main.module#MainPageModule'
          }
        ]
      },
      {
        path: 'exhibitors',
        children: [
          {
            path: '',
            loadChildren: '../exhibitors/exhibitors.module#ExhibitorsPageModule'
          },
          {
            path: ':exhibitorId',
            loadChildren: '../exhibitors/ex-details/ex-details.module#ExDetailsPageModule'
          }
        ]
      },
      {
        path: 'visitors',
        children: [
          {
            path: '',
            loadChildren: '../visitors/visitors.module#VisitorsPageModule'
          }
        ]
      },
      {
        path: 'venue',
        children: [
          {
            path: '',
            loadChildren: '../venue/venue.module#VenuePageModule'
          },
          {
            path: 'whereweare',
            loadChildren: '../venue/whereweare/whereweare.module#WherewearePageModule'
          },
          {
            path: 'hotels',
            loadChildren: '../venue/hotels/hotels.module#HotelsPageModule'
          },
          {
            path: 'contact',
            loadChildren: '../venue/contact/contact.module#ContactPageModule'
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: '../map/map.module#MapPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
