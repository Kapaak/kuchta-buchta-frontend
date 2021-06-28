//components
import Nav from "@/components/Nav";
import Head from "@/components/Head";
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
		</>
	);
}

export default MyApp;
