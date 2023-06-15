import * as styles from './styles.scss';
import pngImage from './assets/logo.png';

const logoImg = document.createElement('img');
logoImg.src = pngImage;
document.getElementById('logoImg').appendChild(logoImg);