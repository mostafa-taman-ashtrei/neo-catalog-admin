import { text, timestamp, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const attributeList = list({
    ui: {
        listView: {
            initialColumns: ['attribute', 'attribute_type'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        attribute_type: relationship({ ref: 'AttributeType' }),
        attribute: text({ isRequired: true }),
    },
});

export default attributeList;