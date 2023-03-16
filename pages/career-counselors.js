import SeoHead from "../components/SeoHead";
import Layout from "../components/Layout/Layout";
import PdfViewer from "../components/PdfViewer";

const COUNSELERS = [
    {
        name: 'Bhera Ram Potliya IRS',
        designation: 'Additional-Commission (IT), Udaipur',
        qualification: 'BSTC, B.Ed. , MAC, English',
        contact: '95304000175, Saturday-Sunday full time',
        expertise: 'IAS/RAS/NEET & Other Competition ',
        address: 'V/P- Khara Rathodan,Barmer'
    },
    {
        name: 'Gumna Ram RPS',
        designation: 'Additional S.P',
        qualification: 'MA (Sanskrit & Pol. Science)',
        contact: '9413810464, Saturday -Sunday',
        expertise: 'RAS/SI Raj. Police/CUET/RPSC Interview.',
        address: 'V/P- Anta, Ramsar,Barmer'
    }, 
    {
        name: 'Dooda Ram Huda RAS ',
        designation: 'SDM Reodar, Sirohi',
        qualification: 'MA(English, History,Pol.Science) B.Ed',
        contact: '9314963657, 7976310852, Saturday - Sunday',
        expertise: 'RAS & Other Competition Exams',
        address: 'V/P -Rampura, Dhorimana, Barmer'
    },
    {
        name: 'Kamlesh Nehra',
        designation: 'Software Engineer',
        qualification: 'Btech MNNIT Allahabad',
        contact: '8000822971',
        expertise: 'JEE, NEET, IT, Software Development, Career, Personal Development',
        address: 'Bamnor Barmer'
    },
    {
        name: 'Dr. Bharat Saran',
        designation: 'Doctor',
        qualification: 'MBBS',
        contact: '9413942612 (1 PM TO 3 PM)',
        expertise: 'NEET, CUET, JET, B.Sc-Nursing, Paramedical,IIT',
        address: 'Barmer'
    },
    {
        name: 'Mohit Daukiya',
        designation: 'Software Engineer',
        qualification: 'Computer Science(B.Tech)',
        contact: '9413988756',
        expertise: 'IT, Software Development',
        address: 'Gandhi Nagar, Barmer'
    },{
        name: 'Narpat Jani',
        designation: 'Teacher',
        qualification: 'Coaching Barmer, BSC, MSC',
        contact: '9509868337',
        expertise: 'All Competition, RPSC, RSMSSB',
        address: 'V/P-Redana, Barmer'
    },{
        name: 'Deraj Ram RAS',
        designation: 'A.O-Govt.Medical College, Barmer',
        qualification: 'M.A-Pol.Science',
        contact: '9001557805, Saturday -Sunday Evening',
        expertise: 'RPSC Exam Specially RAS',
        address: 'V/P – Kanod,Barmer'
    },{
        name: 'Govind Dudi ',
        designation: 'C.A in KOTA',
        qualification: 'CA, M.com, CCCA	',
        contact: '9694002682 ANY DAYS 1 PM TO 4 PM',
        expertise: 'Commerce and CA, CS',
        address: 'Add. 10-L-5 Mahaveer Nager, Kota'
    },{
        name: 'Chimna Ram Jani',
        designation: 'Senior Teacher',
        qualification: 'M.A,B.Ed',
        contact: '9828581178,All days except school time',
        expertise: '	Counselling about NEET,CUET,All',
        address: 'V/P- Bhimarlai Station Barmer'
    },{
        name: 'Joga Ram',
        designation: 'Former teacher - Navoday Vidyalya',
        qualification: 'Lecturer, Biology',
        contact: '70149-27574, Sunday and Evening time',
        expertise: 'NEET,JEE,CUET,Navodya school Teachor',
        address: 'V/P- G.SSS NimbalKot'
    },{
        name: 'Suneel Saharan',
        designation: 'Customs Officer',
        contact: '9351536116',
        expertise: 'SSC-PO'
    },{
        name: 'Subhash Beniwal',
        designation: 'Ins.BSF, SPG ,VRS',
        contact: '7838043740',
        expertise: 'SSC-PO'
    }
    ,{
        name: 'Pawan kala',
        designation: ' Ex. Officer Bank',
        contact: '9413315001',
        expertise: 'Banking'
    }   ,{
        name: 'Pooranmal Beniwal',
        designation: 'Wing Commander (Rtd.)Nagpur',
        contact: '9571936423',
        expertise: 'NDA/CDS/SSB'
    }
    ,{
        name: 'Vishal Choudhary',
        designation: 'Vice Principal MSc BEd-chemistry',
        expertise: 'NDA/CDS/SSB'
    }
    ,{
        name: 'Vijay Singh Bhambhu',
        designation: 'Ass. Profecer  MBA,MA,PGDCA,NET',
        contact: '9166888809',
        expertise: 'NDA/CDS/SSB'
    }
    ,{
        name: 'Ajay Choudhary',
        designation: 'Wing Commander (Rtd.), EX. Indian Air force officer And currently Dy.Director, DIO MOD GOI',
        contact: '8377033464',
        expertise: 'NDA/CDS/SSB'
    }
    ,{
        name: 'Hanuman Choudhary',
        designation:'BDO Siwana, Barmer',
        expertise: 'RAS,SI RAJ POLICE, RPSC Interview'
    }
    ,{
        name: 'Kanaram Pooniya',
        designation:'Ass,Professor, Pol. Scince, College Barmer',
        expertise: 'NET, JRF Pol. Science'
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
                                            <td className="px-6 py-4 text-sm text-gray-800">
                                                {member.contact}
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-right">
                                                {member.expertise}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-800">
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
