
export function today(): string {
    return new Date().toString();
}

export function isZero(value: number): boolean {
    return value === 0;
}

export function hello(name: string): string {
    if (!name) return "hello!";

    return "hello, "+name+"!";
}
