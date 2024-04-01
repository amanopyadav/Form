import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';

const routes: Routes = [
  // { path: 'my-form/:name/:email/:message', component: MyFormComponent }
  { path: 'my-form', component: MyFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
