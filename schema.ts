import { createSchema } from '@keystone-next/keystone/schema';
import reviewsList from './lists/reviewList';
import postList from './lists/postList';
import productList from './lists/productList';
import tagList from './lists/tagLists';
import userList from './lists/userList';
import manufacturerList from './lists/manufacturerList';
import orderList from './lists/orderList';
import ordersProductList from './lists/orders_product';
import categoryList from './lists/categoryList';
import notificationList from './lists/notificationList';
import taxList from './lists/taxList';
import discountList from './lists/discounts';
import productTypeList from './lists/productTypeList';
import attributeTypeList from './lists/AttributeTypeList';
import productAttributeList from './lists/ProductAttribute';
import productTypeAttributeList from './lists/productTypeAttributeList';

export const lists = createSchema({
    User: userList,
    Post: postList,
    Product: productList,
    Tag: tagList,
    Review: reviewsList,
    Manufacturer: manufacturerList,
    Order: orderList,
    OrdersProduct: ordersProductList,
    Category: categoryList,
    Notification: notificationList,
    Tax: taxList,
    Discount: discountList,
    ProductType: productTypeList,
    ProductAttribute: productAttributeList,
    AttributeType: attributeTypeList,
    ProductTypeAttribute: productTypeAttributeList,
});
