import { text, timestamp, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productTypeAttributeList = list({
    ui: {
        listView: {
            initialColumns: ['created_at', 'product_type', 'attributes'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        product_type: relationship({ ref: 'ProductType', many: true }),
        attributes: relationship({ ref: 'ProductAttribute', many: true }),
    },
});

export default productTypeAttributeList;