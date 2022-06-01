import payload from "payload";

const createNewOrganization = (user) => {
    if(!user){
        return false
    }
    payload.find({
        collection: "organizations",

    }).then(res => {
        const data = res.docs.find(x => x.createdBy === user.id)
        console.log("Ada", data)
    })
        .catch(error => console.log("error", error))

    return false
}

export default createNewOrganization