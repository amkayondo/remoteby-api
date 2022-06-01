import payload from "payload";
import Organizations from "../../collections/Organizations";
import checkIfUserOwnsOrganization from "./checkIfUserOwnsOrganization";

const updateOrganization = async ({req, id, data}) => {
    if(!req.user) {
        return  false
    }
    return  checkIfUserOwnsOrganization(id, req.user.id)
        .then(res => res)
        .catch(error => false)
}

export  default  updateOrganization