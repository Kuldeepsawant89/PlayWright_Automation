//OOPS - class, methods,method overloading, method overriding, objects, inheritance, encapsulation, polymorphism, abstraction, super, this, constructor, static method, instance method, getter and setter, access modifiers (public, private, protected), interfaces, abstract classes, composition, aggregation, association, dependency injection.

//Class: A blueprint for creating objects that encapsulates data and behavior. It defines properties and methods that the objects created from the class will have.

//Methods: Functions that are defined within a class and can be called on instances of that class. They define the behavior of the objects created from the class.

//function is used to perform a specific task, while a method is a function that is associated with an object and can access and manipulate the data within that object. In other words, a method is a function that belongs to a class or an object, and it can operate on the data contained within that class or object.

class student {
  setdetails() {
    this.sid = 1;
    this.sname = "john";
    this.sclass = "10th";
  }
  displaydetails() {
        console.log(this.sid, this.sname, this.sclass);
}
}
let s1 = new student();
s1.setdetails();
s1.displaydetails();

//parameter at object calling time
class student1 {
  setdetails(sid, sname, sclass) {
    this.sid = sid;
    this.sname = sname;
    this.sclass = sclass;
  }
    displaydetails() {
        console.log(this.sid, this.sname, this.sclass);
}
}
let s2 = new student1();
s2.setdetails(2, "john", "10th");
s2.displaydetails();

//constructor - it is a special method that is automatically called when an object is created from a class. It is used to initialize the properties of the object.
class student2 {
  constructor(sid, sname, sclass) {
    this.sid = sid; 
    this.sname = sname;
    this.sclass = sclass;
  }
    displaydetails() {
        console.log(this.sid, this.sname, this.sclass);
}
}
let s3 = new student2(3, "john", "10th");
s3.displaydetails();

//method overloading - it is a feature that allows a class to have multiple methods with the same name but different parameters. It allows you to perform different tasks based on the number or type of arguments passed to the method.
class student3 {
  setdetails(sid, sname, sclass) {
    this.sid = sid;
    this.sname = sname;
    this.sclass = sclass;
  } 
    setdetails(sid, sname) {
    this.sid = sid;
    this.sname = sname;
    }
    displaydetails() {
        console.log(this.sid, this.sname, this.sclass);
}
}
let s4 = new student3();
s4.setdetails(4, "john", "10th");

s4.displaydetails();
s4.setdetails(4, "john");
s4.displaydetails();

//method overriding - it is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. It allows you to modify the behavior of the inherited method in the subclass.
class student4 {
  setdetails(sid, sname, sclass) {
    this.sid = sid;
    this.sname = sname;
    this.sclass = sclass;
  }
    displaydetails() {
        console.log(this.sid, this.sname, this.sclass);
}
}
class student5 extends student4 {
  setdetails(sid, sname, sclass, saddress) {
    this.sid = sid;
    this.sname = sname;
    this.sclass = sclass;
    this.saddress = saddress;
  }

    displaydetails() {
        console.log(this.sid, this.sname, this.sclass, this.saddress);
}
}
let s5 = new student5();
s5.setdetails(5, "john", "10th", "chennai");
s5.displaydetails();

//inheritance - it is a fundamental object-oriented programming concept that allows a new class (called a subclass or child class) to inherit properties and behaviors (fields and methods) from an existing class (called a superclass or parent class). Inheritance promotes code reusability and establishes a natural hierarchical relationship between classes. The subclass can also have its own unique properties and behaviors in addition to those inherited from the superclass.
//example of inheritance
class animal {
  eat() {   
    console.log("eating...");
  }
}
class dog extends animal {
  bark() {
    console.log("barking...");
  }
}
let d1 = new dog();
d1.eat(); // Output: eating...
d1.bark(); // Output: barking...

//inheritance --> single inheritance, multiple inheritance, multilevel inheritance, hierarchical inheritance, hybrid inheritance
//single inheritance - when a subclass inherits from a single superclass
class animal1 {
  eat() {   
    console.log("eating...");
  }
}
class dog1 extends animal1 {
    bark() {
    console.log("barking...");
  }
}
let d2 = new dog1();
d2.eat(); // Output: eating...
d2.bark(); // Output: barking...

//multiple inheritance - when a subclass inherits from multiple superclasses. JavaScript does not support multiple inheritance directly, but it can be achieved using mixins or composition.
//multilevel inheritance - when a subclass inherits from a superclass, and then another subclass inherits from that subclass.
class animal2 {
    eat() {
        console.log("eating...");
    }
}
class dog2 extends animal2 {
    bark() {
        console.log("barking...");
    }
}
class puppy extends dog2 {
    weep() {
        console.log("weeping...");
    }
}
let p1 = new puppy();
p1.eat(); // Output: eating...
p1.bark(); // Output: barking...
p1.weep(); // Output: weeping...
//hierarchical inheritance - when multiple subclasses inherit from a single superclass.
class animal3 {
    eat() {
        console.log("eating...");
    }
}
class dog3 extends animal3 {
    bark() {
        console.log("barking...");
    }
}
class cat extends animal3 {
    meow() {
        console.log("meowing...");
    }
}
let d3 = new dog3();
d3.eat(); // Output: eating...
d3.bark(); // Output: barking...
let c1 = new cat();
c1.eat(); // Output: eating...
c1.meow(); // Output: meowing...
//hybrid inheritance - a combination of two or more types of inheritance.   
//example of hybrid inheritance
class animal4 {
    eat() {
        console.log("eating...");
    }
}
class dog4 extends animal4 {
    bark() {
        console.log("barking...");
    }
}


class cat1 extends animal4 {
    meow() {
        console.log("meowing...");
    }
}
class puppy1 extends dog4 {
    weep() {
        console.log("weeping...");
    }
}
let d4 = new dog4();
d4.eat(); // Output: eating...
d4.bark(); // Output: barking...
let c2 = new cat1();
c2.eat(); // Output: eating...
c2.meow(); // Output: meowing...
let p2 = new puppy1();
p2.eat(); // Output: eating...
p2.bark(); // Output: barking...
p2.weep(); // Output: weeping...


//multiple inheritance - when a subclass inherits from multiple superclasses. JavaScript does not support multiple inheritance directly, but it can be achieved using mixins or composition.
//example of multiple inheritance using mixins
let canEat = {
    eat() {
        console.log("eating...");
    }
};
let canBark = {
    bark() {
        console.log("barking...");
    }
};
let dog5 = Object.assign({}, canEat, canBark);
dog5.eat(); // Output: eating...
dog5.bark(); // Output: barking...


//encapsulation - it is the process of hiding the internal details of an object and only exposing a public interface. It allows you to protect the data and behavior of an object from outside interference and misuse.
//example of encapsulation
class bankAccount { 
    constructor(balance) {
        this._balance = balance; // The underscore is a convention to indicate that this property is intended to be private
    }
    get balance() {
        return this._balance; // Getter method to access the balance
    }
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount; // Method to deposit money into the account
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this._balance) {
            this._balance -= amount; // Method to withdraw money from the account
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }
}
let account = new bankAccount(1000);
console.log(account.balance); // Output: 1000
account.deposit(500);
console.log(account.balance); // Output: 1500
account.withdraw(200);
console.log(account.balance); // Output: 1300
account.withdraw(2000); // Output: Invalid withdrawal amount.

//abstraction - it is the process of hiding the implementation details of an object and only exposing the essential features. It allows you to focus on what an object does rather than how it does it.
//example of abstraction
class car { 
    start() {
        console.log("Car started.");
    }
    stop() {
        console.log("Car stopped.");
    }
}
let myCar = new car();
myCar.start(); // Output: Car started.
myCar.stop(); // Output: Car stopped.





