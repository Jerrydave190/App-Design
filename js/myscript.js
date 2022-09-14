//parent class
//Account Savings Current Domiciliary
class Account{
    constructor (name, date,amount, bank, hours){
        this.name = name;
        this.date = date;
        this.hours = hours;
        this.amount = amount;
        this.bank = bank;
    }
   

    //method of the class
    showaccount(){  
        return this.name + " made a transaction by  " + this.hours+ " on " + this.company + "from this " + this.bank
    }
}
//child class of employee
class Savings extends Account{
    constructor(name, date, company, hours, region){
        super(name, date, company, hours);
        this.region = region;
    }
    showsavings(){
        return this.name + " is in charge of " + this.date + " at " + this.region
    }
}

let myemployee = new employee("Owen", "Developer", "E-Quest", 24)
let anotheremployee = new employee("David", "Hacker", "E-Quest", "Project")
let mymanager = new manager("Wale", "Data analyst", "E-Quest", "Project", "South-west")
console.log (myemployee.salary);
console.log (anotheremployee.showemployee());
console.log (mymanager.showmanager());