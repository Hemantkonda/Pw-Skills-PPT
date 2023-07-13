// Q1.

function convertToNumber(str) {
    const converted = Number(str.trim());
    if (isNaN(converted)) {
        throw new Error("Invalid number");
    }
    return converted;
}

try {
    console.log(convertToNumber(" 123")); // Output: 123
    console.log(convertToNumber(" abc")); // Output: Invalid number
} catch (error) {
    console.log(error.message);
}


// Q2.

function getPerson(personObj) {
    if (typeof personObj !== "object" || !personObj.hasOwnProperty("name") || !personObj.hasOwnProperty("age")) {
        throw new Error("Invalid parameter type");
    }
    return `Name: ${personObj.name}, Age: ${personObj.age}`;
}

try {
    console.log(getPerson({
        name: "Mithun",
        age: 20
    })); // Output: Name: Mithun, Age: 20
    console.log(getPerson({
        name: "Mithun"
    })); // Output: Invalid parameter type
    console.log(getPerson(["name", "Mithun"])); // Output: Invalid parameter type
} catch (error) {
    console.log(error.message);
}


// Q3.

class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}.`;
    }
}

const myCar = new Car("Skoda", "Rapid", 2022);
console.log(myCar.getDescription()); // Output: This is a 2022 Skoda Rapid.


// Q4

class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

const employee1 = new Employee("John Doe", "Manager", 80000);
console.log(employee1.getSalary()); // Output: 80000


// Q5

class Person {
    constructor(name = "Unknown", age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person();
console.log(person1.getDetails()); // Output: Name: Unknown, Age: 0

const person2 = new Person("Mithun", 20);
console.log(person2.getDetails()); // Output: Name: Mithun, Age: 20


// Q6

class Calculator {
    static add(num1, num2) {
        return num1 + num2;
    }
}

const result = Calculator.add(10, 5);
console.log(result); // Output: 15


// Q7

class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    get password() {
        return this._password.replace(/./g, "*");
    }

    setPassword(newPassword) {
        if (newPassword.length >= 8 && /\d/.test(newPassword) && /[A-Z]/.test(newPassword)) {
            this._password = newPassword;
        } else {
            console.log("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        }
    }
}

const user = new User("myUsername", "Password123");
console.log(user.password); // Output: ***********

user.setPassword("1234567"); // Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.
user.setPassword("Mypassword123");
console.log(user.password); // Output: ****************


// Q8

function Student(name) {
    this.name = name;
}

Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const student = new Student("Mithun");
student.printDetails(); // Output: Hello, my name is Mithun


// Q9

function numberChecker(numbers) {
    return function (num) {
        return numbers.includes(num);
    };
}

const arr = [1, 2, 3, 4, 5];
const checkNum = numberChecker(arr);

console.log(checkNum(3)); // Output: true
console.log(checkNum(6)); // Output: false


// Q10

function filterByCategory(products) {
    return function (category) {
        return products.filter(product => product.category === category);
    };
}

const products = [{
        name: "Shirt",
        category: "Clothing"
    },
    {
        name: "Pants",
        category: "Clothing"
    },
    {
        name: "Hat",
        category: "Accessories"
    },
    {
        name: "Sunglasses",
        category: "Accessories"
    }
];

const clothingProducts = filterByCategory(products)("Clothing");
console.log(clothingProducts);
// Output: [{name: "Shirt", category: "Clothing"}, {name: "Pants", category: "Clothing"}]