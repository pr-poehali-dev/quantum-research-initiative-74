import ShaderBackground from "@/components/ShaderBackground"
import HeroContent from "@/components/HeroContent"
import PulsingCircle from "@/components/PulsingCircle"
import Header from "@/components/Header"
import Catalog from "@/components/Catalog"

const Index = () => {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <Catalog />
    </>
  )
}

export default Index