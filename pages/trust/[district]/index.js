import {useState, useEffect} from "react";
import { useRouter } from 'next/router';

import trustData from '../../../data/trustData'
import DISTRICT from '../../../data/trustDistrict';
import Card from '../../../components/Card'
import SeoHead from "../../../components/SeoHead";
import Layout from "../../../components/Layout/Layout";

export default function Projects() {
  const router = useRouter();
  const [selectedDistrict, setSelectedDistrict] = useState('')
  const [data, setData] = useState([]);
  const optionData = DISTRICT.map((item, key)=>{return {name: item.name, value:item.url}})
  const url = typeof window !== 'undefined' ? new URL(window.location.href) : "";
  const urlDistrict = url && url.search ? url.search.split("=")[1] : "";

  useEffect(()=>{
    if(urlDistrict){
      setSelectedDistrict(urlDistrict);
      setData(trustData[urlDistrict]);
    }
  },[urlDistrict])
  console.log({optionData, selectedDistrict, data})
  return (  
    <Layout>
      <SeoHead title='JAT Trusts Rajasthan' />
      <div className="max-w-screen-xl min-h-screen mt-24 px-8 xl:px-16 mx-auto">
        <div className="space-y-2 pt-16 pb-8 md:space-y-5">
          <h1 className="text-green-500 text-3xl font-bold text-center sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Jat Trust in Rajasthan
          </h1>
        </div>
        <div className="container py-4">
          <label className="font-bold text-lg">Selcet District -</label>
          <select value={selectedDistrict} onChange={(e) => router.push('/trusts?district='+e.target.value)} className="form-control">
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
        {
          selectedDistrict &&
          <div className="container py-4">
            <div className="w-full">
              <div className="w-full">
                <h2 className="w-full text-3xl font-bold">
                  {`Jat Trusts in ${selectedDistrict}`}
                </h2>
                <div className="md:m-4 flex flex-wrap">
                  { data && data.length &&
                    data.map((d) => {
                      return (
                        <Card
                          key={d.title}
                          title={d.title}
                          description={d.description}
                          //TODO: Display image only after opening the hostel. Not in the starting display box.
                         // myLog.exists ? imgSrc={d.imgSrc} : {}
                         // imgSrc={d.imgSrc} 
                          href={`/trust/${selectedDistrict}/${d.id}`}
                        />
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </Layout>
  )
}
