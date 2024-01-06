import About from '@/components/About/About'
import Contacts from '@/components/Contacts/Contacts'
import Landing from '@/components/Landing/Landing'
import Menu from '@/components/Menu/Menu'
import Reservation from '@/components/Reservation/Reservation'

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Menu />
      <Reservation />
      <Contacts />
    </main>
  )
}
