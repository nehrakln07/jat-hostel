import Link from "next/link";
import {useState, useEffect} from "react";
import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import COURSES from "../data/courses";

export default function Courses() {

    const [data, setData] = useState([])
    useEffect(()=>{
        setData(COURSES);
    },[COURSES])
    console.log({data, COURSES});
    return (
        <Layout>
            <SeoHead title='Courses' />
            <div className="max-w-screen-xl min-h-screen mt-24 px-8 xl:px-16 mx-auto">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-green-500 text-3xl font-bold text-center sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Courses
                </h1>
                </div>
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
                                                <div className="flex flex-row justify-center">
                                                    <Link href={item.url} aria-label={`Link to ${item.url}`}>
                                                        {/* <div className="text-gray-600 dark:text-gray-200 text-xs">View</div>
                                                        <button className="w-10 text-right flex justify-end">
                                                            <svg width="20" fill="currentColor" height="20" className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                                                            </svg>
                                                        </button> */}
                                                        View
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
