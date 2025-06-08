import { Routes } from '@angular/router';
import { Stronaglowna } from './stronaglowna/stronaglowna';
import { Content} from './content/content'
import { Edit } from './edit/edit';
import { Add } from './add/add';

export const routes: Routes = [
    {path:'lista',component: Stronaglowna},
    {path:'blog/:id',component: Content},
    {path:'blog/edit/:id',component: Edit},
    {path:'add',component: Add}
];
