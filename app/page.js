import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href={`/blog`}>
          <p>
            Get started by Hanif&nbsp;
            <code className={styles.code}>Go To Blog Page</code>
          </p>
        </Link>
      </div>
    </main>
  );
}
