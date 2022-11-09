export interface LoginResponse {
    userId: number;
    firstName: string;
    lastName: string;
    jwt: string;
    email: string;
    phoneNumber: string;
    investmentRisk: number;
}