const path = require('path');
import {
    buscarValidacionFolio,
    listCatCarrera,
    listCatCiclos,
    listCatModalidad
} from '../../service/Admistrador/listasCatalogos';

export async function getListModalida(req, res) {
    try {
        const LIST = await listCatModalidad();
        res.status(200).json(LIST)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'server error'})
    }
}

export async function getListCiclos(req, res) {
    try {
        const {idCbtas} = req.query;
        if (idCbtas) {
            let lista_Cliclo = await listCatCiclos(idCbtas);
            res.status(200).json(lista_Cliclo)
        } else {
            req.status(204).json('No idCbtas')
        }

    } catch (e) {
        console.log(e)
        res.status(500).json('error server')
    }
}

export async function getListCarrera(req, res) {
    try {
        const LIST = await listCatCarrera();
        res.status(200).json(LIST)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'server error'})
    }
}

export async function getDocConstancia(req, res) {
    try {
        let data = req.query;
        //TODO: verificar folio
       const filename = await  buscarValidacionFolio(data)

        if (filename) {
            let options = {
                root: path.join(__dirname, '../../../public/constancias'),
                dotfiles: 'deny',
                headers: {
                    'x-timestamp': Date.now(),
                    'x-sent': true
                }
            }
            res.sendFile(filename, options, function (err) {
                if (err) {
                    console.log(err)
                    res.status(403).json({message: 'Datos no encontrados'})
                } else {
                    console.log('Sent:', filename)
                }
            })
        } else {
            res.status(403).json({message: 'Datos no encontrados'})
        }

    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'server error'})
    }
}
