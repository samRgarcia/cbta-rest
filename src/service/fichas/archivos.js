import Constancias_aspirantes from "../../models/constancias_aspirantes";

export async function guardarConstancia(namefile,folio) {
    console.log(namefile)
    try {
        await Constancias_aspirantes.create({
            nombre_doc:namefile,
            aspirante_folio:folio
        })
    }catch (e) {
        console.log(e)
    }
}
