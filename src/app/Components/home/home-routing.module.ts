import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DestinationComponent } from '../destination/destination.component';


const routes: Routes = [
    {
        path:"",component:HomeComponent, children:
        [
            {
                path:"", redirectTo:"#",pathMatch:'full'
            },
            {
                path:"#",component:HomeComponent
            },
           {
            path:"destination", component:DestinationComponent,
           }
        ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
