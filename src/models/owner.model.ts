export interface IOwner {
    firstName: string,
    lastName: string,
}

export class Owner implements IOwner {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}