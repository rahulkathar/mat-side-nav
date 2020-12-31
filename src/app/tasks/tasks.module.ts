import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks/tasks.component';
import { CreateComponent } from './tasks/create/create.component';
import { TasksRoutingModule } from './tasks.routing.module';
import { MaterialModuleModule } from '../material-module/material-module.module';



@NgModule({
  declarations: 
  [
    TasksComponent, 
    CreateComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MaterialModuleModule
    
  ]
})
export class TasksModule { }
