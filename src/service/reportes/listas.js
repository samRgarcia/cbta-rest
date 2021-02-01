import Aspirante from "../../models/aspirante";

export async function listaAspirantes() {
    let listas = await Aspirante.findAll();
    return listas;
}
