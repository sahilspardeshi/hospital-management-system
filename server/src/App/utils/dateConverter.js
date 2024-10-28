export function convertIndianDateToPostgres(dateString) {

     // Check if the input is already in YYYY-MM-DD format
     const postgresDatePattern = /^\d{4}-\d{2}-\d{2}$/;
     if (postgresDatePattern.test(dateString)) {
         return dateString; // Return as-is if already in PostgreSQL format
     }
     
    // Check if the input is in DD/MM/YYYY or DD-MM-YYYY format
    const datePattern = /^(\d{2})[-/](\d{2})[-/](\d{4})$/; // Matches DD/MM/YYYY or DD-MM-YYYY
    const match = dateString.match(datePattern);
    
    if (!match) {
        throw new Error('Invalid date format. Please use DD/MM/YYYY or DD-MM-YYYY.');
    }

    // Extract the day, month, and year from the matched groups
    const day = match[1];
    const month = match[2];
    const year = match[3];

    // Construct the date in YYYY-MM-DD format
    const postgresDateString = `${year}-${month}-${day}`;

    return postgresDateString;
}