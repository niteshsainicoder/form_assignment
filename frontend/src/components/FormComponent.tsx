import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
interface err {
    name: string,
    countryCode: string,
    phoneNumber: string
}
function FormComponent({ FormType }: {
    FormType: string
}) {
    const router =useRouter();
    const [name, setName] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errors, setErrors] = useState<err>({ name: '', countryCode: '', phoneNumber: '' });


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: err = { name: '', countryCode: '', phoneNumber: '' };

        // Simple validation
        if (!/^[A-Za-z]+$/.test(name)){ newErrors.name = 'only letters'; return ; }
        if (!countryCode) {newErrors.countryCode = ' country code'; return ; }
        if (!/^\d+$/.test(phoneNumber)) { newErrors.phoneNumber = 'only numeric'; return ; }


        // Save to SQL
        console.log('clicked');
        const formType = FormType == "Form A" ? 'formA' : 'formB';
        await axios.post('http://localhost:3001/api/form/submit', { formType, name, countryCode, phoneNumber }).then(() => {
            alert('Form data saved successfully!');
            router.push('/')
        }).catch((error) => {
            console.error('Error saving form data:', error);
        });
        localStorage.setItem('formData', JSON.stringify({ name, countryCode, phoneNumber }));


        setErrors(newErrors);
    };

    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            const { name, countryCode, phoneNumber } = JSON.parse(storedData);
            setName(name);
            setCountryCode(countryCode);
            setPhoneNumber(phoneNumber);
        }
    }, []);

    return (
        <form onSubmit={handleSubmit} className='flex w-[290px] sm:w-[400px] h-fit py-7 flex-col gap-5 border border-gray-500 rounded-lg p-5 justify-evenly items-center'>
            <h2>{FormType}</h2>
            <div className='w-full flex flex-wrap sm:flex-nowrap relative'>
                <label className='w-1/2 max-w-1/2 '>Name:</label>
                <input type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} className='bg-neutral-600 p-1 px-6 rounded-lg outline-none' />
                {errors.name && <p className='absolute -top-5 left-1/3 text-red-500 font-bold antialiased'>{errors.name}</p>}
            </div>
            <div className='w-full flex   flex-wrap sm:flex-nowrap sm:gap-4 justify-between relative'>
                <label className='max-w-1/3   sm:w-1/3'>Country Code:</label>
                <select aria-label='countryCode' value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className='bg-neutral-600 w-fit p-1  rounded-lg outline-none' >
                    <option value="">Select Code</option>
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                </select>
                {errors.countryCode && <p className='absolute -top-5 left-1/3 text-red-500 font-bold antialiased'>{errors.countryCode}</p>}
            </div>
            <div className='w-full flex flex-wrap   sm:items-start sm:flex-nowrap  relative'>
                <label className='w-3/6 '>Phone Number:</label>
                <input type="text" placeholder='Enter Phone Number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className='bg-neutral-600 p-1 px-6 rounded-lg outline-none' />
                {errors.phoneNumber && <p className='absolute -top-5 left-1/3 text-red-500 font-bold antialiased'>{errors.phoneNumber}</p>}
            </div>
            <button type="submit" className='bg-red-600 hover:bg-red-700 p-2 px-6 rounded-lg'>Submit</button>
        </form>
    );
}

export default FormComponent;
