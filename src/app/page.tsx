import { ContainerHeader } from "@/components/organisms/ContainerHeader/ContainerHeader"
import { ContainerHero } from "@/components/sections/ContainerHero/ContainerHero"

export default function LandingPage() {
  return (
    <>
      <ContainerHeader />
      <main>
        <ContainerHero />
      </main>
    </>
  )
}