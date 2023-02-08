import Head from "next/head";
import Styles from "@/styles/Dashboard.module.css";
import SideBar from "@/components/SideBar/SideBar";
import {Box} from "@mui/material";
import TopBar from "@/components/TopBar/TopBar";
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={Styles.main}>
                <SideBar/>
                <section className={Styles.section}>

                    <TopBar count={9999}/>

                    <Box>
                        <h2 className={inter.className}>Hello world  </h2>
                    </Box>
                </section>
            </main>
        </>
    )
}