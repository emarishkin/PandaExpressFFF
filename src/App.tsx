import { ButtonPanda } from "./components/ButtonPanda/ButtonPanda"
import { DeliveryTypes } from "./components/DeliveryTypes/DeliveryTypes"
import { Documentation } from "./components/Documentation/Documentation"
import { Footer } from "./components/Footer/Footer"
import { MainInfo } from "./components/MainInfo/MainInfo"
import { WhatWeOffer } from "./components/WhatWeOffer/WhatWeOffer"
import { WhyWhite } from "./components/WhyWhite/WhyWhite"

function App() {

  return (
    <>
      <MainInfo />
      <WhatWeOffer />
      <WhyWhite />
      <ButtonPanda />
      <Documentation />
      <ButtonPanda />
      <DeliveryTypes />
      <Footer />
    </>
  )
}

export default App
