class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers(){
        console.log('There are 50 users');
    }

    register(){
        console.log(this.username + " is now registered");
    }
}

//let bob = new User('Bob', 'email@email.com', 'password123');

//bob.register();

//User.countUsers();

class Member extends User{
    constructor(username, email, password, memberPackage){
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username + ' is subscribed to the ' + this.package + ' package');
    }
}

let mike = new Member('Mike', 'mike@email.com', 'password123', 'Standard');

mike.register(); //extended instantiation using an inherited method
Member.countUsers(); //extended class using an inherited static method

/*by using super, a class can inherit everything the class is extends has. 
Instances can use methods and variables
extended classes can use static methods */