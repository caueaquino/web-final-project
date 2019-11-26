import ajax from 'ajax';

const url = 'http://localhost:3001/calendars/';

export const getEvents = (id) => {
    return ajax.get(url + id);
}

export const listEvents = () => {
    return ajax.get(url);
}

export const createEvent = (name, day, hour) => {
    ajax.post(url, {name, day, hour});
}