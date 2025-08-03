import "./style.css";
import bannerImage from "./assets/banner.jpg";
import { BannerHeadline } from "./components/banner-headline";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="banner">
      <img id="banner-image" alt="Banner" />
      <h1 class="banner-text">My Restaurant</h1>
    </div>
  </div>
`;

document.querySelector("#banner-image").src = bannerImage;