export class AuthService {
    private users: Map<string, { password: string }> = new Map();

    constructor() {
        // Initialize with some dummy users for demonstration
        this.users.set('user@example.com', { password: 'password123' });
    }

    public async register(email: string, password: string): Promise<string> {
        if (this.users.has(email)) {
            throw new Error('User already exists');
        }
        this.users.set(email, { password });
        return 'User registered successfully';
    }

    public async login(email: string, password: string): Promise<string> {
        const user = this.users.get(email);
        if (!user || user.password !== password) {
            throw new Error('Invalid email or password');
        }
        return 'Login successful';
    }
}