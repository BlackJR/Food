import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MenuComponent } from './menu/menu.component';
import { ChefsComponent } from './chefs/chefs.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'About', component: HomeComponent   },
  {path: '  Menu', component: MenuComponent   },

  {path: 'carousel', component:  CarouselComponent  },
  {path: 'Chefs', component:  ChefsComponent  },
  {path: 'Gallery', component: GalleryComponent   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
