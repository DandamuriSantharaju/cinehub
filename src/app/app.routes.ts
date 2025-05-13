import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MovieComponent } from './pages/movie/movie.component';

export const routes: Routes = [
    {
        path:"", component:HomeComponent
    },
    {
        path:"contact", component:ContactComponent
    },
    { path: 'movie/:id', component:MovieComponent },
    { path: 'contact', component: ContactComponent }
];
