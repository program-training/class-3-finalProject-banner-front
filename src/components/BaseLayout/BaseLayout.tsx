
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// import styles from './BaseLayout.module.css';

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