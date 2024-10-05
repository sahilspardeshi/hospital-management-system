import ApiResponse from "../ApiResponse.js";


export const healthCheck = (req, res) => {
    return res.json(new ApiResponse(200, "Software API is working Fine!!!", {}));
};