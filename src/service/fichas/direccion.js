import Catalogoestados from "../../models/catalogoestados";
import Catalogomunicipios from "../../models/catalogomunicipios";

export async function listaEstados() {
    try {
        let data = await Catalogoestados.findAll();
        return data;
    } catch (e) {
        throw new Error(e);
    }

}

export async function listaMunicipios(id) {
    try {
        let data = await Catalogomunicipios.findAll({where:{catalogoEstados_idEstado:id}});
        return data;
    } catch (e) {
        throw new Error(e);
    }

}
