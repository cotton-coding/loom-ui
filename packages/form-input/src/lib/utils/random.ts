export function getRandomString (length: number = 7): string {
	return Math.random().toString(36).substring(2, length + 2);
};