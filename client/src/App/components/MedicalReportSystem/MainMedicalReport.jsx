import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2Icon } from 'lucide-react'
//1

// Dummy data to simulate backend response
const dummyReports = [
  {
    id: '1',
    reportId: 'KSFL18001',
    doctorId: 'LOAI5001',
    treatmentId: 'W349588YTH1',
    mainReportId: 'OPD',
    reportDate: '2024-10-01',
    reportType: 'OPD',
    reportDescription: 'Patient 1',
    cost: '55000',
    paid: '20000',
    status: 'Completed',
    lastModified: new Date('2024-10-01T10:00:00Z')
  },
  {
    id: '2',
    reportId: 'KSFL18002',
    doctorId: 'LOAI5002',
    treatmentId: 'W349589YTH2',
    mainReportId: 'OPD',
    reportDate: '2024-10-02',
    reportType: 'OPD',
    reportDescription: 'Patient 2',
    cost: '52000',
    paid: '15000',
    status: 'Pending',
    lastModified: new Date('2024-10-02T11:00:00Z')
  },
  {
    id: '3',
    reportId: 'KSFL18003',
    doctorId: 'LOAI5003',
    treatmentId: 'W349590YTH3',
    mainReportId: 'OPD',
    reportDate: '2024-10-03',
    reportType: 'OPD',
    reportDescription: 'Patient 3',
    cost: '58000',
    paid: '25000',
    status: 'Completed',
    lastModified: new Date('2024-10-03T12:00:00Z')
  }
]

export default function MainMedicalReport() {
  const [reports, setReports] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchReports = async () => {
      setIsLoading(true)
      setError(null)
      try {
        // Simulating API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000))
        setReports(dummyReports)
      } catch (err) {
        setError('Failed to fetch reports. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchReports()
  }, [])

  const handleAddNewFile = () => {
    navigate('/new-report')
  }

  const handleEditReport = (reportId) => {
    navigate(`/report-result/${reportId}`)
  }

  const sortedReports = [...reports].sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime())
  const recentReports = sortedReports.slice(0, 3)

  return (
  
    <div className='p-8'>
      <div className="bg-[#E4D7D7] flex justify-between items-center w-full mx-auto py-2 px-4">
        <h1 className="text-xl font-bold">Main medical report</h1>
        <button onClick={handleAddNewFile} className="bg-green-400 text-white px-4 py-2 rounded-2xl">
          Add new file +
        </button>
      </div>
      <div className="flex justify-center max-w-5xl mx-auto">
        <h2 className="text-2xl text-black mb-1 font-bold mt-5">Reports</h2>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4 flex justify-center space-x-2">
          <input
            type="text"
            placeholder="Search Patient Name or ID"
            className="w-2/5 p-2 border rounded-xl"
          />
          <button className="bg-green-500 text-white px-6 py-2 rounded-xl">View</button>
        </div>
        {recentReports.map((report, index) => (
          <div key={report.id} className="flex justify-between items-center bg-gray-100 p-4 rounded mb-2">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Medical report {index + 1}
            </span>
            <button onClick={() => handleEditReport(report.id)} className="bg-green-400  text-white px-5 py-2 rounded-xl">
              Edit
            </button>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-center items-center py-4">
            <Loader2Icon className="animate-spin mr-2" />
            Loading...
          </div>
        )}
        {error && <div className="text-red-500 text-center py-4">{error}</div>}
      </div>
    </div>
   
  )
}