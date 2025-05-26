export default function formatUnixTimestamp(timestampInt: number) {
    const timestampMs = timestampInt * 1000;
  
    const date = new Date(timestampMs);

    const options = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    };
  
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const parts = formatter.formatToParts(date);
  
    let month, day, hour, minute, dayPeriod;
  
    for (const part of parts) {
      switch (part.type) {
        case 'month':
          month = part.value;
          break;
        case 'day':
          day = part.value;
          break;
        case 'hour':
          hour = part.value;
          break;
        case 'minute':
          minute = part.value;
          break;
        case 'dayPeriod':
          dayPeriod = part.value;
          break;
      }
    }
  
    return `${month} ${day} - ${hour}:${minute} ${dayPeriod}`;
  }
  