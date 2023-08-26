export const getGameTime = (timestamp) => {
    const wholeDate = new Date(timestamp);
    const hour = wholeDate.getHours();
    const minute = wholeDate.getMinutes();
    return adjustTimeSyntax(hour) + ":" + adjustTimeSyntax(minute) + ", " + wholeDate.toDateString();
}

const adjustTimeSyntax = (time) => {
    return time < 10 ? "0" + time : time;
}

export const sortMessagesFromOldToNew = (messagesData) => {
    return messagesData.length > 1 ? messagesData.sort((first, second) => first[1]["timestamp"] - second[1]["timestamp"]) : messagesData;
}