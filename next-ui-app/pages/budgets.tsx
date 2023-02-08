import Head from "next/head";

import {Layout} from "@/components/layout";

export default function Budgets() {
  return (
      <Layout>
        <Head>
          <title>Budgets</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <main className="grid h-[93.2vh] grid-cols-2">
          <section className=" border-2 border-solid border-indigo-600  ">
            orca
          </section>
          <section className="grid grid-rows-2">
            <div className="border-2 border-solid border-indigo-600 ">
              aceitar
            </div>
            <div className="border-2 border-solid border-indigo-600 ">
              valuetion
            </div>
          </section>
        </main>
      </Layout>
  )
}
