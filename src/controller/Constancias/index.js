

export function potContancia(req,res) {
    try {
        console.log(req.file)
        res.status(200).json('ok')
    }catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
    
}
