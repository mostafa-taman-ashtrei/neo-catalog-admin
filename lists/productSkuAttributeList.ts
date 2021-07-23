import { relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productAttributeSkuList = list({
    ui: {
        listView: {
            initialColumns: ['name', 'value', 'product_sku'],
        },
    },
    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels are used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        product_sku: relationship({
            ref: 'ProductSku.sku_attribute',
            ui: {
                displayMode: 'cards',
                cardFields: ['sku'],
                inlineConnect: true,
                linkToItem: true,
            },
            many: true
        }),
        name: text({ isRequired: true }),
        value: text({ isRequired: true }),
    },
});

export default productAttributeSkuList;
