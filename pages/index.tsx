import Head from 'next/head'
import React from 'react'
import Headline from '../components/Headline'
import Layout from '../components/Layout'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <>
        <Headline />
        <Section title='Video Game' keyword='video game' />
        <Section title='Anime' keyword='Anime' />
        <Section title='Music' keyword='Music' />
        <Section title='News' keyword='News' />
      </>
    </Layout>
  )
}
