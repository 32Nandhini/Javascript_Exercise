// Level 1

// Store you first name, last name, age, country, city in your browser localStorage.
//answer
localStorage.setItem('firstName', 'John');
localStorage.setItem('lastName', 'Doe');
localStorage.setItem('age', '30');
localStorage.setItem('country', 'USA');
localStorage.setItem('city', 'New York');


// Level 2

// Create a student object. The student object will have first name, last name, age, skills, 
// country, enrolled keys and values for the keys. Store the student object in your browser 
// localStorage.

//answer
const student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  skills: ['HTML', 'CSS', 'JavaScript'],
  country: 'USA',
  enrolled: true
};

localStorage.setItem('student', JSON.stringify(student));

// Level 3

// Create an object called personAccount. It has firstname, lastname, incomes, expenses 
// properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance methods. Incomes is a set of incomes and its description and expenses is 
// also a set of expenses and its description.
//answer
const personAccount = {
  firstName: 'John',
  lastName: 'Doe',
  incomes: [],
  expenses: [],
  
  totalIncome() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },
  
  totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },
  
  accountInfo() {
    return `${this.firstName} ${this.lastName} has a total income of ${this.totalIncome()} and a total expense of ${this.totalExpense()}.`;
  },
  
  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  },
  
  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  },
  
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
};


personAccount.addIncome('Salary', 5000);
personAccount.addIncome('Freelance', 2000);
personAccount.addExpense('Rent', 1500);
personAccount.addExpense('Groceries', 500);

console.log(personAccount.accountInfo()); // Output: John Doe has a total income of 7000 and a total expense of 2000.
console.log(`Account Balance: ${personAccount.accountBalance()}`); // Output: Account Balance: 5000
