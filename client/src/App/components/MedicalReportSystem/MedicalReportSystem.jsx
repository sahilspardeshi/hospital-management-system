//nain
import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import MainMedicalReport from './MainMedicalReport'
import NewMedicalReport from './NewMedicalReport'
import ReportResult from './ReportResult'
import Sidebar from "../SideBar/Sidebar"
import Navbar from "../Navbar/Navbar" 
import { ReportProvider } from './ReportContext.jsx'

export default function MedicalReportSystem() {
  return (

        
        
            <div className="w-4/5 mx-auto bg-white rounded-lg shadow-md m-4 p-6">
              <ReportProvider>
                <Routes>
                  <Route path="" element={<MainMedicalReport />} />
                  <Route path="new-report" element={<NewMedicalReport />} />
                  <Route path="report-result/:id" element={<ReportResult />} />
                </Routes>
               
              </ReportProvider>
            </div>
        
     
  )
}