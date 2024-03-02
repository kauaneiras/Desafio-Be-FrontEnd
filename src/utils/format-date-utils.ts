export function formatDate(input: string): string {
    const date = new Date(input);
    if (isNaN(date.getTime())) {console.error('Invalid date format:', input); return input;}
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    return formattedDate;
}