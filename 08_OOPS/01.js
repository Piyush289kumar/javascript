class user{
    constructor(userName, emailAddress){
        this.userName = userName;
        this.emailAddress = emailAddress;
    }

}

class databaseClass extends user{
    constructor(dbName, dbType, userName, emailAddress){
        super(userName);
        this.emailAddress = emailAddress;
        this.dbName = dbName;
        this.dbType = dbType;
    }

    passwordEncryp(){
        this.randomKey = 67894135;
        console.log(`User Name: ${this.userName}, Key: ${this.randomKey}`);
    }

    getDBname(){
        console.log(`Database Name: ${this.dbName} | Database Type: ${this.dbType}`);
    }
}


const obj = new databaseClass('dbName','dbType', 'username','em');
obj.passwordEncryp();