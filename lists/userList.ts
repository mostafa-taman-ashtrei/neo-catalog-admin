import { relationship, password, text, image } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const userList = list({
    ui: {
        listView: {
            initialColumns: ['name', 'profile_image', 'address', 'phone', 'cart', 'notifications', 'orders', 'reviews'],
        },
    },
    fields: {
        name: text({ isRequired: true }),
        email: text({ isRequired: true, isUnique: true }),
        password: password({ isRequired: true }),
        address: relationship({
            ref: 'Address.user',
            ui: {
                displayMode: 'cards',
                cardFields: ['street', 'city', 'country'],
                linkToItem: true,
                inlineConnect: true
            }
        }),
        phone: text(),
        reviews: relationship({
            ref: 'Review.customer',
            ui: {
                displayMode: 'cards',
                cardFields: ['review_text'],
                linkToItem: true,
                inlineConnect: true,
            },
            many: true
        }),
        cart: relationship({
            ref: 'CartItem.customer',
            ui: {
                displayMode: 'cards',
                cardFields: ['product', 'quantity'],
                linkToItem: true,
                inlineConnect: true
            },
            many: true
        }),
        orders: relationship({
            ref: 'Order.customer',
            ui: {
                displayMode: 'cards',
                cardFields: ['order_total'],
                linkToItem: true,
                inlineConnect: true
            },
            many: true
        }),
        profile_image: image(),
        notifications: relationship({ ref: 'Notification.customer', many: true }),
    },
});

export default userList;