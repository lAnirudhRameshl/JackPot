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
        public assetClass: {assetClassId: number, assetClassName: string} ,
        public accountType: {accountTypeId: number, accountTypeName: string}
    ){}
}