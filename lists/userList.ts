import { relationship, password, text, image } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

const userList = list({
    ui: {
        listView: {
            initialColumns: ['name', 'profile_image', 'address', 'phone', 'notifications', 'orders', 'reviews'],
        },
    },
    fields: {
        name: text({ isRequired: true }),
        email: text({ isRequired: true, isUnique: true }),
        password: password({ isRequired: true }),
        address: relationship({ ref: 'Address.user' }),
        phone: text(),
        posts: relationship({ ref: 'Post.author', many: true }),
        reviews: relationship({ ref: 'Review.customer', many: true }),
        orders: relationship({ ref: 'Order.customer', many: true }),
        profile_image: image(),
        notifications: relationship({ ref: 'Notification.customer', many: true }),
    },
});

export default userList;