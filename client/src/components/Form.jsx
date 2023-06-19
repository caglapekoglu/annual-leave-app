import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import * as leaveAction from '../Store/_redux/LeaveStore/leaveAction';
import moment from 'moment';
const initialFormValues = { company: "", tc: "", name: "", surname: "", startDate: "", finishDate: "", totalDate: "", comment: "", file: "", leavesType: "", position: "", isHalfDay: false }
function Form() {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [open, setOpen] = useState(false);
    const [positionError, setPositionError] = useState('');
    const [companyError, setCompanyError] = useState('');
    const [typeError, setTypeError] = useState('');

   
    const handleCompanySelect = (event) => {

        setSelectedCompany(event.target.value);
        setOpen(true)
        setCompanyError('')
    };
    const handleTypeSelect = (event) => {
        setSelectedType(event.target.value);
        setTypeError('')
    };
    const handlePositionSelect = (event) => {
        setSelectedPosition(event.target.value);
        setPositionError('')

    };
    const calculateTotalDays = () => {
        const startDate = moment(form.startDate);
        const finishDate = moment(form.finishDate);
        const diff = finishDate.diff(startDate, 'days');
        return parseInt(diff);
    };
    const [form, setForm] = useState(initialFormValues);
    const handleChange = (e) => {

        const diff = calculateTotalDays();
        const { name, value } = e.target;
        const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1); // İlk harfi büyük yap

        setForm({ ...form, [name]: capitalizedValue, totalDate: diff});

    }
    function handleCheckboxChange(event) {
        setForm(prevForm => ({
          ...prevForm,
          isHalfDay: event.target.checked // Checkbox durumuna göre isHalfDay değişkenini güncelle
        }));
      }
    
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        if (selectedPosition === '') {

            setPositionError('Lütfen bir pozisyon seçin'); // Seçili pozisyon yoksa kullanıcıya hata mesajı göster 
            e.preventDefault()
        }
        if (selectedCompany === '') {

            setCompanyError('Lütfen bir şirket seçiniz!');
            e.preventDefault()
        }
        if (selectedType === '') {

            setTypeError('Lütfen bir izin türü seçiniz!');
            e.preventDefault()
        }
        // if(e.target==null){
        //     e.preventDefault()
        // }
        else {
            dispatch(leaveAction.createLeave(form)).then((res) => {
            })
        }


    }
    const errorMessage = (e) => {
        e.target.setCustomValidity("Bu alan zorunlu!")
    }
    const inputMessage = (e) => {
        e.target.setCustomValidity('')
    }
    
    return (
        <form onSubmit={onSubmit} className='flex flex-col justify-center w-[600px] mx-auto py-[30px]'>
            <h1 className='font-semibold text-3xl py-5'>İzin Formu</h1>
            <label className='font-semibold py-2'>Şirket Seçiniz</label>
            <div className='grid grid-cols-3 gap-x-3 mb-5'>
                <div className={`flex px-3 gap-x-2 py-2 border-[1px] rounded-md ${selectedCompany === 'C-Prot' ? 'bg-select-bg border-select-b' : 'bg-input-bg border-transparent'}`}>
                    <input
                        type="radio"
                        id='C-Prot'
                        name='company'
                        value='C-Prot'
                        checked={selectedCompany === 'C-Prot'}
                        onClick={handleCompanySelect}
                        onChange={handleChange} />
                    <span>C-Prot</span>
                </div>
                <div className={`flex px-3 gap-x-2 py-2 rounded-md border-[1px]  ${selectedCompany === 'E-Bilge' ? 'bg-select-bg border-select-b' : 'bg-input-bg border-transparent'}`}>
                    <input
                        type='radio'
                        id='E-Bilge'
                        name='company'
                        value='E-Bilge'
                        checked={selectedCompany === 'E-Bilge'}
                        onClick={handleCompanySelect}
                        onChange={handleChange}
                    />
                    <span>E-Bilge</span>
                </div>
                <div className={`flex px-3 gap-x-2 py-2 rounded-md border-[1px]   ${selectedCompany === 'Zerdava' ? 'bg-select-bg border-select-b' : 'bg-input-bg border-transparent'}`}>
                    <input
                        type='radio'
                        id='Zerdava'
                        name='company'
                        value='Zerdava'
                        checked={selectedCompany === 'Zerdava'}
                        onClick={handleCompanySelect}
                        onChange={handleChange}
                    />
                    <span>Zerdava</span>
                </div>
            </div>
            {companyError && <p className='text-red-500'>{companyError}</p>}
            {open && selectedCompany === 'E-Bilge' &&
                <div>
                    <h1>EBİLGE TEKNOLOJİ SANAYİ VE TİCARET ANONİM ŞİRKETİ</h1>
                    <p className='text-sm text-gray-600 mt-2 mb-5'>Adres:ÇİFTLİKKÖY MAHALLESİ MERSİN ÜNİVERSİTESİ TEKNOPARK İDARİ BİNA KAT:2 NO:208 YENİŞEHİR/MERSİN</p>
                </div>}
            {open && selectedCompany === 'C-Prot' &&
                <div>
                    <h1>C-PROT SİBER GÜVENLİK TEKNOLOJİLERİ SANAYİ VE TİCARET ANONİM ŞİRKETİ</h1>
                    <p className='text-sm text-gray-600 mt-2 mb-5'>Adres:ÇİFTLİKKÖY MAHALLESİ MERSİN ÜNİVERSİTESİ TEKNOPARK İDARİ BİNA KAT:2 NO:207 YENİŞEHİR MERSİN</p>
                </div>}{open && selectedCompany === 'Zerdava' &&
                    <div>
                        <h1>ZERDAVA TEKNOLOJİ SANAYİ VE TİCARET ANONİM ŞİRKETİ </h1>
                        <p className='text-sm text-gray-600 mt-2 mb-5'>Adres:ÇİFTLİKKÖY MAHALLESİ MERSİN ÜNİVERSİTESİ TEKNOPARK İDARİ BİNA KAT:2 NO:215 YENİŞEHİR/MERSİN</p>
                    </div>}
            <label className='font-semibold py-2'>T.C. Kimlik no</label>
            <input onChange={handleChange} value={form.tc} name='tc' className='border-[1px] rounded-md px-3 py-2 border-input-b mb-5' placeholder='T.C. Kimlik numaranız' required onInvalid={errorMessage}
                onInput={inputMessage} />
            <div className='grid grid-cols-2 gap-x-3 mb-5'>
                <div className='flex flex-col'>
                    <label className='font-semibold py-2'>İsim</label>
                    <input onChange={handleChange} value={form.name} name='name' className='border-[1px] rounded-md px-3 py-2 border-input-b' placeholder='İsminiz' required onInvalid={errorMessage}
                        onInput={inputMessage} />
                </div>
                <div className='flex flex-col'>
                    <label className='font-semibold py-2'>Soyisim</label>
                    <input onChange={handleChange} value={form.surname} name='surname' className='border-[1px] rounded-md px-3 py-2 border-input-b' placeholder='Soyisminiz' required onInvalid={errorMessage}
                        onInput={inputMessage} />
                </div>
            </div>
            <label className='font-semibold py-2'>Çalışma Yeri Görevi</label>
            <div className='grid grid-cols-2 gap-x-3 mb-5'>
                <div className={`flex px-3 gap-x-2 py-2 border-[1px] rounded-md ${selectedPosition === 'Arge Personeli' ? 'bg-select-bg border-select-b' : 'bg-input-bg border-transparent'}`}>
                    <input
                        type="radio"
                        id='arge'
                        name='position'
                        value='Arge Personeli'
                        checked={selectedPosition === 'Arge Personeli'}
                        onClick={handlePositionSelect}
                        onChange={handleChange} />
                    <span>Arge Personeli</span>
                </div>
                <div className={`flex px-3 gap-x-2 py-2 rounded-md border-[1px]  ${selectedPosition === 'Stajyer' ? 'bg-select-bg border-select-b' : 'bg-input-bg border-transparent'}`}>
                    <input
                        type='radio'
                        id='stajyer'
                        name='position'
                        value='Stajyer'
                        checked={selectedPosition === 'Stajyer'}
                        onClick={handlePositionSelect}
                        onChange={handleChange}
                    />
                    <span>Stajyer</span>
                </div></div>
            {positionError && <p className='text-red-500'>{positionError}</p>}
            <div className='grid grid-cols-2 gap-x-3 mb-5'>
                <div className='flex flex-col'>
                    <label className='font-semibold py-2'>İzin başlangıç tarihi</label>
                    <input value={form.startDate} onChange={handleChange} name='startDate' type="date" className='border-[1px] rounded-md px-3 py-2 border-input-b' placeholder='Başlangıç tarihi' required onInvalid={errorMessage}
                        onInput={inputMessage} />
                </div>
                <div className='flex flex-col'>

                    <label className='font-semibold py-2'>İşbaşı yapacağınız tarih</label>
                    <input onChange={handleChange} name='finishDate' value={form.finishDate} type="date" className='border-[1px] rounded-md px-3 py-2 border-input-b' placeholder='İşbaşı tarihi' required onInvalid={errorMessage}
                        onInput={inputMessage} />
                </div>
            </div>
            <label className='font-semibold py-2'>Toplam izin günü</label>
            <input name='totalDate' value={form.totalDate?form.totalDate:0}
                disabled onChange={handleChange} type="number" className='border-[1px] rounded-md px-3 py-2 border-input-b' placeholder='Toplam izin günü' />
            <div className=" mb-5 flex items-center">
                <input
                    type='checkbox'
                    value={form.isHalfDay}
                    onChange={handleCheckboxChange}
                    name="isHalfDay"
                    checked={form.isHalfDay===true}
                />
                <span className="ml-2">Yarım gün</span>
            </div>

            <label className='font-semibold py-2'>İzin Türü Seçiniz</label>
            <div className='grid grid-cols-2 gap-x-3 gap-y-2 mb-5'>
                <div className={`flex px-3 gap-x-2 border-[1px] py-2 rounded-md ${selectedType === 'Ücretsiz izin' ? 'bg-select-bg border-select-b' : 'bg-input-bg border-transparent'}`}>
                    <input
                        type="radio"
                        id='Ücretsiz izin'
                        name='leavesType'
                        value='Ücretsiz izin'
                        checked={selectedType === 'Ücretsiz izin'}
                        onClick={handleTypeSelect}
                        onChange={handleChange} />
                    <span>Ücretsiz izin</span>
                </div>
                <div className={`flex px-3 border-[1px] gap-x-2 py-2 rounded-md  ${selectedType === 'Yıllık izin' ? 'bg-select-bg border-select-b' : 'bg-input-bg border-transparent'}`}>
                    <input
                        type='radio'
                        id='Yıllık izin'
                        name='leavesType'
                        value='Yıllık izin'
                        checked={selectedType === 'Yıllık izin'}
                        onClick={handleTypeSelect}
                        onChange={handleChange}
                    />
                    <span>Yıllık izin</span>
                </div>
                <div className={`flex border-[1px] px-3 gap-x-2 py-2 rounded-md  ${selectedType === 'Sağlık' ? 'bg-select-bg border-select-b' : 'bg-input-bg border-transparent'}`}>
                    <input
                        type='radio'
                        id='Sağlık'
                        name='leavesType'
                        value='Sağlık'
                        checked={selectedType === 'Sağlık'}
                        onClick={handleTypeSelect}
                        onChange={handleChange}
                    />
                    <span>Sağlık</span>
                </div>
                <div className={`flex px-3 gap-x-2 py-2  border-[1px] rounded-md  ${selectedType === 'Zorunlu durum' ? 'bg-select-bg border-select-b' : 'bg-input-bg border-transparent'}`}>
                    <input
                        type='radio'
                        id='Zorunlu durum'
                        name='leavesType'
                        value='Zorunlu durum'
                        checked={selectedType === 'Zorunlu durum'}
                        onClick={handleTypeSelect}
                        onChange={handleChange}
                    />
                    <span>Zorunlu durum</span>
                </div>
                <div className={`flex px-3 gap-x-2 py-2  border-[1px] rounded-md  ${selectedType === 'Diğer' ? 'bg-select-bg border-select-b' : 'bg-input-bg border-transparent'}`}>
                    <input
                        type='radio'
                        id='Diğer'
                        name='leavesType'
                        value='Diğer'
                        checked={selectedType === 'Diğer'}
                        onClick={handleTypeSelect}
                        onChange={handleChange}
                    />
                    <span>Diğer</span>
                </div>
            </div>
            {typeError && <p className='text-red-500'>{typeError}</p>}
            {selectedType === 'Diğer' && <textarea onChange={handleChange} id='İzin Sebebi' name='comment' value={form.comment} className='border-[1px] rounded-md px-3 py-2 border-input-b mb-5' placeholder='İzin alma sebebinizi açıklayın' />}

            <div className='flex justify-end my-4'>
                <button type='submit' className='bg-select-b px-6 py-3 rounded-md text-white'>İzin başvurusunu gönder</button>
            </div>

        </form>
    )
}

export default Form