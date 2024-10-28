import prisma from "../../../db/index.js";


// Function to delete a Patient Medication record by ID
export const deleteOpdTreatment= 
    async (req, res) => {
        const { id } = req.params;
    
        try {
          await prisma.oPDTreatments.delete({ where: { id: parseInt(id) } });
          res.status(204).send();
        } catch (error) {
          res.status(500).json({ message: 'Error deleting OPD Treatment.', error: error.message });
        }
    };
