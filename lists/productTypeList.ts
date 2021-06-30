import { text, timestamp, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productTypeList = list({
    ui: {
        listView: {
            initialColumns: ['product_type', 'attributes', 'products'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        product_type: text({ isRequired: true }),
        attributes: relationship({ ref: 'ProductAttribute.product_type', many: true }),
        products: relationship({ ref: 'Product.type', many: true })
    },
});

export default productTypeList;