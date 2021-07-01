import { text, integer, timestamp, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const addressList = list({
    ui: {
        listView: {
            initialColumns: ['postal_code', 'street', 'city', 'country'],
        },
    },
    fields: {
        postal_code: integer(),
        street: text(),
        city: text(),
        country: text(),
        user: relationship({ ref: 'User.address' }),
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
    },
});

export default addressList;