import Link from 'next/link'
import React, { ReactNode } from 'react'
import styles from '../styles/Category.module.css'

export default function Category() {
    return (
        <section className={styles.container}>
            <CategoryItem name='News' href='/' />
            <CategoryItem name='Game' href='/' />
            <CategoryItem name='Music' href='/' />
            <CategoryItem name='Dancing' href='/' />
            <CategoryItem name='Sport' href='/' />
            <CategoryItem name='Entertainment' href='/' />
            <CategoryItem name='Technology' href='/' />
            <CategoryItem name='Documentary' href='/' />
        </section>
    )
}

function CategoryItem(props: {
    href: string,
    children?: ReactNode
    name: string
}) {

    return (
        <Link href={props.href} >
            <a className={styles.items}>
                <span>{props.name}</span>
                {/* <span>99</span> */}
            </a>
        </Link>
    )
}
