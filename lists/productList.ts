import { select, text, timestamp, integer, decimal, image, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productList = list({
    ui: {
        listView: {
            initialColumns: ['title', 'type', 'price', 'status', 'image', 'reviews', 'manufacturer', 'category', 'tags', 'tax', 'is_discounted', 'discount'],
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
        is_discounted: text({ defaultValue: 'false' }),
        discount: relationship({ ref: 'Discount.products', many: true }),
        is_taxed: text({ defaultValue: 'false' }),
        tax: relationship({ ref: 'Tax.products', many: true }),
        rating: integer({ isRequired: false, defaultValue: 0 }),
        category: relationship({ ref: 'Category.products' }),
        tags: relationship({
            ref: 'Tag.products',
            ui: {
                displayMode: 'cards',
                cardFields: ['name'],
                inlineEdit: { fields: ['name'] },
                linkToItem: true,
                inlineConnect: true,
                inlineCreate: { fields: ['name'] },
            },
            many: true,
        }),
        type: relationship({ ref: 'ProductType.products' }),
    },
});

export default productList;