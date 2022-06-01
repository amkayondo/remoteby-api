
const checkIfItsTheSameUser = ({req, id, data}) => {
    if(!req.user) {
        return  false
    }
    if(req.user.id !== id) {
        return false
    }
    return true
}

export default  checkIfItsTheSameUser;
