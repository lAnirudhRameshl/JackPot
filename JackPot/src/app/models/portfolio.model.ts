import { AccountType } from "./account-type.model";
import { AssetClass } from "./asset-class.model";

export class Portfolio{
    // "portfolioId": 23,
    //     "fundName": "AMZN",
    //     "quantity": 2,
    //     "avgCost": 900,
    //     "currentValue": 8999,
    //     "netChange": 10,
    //     "dayChange": 98,
    //     "profitLoss": 122,
    //     "accountType": {
    //         "accountTypeId": 2,
    //         "accountTypeName": "IRA"
    //     },
    //     "assetClass": null,
    //     "ltp": 10
    constructor(
        public fundName:string,
        public quantity:number,
        public avgCost:number,
        public ltp:string,
        public currentValue: number,
        public profitLoss : number,
        public netChange:string,
        public dayChange:string,
        public asset: string,
        public account: string,
        public assetClass: AssetClass,
        public accountType: AccountType
    ){}
}