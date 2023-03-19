import {useState, useEffect} from "react";
import { useRouter } from 'next/router';

import projectsData from '../../data/projectsData'
import DISTRICT from '../../data/districts';
import Card from '../../components/Card'
import SeoHead from "../../components/SeoHead";
import Layout from "../../components/Layout/Layout";

export default function Projects() {
  const router = useRouter();
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [data, setData] = useState([]);
  const optionData = DISTRICT.map((item, key)=>{return {name: item.name, value:item.url}})

  return (  
    <Layout>
      <SeoHead title='JAT Hostels Rajasthan' />
      <div className="max-w-screen-xl min-h-screen mt-24 px-8 xl:px-16 mx-auto">
        <div className="space-y-2 pt-16 pb-8 md:space-y-5">
          <h1 className="text-green-500 text-3xl font-bold text-center sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
           Jat Hostels
          </h1>
        </div>
        <div className="container py-4">
          <label className="font-bold text-lg">Selcet District -</label>
          <select value={selectedDistrict} onChange={(e) => router.push('/hostels/'+e.target.value)} className="form-control">
            <option value="select">Select an District</option>
            {
              optionData.map((item, key)=>{
                return(
                  <option key={key} value={item.value}>{item.name}</option>
                )
              })
            }
          </select>
        </div>
      </div>
    </Layout>
  )
}
