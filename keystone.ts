import { config } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { config as envConfig } from 'dotenv';

import { lists } from './schema';
import session from './utils/createSession';

envConfig();

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    sessionData: 'name',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
    },
});


export default withAuth(
    config({
        db: {
            adapter: 'prisma_postgresql',
            url: process.env.DATABASE_URL || 'postgres://neo:neo@localhost/neo-catalog',
        },
        ui: {
            isAccessAllowed: (context) => !!context.session?.data,
        },
        lists,
        session,
        server: {
            port: parseInt(process.env.PORT!) || 3001
        }
    })
);
