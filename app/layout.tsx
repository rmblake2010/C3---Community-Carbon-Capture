import React from "react"
import Navigation from "@/components/navigation/navigation.component"
import Footer from "@/components/footer/footer.component"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      <head />
      <body>
        <Navigation/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
