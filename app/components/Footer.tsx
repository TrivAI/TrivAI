import Image from 'next/image'
import styles from '.././page.module.css'
export default function Footer() {
    return(
        // lg:absolute lg:bottom-0 lg:right-0
        <footer className=" flex justify-end items-center ">
            <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={90}
            height={50}
            priority
            />
            <div className={styles.thirteen}>
                <Image src="/thirteen.svg" alt="13" width={30} height={30} priority />
            </div>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            >
                By{' '}
                <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={500}
                priority
                />
            </a>
        </footer>
    );
}