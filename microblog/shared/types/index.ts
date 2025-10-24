export type Tweet = {
    id: string;
    content: string;
    author: string;
    timestamp: Date;
};

export type User = {
    id: string;
    username: string;
    email: string;
    password: string; // In a real application, this should be hashed
};

export type AuthResponse = {
    token: string;
    user: User;
};

export type ErrorResponse = {
    message: string;
    code?: number;
};