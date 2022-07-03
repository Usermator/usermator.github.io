const maxColumnHeight = 70; // constant in percent that sets maximum height value for orange/cyan column

/*
const currentBalance = document.querySelector(`[data-account-field="balance"]`);
const monthlySpendings = document.querySelector(`[data-account-field="monthly-spendings"]`);
const monthlyChange = document.querySelector(`[data-account-field="monthly-change"]`);
const summaryFields = Array.from(document.querySelectorAll(`[data-account-field]`));
*/

const days = Array.from(document.querySelectorAll(`[data-day]`)); // get array of day elements in HTML

let spendingsDaily = []; //array for values that will be extracted from JSON

const today = new Date().getDay(); // what day is today?
const todayColumn = document.querySelector(`[data-day="${today}"]`); // find element with corresponding day number to above found today
todayColumn.classList.add("current-day"); // set today to correct element in html (as a "today" class – will be assigned cyan color)


fetch('data.json') // does not work locally (unless from local server)
  .then(response => response.json())
  .then(data => {

    data.forEach((el, i) => { // assign value to correct index based on JSON key, not JSON index
        switch (el.day){
            case "mon": spendingsDaily[0] = el.amount;
            case "tue": spendingsDaily[1] = el.amount;
            case "wed": spendingsDaily[2] = el.amount;
            case "thu": spendingsDaily[3] = el.amount;
            case "fri": spendingsDaily[4] = el.amount;
            case "sat": spendingsDaily[5] = el.amount;
            case "sun": spendingsDaily[6] = el.amount;
        }
    });

    let percent = spendingsDaily.reduce((a,b) => {return Math.max(a, b);}, -Infinity)/100; // get highest value of all days in a week – then divide it by 100 to get 1 % of that value

    days.forEach((el, i) =>{ // go through all days in HTML and...
        let height = (spendingsDaily[i]/percent/100*maxColumnHeight); // calculate correct height in % relatively to maximum height, where 100 % is above calculated maximum value
        el.querySelector(".expenses__chart-fill").style.height = `${height}%`; // set correct height to value column in HTML
        el.querySelector(`[data-field-name="day-value"]`).innerText = `$${spendingsDaily[i]}`; // set correct text value to the element
    })

});


