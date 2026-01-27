import { ButtonPanda } from "./components/ButtonPanda/ButtonPanda"
import { DeliveryTypes } from "./components/DeliveryTypes/DeliveryTypes"
import { Documentation } from "./components/Documentation/Documentation"
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
    </>
  )
}

export default App
