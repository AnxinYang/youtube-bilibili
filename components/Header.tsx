import Link from 'next/link';
import { ReactNode } from 'react';
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles.container}>
            <Nav />
        </header>
    )
}


function Nav() {
    return (
        <nav className={styles.nav}>
            <section>
                <NavLink href='/' name='Home' />
                <NavLink href='/' name='TV ' />
                <NavLink href='/' name='Music' />
                <NavLink href='/' name='Kids' />
            </section>
            <section>
                <SearchBar />
            </section>
            <section>
                <NavLink href='/' name='Premium' />
                <NavLink href='/' name='Subscriptions' />
                <NavLink href='/' name='Originals' />
                <NavLink href='/' name='History' />
            </section>
            <h1 className={styles.title}>
                <span>You</span>Bili
            </h1>
        </nav>
    )
}

function NavLink(props: {
    href: string,
    children?: ReactNode
    name: string
}) {

    return (
        <Link href={props.href} >
            <a className={styles.links}>{props.name}</a>
        </Link>
    )
}


function SearchBar() {
    return (
        <form className={styles.search} onSubmit={(e) => {
            e.preventDefault()
        }}>
            <input />
            <button type='submit'>Go</button>
        </form>
    )
}