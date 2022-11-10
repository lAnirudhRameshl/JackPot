export interface TradeRequest {
    ticker: string;
    quantity: number;
    userId: number;  
    accountTypeId: number;
    assetClassId: number;
}