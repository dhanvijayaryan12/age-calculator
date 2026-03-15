const calcBtn = document.getElementById("calc-btn");

calcBtn.addEventListener("click", () => {
    let birthDate = new Date(document.getElementById("date-input").value);
    let today = new Date();

    if (birthDate > today || isNaN(birthDate)) {
        alert("Please select a valid past date");
        return;
    }

    let birthYear = birthDate.getFullYear();
    let birthMonth = birthDate.getMonth() + 1;
    let birthDay = birthDate.getDate();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();

    let diffYear = currentYear - birthYear;
    let diffMonth, diffDay;

    if (currentMonth >= birthMonth) {
        diffMonth = currentMonth - birthMonth;
    } else {
        diffYear--;
        diffMonth = 12 + currentMonth - birthMonth;
    }

    if (currentDay >= birthDay) {
        diffDay = currentDay - birthDay;
    } else {
        diffMonth--;
        let daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        diffDay = daysInLastMonth + currentDay - birthDay;
        if (diffMonth < 0) {
            diffMonth = 11;
            diffYear--;
        }
    }

    displayResult(diffYear, diffMonth, diffDay);
});

function displayResult(y, m, d) {
    document.getElementById("years").textContent = y;
    document.getElementById("months").textContent = m;
    document.getElementById("days").textContent = d;
}
