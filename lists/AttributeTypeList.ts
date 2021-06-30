import { text, timestamp, select, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const attributeTypeList = list({
    ui: {
        listView: {
            initialColumns: ['attribute_value', 'attribute_type'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        attribute_value: relationship({ ref: 'ProductAttribute', many: true }),
        // The attribute value will probably change later on
        attribute_type: select({
            options: [
                { value: 'text', label: 'text' },
                { value: 'list', label: 'list' },
                { value: 'number', label: 'number' },
            ],
            ui: {
                displayMode: 'segmented-control',
            },
        }),
    },
});

export default attributeTypeList;