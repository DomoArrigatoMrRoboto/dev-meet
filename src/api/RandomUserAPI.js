export async function fetchAttendees(count = 50) {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await res.json();
    return data.results.length;
}