export const updateMarketing = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, phone, email, password, address, dob, hospital } = req.body;
  
      // Prepare the data to update
      const data = {};
      if (name) data.name = name;
      if (phone) data.phone = phone;
      if (email !== undefined) data.email = email;
      if (password) {
        data.password = await bcrypt.hash(password, 10);
      }
      if (address) data.address = address;
      if (dob) data.dob = new Date(dob);
      if (hospital) data.hospital = hospital;
  
      const updatedMarketing = await prisma.marketing.update({
        where: { id: BigInt(id) },
        data,
      });
  
      res.status(200).json(updatedMarketing);
    } catch (error) {
      console.error(error);
      if (error.code === 'P2025') {
        // Record not found
        res.status(404).json({ error: 'Marketing record not found' });
      } else if (error.code === 'P2002') {
        // Unique constraint failed
        res.status(409).json({ error: `Unique constraint failed on the field: ${error.meta?.target}` });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  };
  