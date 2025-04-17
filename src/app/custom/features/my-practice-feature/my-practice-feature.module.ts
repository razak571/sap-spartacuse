import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeComponent } from './pages/practice/practice.component';
import { MyPracticeFeatureRoutingModule } from './my-practice-feature-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [PracticeComponent, HomeComponent],
  imports: [CommonModule, MyPracticeFeatureRoutingModule],
})
export class MyPracticeFeatureModule {}
