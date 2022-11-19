// TASK 1
const button = document.querySelector('button')! as HTMLInputElement;
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener('click', function () {
  console.log(add(+input1.value, +input2.value));
});

// TASK 2
let age: number;
age = 50;

let userName: string;
userName = 'Max';

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback: (a: number) => number;
callback = a => {
  return 100 + a;
};

let anything: any = -20;
anything = 'Text';
anything = {};

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
  str = some;
}

let person: [string, number];
person = ['Max', 21];

enum Status {
  LOADING,
  READY,
}

const page = {
  load: Status.READY,
};

if (page.load === Status.LOADING) {
  console.log('Сторінка завантажується');
}
if (page.load === Status.READY) {
  console.log('Сторінка завантажена');
}

let value: string | number;
value = 'string';
value = 10;

let state: 'enable' | 'disable';
state = 'enable';

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: string;
    updateAt: string;
  };
};

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  },
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
