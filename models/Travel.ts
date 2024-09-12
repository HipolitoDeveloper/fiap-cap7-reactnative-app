export class Travel {
    id: number;
    destination: string;
    date: string;
    time: string;

    constructor(id: number, destination: string, date: string, time: string) {
        this.id = id;
        this.destination = destination;
        this.date = date;
        this.time = time;
    }
}
