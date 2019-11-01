var dptosLocs = {
	"Artigas": ["Artigas", "Bella Unión"],
	"Canelones": ["Canelones", "Santa Lucía"],
	"Montevideo": ["Montevideo"],
	"Salto": ["Salto", "Daymán", "Arapey"]
};


function createOptions() {
	let options = "<option value='' > Departamento </option>";
	for (const key in dptosLocs) {

		options += `<option value=${key}>${key}</option>`
	}
	return options;
}
document.getElementById("dep").innerHTML = createOptions();

function selectLoc() {
	let loc = "<option value='' > Localidad </option>";
	let department = document.getElementById("dep").value;
	if (department) {
		const locations = dptosLocs[department];
	for (const location of locations) {
		loc += `<option value=${location}>${location}</option>`
	}
	}
	
	document.getElementById("loc").innerHTML = loc;

}
selectLoc();