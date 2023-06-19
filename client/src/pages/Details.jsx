import React from 'react';
import html2pdf from 'html2pdf.js';
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
function DownloadButton() {

    const handleDownload = () => {
        const element = document.getElementById('pdf-container');
        html2pdf().from(element).save();
    };
    return (
        <button className='mt-5 h-7 text-[15px]' onClick={handleDownload}>PDF olarak indir</button>
    );
}

function Details() {
    const location = useLocation();
    const auth = useSelector((state) => state.auth.loginUser);
  const role = auth?.userType;
    const productId = location.pathname.split('/')[2]
    const item = useSelector(state => state.leave?.leaves.filter((form) => form.id === productId));
    const formLeave = item[0] ? item[0] : {};
    console.log(formLeave)

    return (
        <div className='w-screen  flex flex-col items-center justify-center text-[10px] tracking-wider'>
            <div className='w-[800px] text-[10px] font-Maiandra font-[300]' id="pdf-container" >

                <table className='w-[600px] mt-7 mx-[100px] border-collapse border border-black'>
                    <tbody>
                        <tr>
                            <td className='w-[30%] text-sm font-Maiandra-gd h-8'>FİRMA UNVANI :</td>
                            <td className='border-l w-[70%] border-black'>
                                {formLeave.company==='C-Prot'&&<span className='font-Maiandra'>C-PROT SİBER GÜVENLİK TEKNOLOJİLERİ SANAYİ VE TİCARET ANONİM ŞİRKETİ</span>}
                                {formLeave.company==='E-Bilge'&&<span className='font-Maiandra'>EBİLGE TEKNOLOJİ SANAYİ VE TİCARET ANONİM ŞİRKETİ</span>}
                                {formLeave.company==='Zerdava'&&<span className='font-Maiandra'>ZERDAVA TEKNOLOJİ SANAYİ VE TİCARET ANONİM ŞİRKETİ</span>}

                            </td>
                        </tr>
                        <tr>
                            <td className='text-sm h-12 font-Maiandra-gd' >ADRESİ :</td>
                            <td className='border-l border-black'>
                            {formLeave.company==='C-Prot'&&<span className='font-Maiandra'>ÇİFTLİKKÖY MAHALLESİ MERSİN ÜNİVERSİTESİ TEKNOPARK İDARİ BİNA KAT:2 NO:207 YENİŞEHİR MERSİN</span>}
                            {formLeave.company==='E-Bilge'&&<span className='font-Maiandra'>ÇİFTLİKKÖY MAHALLESİ MERSİN ÜNİVERSİTESİ TEKNOPARK İDARİ BİNA KAT:2 NO:208 YENİŞEHİR/MERSİN</span>}
                            {formLeave.company==='Zerdava'&&<span className='font-Maiandra'>ÇİFTLİKKÖY MAHALLESİ MERSİN ÜNİVERSİTESİ TEKNOPARK İDARİ BİNA KAT:2 NO:215 YENİŞEHİR/MERSİN</span>}

                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='border border-black w-[600px] mt-5 pb-5 mx-[100px] flex flex-col justify-center'>
                    <h1 className='text-center text-[16px] font-Maiandra-gd underline py-5 tracking-widest' >İZİN FORMU</h1>
                    <table className='w-[500px] mx-[50px] border-collapse border border-black'>

                        <tbody>
                            <tr>
                                <td className='w-[30%]'>T.C. Kimlik No : </td>
                                <td className='border-l border-black'>{formLeave?.tc}</td>
                            </tr>
                            <tr>
                                <td className='w-[30vh]'>Adı Soyadı : </td>
                                <td className='border-l border-black'>{formLeave?.name} {formLeave?.surname}</td>
                            </tr>
                            <tr>
                                <td className='w-[30vh]'>Çalışma Yeri Görevi: </td>
                                <td className='border-l border-black'>{formLeave?.position}</td>
                            </tr>
                            <tr>
                                <td className='w-[30vh]'>İzin Başlangıç Tarihi : </td>
                                <td className='border-l border-black'>
                                    {formLeave.startDate.substring(8, 10)}/
                                    {formLeave.startDate.substring(5, 7)}/
                                    {formLeave.startDate.substring(0, 4)}
                                </td>
                            </tr>
                            <tr>
                                <td className='w-[30vh]'>İzin Bitiş (İşBaşı) Tarihi :</td>
                                <td className='border-l border-black'>
                                    {formLeave.finishDate.substring(8, 10)}/
                                    {formLeave.finishDate.substring(5, 7)}/
                                    {formLeave.finishDate.substring(0, 4)}
                                </td>
                            </tr>
                            <tr>
                                <td className='w-[30vh]'>İzin Gün Sayısı :</td>
                                <td className='border-l border-black'>
                                {formLeave?.isHalfDay&&formLeave?.totalDate<=1&&"Yarım"}
                                    {formLeave?.isHalfDay&&formLeave?.totalDate>1&&`${formLeave?.totalDate}.5`}
                                    {formLeave?.isHalfDay===false&&`${formLeave?.totalDate}`}
                                    </td>
                            </tr>
                            <tr>
                                <td className='w-[30vh]'>İzin İstek Sebebi :</td>
                                <td className='border-l border-black'>{formLeave?.leavesType}</td>
                            </tr>
                            <tr >
                                <td className='px-1 indent-8' colSpan="2">Yukarıda belirtilen sebepten dolayı  {formLeave.startDate.substring(8, 10)}/
                                    {formLeave.startDate.substring(5, 7)}/
                                    {formLeave.startDate.substring(0, 4)} tarihinden {formLeave.finishDate.substring(8, 10)}/
                                    {formLeave.finishDate.substring(5, 7)}/
                                    {formLeave.finishDate.substring(0, 4)} tarihine kadar {formLeave?.isHalfDay&&formLeave?.totalDate<=1&&"yarım"}
                                    {formLeave?.isHalfDay&&formLeave?.totalDate>1&&`${formLeave?.totalDate}.5`}
                                    {formLeave?.isHalfDay===false&&`${formLeave?.totalDate}`} gün süreyle izine ayrılmak istiyorum.
                                    <p className='text-right'>Gereğini arz ederim.</p>
                                </td>
                            </tr>
                            <tr>
                                <td className='w-[30vh]'>Tarih :</td>
                                <td className='border-l border-black'>
                                    {formLeave.currentDate.substring(8, 10)}/
                                    {formLeave.currentDate.substring(5, 7)}/
                                    {formLeave.currentDate.substring(0, 4)}
                                </td>
                            </tr>
                            <tr>
                                <td className='w-[30vh] h-[60px]'>İzin İsteyenin İmzası</td>
                                <td className='border-l border-black'></td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='w-[500px] pt-3 mx-[50px] indent-8 font-Maiandra'>Bu izin yukarıda bahsedilen maksat için kullanılmadığı veya izin süresine uyulmadığı takdirde ilgili mevzuata göre cezalandırılacaktır.</p>
                    <p className='w-[500px] pb-3 mx-[50px] indent-8 font-Maiandra'> Yukarıda belirtilen tarihler arası yine yukarıda belirtilen izin hakkı kullanılması işyerimizce uygun görülmüştür.</p>
                    <div className='w-[500px] mx-[50px] pb-7  '>
                        <p className='text-sm pb-2 font-Maiandra-gd underline'>İŞVERENİN:</p>
                        <p className='font-Maiandra-gd'>Adı Soyadı / Ünvanı :</p>
                        <p className='font-Maiandra-gd'>
                            Tarih:

                        </p>
                        <p className='font-Maiandra-gd' >Kaşe / İmza </p>
                    </div>
                </div>
            </div>
            <div className='w-[600px] mx-auto'>
           { (role==='admin4') && <DownloadButton />}
            {formLeave?.comment&&<div className=' flex flex-col py-10'>
                <h1 className='font-Maiandra-gd text-[15px] '>İzin Alma Sebebi (Diğer)</h1>
                <span className='font-Maiandra text-[12px]'>{formLeave.comment}</span>
            </div>}
            </div>
        </div>
    );
}

export default Details;