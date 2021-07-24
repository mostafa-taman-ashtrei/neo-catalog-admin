import { decimal, relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productSkuList = list({
    ui: {
        listView: {
            initialColumns: ['sku', 'sku_attribute', 'created_at'],
        },
    },
    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels are used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        products: relationship({
            ref: 'Product.product_sku',
            ui: {
                displayMode: 'cards',
                cardFields: ['title', 'price'],
                inlineConnect: true,
                linkToItem: true,
            }
        }),
        sku: text({ isRequired: true }),
        price: decimal(),
        sku_attribute: relationship({
            ref: 'ProductSkuAttribute.product_sku',
            ui: {
                displayMode: 'cards',
                cardFields: ['name', 'value'],
                linkToItem: true,
                inlineCreate: {
                    fields: [
                        'name',
                        'value',
                        'product_sku'
                    ]
                }
            },
            many: true
        })
    },
});

export default productSkuList;
