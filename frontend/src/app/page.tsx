'use client';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import FormComponent from '../components/FormComponent';
import axios from 'axios';

function App() {
    const refresh= async()=>{
    try{
        const response = await axios.get('http://localhost:3001/api/form/sync');
        if (response.status === 200) {
            console.log('Data successfully synced to Google Sheet!');
            alert('Data successfully synced to Google Sheet!');
        } else {
            console.log('Failed to sync data to Google Sheet.');
        }
    }
    catch(error){
        console.error('Error syncing data to SheetDB:', error);
    }
    }
    return (
        <Router>
            <div className='w-full min-h-screen max-h-fit pt-10 flex flex-col relative bg-neutral-800 justify-center items-center gap-8'>
                <h1 className='w-fit px-20 py-2  rounded-lg bg-zinc-700 text-center'>Dynamic Forms</h1>
                <div className='absolute top-5 w-fit h-fit right-5'><button type='button' onClick={refresh} className='bg-green-700 p-2 px-6 rounded-lg'>Refresh </button></div>
              <div className='flex gap-5 items-center'>  <Link to="/form-a" className='bg-cyan-700 p-2 px-6 rounded-lg'>Form A</Link> || <Link to="/form-b" className='bg-cyan-700 p-2 px-6 rounded-lg'>Form B</Link></div>
               <Routes> <Route path="/form-a" element={<FormComponent FormType="Form A" />} />
                <Route path="/form-b" element={<FormComponent FormType="Form B" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
