import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './tasks/create/create.component';
import { TasksComponent } from './tasks/tasks.component';


const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    children: [
        { path: 'create', component: CreateComponent, outlet: 'side'}
      ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
