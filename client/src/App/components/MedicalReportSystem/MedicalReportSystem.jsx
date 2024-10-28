import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainMedicalReport from './MainMedicalReport'
import NewMedicalReport from './NewMedicalReport'
import ReportResult from './ReportResult'
import Sidebar from "../SideBar/Sidebar"
import Navbar from "../Navbar/Navbar"
import { ReportProvider } from './ReportContext'

export default function MedicalReportSystem() {
  return (
    <div className="min-h-screen bg-custom-gradient flex">
      <div className="bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full max-w-full h-screen overflow-hidden flex flex-row justify-start items-start mx-5 my-5 px-5 py-5">
        <Sidebar />
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <Navbar />
          <div className="flex-1 overflow-y-auto">
            <div className="w-4/5 mx-auto bg-white rounded-lg shadow-md m-4 p-6">
              <ReportProvider>
                <Routes>
                  <Route path="/" element={<MainMedicalReport />} />
                  <Route path="/new-report" element={<NewMedicalReport />} />
                  <Route path="/report-result/:id" element={<ReportResult />} />
                </Routes>
              </ReportProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}