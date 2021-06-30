import { text, timestamp, decimal, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productAttributeList = list({
    ui: {
        listView: {
            initialColumns: ['color', 'size', 'attribute_type'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        size: text({ isRequired: true }),
        material: text(),
        color: text(),
        dimensions: text(),
        weight: decimal(),
        packaging: text(),
        design: text(),
        attribute_type: relationship({ ref: 'AttributeType' })
    },
});

export default productAttributeList;