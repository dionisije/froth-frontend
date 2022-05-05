export const secondsToTime = (secs => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    const timeString = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return timeString;
});
