import {months} from "./months";

export const getHeaderTitles = (pathName, month= '01') => {
    const titles = {
        schedule: [months[month], 'Teams', 'Location', 'Time'],
        gamePage: {
            gameTableHeaderTitles: ['Date', 'Teams', 'Location', 'Time'],
            locationTableHeaderTitles: ['Location Name', 'Address', 'Map']
        }
    }
    return titles[pathName];
}
