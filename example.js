const users = [
    { name: "John", age: 30, isActive: false },
    { name: "Jane", age: 25, isActive: true },
    { name: "Bob", age: 35, isActive: true },
    { name: "Alice", age: 28, isActive: true },
    { name: "Charlie", age: 32, isActive: false },
    { name: "David", age: 27, isActive: true },
];

// Get active user names
const result = users.filter((item) => item.isActive).map((item) => item);
const activeUsers = users.reduce((acc, item) => {
    if (item.isActive) {
        acc.push(item);
    }
    return acc;
}, []);

// Count active users
const activeUsersCount = users.filter((item) => item.isActive).length;

// Get ages of inactive users
const agesOfInactiveUsers = users.filter((item) => !item.isActive).map((item) => item.age);

// Check if any user is active
const isAnyUserActive = users.some((item) => item.isActive);

// Group users by isActive
const groupedUsers = users.reduce(
    (acc, item) => {
        if (item.isActive) {
            acc.active.push(item.name);
        } else {
            acc.inactive.push(item.name);
        }
        return acc;
    },
    { active: [], inactive: [] }
);

// Sum of ages of active users
const sumOfAgesOfActiveUsers = users.filter((item) => item.isActive).reduce((acc, item) => acc + item.age, 0);

// Convert array to object (name as key)
const arrayToObject = users.reduce((acc, item) => {
    acc[item.name] = item;
    return acc;
}, {});

// Remove duplicate names
const data = ["John", "Jane", "John", "Alice"]
const uniqueNames = [...new Set(data)];

// Wallet balance calculation (Finance logic 💰)
const transactions = [
    { type: "credit", amount: 500 },
    { type: "debit", amount: 200 },
    { type: "debit", amount: 400 }
];

const balance = transactions.reduce((acc, item) => {
    if (item.type === "credit") {
        acc += item.amount;
    } else {
        acc -= item.amount;
    }
    return acc;
}, 0);

// Order summary (E-commerce)
const orders = [
    { userId: 1, amount: 200 },
    { userId: 2, amount: 300 },
    { userId: 1, amount: 150 },
    { userId: 3, amount: 150 }
];

const orderSummary = orders.reduce((acc, item) => {
    if (acc[item.userId]) {
        acc[item.userId] += item.amount;
    } else {
        acc[item.userId] = item.amount;
    }
    return acc;
}, {});

// Date range filter (Real backend logic)
const bookings = [
    { id: 1, date: "2026-01-10" },
    { id: 2, date: "2026-01-15" },
    { id: 3, date: "2026-01-20" }
];

const start = "2026-01-12"
const end = "2026-01-18"

const filteredBookings = bookings.filter((item) => item.date >= start && item.date <= end);

// Single-pass optimization (Interview favorite ⚡)
const totalActiveAge = users.reduce((sum, user) => {
    if (user.isActive) {
        sum += user.age;
    }
    return sum;
}, 0);

// Flatten array
const flat = [[1, 2], [3, 4], [5]].flat();

// Find most frequent value
const value = [1, 2, 2, 3, 3, 3, 4];

const frequencyMap = value.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {});

let mostFrequentValue = null;
let maxCount = 0;

for (const key in frequencyMap) {
    if (frequencyMap[key] > maxCount) {
        maxCount = frequencyMap[key];
        mostFrequentValue = Number(key);
    }
}

// Common JS constructors used with new

// 🔹 Core objects
new Date()
new Object()
new Array()
new Map()
new Set()
new WeakMap()
new WeakSet()
new Promise((resolve) => resolve());
new RegExp()
new Error()
new URL("https://example.com")


const date = new Date();

const d = new Date();

d.getFullYear();     // 2025
d.getMonth();        // 0–11 (0 = Jan)
d.getDate();         // day of month (1–31)
d.getDay();          // day of week (0 = Sunday)

d.getHours();        // 0–23
d.getMinutes();      // 0–59
d.getSeconds();      // 0–59
d.getMilliseconds(); // 0–999

d.getTime();         // timestamp (ms since 1970)

d.getUTCFullYear();
d.getUTCMonth();
d.getUTCDate();
d.getUTCHours();

d.setFullYear(2026);
d.setMonth(5);       // June
d.setDate(15);
d.setHours(18);
d.setMinutes(45);

d.toString();
// "Fri Jan 31 2025 18:40:00 GMT+0530 (India Standard Time)"

d.toDateString();
// "Fri Jan 31 2025"

d.toTimeString();
// "18:40:00 GMT+0530"

d.toISOString();
// "2025-01-31T13:10:00.000Z"

d.toLocaleString();
// "31/1/2025, 6:40:00 pm"

d.toLocaleDateString();
// "31/1/2025"

d.toLocaleTimeString();
// "6:40:00 pm"

Date.now();     // current timestamp (ms)
Date.parse("2025-01-31"); // timestamp

const d1 = new Date("2025-01-01");
const d2 = new Date("2025-02-01");

d1 < d2; // true

// Convert DB date to readable format
new Date("2025-01-31").toLocaleString();

// Add 7 days
d.setDate(d.getDate() + 7);

const user = new Object();
user.name = "Sakthi";
user.age = 25;

const arr = new Array(1, 2, 3);
arr.push(4);

const map = new Map();
map.set("name", "Sakthi");
map.set("age", 25);

console.log(map.get("name"));
console.log(map);

const set = new Set();
set.add(1);
set.add(2);
set.add(2); // duplicate ignored

console.log(set);

const weakMap = new WeakMap();
const obj = {};

weakMap.set(obj, "secret");

console.log(weakMap.get(obj));

const weakSet = new WeakSet();

weakSet.add(obj);

console.log(weakSet.has(obj));

const regex = new RegExp("\\d+"); // match numbers

console.log(regex.test("abc123")); // true

const err = new Error("Something went wrong");

try {
    throw err;
} catch (e) {
    console.log(e.message);
}

const url = new URL("https://example.com/path?name=Sakthi");
url.href       // 'https://example.com/path?name=Sakthi'
url.protocol   // "https:"
url.hostname   // "example.com"
url.port       // ""
url.host       // "example.com"
url.pathname   // "/path"
url.search     // '?name=Sakthi'
url.hash       // ""
url.origin     // "https://example.com"

console.log(url.hostname);
console.log(url.searchParams.get("name"));

const userobj = new Object();
userobj.name = "Sakthi";

console.log('userobj: ', userobj);

function Person(name) {
    this.name = name;
}

const p = new Person("Sakthi");
console.log('p: ', p);

class Person1 {
    constructor(name) {
        this.name = name;
    }
}

const pn = new Person1("Sakthi");
console.log('pn: ', pn);

url.searchParams.set("name", "SK");

console.log(url.searchParams.get("name"));

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a sound");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log("Woof!");
    }
    static helper() {
        console.log("Static method");
    }
}

const dog = new Dog("Buddy", "Labrador");

dog.speak();   // ✅ inherited
dog.bark();    // ✅ instance method
Dog.helper(); // ✅ static method

class MathUtil {
    static add(a, b) {
        return a + b;
    }
}

const add = MathUtil.add(2, 3); // ✅
console.log('add: ', add);

const promiseEg = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 1000);
});

promiseEg.then(result => console.log(result));

// 1️⃣ Creating a Promise (basic)
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Something went wrong");
    }
});

promise.then(result => console.log(result)).catch(error => console.log(error)).finally(() => console.log("Done"));

// 2️⃣ .then() – handle success
Promise.resolve(10).then(value => value * 2).then(value => console.log(value)); // 20

//3️⃣ .catch() – handle errors
Promise.reject("Error occurred").catch(err => console.log(err)); // Error occurred

// 4️⃣ .finally() – always runs
new Promise((resolve) => {
    setTimeout(() => resolve("Completed"), 1000);
}).finally(() => console.log("Cleanup done")).then(result => console.log(result));

// 5️⃣ Promise.resolve()
Promise.resolve("Hello").then(data => console.log(data)); // Hello

// 6️⃣ Promise.reject()
Promise.reject("Failed").catch(err => console.log(err)); // Failed

// 7️⃣ Promise.all() – wait for ALL
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(results => console.log(results)); // [1, 2, 3]

Promise.all([
    Promise.resolve(1),
    Promise.reject("Error"),
]).catch(err => console.log(err)); // Error

// 8️⃣ Promise.allSettled() – wait for ALL (even failures)
Promise.allSettled([
    Promise.resolve("Success"),
    Promise.reject("Failed")
]).then(results => console.log(results));

// 9️⃣ Promise.race() – first to finish (win or fail)
const fast = new Promise(res => setTimeout(() => res("Fast"), 500));
const slow = new Promise(res => setTimeout(() => res("Slow"), 1000));

Promise.race([fast, slow]).then(result => console.log(result)); // Fast

// 🔟 Promise.any() – first SUCCESS
Promise.any([
    Promise.reject("Error 1"),
    Promise.resolve("First success"),
    Promise.resolve("Second success")
]).then(result => console.log(result)); // First success

// 1️⃣1️⃣ Using Promises with async / await
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data received"), 1000);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

getData();

// 1️⃣2️⃣ Convert callback → Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log("1 second passed"));

function login(user) {
    return new Promise((resolve, reject) => {
        if (user === "admin") {
            resolve("Login success");
        } else {
            reject("Invalid user");
        }
    });
}

login("admin").then(msg => console.log(msg)).catch(err => console.log(err));


// 🔹 Promise.all() vs Promise.allSettled()
// ✅ Promise.all()
const pr1 = Promise.resolve("A");
const pr2 = Promise.resolve("B");
const pr3 = Promise.reject("Error");

Promise.all([pr1, pr2, pr3]).then(res => console.log(res)).catch(err => console.log("Error:", err));

// 🔹 Promise.allSettled()

Promise.allSettled([pr1, pr2, pr3]).then(res => console.log(res));

// 🔹 Primitive wrappers (rarely recommended)
new String("abc")
new Number(10)
new Boolean(true)
new BigInt(10n)
new Symbol("id")

// 🔹 Async / Web APIs
new URL("https://a.com")
new URLSearchParams("?a=1")
new AbortController()
new Headers()
new Request(url)
new Response()

// 🎵 new Audio() in JavaScript
new Audio()

const audio = new Audio("sound.mp3");
audio.play();
audio.pause();
audio.currentTime = 0;
audio.loop = true;
audio.volume = 0.5;
audio.muted = true;
audio.src = "sound.mp3";
audio.play().catch(err => console.log("Autoplay blocked"));
audio.canPlayType("audio/mpeg")

// 🎵 new AudioContext() in JavaScript
new AudioContext();

// 🎵 new Image() in JavaScript
new Image()

const img = new Image();
img.src = "photo.jpg";
img.onload = () => console.log("loaded");
img.onerror = () => console.log("failed");

// 🎵 new WebSocket() in JavaScript
new WebSocket("ws://localhost:8080");

// 🎵 new Worker() in JavaScript
new Worker("worker.js");

const worker = new Worker("worker.js");

worker.postMessage({ action: "start" });

worker.onmessage = (e) => {
    console.log("Result:", e.data);
};

worker.terminate();

// 🎵 new XMLHttpRequest() in JavaScript
new XMLHttpRequest();

// 🎵 new DOMParser() in JavaScript
new DOMParser();

// 🎵 new FileReader() in JavaScript
new FileReader();

// 🎵 new FormData() in JavaScript
new FormData();

// 🎵 new Blob() in JavaScript
new Blob();

// 🎵 new FileReader() in JavaScript
new FileReader();

// 🎵 new DOMParser() in JavaScript
new DOMParser();