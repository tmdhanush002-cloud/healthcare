
const container = document.getElementById("prescriptions")

for (let i = 1; i <= 10; i++) {

    container.innerHTML += `
<div class="prescription">

<div class="doc">
<img src="https://i.pravatar.cc/40?img=${i}">
<div>
<strong>Dr. Priya Sharma</strong>
<p>E-prescriptions Received</p>
</div>
</div>
<div class="data">
<div class="name">
<div class="p-name">
<p>Patient name</p>
<strong>Ravi kumar</strong>
</div>
<div>
<p>Time Recieved</p>
<strong>10:02 AM</strong>
</div>
<div>
<p>Urgency</p>
<strong>Medium</strong>
</div>
</div>
<button class="assign">Assign for Packing</button>
</div>

</div>
`
}


/* INVENTORY CHART */

const inventoryChart = new Chart(
    document.getElementById("inventoryChart"),
    {
        type: "bar",

        data: {
            labels: ["Top", "Med", "Med", "Dhean", "Low", "High"],
            datasets: [{
                data: [110, 90, 60, 45, 30, 20],
                backgroundColor: [
                    "#2c7c91",
                    "#2c7c91",
                    "#2c7c91",
                    "#2c7c91",
                    "#ff8a65",
                    "#ff7043"
                ]
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
        }

    })


/* VELOCITY CHART */

const velocityChart = new Chart(
    document.getElementById("velocityChart"),
    {
        type: "line",

        data: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                data: [20, 60, 40, 65, 70, 90, 70, 95],
                borderColor: "#2c7c91",
                backgroundColor: "rgba(44,124,145,0.15)",
                fill: true
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
        }

    })


/* FIX RESIZE ISSUE */

window.addEventListener("resize", () => {
    inventoryChart.resize()
    velocityChart.resize()
})