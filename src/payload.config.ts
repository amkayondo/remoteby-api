import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Admins from './collections/Admins';
import Organizations from "./collections/Organizations";

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Admins.slug,
  },
  collections: [
    Users,
    Organizations,
    Admins
    // Add Collections here
    // Examples,
  ],
  csrf: [ // whitelist of domains to allow cookie auth from
    '*'
  ],
  graphQL: {
    disable:false
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
