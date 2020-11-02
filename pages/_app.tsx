import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

library.add(faLinkedin, faMedium, faGithub, faDesktop);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
