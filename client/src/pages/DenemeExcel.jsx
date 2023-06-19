import React, { useRef } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { useSelector } from "react-redux";

const Details = () => {
    const tableRef = useRef(null);
    const formLeave = useSelector(state => state.leave.leaves);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Users table',
        sheet: 'Users'
    })

    return (
        <div>
            <table className='w-screen border-collapse border border-slate-500' ref={tableRef}>
                <tbody>
                <tr>
                        <td  >Firma Ünvanı :</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td  >Adresi :</td>
                    </tr>
                    <tr>
                        <td className='border border-slate-600  text-center underline text-3xl font-semibold' colSpan="2">İzin Formu</td>
                    </tr>
                    <tr>
                        <td>T.C Kimlik No : </td>
                        <td>{formLeave[6].tc}</td>
                    </tr>
                    <tr>
                        <td>Adı Soyadı : </td>
                        <td>{formLeave[6].name}<span className='mx-[1px]'></span>{formLeave[6].surname}</td>
                    </tr>
                    <tr>
                        <td>Çalışma Yeri : </td>
                        <td>{formLeave[6].company}</td>
                    </tr>
                    <tr>
                        <td>İzin Başlangıç Tarihi : </td>
                        <td>{formLeave[6].startDate.substring(0,10)}</td>
                    </tr>
                    <tr>
                        <td>İzin Bitiş (İşBaşı) Tarihi :</td>
                        <td>{formLeave[6].finishDate.substring(0,10)}</td>
                    </tr>
                    <tr>
                        <td>İzin Gün Sayısı :</td>
                        <td>{formLeave[6].totalDate}</td>
                    </tr>
                    <tr>
                        <td>İzin İstek Sebebi :</td>
                        <td>{formLeave[6].type}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Yukarıda belirtilen sebepten dolayı ............ tarihinden ............. tarihine kadar ............. gün süreyle izine ayrılmak istiyorum</td>
                    </tr>
                    <tr>
                        <td >Tarih :</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>İzin İsteyenin İmzası</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Bu izin yukarıda bahsedilen maksat için kullanılmadığı veya izin süresine uyulmadığı takdirde ilgili mevzuata göre cezalandırılacaktır.<br></br> Yukarıda belirtilen tarihler arası yine yukarıda belirtilen izin hakkı kullanılması işyerimizce uygun görülmüştür.</td>
                    </tr>
                    <tr>
                        <td colSpan="2">İşverenin :</td>
                    </tr>
                    <tr>
                        <td>Adı Soyadı / Ünvanı :</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Tarih: </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td  >Kaşe / İmza :</td>
                    </tr>
                </tbody>
            </table>
            <div className='flex justify-end pt-5 pr-5'>

            <button className='bg-select-b flex items-center border-select-b border-[1px] px-4 h-10 rounded-md text-white' onClick={onDownload}> Export excel </button>
            </div>

        </div>
    );
}

export default Details