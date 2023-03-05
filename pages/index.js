import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Analytics from '../components/analytics'

export default function Home() {
  return (
    <>
      <SeoHead title='JAT Hostels Rajasthan Home' />
      <Analytics />
      <Layout>
        <Hero />
        <Feature />
        {/* <Pricing /> */}
      </Layout>
    </>
  );
}
