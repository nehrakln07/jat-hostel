import Link from 'next/link'
import { useState, useEffect } from "react";
import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function HostelDetails() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const [selectedHostel, setSelectedHostel] = useState('')
    const url = typeof window !== 'undefined' ? new URL(window.location.href) : "";
    const urlHostel = url && url.search ? url.search.split("=")[1] : "";
    useEffect(() => {
        setSelectedHostel(urlHostel);
    }, [urlHostel])
    console.log(selectedHostel)
    if (!selectedHostel) {
        return(
            <Layout>
                <div className="w-full text-center">
                    <Link href={"/hostels"}>View All Hostels</Link>
                </div>
            </Layout>
        )
    }
    return (
        <Layout>
            <SeoHead title='Hostel Detail' />
            <h1 className="text-green-500 text-3xl font-bold text-center sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Hostel Details
            </h1>
            <div className="max-w-screen-xl min-h-screen mt-24 px-8 xl:px-16 mx-auto">
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '100%',
                        }}
                    >
                        <Viewer fileUrl={`/assets/hostel/${selectedHostel}.pdf`} />
                    </div>
                </Worker>
            </div>
        </Layout>
    )
}
