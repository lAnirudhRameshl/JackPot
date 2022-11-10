export interface AddAccountRequest {
    accountNumber: string;
    accountTypeId: number;
    marginAvailable: number;
    marginUsed: number;
    userId: number;
}