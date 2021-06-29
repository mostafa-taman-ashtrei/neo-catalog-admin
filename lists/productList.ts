import { select, text, timestamp, integer, decimal, image, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productList = list({
    ui: {
        listView: {
            initialColumns: ['title', 'price', 'status', 'image', 'reviews', 'manufacturer'],
        },
    },

    fields: {
        title: text({ isRequired: true }),
        description: text({ isRequired: true }),
        price: decimal({ isRequired: true }),
        created_at: timestamp({ defaultValue: Date() }),
        updated_at: timestamp(),
        deleted_at: timestamp({ isRequired: false }), // the deleted_at and is_deleted fiels are used for soft deletes  
        is_deleted: text({ isRequired: true, defaultValue: 'false' }),
        status: select({
            options: [
                { value: 'InStock', label: 'InStock' },
                { value: 'Out of stock', label: 'Out of stock' },
            ],
            ui: {
                displayMode: 'segmented-control',
            },
            defaultValue: 'InStock',
        }),
        quantitiy: integer({ isRequired: true }),
        manufacturer: relationship({
            ref: 'Manufacturer.products',
            ui: {
                displayMode: 'cards',
                cardFields: ['name'],
                inlineEdit: { fields: ['name'] },
                linkToItem: true,
                inlineCreate: { fields: ['name'] },
            },
        }),
        products_orderd: integer({ isRequired: true, defaultValue: 0 }),
        reviews: relationship({ ref: 'Review.product', many: true }),
        image: image({ isRequired: true }), // The image is stored locally for now
        discount: integer({ isRequired: false }),
        category: text({ isRequired: true }),
        rating: integer({ isRequired: false, defaultValue: 0 }),
    },
});

export default productList;