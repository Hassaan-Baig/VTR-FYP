import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VTR - Your Tech Fashion</title>
        <meta
          name="description"
          content="Get Your Tech Fashion from Here - Tech Wear"
        />
        <link rel="icon" href="/vtr_logo2.jpg" />
      </Head>
      <Header />
      {/* <ProductList /> */}
    </div>
  );
}
