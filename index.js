function getRandomDog() {
  return fetch('https://dog.ceo/api/breeds/image/random').then((res) =>) {
    console.log(res);
  }
   
}