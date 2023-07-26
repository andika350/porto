import Head from "next/head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import { Inter } from "next/font/google";
import Intro from "./components/Intro";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Head>
        <title>Andika Satrio Portofolio</title>
        <meta name="description" content="Generated by next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="px-10">
        <Intro />
        <Skills />
        <section>
          <div>
            <h3 className="py-1 text-3xl">Projects</h3>
            <p className="py-5 leading-8 text-gray-500 text-md">
              Striving to self learn all it need to be a good developer, on my
              path to glory and beyond, logic is key. Striving to self learn all
              it need to be a good developer, on my path to glory and beyond,
              logic is key
            </p>
          </div>
          <div className="gap-5 lg:flex">
            <div className="m-5">
              <Image src={web1} className="rounded-lg" width={"100%"} />
            </div>
            <div className="m-5">
              <Image src={web2} className="rounded-lg" width={"100%"} />
            </div>
            <div className="m-5">
              <Image src={web1} className="rounded-lg" width={"100%"} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
