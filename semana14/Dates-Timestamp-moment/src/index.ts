import * as moment from 'moment'
moment.locale("pt-br");


type event = {
    name: string,
    description: string,
    startAt: moment.Moment,
    finishAt: moment.Moment
}

const allEvents: event[] = [
	{
		name: "Wedding",
		description: "Wedding Jhon and Mariah",
		startAt: moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("25/06/2020 16:00", "DD/MM/YYYY HH:mm")
	},
	{
		name: "after",
		description: "after marriage",
		startAt: moment("26/06/2020 17:00", "DD/MM/YYYY HH:mm"),
	 	finishAt: moment("26/06/2020 18:00", "DD/MM/YYYY HH:mm")
	}
]

//2
let date: moment.Moment = moment("25/06/2020 15:00", "DD/MM/YYYY HH:mm");
console.log("Nome:", name)
console.log("Descrição:", description)
console.log("Início:", date.format("dddd, DD [de] MM [de] YYYY, HH:mm[h]"))
console.log("Início:", date.format("DD/MM/YYYY, HH:mm[h]"))

