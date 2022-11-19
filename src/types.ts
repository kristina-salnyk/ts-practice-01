const DAY_MS = 86400000;

const convertToDate = (str: string): Date => {
  const datePath = str.split(".").reverse().join("-");
  return new Date(datePath);
};

function getDaysToNewYear(date: Date | string): number {
  let formatDate = typeof date === "string" ? convertToDate(date) : date;
  const newYearDate = new Date("2023-01-01");
  return Math.floor((newYearDate.getTime() - formatDate.getTime()) / DAY_MS);
}

console.log(getDaysToNewYear(new Date(2022, 11, 31))); // 1
console.log(getDaysToNewYear(new Date(2022, 5, 15))); // 200
console.log(getDaysToNewYear("22.04.2020")); // 994

function lastToFirst(value: string): string {
  if (value.length === 1) {
    return value;
  }
  const arr = value.split("");
  const firstChar = arr.splice(0, 1);
  const lastChar = arr.splice(arr.length - 1, 1);
  return lastChar + arr.join("") + firstChar;
}

console.log(lastToFirst("loop")); // pool;
console.log(lastToFirst("ab")); // ba;
console.log(lastToFirst("a")); // a;

enum UserType {
  Employee = "EMPLOYEE",
  Contractor = "CONTRACTOR",
}

type User = {
  name: string;
  login: string;
  surname?: string;
  type: string;
  contractorCompanyName?: string;
  address?: {
    officeId: number;
    placeId: number;
  };
};

type UserGroups = { employees: User[]; contractors: User[] };

function groupOrgUsers(users: User[]): UserGroups {
  const employees = users.filter((item) => item.type === UserType.Employee);
  const contractors = users.filter((item) => item.type === UserType.Contractor);
  return { employees, contractors };
}
