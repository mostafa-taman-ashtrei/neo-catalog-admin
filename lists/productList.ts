import { select, text, timestamp, integer, decimal, image, relationship } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const productList = list({
    ui: {
        listView: {
            initialColumns: ['title', 'price', 'product_sku', 'created_at']
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

        products_orderd: integer({ isRequired: true, defaultValue: 0 }),
        image: image({ isRequired: true }), // The image is stored locally for now
        quantitiy: integer({ isRequired: true }),
        rating: integer({ isRequired: false, defaultValue: 0 }),

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

        manufacturer: relationship({
            ref: 'Manufacturer.products',
            ui: {
                displayMode: 'cards',
                cardFields: ['name'],
                linkToItem: true,
                inlineConnect: true,
                inlineCreate: { fields: ['name', 'image', 'products'] },
            },
        }),

        reviews: relationship({
            ref: 'Review.product',
            many: true,
            ui: {
                displayMode: 'cards',
                cardFields: ['review_text'],
                inlineConnect: true,
                inlineCreate: { fields: ['review_text', 'product', 'customer'] },
            }
        }),


        is_discounted: select({
            options: [
                { value: 'true', label: 'true' },
                { value: 'false', label: 'false' },
            ],
            ui: {
                displayMode: 'select',
            },
            defaultValue: 'false',
        }),

        discount: relationship({
            ref: 'Discount.products',
            ui: {
                displayMode: 'cards',
                cardFields: ['discount_name', 'discount_value'],
                inlineConnect: true,
                inlineCreate: { fields: ['discount_name', 'discount_value', 'discount_description', 'products'] },
            },
            many: true
        }),

        is_taxed: select({
            options: [
                { value: 'true', label: 'true' },
                { value: 'false', label: 'false' },
            ],
            ui: {
                displayMode: 'select',
            },
            defaultValue: 'false',
        }),

        tax: relationship({
            ref: 'Tax.products',
            ui: {
                displayMode: 'cards',
                cardFields: ['tax_name', 'tax_rate'],
                inlineConnect: true,
                inlineCreate: { fields: ['tax_name', 'tax_rate', 'tax_description', 'products'] },
            },
            many: true
        }),



        category: relationship({
            ref: 'Category.products',
            ui: {
                displayMode: 'cards',
                cardFields: ['name', 'num_of_products'],
                inlineConnect: true,
                inlineCreate: { fields: ['name', 'num_of_products', 'image', 'description', 'products'] },
            },
        }),

        tags: relationship({
            ref: 'Tag.products',
            ui: {
                displayMode: 'cards',
                cardFields: ['name'],
                linkToItem: true,
                inlineConnect: true,
                inlineCreate: { fields: ['name', 'num_of_products', 'description', 'products'] },
            },
            many: true,
        }),

        product_sku: relationship({
            ref: 'ProductSku.products',
            many: true,
            ui: {
                displayMode: 'cards',
                cardFields: ['sku', 'sku_attribute', 'products'],
                createView: { fieldMode: 'edit' },
                listView: { fieldMode: 'hidden' },
                itemView: { fieldMode: 'edit' },
                inlineConnect: true,
                inlineCreate: { fields: ['sku', 'sku_attribute', 'products'] },
            }
        }),

        product_type: relationship({ ref: 'ProductType.products' }),
        product_attributes: relationship({ ref: 'ProductAttribute.product' }),
    },
});

export default productList;