import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProductsComponent } from './products/products.component';
import { LocationsComponent } from './locations/locations.component';
import { ConceptComponent } from './concept/concept.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  { path: "", component: LandingComponent,
  children: [
    { path: "", component: HomeViewComponent },
    { path: "products", component: ProductsComponent},
    { path: "locations", component: LocationsComponent },
    { path: "concepts", component: ConceptComponent },
    { path: "members", component: MembersComponent }
]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
