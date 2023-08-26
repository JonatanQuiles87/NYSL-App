export const getGameTime = (timestamp) => {
    const wholeDate = new Date(timestamp);
    const hour = wholeDate.getHours();
    const minute = wholeDate.getMinutes();
    return "Sent:" + adjustTimeSyntax(hour) + ":" + adjustTimeSyntax(minute) + ", " + wholeDate.toDateString();
}

const adjustTimeSyntax = (time) => {
    return time < 10 ? "0" + time : time;
}

export const sortMessagesFromOldToNew = (messages) => {
    return messages.sort((first, second) => Object.values(first)[0]["timestamp"] - Object.values(second)[0]["timestamp"]);
}