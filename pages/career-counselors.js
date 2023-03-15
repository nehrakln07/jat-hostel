import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import PdfViewer from "../components/PdfViewer";

const COUNSELERS = [
    {
        name: 'Dooda Ram Huda RAS ',
        designation: 'SDM Reodar Sirohi',
        qualification: 'MA(English, History,Pol.Science) Bed',
        contact: '9314963657, 7976310852, Saturday -Sunday',
        experties: 'RAS & Other Competition Exam ',
        address: 'V/P -Rampura Dhorimna Barmer'
    },{
        name: 'Bhera Ram Potliya IRS',
        designation: 'Additional-Commission (IT) Udaipur',
        qualification: 'BSTC, B.Ed. , MAC, English',
        contact: '95304000175, Saturday -Sunday full time',
        experties: 'IAS/RAS/NEET & Other Competition ',
        address: 'V/P- Khara,Rathodan,Barmer'
    },{
        name: 'Narpat Jani',
        designation: 'Teacher',
        qualification: 'Coaching Barmer, BSC, MSC',
        contact: '9509868337',
        experties: 'All Compatition,RPSC,RSMSSB',
        address: 'V/P-Redana,Barmer'
    },{
        name: 'Gumna Ram RPS',
        designation: 'Additional S.P',
        qualification: 'MA (Sanskrit & Pol. Science)',
        contact: '9413810464, Saturday -Sunday',
        experties: 'RAS/SI Raj. Police/CUET/RPSC Interview.',
        address: 'V/P- Anta,Ramsar,Barmer'
    },{
        name: 'Deraj Ram RAS',
        designation: 'A.O-Govt.Medical Collage, Barmer',
        qualification: 'M.A-Pol.Science	',
        contact: '9001557805, Saturday -Sunday Evening',
        experties: 'RPSC Exam Specially RAS',
        address: 'V/P – Kanod,Barmer'
    },{
        name: 'Govind Dudi ',
        designation: 'C.A in KOTA',
        qualification: 'CA, M.com, CCCA	',
        contact: '9694002682 ANY DAYS 1 PM TO 4 PM',
        experties: 'Commerce and CA,CS',
        address: 'Add. 10-L-5 Mahavir Nager Kota'
    },{
        name: 'Chimna Ram Jani',
        designation: 'Senior Teacher',
        qualification: 'M.A,B.Ed',
        contact: '9828581178,All days except school time',
        experties: '	Counselling about NEET,CUET,All',
        address: 'V/P- Bhimarlai Station Barmer'
    },{
        name: 'Dr. Bharat Saran',
        designation: 'Doctor',
        qualification: 'MBBS',
        contact: '9413942612 (1 PM TO 3 PM)',
        experties: 'NEET, CUET, JET, B.Sc-Nursing, Paramedical,IIT',
        address: 'Barmer'
    },{
        name: 'Joga Ram',
        designation: 'Former teacher - Navoday Vidyalya',
        qualification: 'Lecturer, Biology',
        contact: '70149-27574 , Sunday and Evening time',
        experties: 'NEET,JEE,CUET,Navodya school Teachor',
        address: 'V/P- G.SSS NimbalKot'
    },{
        name: 'Kmalesh Nehra',
        designation: 'Software Engineer',
        qualification: 'Btech MNNIT Allahabad',
        contact: '8000822971',
        experties: 'JEE, NEET, IT, Software Development, Career, Personal Development',
        address: 'Bamnor Barmer'
    },,{
        name: 'Mohit Choudhary',
        designation: 'Software Engineer',
        qualification: 'Btech',
        contact: '9413988756',
        experties: 'IT, Software Development, Career, Personal Development',
        address: 'Gandhi Nagar Barmer'
    }
]
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
                <div className="container py-4 w-full">
                    {/* <PdfViewer fileUrl={`/assets/default.pdf`} /> */}
                        <table className="w-full divide-y divide-gray-200 bg-white-500" style={{minWidth: 800}}>
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-lg font-bold text-left uppercase "
                                    >
                                        Name 
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-lg font-bold text-left uppercase "
                                    >
                                        Designation and Posting place  
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-lg font-bold text-left uppercase "
                                    >
                                        Qualification 
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-lg font-bold text-right uppercase "
                                    >
                                        Contact No. with suitable time and Days
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-lg font-bold text-right uppercase "
                                    >
                                        Interested Career Guidance Subject and Field 
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-lg font-bold text-right uppercase "
                                    >
                                        Address
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {
                                    COUNSELERS.map((member, key) =>{
                                        return(
                                        <tr key={key}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800">
                                                {member.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800">
                                                {member.designation}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800">
                                                {member.qualification}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right">
                                                {member.contact}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right">
                                                {member.experties}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right">
                                                {member.address}
                                            </td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        </Layout>
    )
}
