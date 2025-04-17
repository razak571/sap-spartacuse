import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../../services/practice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
  constructor(public practiceService: PracticeService, private router: Router) {
    console.log(this.practiceService.getMessage());
  }

  alertFun() {
    alert('hello');
    console.log(this.practiceService.getMessage());
  }

  sendToAbout() {
    this.router.navigate(['/about']);
  }

  ngOnInit(): void {}
}
