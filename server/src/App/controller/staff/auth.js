router.post('/token', async (req, res) => {
    const { token } = req.body;
  
    if (!token) return res.sendStatus(401);
  
    jwt.verify(token, REFRESH_TOKEN_SECRET, (err, staff) => {
      if (err) return res.sendStatus(403);
  
      const accessToken = generateAccessToken({ staffId: staff.staffId, type: staff.type });
      res.json({ accessToken });
    });
  });
  