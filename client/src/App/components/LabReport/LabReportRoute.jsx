//nain
import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import MainLabReport from './MainLabReport.jsx'
import ReportResult from './LabReportResult.jsx'
import { ReportProvider } from './ReportContext.jsx'
import LabReport from './LabReport.jsx'

export default function LabReportRoute() {
  return (

        
        
            <div className="w-4/5 mx-auto bg-white rounded-lg shadow-md m-4 p-6">
              <ReportProvider>
                <Routes>
                  <Route path="" element={<MainLabReport/>} />
                  <Route path="lab-reports" element={<LabReport/>} />
                  <Route path="lab-report-result/:id" element={<ReportResult />} />
                  <Route path="lab-report-result/" element={<ReportResult />} />
                </Routes>
               
              </ReportProvider>
            </div>
        
     
  )
}