"use client"
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { downloadButtonContent } from "@/config/common";

interface DownloadButtonProps {
    pdfRef: React.RefObject<HTMLDivElement>;
    fileName: string;
}

export default function DownloadButton({ pdfRef, fileName }: DownloadButtonProps) {
    const handleDownload = () => {
        const input = pdfRef.current;
        if (input) {
            html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4', true);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                const imgX = (pdfWidth - imgWidth * ratio) / 2;
                const imgY = 30;
                pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
                pdf.save(fileName);
            });
        }
    };

    return (
        <div className="flex justify-end p-4">
            <button
                onClick={handleDownload}
                className='inline-flex items-center justify-center rounded-lg bg-slate-900 px-10 py-3.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200'
            >
                {downloadButtonContent.label}
            </button>
        </div>
    );
}
