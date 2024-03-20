import React, {useLayoutEffect} from 'react'

import Main from "./components/UI/Main"
import ButtonCart from "./components/UI/ButtonCart"
import MenuNav from "./components/UI/MenuNav"
import Header from "./components/Header/Header"
import SectionOne from "./components/Section-1/SectionOne"
import SectionTwo from "./components/Section-2/SectionTwo"
import SectionThree from "./components/Section-3/SectionThree"
import SectionFour from "./components/Section-4/SectionFour"
import Footer from "./components/Footer/Footer"
import Layout from "./components/Cart/Layout"
import Cart from "./components/Cart/Cart"
import Alerts from "./components/Alerts/Alerts"

export default function App() {

  useLayoutEffect(() => {
    window.addEventListener("beforeunload", function(){
      this.scrollTo(0, 0)
      location.reload()
    })  
  },[])

  return (
    <>
    <MenuNav/>
    <Alerts/>
    <Layout/>
    <Cart/>
    <ButtonCart/>
    <Main>
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
    </Main>
    </>
  )
}

