function displayDate() {
    const formattedDate = dayjs().format('dddd, D MMMM, YYYY');

    var dateElement = document.getElementById('date');

    dateElement.innerHTML = formattedDate;
}


function displayTime() {
    // setInterval kullanarak her saniyede bir zamanı güncelle
    setInterval(() => {

        // Saat, dakika ve saniye bilgilerini al
        const currentTime = dayjs().format('HH:mm:ss');

        let timeElement = document.getElementById('time');

        timeElement.innerHTML = currentTime;
    }, 1000); // Her 1000 milisaniyede bir (1 saniye) güncelle
}


displayTime();
displayDate();
