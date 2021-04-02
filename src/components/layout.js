import React from "react"
import FooterNavigation from "./navigation/footer"

//components
import MenuTop from "./navigation/menu"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
        <MenuTop/>
        <main>
          <div className="pt-lay-mob sm:pt-lay">{children}</div>  
        </main>
        <FooterNavigation/>
    </div>
  )
}