import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'hotels', loadChildren: './venue/hotels/hotels.module#HotelsPageModule' },
  { path: 'contact', loadChildren: './venue/contact/contact.module#ContactPageModule' },
  // { path: 'venue', loadChildren: './venue/venue.module#ContactPageModule' },
  // { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  // { path: 'ex-details', loadChildren: './exhibitors/ex-details/ex-details.module#ExDetailsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
