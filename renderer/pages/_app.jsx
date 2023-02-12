import { AppWrapper } from "../src/contexts/GlobalContext";
import "../src/styles/light.scss";

export default function MyApp({ Component, pageProps }) {
    return (
        <AppWrapper>
            <Component {...pageProps} />
        </AppWrapper>
    )
}