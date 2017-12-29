export class User {
    private _id: number;
    private _name: string;
    private _role: string;
    private _password: string;

    constructor() {}
    get id(): number {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
    get role(): string {
        return this._role;
    }
    set role(role: string) {
        this._role = role;
    }
    get password(){
        return this._password;
    }
    set password(password: string){
        this._password = password
    }
}
