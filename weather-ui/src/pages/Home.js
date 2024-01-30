import Header from '../components/Header'
import Meta from '../components/Meta'

const Home = () => {
  const pageTitle = 'Home'
  const pageDescription = 'Welcome to weather application'

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
    </div>
  )
}

export default Home