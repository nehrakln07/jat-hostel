import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import SeoHead from "../../../components/SeoHead";
import Layout from "../../../components/Layout/Layout";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import trustData from '../../../data/trustData'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function HostelDetails() {
    const router = useRouter();
    const id = router.query["trust_id"];
    const district = router.query["district"];
    const [selectedHostel, setSelectedHostel] = useState('')
    // const url = typeof window !== 'undefined' ? new URL(window.location.href) : "";
    // const urlHostel = url && url.search ? url.search.split("=")[1] : "";
    useEffect(() => {
        if(district){
            const d = trustData[district][parseInt(id)-1];
            setSelectedHostel(d);
        }
    }, [id, district])
    console.log(selectedHostel)
    if (!selectedHostel) {
        return(
            <Layout>
                <div className="w-full text-center">
                    <Link href={"/hostels"}>View All Trusts</Link>
                </div>
            </Layout>
        )
    }
    return (
        <Layout>
            <SeoHead title={`${selectedHostel?.title} - rajasthanjathostel.com`}  />
            <h1 className="text-green-500 text-3xl font-bold text-center sm:text-4xl sm:leading-10 md:text-6xl md:leading-14" style={{marginTop: '10rem', marginBottom: '2rem'}}>
            {selectedHostel?.title}
            </h1>
            { selectedHostel.imgSrc &&
                <div className="w-10/12 mx-auto h-96 relative">
                    <Image
                        alt={selectedHostel.title}
                        src={selectedHostel.imgSrc}
                        // className="object-cover object-center md:h-36 lg:h-48"
                        fill
                    />
                </div>
            }
            <div className="max-w-screen-xl min-h-screen mt-24 px-8 xl:px-16 mx-auto">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '100%',
                        }}
                    >
                        <Viewer fileUrl={selectedHostel.data} />
                    </div>
                </Worker>
            </div>
        </Layout>
    )
}
