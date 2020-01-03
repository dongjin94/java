let now = new Date();

now.setDate(now.getDate() + 100);
console.log(now.toLocaleString());
console.log(now.toLocaledateString()); // 2020-1-3
console.log(now.toLocaletimeString()); // 10:47:46