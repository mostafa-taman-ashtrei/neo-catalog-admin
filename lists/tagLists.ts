import { relationship, text, timestamp } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const tagList = list({
    ui: {
        listView: {
            initialColumns: ['name', 'products'],
        },
    },
    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels are used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        name: text({ isRequired: true }),
        products: relationship({
            ref: 'Product.tags',
            ui: {
                displayMode: 'cards',
                cardFields: ['title', 'price'],
                linkToItem: true,
                inlineConnect: true,
            },
            many: true,
        }),
    },
});

export default tagList;
