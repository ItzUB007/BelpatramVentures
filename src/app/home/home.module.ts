import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProductsComponent } from './products/products.component';
import { LocationsComponent } from './locations/locations.component';
import { ConceptComponent } from './concept/concept.component';
import { MembersComponent } from './members/members.component';
import { CountUpModule } from 'ngx-countup';


@NgModule({
  declarations: [
    LandingComponent,
    HomeViewComponent,
    ProductsComponent,
    LocationsComponent,
    ConceptComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CountUpModule
  ]
})
export class HomeModule { }
