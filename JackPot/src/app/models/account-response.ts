import { AccountTypeResponse } from "./account-type-response";

export interface AccountResponse {
    accountNumber: string;
    marginAvailable: number;
    marginUsed: number;
    accountType: {accountTypeId: number, accountTypeName: string}; 
}