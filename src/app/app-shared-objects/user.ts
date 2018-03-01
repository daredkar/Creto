export class User {
    private _id: number;
    private _name: string;
    private _username: string;
    private _password: string;
    private _team: string;
    private _role: string;
    private _areaofwork: string;

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
    set name(name: string){
        this._name=name;
    }
    get username(): string{
        return this._username;
    }
    set username(username: string){
        this._username=username;
    }
    get password(): string{
        return this.password;
    }
    set password(password: string){
        this._password=password;
    }
    get team():string{
        return this._team
    }
    set team(team: string){
     this._team=team;   
    }
    get role():string{
        return this._role;
    }
    set role(role: string){
        this._role=role;
    }
    get areaofwork():string{
        return this._areaofwork;
    }
    set areaofwork(areaofwork: string){
        this._areaofwork=areaofwork;
    }


}
