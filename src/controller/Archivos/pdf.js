import {guardarConstancia} from '../../service/fichas/archivos'

export async function constanciasPdf(req, res) {
    try {
        console.log(req.file)
        const {folio} = req.body;
        const file = req.file;
        await guardarConstancia(file.filename,folio)
        res.status(200).json({message:'documento guardado'})
    } catch (e) {
        res.status(500).json('Fallo al guardar pdf')
        console.log(e)
    }
}
