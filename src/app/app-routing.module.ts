import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SeriessearchComponent } from './seriessearch/seriessearch.component';
import { SeriesdetailsComponent } from './seriesdetails/seriesdetails.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'seriessearch', component: SeriessearchComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'seriesdetails/:id', component: SeriesdetailsComponent },
  { path: '**', component: ErrorComponent } // Ruta errores
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}