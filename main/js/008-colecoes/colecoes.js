const users = new Map();

users.set('João' , 'admin');
users.set('Pedro', 'user');
users.set('Paulo', 'user');
users.set('Em'   , 'developer');

function getAdmins (map) {
  const admins = []

  for ([key, value] of map) {
    if (value === 'developer') {
      admins.push(key)
    }
  }
  return admins
}

console.log(getAdmins(users))


const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
  const mySet = new Set(arr);
  
  return [...mySet];
}

console.log(valoresUnicos(arr))