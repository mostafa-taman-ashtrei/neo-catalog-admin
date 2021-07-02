import { text, timestamp, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productTypeList = list({
    ui: {
        listView: {
            initialColumns: ['product_type_name', 'product_type_attributes', 'products'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        product_type_name: text({ isRequired: true }),
        product_type_attributes: relationship({ ref: 'ProductTypeAttribute', many: true }),
        products: relationship({ ref: 'Product.product_type', many: true }),
    },
});

export default productTypeList;