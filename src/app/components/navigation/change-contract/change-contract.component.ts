import { Component } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { LotteryService } from "../../../services/lottery.service";

@Component({
  selector: 'app-change-contract',
  templateUrl: './change-contract.component.html',
  styleUrls: ['./change-contract.component.scss']
})
export class ChangeContractComponent {
  //TODO: Move to one component with mobile
  public defaultContractId = environment.CONTRACT_ID;
  public contractId = localStorage.getItem('CONTRACT_ID');
  public isChangeContractIdFormOpened = false;
  public inputContractId = localStorage.getItem('CONTRACT_ID');

  constructor(public lotteryService: LotteryService) {
    !this.contractId && localStorage.setItem('CONTRACT_ID', this.defaultContractId);
    this.contractId = this.contractId ?? this.defaultContractId;
  }

  handleSetContractId(Id: any) {
    localStorage.setItem('CONTRACT_ID', Id);
    this.contractId = localStorage.getItem('CONTRACT_ID');
    location.reload()
  };

  handleSetDefaultContractId() {
    localStorage.setItem('CONTRACT_ID', this.defaultContractId);
    this.contractId = localStorage.getItem('CONTRACT_ID');
    this.inputContractId = localStorage.getItem('CONTRACT_ID');
    location.reload()
  };
}
