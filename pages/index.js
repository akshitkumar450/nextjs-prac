// root page
import Header from "../components/Header";
import Link from 'next/link'
import Head from 'next/head'

function index() {
  return (
    <div>
      <Head>
        <title> Nextjs practice</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>home page</h1>
      <ul>
        <li>
          <Link href="/news/details">details page</Link>
        </li>
        <li>
          <Link href="/news/">news page</Link>
        </li>
        <li>
          <Link href="/news/1">news page-1</Link>
        </li>
        <li>
          <Link href="/news/2">news page-2</Link>
        </li>
      </ul>
    </div>
  )
}

export default index