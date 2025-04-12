interface IAccount {
  dateOf_opening: string;

  addCustomer(customer: string): void;

  removeCustomer(customer: string): void;
}

class Account {
  accNo: string;
  balance: number;
  constructor(accNo: string, balance: number) {
    this.accNo = accNo;
    this.balance = balance;
  }

  debitAmount(): void {}
  getBalacane(): number {
    return 0;
  }
  creditAmount(): void {}
}

class SavingAccount extends Account implements IAccount {
  minBalance: number;
  dateOf_opening: string;
  constructor(accNo: string, balance: number, minBlance: number) {
    super(accNo, balance);
    this.minBalance = minBlance;
  }
  getBalacane(): number {
    return 0;
  }

  addCustomer(customer: string): void {
    console.log(`this customer ${customer}`);
  }

  debitAmount(): void {}

  removeCustomer(customer: string): void {}

  creditAmount(): void {
    console.log("creditAmount");
  }
}

class CurrentAccount extends Account implements IAccount {
  interestRate: number;
  dateOf_opening: string;
  constructor(accNo: string, balance: number, interestRate: number) {
    super(accNo, balance);
    this.interestRate = interestRate;
  }

  addCustomer(customer: string): void {
    console.log();
  }

  creditAmount(): void {
    console.log("creditAmount");
  }

  debitAmount(): void {
    console.log("debitAmount");
  }

  getBalacane(): number {
    return 10;
  }

  removeCustomer(customer: string): void {
    console.log(`customer removed ${customer}`);
  }
}
