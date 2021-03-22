import React from "react"
import FooterNavigation from "./navigation/footer"

//components
import MenuTop from "./navigation/menu"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
        <MenuTop/>
        <main>
            {children}
        </main>
        <FooterNavigation/>
    </div>
  )
}