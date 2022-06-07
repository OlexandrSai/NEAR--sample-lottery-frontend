import {Component} from '@angular/core';
import {LotteryService} from "../../services/lottery.service";

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent {
  constructor(public lotteryService: LotteryService) {
  }

  async handlePlay() {
    await this.lotteryService.handlePlay();
  }
}
