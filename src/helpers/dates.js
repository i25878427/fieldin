import moment from 'moment'
export const hoursPassedUntilNow = (timestamp) => {
    const now = moment()
    const duration = moment.duration( now.diff(timestamp));
    const hours = duration.asHours();
    return hours
}