import { integer, relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const cartItemList = list({
    ui: {
        listView: {
            initialColumns: ['quantity', 'customer', 'product'],
        },
    },
    fields: {
        customer: relationship({
            ref: 'User.cart',
            ui: {
                displayMode: 'cards',
                cardFields: ['name', 'email'],
                linkToItem: true,
                inlineConnect: true
            },
        }),
        product: relationship({
            ref: 'Product',
            ui: {
                displayMode: 'cards',
                cardFields: ['title', 'price'],
                inlineConnect: true,
                linkToItem: true,
            }
        }),
        quantity: integer({ isRequired: true }),

        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels are used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
    },
});

export default cartItemList;
