const BASE_URL = `http://api.icndb.com/jokes/random`
const catBtn = document.getElementById('change-cat')

const getJoke = async () => {
  const data = await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e.message))

  return data.value.joke
}

const loadJoke = async () => {
  const joke = document.getElementById('joke')
  joke.innerHTML = await getJoke()
}

catBtn.addEventListener('click', loadJoke)

loadJoke()

/*const BASE_URL = `https://thatcopy.pw/catapi/rest/`
const catBtn = document.getElementById('change-cat')

const getCats = async () => {
  const data = await fetch(BASE_URL)
    .then(res => res.json())
    .catch(e => console.log(e.message))

  return data.webpurl
}

const loadImg = async () => {
  const catImg = document.getElementById('cat')
  catImg.src = await getCats()
}

catBtn.addEventListener('click', loadImg)

loadImg() */