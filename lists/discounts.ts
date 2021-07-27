import { text, timestamp, relationship, decimal } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const discountList = list({
    ui: {
        listView: {
            initialColumns: ['discount_name', 'discount_value'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        discount_name: text(),
        discount_value: decimal({ isRequired: true }),
        discount_description: text(),
        products: relationship({
            ref: 'Product.discount',
            ui: {
                displayMode: 'cards',
                cardFields: ['title', 'price'],
                linkToItem: true,
                inlineConnect: true
            },
            many: true
        })
    },
});

export default discountList;