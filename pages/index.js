import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      Index
      <br />
      <Link href="/works">Works page</Link>
      <br />
      <Link href="/about">About page</Link>
    </div>
  )
}
