import Link from "next/link";
import {useState, useEffect} from "react";
import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import COURSES from "../data/courses";
import PdfViewer from "../components/PdfViewer";

export default function Courses() {
    const [selectedCource, setSelectedCource] = useState("")
    const [data, setData] = useState([])
    useEffect(()=>{
        setData(COURSES);
    },[COURSES])

    const handleView = (url) =>{
        setSelectedCource(url);
    }

    return (
        <Layout>
            <SeoHead title='Courses' />
            <div className="max-w-screen-xl min-h-screen mt-24 px-8 xl:px-16 mx-auto">
                <div className="space-y-2 pt-16 pb-8 md:space-y-5">
                    <h1 className="text-green-500 text-3xl font-bold text-center sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Courses
                    </h1>
                </div>
                {   selectedCource ?
                    <div className="container py-4">
                        <div className="w-full text-right text-green-500 cursor-pointer" onClick={()=> setSelectedCource("")}>Go back to Courses</div>
                        <div className="w-full">
                            <PdfViewer fileUrl={selectedCource} />
                        </div>
                    </div>
                    :
                    <div className="container py-4 ">
                        <div className="flex flex-col container max-w-md mt-10 mx-auto w-full items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow">
                            <ul className="flex flex-col divide-y w-full">
                                {   data && data.length &&
                                    data.map((item, key)=>{
                                        return(
                                            <li className="flex flex-row" key={key}>
                                                <div className="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4">
                                                    <div className="flex-1 pl-1">
                                                        <div className="font-medium dark:text-white">{item.name}</div>
                                                    </div>
                                                    <div className="flex flex-row justify-center cursor-pointer" onClick={()=>{handleView(item.url)}}>
                                                        View
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </Layout>
    )
}
