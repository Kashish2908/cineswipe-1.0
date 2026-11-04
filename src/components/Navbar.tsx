import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="p-5">
      <Link href="/" className="flex w-fit items-center gap-2">
        <Image src="/logo.svg" alt="" width={28} height={28} priority />
        <span className="font-serif text-2xl">CineSwipe</span>
      </Link>
    </header>
  )
}

export default Navbar