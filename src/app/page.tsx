import ourPic from 'public/ourPic.svg'
import LoadingPage from './loadig';
import Image from 'next/image';



const HomePage = () => {
  return (

    <>
      <h1>welcome to barwa</h1>
      <Image height={80} width={80} src={ourPic } alt="Image" />  
      <LoadingPage />
    </>
  )
  }



export default HomePage;
