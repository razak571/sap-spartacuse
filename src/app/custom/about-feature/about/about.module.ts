import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { AboutRouting } from './about-routing.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRouting],
})
export class AboutModule {}
