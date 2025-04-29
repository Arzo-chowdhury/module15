export const createUserService =(req, res)=>{
    try{
        let reqBody = req.body;

        return {status:"success", message: "User created successfully", data: reqBody};
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internel server error'});
    }
}