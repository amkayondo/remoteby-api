import { CollectionConfig } from 'payload/types';
import checkIfItsTheSameUser from "../controllers/users/checkIfItsTheSameUser";
import updateOrganization from "../controllers/organization/updateOrganization";
import createNewOrganization from "../controllers/organization/createNewOrganization";

const Organizations: CollectionConfig = {
    slug: "organizations",
    auth: false,
    fields: [
        {
            name: "title",
            type: "text"
        }, {
            name: "location",
            type: "group",
            fields: [
                {
                    name: "address",
                    type: "text"
                },
                {
                    name: "lat",
                    type: "number"
                },
                {
                    name: "long",
                    type: "number"
                }
            ]
        }, {
            name: "organizationType",
            type: "text"
        },
        {
            name: "email",
            type: "email"
        },
        {
            name: 'createdBy', // required
            type: 'relationship', // required
            relationTo: 'users', // required
            hasMany: false,
        }, {
        name: "createdAt",
            type: "date",

        },
        {
            name: "updatedAt",
            type: "date"
        },
        {
            name: "avatar",
            type: "text"
        },

    ],
    access: {
        read: (req) => true,
        update: ({id, req, data}) => {
           return  updateOrganization({
               id, req, data
           })
        },
        delete:  ({id, req, data}) => {
            return  updateOrganization({
                id, req, data
            })
        },
        create: ({id, req, data}) => {
           return  createNewOrganization(req.user)
        }
    },
}

export default Organizations;