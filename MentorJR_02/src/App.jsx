import styles from './App.module.css'

import { Header } from './components/Header'
import { MainComponent } from './components/MainComponent'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className={styles.container}>
      <Header />

      <MainComponent />

      <Footer />
    </div>
  )
}