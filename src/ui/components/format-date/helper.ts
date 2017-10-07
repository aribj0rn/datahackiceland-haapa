export default function formatDate([timestamp]) {

    // Proudly stolen from https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
    let monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    let date = new Date(timestamp);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return day + '. ' + monthNames[monthIndex] + ' ' + year;

};
