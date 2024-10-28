export const getCurrentDateInIST = () => {
    const date = new Date();
    
    // Convert the date to IST (UTC+5:30)
    const options = {
      timeZone: 'Asia/Kolkata', // IST time zone
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
  
    // Format the date
    const formattedDate = date.toLocaleString('en-IN', options);
    
    // Return formatted date as string
    return formattedDate; // Output format: "28-10-2024, 03:30:00 PM"
  };
  
  // Example usage
  const currentDate = getCurrentDateInIST();
  console.log(currentDate);
  