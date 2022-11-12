import type { NextPage } from "next"
import Head from "next/head"
import { Header, Main } from "../components"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>EDUTUBE- one place for all your learnings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full min-h-screen">
        <Header />
        <Main />
      </main>
    </div>
  )
}

export default Home
