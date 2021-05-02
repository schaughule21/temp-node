const os = require("os");

//info abt current user
const user = os.userInfo();
console.log(user);

//system uptime in seconds
console.log("System uptime is : ", os.uptime());

const currentOS = {
  name: os.type(),
  rls: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
