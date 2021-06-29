//components
import Head from "@/components/Head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
//styles
import GlobalStyles from "@/styles/GlobalStyles";
//types
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head />
			<Nav />
			<GlobalStyles />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
