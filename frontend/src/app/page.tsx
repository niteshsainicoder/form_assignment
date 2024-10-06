'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormComponent from '@/components/FormComponent';

function App() {
    const [formbutton, setformbutton] = useState('');
    const refresh = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/form/sync');
            if (response.status === 200) {
                console.log('Data successfully synced to Google Sheet!');
                alert('Data successfully synced to Google Sheet!');
            } else {
                console.log('Failed to sync data to Google Sheet.');
            }
        } catch (error) {
            console.error('Error syncing data to SheetDB:', error);
        }
    };
    useEffect(() => {
        setformbutton('');
    }, []);

    return (
        <div className='w-full min-h-screen max-h-fit pt-10 flex flex-col relative bg-neutral-800 justify-center items-center gap-8'>
            <h1 className='w-fit px-20 py-2 rounded-lg bg-zinc-700 text-center'>Dynamic Forms</h1>
            <div className='absolute top-5 w-fit h-fit right-5'>
                <button type='button' onClick={refresh} className='bg-green-700 p-2 px-6 rounded-lg'>Refresh</button>
            </div>
            {
                formbutton == '' ? <div className='flex gap-5 items-center'>
                    <button type={`button`} onClick={() => setformbutton('Form A')} className='bg-cyan-700 p-2 px-6 rounded-lg'>Form A</button>
                    ||
                    <button type={`button`} onClick={() => setformbutton('Form B')} className='bg-cyan-700 p-2 px-6 rounded-lg'>Form B</button>
                </div> : <FormComponent FormType={formbutton} />

            }
        </div>
    );
}

export default App;
