 
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

            const response = await fetch(url);
            const responseJSON = response.json();
            console.log(responseJSON);
        }
    });
});