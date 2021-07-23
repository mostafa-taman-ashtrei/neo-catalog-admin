import { text, timestamp, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const reviewsList = list({
    ui: {
        listView: {
            initialColumns: ['review_text', 'product', 'customer', 'created_at'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        review_text: text({ isRequired: true }),
        product: relationship({
            ref: 'Product.reviews',
            ui: {
                displayMode: 'cards',
                cardFields: ['title', 'price'],
                linkToItem: true,
                inlineConnect: true
            },
        }),
        customer: relationship({
            ref: 'User.reviews',
            ui: {
                displayMode: 'cards',
                cardFields: ['name', 'email'],
                linkToItem: true,
                inlineConnect: true
            },
        }),
    },
});

export default reviewsList;