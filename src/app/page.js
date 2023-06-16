import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/upload">HR</Link>
      <br />
      <Link href="/cv-list">Recruiter</Link>
    </main>
  )
}
