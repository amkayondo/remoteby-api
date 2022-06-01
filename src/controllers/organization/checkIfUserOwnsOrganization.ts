import payload from "payload";

const checkIfUserOwnsOrganization = async  (id, user) => {
    const org = await payload.findByID({
        collection: "organizations",
        id: id
    })
    if(!org) {
        return false
    }
    if(org.createdBy.id !== user) {
        return  false
    }
    return true

}

export default  checkIfUserOwnsOrganization;