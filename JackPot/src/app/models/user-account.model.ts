export interface UserAccount{
    /**"accountNumber": "FI-TRADE-41",
        "marginAvailable": 9500,
        "marginUsed": 500,
        "accountType": {
            "accountTypeId": 1,
            "accountTypeName": "BROKERAGE"
        } */

    accountNumber: string,
    marginAvailable: number,
    marginUsed: number,
    accountType: {accountTypeId: number, accountTypeName: string}

}