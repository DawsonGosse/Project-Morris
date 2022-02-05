import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../comps/SearchBar'

export default function Home() {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}
