import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../service/about.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    // this.aboutService.getProducts().subscribe((product) => {
    //   this.products = product;
    // });

    this.products$ = this.aboutService.getProducts();
  }
  // products: any[] = [];
  products$!: Observable<any[]>;

  // fetchProduct() {
  //   alert('called');
  //   this.aboutService.getProducts().subscribe((product) => {
  //     this.products = product;
  //   });
  // }
}
