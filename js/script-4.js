document.addEventListener('DOMContentLoaded', function () {
    const updateTime = () => {
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleString('vi-VN', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        });
        document.getElementById('current-time').innerText = formattedTime;

        const timestamps = document.querySelectorAll('.timestamp');
        timestamps.forEach(timestamp => {
            timestamp.innerText = formattedTime;
        });
    };

    updateTime();
    setInterval(updateTime, 1000);

    const updateValues = () => {
        document.querySelectorAll('.card .chart').forEach(chart => {
            const unit = chart.getAttribute('data-unit');
            let randomValue = (Math.random() * 100).toFixed(1);
            chart.innerText = `${randomValue} ${unit}`;
        });

        document.querySelectorAll('.lat').forEach(lat => {
            const unit = lat.getAttribute('data-unit');
            let randomLat = (14 + Math.random() * 0.1).toFixed(6);
            lat.innerText = `${unit} ${randomLat}`;
        });

        document.querySelectorAll('.lon').forEach(lon => {
            const unit = lon.getAttribute('data-unit');
            let randomLon = (105 + Math.random() * 0.1).toFixed(6);
            lon.innerText = `${unit} ${randomLon}`;
        });
    };

    // setInterval(updateValues, 5000);
});

// function changeColor(element, color1, color2) {
//     let isColor1 = true;
//     setInterval(() => {
//         if (isColor1) {
//             element.classList.remove(color1);
//             element.classList.add(color2);
//             isColor1 = false;
//         } else {
//             element.classList.remove(color2);
//             element.classList.add(color1);
//             isColor1 = true;
//         }
//     }, 1000);
// }

function changeColor(element, color1, color2) {
    if (element.colorInterval) clearInterval(element.colorInterval);
    let isColor1 = true;
    element.colorInterval = setInterval(() => {
        if (isColor1) {
            element.classList.remove(color1);
            element.classList.add(color2);
            isColor1 = false;
        } else {
            element.classList.remove(color2);
            element.classList.add(color1);
            isColor1 = true;
        }
    }, 1000);
}

const temperatureElement = document.getElementById('display-temperature');
const globalTemperature = parseFloat(temperatureElement.innerText);
const card_temperature = document.getElementById('temperature')

// if (globalTemperature >= 40) {
//     changeColor(card_temperature, 'green', 'red');
// }