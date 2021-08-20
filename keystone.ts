import { config } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import { config as envConfig } from 'dotenv';

import { lists } from './schema';
import session from './utils/createSession';
import makeDir from './utils/makedir';

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

// create folders for file upload
makeDir(`${__dirname}/public`);
makeDir(`${__dirname}/public/images`);
makeDir(`${__dirname}/public/files`);

export default withAuth(
    config({
        db: {
            adapter: 'prisma_postgresql',
            url: process.env.DATABASE_URL || 'postgres://neo:neo@localhost/neo-catalog',
        },
        ui: {
            isAccessAllowed: (context) => !!context.session?.data,
        },
        // images will be stored locally for now temporarily
        images: {
            upload: 'local',
            local: {
                storagePath: 'public/images',
                baseUrl: '/images',
            },
        },
        files: {
            upload: 'local',
            local: {
                storagePath: 'public/files',
                baseUrl: '/files',
            },
        },
        lists,
        session,
        server: {
            port: parseInt(process.env.PORT!) || 3001
        }
    })
);
