import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PdfViewer({fileUrl}) {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.3)',
                    height: '100%',
                    width: '100%',
                }}
            >
                <Viewer fileUrl={fileUrl} />
            </div>
        </Worker>
    )
}