import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import Catalog from "@/components/Catalog"
import ComputerProducts from "@/components/ComputerProducts"
import AccessoryProducts from "@/components/AccessoryProducts"
import Deals from "@/components/Deals"

const Index = () => {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <Catalog />
      <Deals />
      <ComputerProducts />
      <AccessoryProducts />
    </>
  )
}

export default Index