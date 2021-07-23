import { text, timestamp, relationship, image } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const manufacturerList = list({
    ui: {
        listView: {
            initialColumns: ['name', 'image', 'products'],
        },
    },

    fields: {
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels is used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        image: image({ isRequired: true }),
        name: text({ isRequired: true }),
        products: relationship({
            ref: 'Product.manufacturer',
            ui: {
                displayMode: 'cards',
                cardFields: ['title', 'description'],
                inlineConnect: true,
                linkToItem: true,
            },
            many: true
        }),
    },
});

export default manufacturerList;