import { Component, OnInit } from '@angular/core';
import { PracticeService } from '../../services/practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {
  constructor(public practiceService: PracticeService) {
    console.log(this.practiceService.getMessage());
  }

  alertFun() {
    alert('hello');
    console.log(this.practiceService.getMessage());
  }

  ngOnInit(): void {}
}
