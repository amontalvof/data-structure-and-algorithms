const DateToNumber = (month,day,year) => {
    const date = new Date(year,month-1,day)
    const number = date.getTime()
    console.log(String(new Date(number)));
    console.log(number);
}

DateToNumber(2020,6,15);