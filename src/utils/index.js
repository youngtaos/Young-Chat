export const getTime = (datetimeString = "2023-04-03T05:44:22.495Z") => {
    const start = new Date(datetimeString).getTime();
    const now = new Date().getTime();
    const diff = now - start;
    const millisecondsPerSecond = 1000;
    const secondsPerMinute = 60;
    const minutesPerHour = 60;
    const hoursPerDay = 24;
    const millisecondsPerMinute = millisecondsPerSecond * secondsPerMinute;
    const millisecondsPerHour = millisecondsPerMinute * minutesPerHour;
    const millisecondsPerDay = millisecondsPerHour * hoursPerDay;
    const years = Math.floor(diff / (millisecondsPerDay * 365.25));

    let remainingMilliseconds = diff % (millisecondsPerDay * 365.25);
    const days = Math.floor(remainingMilliseconds / millisecondsPerDay);

    remainingMilliseconds = remainingMilliseconds % millisecondsPerDay;
    const hours = Math.floor(remainingMilliseconds / millisecondsPerHour);

    remainingMilliseconds = remainingMilliseconds % millisecondsPerHour;
    const minutes = Math.floor(remainingMilliseconds / millisecondsPerMinute);

    remainingMilliseconds = remainingMilliseconds % millisecondsPerMinute;
    const seconds = Math.floor(remainingMilliseconds / millisecondsPerSecond);
    let ansStr = "";
    if (years) {
        ansStr += `${years}年`;
    }
    if (days) {
        ansStr += `${days}天`;
    }
    if (hours) {
        ansStr += `${hours}小时`;
    }
    if (minutes) {
        ansStr += `${minutes}分`;
    }
    if (seconds) {
        ansStr += `${seconds}秒`;
    }
    return ansStr;
};

