// LoginRequest, LoginResponse
export type LoginRequest = {
    walletAddress: string;
    signature: string;
    timestamp: number;
};

export type LoginResponse = {
    token: string;
};