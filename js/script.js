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
});

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

const container1 = document.getElementById('container1');
changeColor(container1, 'green', 'red');