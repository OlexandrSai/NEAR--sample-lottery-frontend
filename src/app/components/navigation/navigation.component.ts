import { Component } from '@angular/core';
import {LotteryService} from "../../services/lottery.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(public lotteryService: LotteryService) { }
}
