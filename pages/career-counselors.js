import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import PdfViewer from "../components/PdfViewer";
export default function Courses() {

    return (
        <Layout>
            <SeoHead title='Career-counselors' />
            <div className="max-w-screen-xl min-h-screen mt-24 px-8 xl:px-16 mx-auto">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-green-500 text-3xl font-bold text-center sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Career-counselors
                </h1>
                </div>
                <div className="container py-4 ">
                    <PdfViewer fileUrl={`/assets/career-counselors.pdf`} />
                </div>
            </div>
        </Layout>
    )
}
