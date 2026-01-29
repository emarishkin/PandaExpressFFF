import { useState } from "react"
import { ButtonPanda } from "./components/ButtonPanda/ButtonPanda"
import { DeliveryTypes } from "./components/DeliveryTypes/DeliveryTypes"
import { Documentation } from "./components/Documentation/Documentation"
import { Footer } from "./components/Footer/Footer"
import { MainInfo } from "./components/MainInfo/MainInfo"
import { WhatWeOffer } from "./components/WhatWeOffer/WhatWeOffer"
import { WhyWhite } from "./components/WhyWhite/WhyWhite"
import { Modal } from "./components/Modal/Modal"

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <MainInfo onOpenModal={openModal} />
      <WhatWeOffer />
      <WhyWhite />
      <ButtonPanda onOpenModal={openModal} />
      <Documentation />
      <ButtonPanda onOpenModal={openModal} />
      <DeliveryTypes />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default App
