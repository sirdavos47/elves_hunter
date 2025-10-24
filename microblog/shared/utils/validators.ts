export function isNotEmpty(value: string): boolean {
    return value.trim().length > 0;
}

export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidUsername(username: string): boolean {
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    return usernameRegex.test(username);
}

export function isValidTweetContent(content: string): boolean {
    return isNotEmpty(content) && content.length <= 280;
}