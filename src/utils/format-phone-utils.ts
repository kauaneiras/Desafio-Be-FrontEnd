export function formatPhone(input: string): string {
    const match = input.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
    if (!match) {console.error('Invalid phone number format:', input); return input;}
    const countryCode = match[1];
    const areaCode = match[2];
    const firstPart = match[3];
    const secondPart = match[4];
    const formattedNumber = `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}`;
    return formattedNumber;
};