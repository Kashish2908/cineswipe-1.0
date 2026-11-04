import EntryPage from '@/components/EntryPage'
import Navbar from '@/components/Navbar'

const Home = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <EntryPage />
    </div>
  )
}

export default Home