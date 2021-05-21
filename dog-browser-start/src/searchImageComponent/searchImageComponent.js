import '../css/searchImageComponent.css';


class SearchImage {
  async getImages(dogbreed) {

    if(!dogbreed) {
      window.alert('Nem lett beírva semmi a keresőbe, nem tudunk keresni!');
      // megállítjuk a getImages függvény futását
      return;
    }

    let urlString = '';
    dogbreed = dogbreed.split(' ');
    // a dogbreed változó mostmár egy tömb!
    if(dogbreed.length === 1) {
      urlString = `https://dog.ceo/api/breed/${dogbreed[0]}/images`;
    } else if (dogbreed.length === 2) {
      urlString = `https://dog.ceo/api/breed/${dogbreed[1]}/${dogbreed[0]}/images`;
    }
    const response = await fetch(urlString);
    const data = await response.json();
    const image = document.createElement('img');
    // a data.message tömbből egy véletlenszerű elemet kiválasztunk
    image.src = data.message[Math.floor(Math.random() * data.message.length)];
    document.querySelector('#content').appendChild(image);
    console.log(data);
  }

  // megjeleníti a keresőt:
  render() {
    const markup = `
    <form class="dog-search">
      <span class="search-icon"></span>
      <input type="text" id="dogSearchInput">
      <button>Search</button>
    </form>
    `;
    document.querySelector('#header').insertAdjacentHTML('beforeend', markup);
    // az arrow functionnek nincs saját this kulcsszva, tehát az arrow fucntion-ön belül a this
    // ugyanazt fogja jelenteni mint azon kívül (a class-t amiben vagyunk)
    document.querySelector('.dog-search button').addEventListener('click', (event) => {
      event.preventDefault(); 
      // console.log(event);
      const searchTerm = document.querySelector('#dogSearchInput').value;
      this.getImages(searchTerm);
    });

  }
}

export default SearchImage;
