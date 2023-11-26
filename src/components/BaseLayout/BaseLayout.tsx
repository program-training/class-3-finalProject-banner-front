import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainContainer from '../MainContainer/MainContainer';

const BaseLayout = () => {
  return (
    <>
        <Header/>
        <MainContainer/>
        <Footer/>
    </>
  )
}

export default BaseLayout