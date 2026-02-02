document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('citySelect');
    const display = document.getElementById('cityDisplay');

    select.addEventListener('change', async () => {
        if (select.value === "") {
            display.textContent = "No city selected.";
        } else {
            const selectedText = select.options[select.selectedIndex].text;
            display.textContent = "You selected: " + selectedText;

            const url = "http://localhost:3000/api/weather";

            const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({city: select.value})
        }

            const response = await fetch(url, options);
            const responseJSON = await response.json();

            display.innerHTML = `<p>Description: ${responseJSON.description}<br><br>
                                    Temperature: ${responseJSON.temperature}<br><br>
                                    WindSpeed: ${responseJSON.windspeed}</p>`
        }
    });
});