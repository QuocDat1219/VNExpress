import "../../styles/custom.css";
import { Elements } from "@stripe/react-stripe-js";
import { GoogleOAuthProvider } from "@react-oauth/google";

//internal import
import { UserProvider } from "../context/UserContext";
import { SidebarProvider } from "../context/SidebarContext";
import NextNProgress from "nextjs-progressbar";
import getStripe from "./../../util/stripe";

const stripePromise = getStripe();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <UserProvider>
          <SidebarProvider>
            <Elements stripe={stripePromise}>
              <NextNProgress
                color="#02c719"
                startPosition={0.3}
                stopDelayMs={200}
                height={4}
                showOnShallow={true}
              />
              <Component {...pageProps} />
              {/* <MessengerChat
                    pageId="102652242927004"
                    themeColor="#15803d"
                    minimized={true}
                    htmlRef="fb-msgr"
                  /> */}
            </Elements>
          </SidebarProvider>
        </UserProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default MyApp;
