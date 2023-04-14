import Layout from '@layouts/Layout'
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="novedades">
            <img className="img-novedades" src="../public/novedades.png"/>
        </section>
      </Layout>
    </>
  )
}