import prisma from "../../db/index.js";

export const getAllAppointments = async (req, res) => {

        try {
          // Fetch all appointments
          const appointments = await prisma.appointments_OPD.findMany({
            include:{
                Petients:true,
                Staff:true,
            }
          });
      
          // Return all the fetched appointments
          return res.json({ data: appointments });
        } catch (err) {
          console.error("Error fetching appointments: ", err.message);
          return res.status(500).json({ msg: "Failed to fetch appointments", error: err.message });
        }

}