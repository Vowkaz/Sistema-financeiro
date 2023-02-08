import Head from "next/head";
import Styles from "@/styles/Home.module.css";

import {Layout} from "@/components/layout";

export default function Dashboard() {
  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={Styles.main}>
        <section className={Styles.section}>


          <div>
            <h2 className='text-3xl font-extralight'>Hello world  </h2>
          </div>

        </section>
      </main>
    </Layout>
  )
}
