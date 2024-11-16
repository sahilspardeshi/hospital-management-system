import React, { createContext, useState, useContext } from 'react'

const ReportContext = createContext()

export const ReportProvider = ({ children }) => {
  const [reportData, setReportData] = useState(null)

  return (
    <ReportContext.Provider value={{ reportData, setReportData }}>
      {children}
    </ReportContext.Provider>
  )
}

export const useReportContext = () => useContext(ReportContext)