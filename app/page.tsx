import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          mahloola bot
        </title>
        <meta
        name="description"
        content="Claim your favorite osu! player cards"
        key="desc"
        />
      </Head>
      <main className="flex gap-20 min-h-screen items-center justify-center p-24">
            <Image
            src="/images/cards.png"
            width={800}
            height={800}
            alt="Cards"
          />
            <div className={`${styles.slogan}`}>
              Your next card <br/> could be <strong>mrekk</strong>. 
            </div>
      </main>
    </div>
    
  )
}
