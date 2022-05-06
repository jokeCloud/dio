const persons = [
  {
    name: 'Frodo',
    age:  150
  },
  {
    name: 'Gandalf',
    age:  1500
  },
  {
    name: 'Aragorn',
    age:  300
  }
]

const nums = [1, 2]

function mapComThis(arr, thisArg) {
  return arr.map(function(item) {
    return item * this.age
  }, thisArg)
}

for (let person of persons) {
  console.log(mapComThis(nums, person))
}

function mapSemThis(arr) {
  arr.map(function(item) {
    console.log(item*2)
  })
}

mapSemThis(nums)