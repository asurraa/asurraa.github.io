import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { Fragment } from "react";
import axios from "axios";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) =>
            axios(resource, init).then((res) => res.data),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </Fragment>
  );
}
export default MyApp;
