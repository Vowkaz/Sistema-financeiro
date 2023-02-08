import Head from "next/head"
import Link from "next/link"
import {Inter} from '@next/font/google'
import styles from '../styles/Home.module.css'

// import {siteConfig} from "@/config/site"

import {Layout} from "@/components/layout"
import {Icons} from "@/components/icons"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main className={styles.main}>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Praesent feugiat sapien nisi, at tristique odio semper et. Donec rhoncus nisi at ex gravida, id viverra urna tempus. Aliquam gravida a leo nec tincidunt.
          </p>
        </div>
      </section>

      <section className={styles.section}>

        <div className={styles.grid}>
          <Link
            href="/dashboard"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-between">
              <h2>
                Dashboard
              </h2>
              <Icons.ArrowR className="m-1"/>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit, ex in volutpat fringilla.
            </p>
          </Link>

          <Link
            href="/"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-between">
              <h2>
                Lorem ipsum
              </h2>
              <Icons.ArrowR className="m-1"/>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit, ex in volutpat fringilla.
            </p>
          </Link>

          <Link
            href="/budgets"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-between">
              <h2>
                Bugets
              </h2>
              <Icons.ArrowR className="m-1"/>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit, ex in volutpat fringilla.
            </p>
          </Link>

        </div>
      </section>
      </main>
    </Layout>
  )
}
