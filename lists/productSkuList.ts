import { relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productSkuList = list({
    ui: {
        listView: {
            initialColumns: ['sku', 'products', 'sku_attribute'],
        },
    },
    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels are used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        products: relationship({ ref: 'Product.product_sku' }),
        sku: text({ isRequired: true }),
        sku_attribute: relationship({ ref: 'ProductSkuAttribute.product_sku', many: true })
    },
});

export default productSkuList;
