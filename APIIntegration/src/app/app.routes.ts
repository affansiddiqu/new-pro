import { Routes } from '@angular/router';
import { MedicineComponent } from './medicine/medicine.component';
import { EditMedicineComponent } from './edit-medicine/edit-medicine.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ToggleComponent } from './toggle/toggle.component';
import { MoviesComponent } from './movies/movies.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';



export const routes: Routes = [

    {
        path:"",
        component:MedicineComponent,
    },
    
    {
        path:"addMedicine",
        component:CreateMedicineComponent,
    },
    {
        path:"editMedicine/:id",
        component:EditMedicineComponent,
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"contact",
        component:ContactComponent,
    },
    {
        path:"toggle",
        component:ToggleComponent,
    },
    {
        path:"movies",
        component:MoviesComponent,
    },
    {
        path:"create-medicine",
        component:CreateMedicineComponent,
    },
    
];
    
