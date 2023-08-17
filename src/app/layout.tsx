"use client";

import Header from '@/components/header/Header'
import '../styles/globals.css'
import SubHeader from '@/components/header/SubHeader'
import Footer from '@/components/Footer'
import { persistor, store } from "@/redux/store"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode,
  session: any
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <SessionProvider session={session}>
              <div className="font-bodyFont">
                <Header />
                <SubHeader />
                {children}
                <Footer />
              </div>
            </SessionProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
