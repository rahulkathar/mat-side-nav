import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'    
  }
  // {
  //   path: 'tasks',
  //   loadChildren: './tasks/tasks.module#TasksModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
