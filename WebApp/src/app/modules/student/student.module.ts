import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [RootComponent],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
})
export class StudentModule { }
