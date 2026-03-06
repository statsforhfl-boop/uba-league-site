fetch("data/players.json")
.then(res => res.json())
.then(players => {

const table = document.querySelector("#playerTable tbody")

players.forEach(player => {

const row = document.createElement("tr")

row.innerHTML = `
<td>${player.name}</td>
<td>${player.position}</td>
<td>${player.team}</td>
<td>${player.overall}</td>
`

table.appendChild(row)

})

})
