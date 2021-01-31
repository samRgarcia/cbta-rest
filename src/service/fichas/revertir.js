import Aspirante from "../../models/aspirante";

export async function deleteAspirante(folio) {
    await Aspirante.destroy({where:{folio:folio}})
}
