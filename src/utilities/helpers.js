export const getTime = (timestamp) => {
    const wholeDate = new Date(timestamp);
    const hour = wholeDate.getHours();
    const minute = wholeDate.getMinutes();
    return "Sent:" + adjustTimeSyntax(hour) + ":" + adjustTimeSyntax(minute) + ", " + wholeDate.toDateString();
}

const adjustTimeSyntax = (time) => {
    return time < 10 ? "0" + time : time;
}

export const sortDataFromOldToNew = (data) => {
    const clonedGameSpecificMessages = [...data];
    return clonedGameSpecificMessages.sort((first, second) => Object.values(first)[0]["timestamp"] - Object.values(second)[0]["timestamp"]);

}
export const onSubmitHandler = (event) => {
    event.preventDefault();
}