function englishTime(input) {
    // Create a Date object with the input time string
    let date = new Date("1970-01-01 " + input);
   
    // Format the date object into a 24 hour time string
    let format = date.toLocaleTimeString([], { hour12: false });
   
    return format;
  }
   
  // Driver Code
  console.log(englishTime("07:05:45 PM"));