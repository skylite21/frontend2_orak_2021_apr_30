import './css/style.css';
import './index.html';
import SearchImage from './searchImageComponent/searchImageComponent';


// separation of concerns

const mySearchImage = new SearchImage();
mySearchImage.render();
