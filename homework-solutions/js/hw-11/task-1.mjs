class Employee {
  #salary;

  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get profession() {
    return this._profession;
  }
  get salary() {
    return this.#salary;
  }

  set firstName(value) {
    if (typeof value !== 'string') throw new Error('Invalid first name');
    this._firstName = value;
  }
  set lastName(value) {
    if (typeof value !== 'string') throw new Error('Invalid last name');
    this._lastName = value;
  }
  set profession(value) {
    if (typeof value !== 'string') throw new Error('Invalid profession');
    this._profession = value;
  }
  set salary(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Invalid salary');
    }
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
class Company {
  #employees;

  constructor(title, phone, address, employees) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = [];
  }

  get title() {
    return this._title;
  }
  get phone() {
    return this._phone;
  }
  get address() {
    return this._address;
  }

  set title(value) {
    if (typeof value !== 'string') throw new Error('Invalid title');
    this._title = value;
  }
  set address(value) {
    if (typeof value !== 'string') throw new Error('Invalid address');
    this._address = value;
  }
  set phone(value) {
    if (typeof value !== 'number') throw new Error('Invalid phone');
    this._phone = value;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('Invalid employee');
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
