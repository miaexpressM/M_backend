import { fileUpload } from 'utils/upload';
import { orderDelByIdHandler } from './handler/order.delById';
import { orderGetAllHandler } from './handler/order.getAll';
import { orderGetByIdHandler } from './handler/order.getById';
import { orderPostHandler } from './handler/order.post';
import { orderPutByIdHandler } from './handler/order.putById';
import { orderGetByTrackingNumberHandler } from './handler/order.getByTrackingNumber';
import { orderGetByUpdatedAtHandler } from './handler/order.getByUpdatedAt';
import { orderPostListHandler } from './handler/order.post'
import {
  orderDelByIdValidator,
  orderGetAllValidator,
  orderGetByIdValidator,
  orderPostValidator,
  orderPutByIdValidator,
  orderGetByTrackingNumberValidator,
  orderGetByUpdatedAtValidator,
  orderPostListValidator,
  orderPostByTrackingNumberListValidator,
  orderPutByIdWithZoneIdValidator,
} from './order.validator';
import { orderPostByTrackingNumberListHandler } from './handler/order.postByTrackingNumberList';
import { orderPutByIdWithZoneIdHandler } from './handler/order.putByIdWithZoneId';

export const routes: CommonRoute[] = [
  {
    path: '/orders',
    method: 'get',
    auth: true,
    validator: orderGetAllValidator,
    handler: orderGetAllHandler,
  },
  {
    path: '/orders/:id',
    method: 'get',
    auth: true,
    validator: orderGetByIdValidator,
    handler: orderGetByIdHandler,
  },
  {
    path: '/orders/updatedAt/:from/:to',
    method: 'get',
    auth: true,
    validator: orderGetByUpdatedAtValidator,
    handler: orderGetByUpdatedAtHandler,
  },
  {
    path: '/orders/track/:trackingNumber',
    method: 'get',
    auth: true,
    validator: orderGetByTrackingNumberValidator,
    handler: orderGetByTrackingNumberHandler,
  },
  {
    path: '/orders/trackList',
    method: 'post',
    auth: true,
    validator: orderPostByTrackingNumberListValidator,
    handler: orderPostByTrackingNumberListHandler,
  },
  {
    path: '/addOrder',
    method: 'post',
    auth: true,
    validator: orderPostValidator,
    handler: orderPostHandler,
  },

  {
    path: '/addOrderList',
    method: 'post',
    auth: true,
    validator: orderPostListValidator,
    handler: orderPostListHandler,
  },
  {
    path: '/orders/:id',
    method: 'put',
    auth: true,
    validator: orderPutByIdValidator,
    handler: orderPutByIdHandler,
  },
  {
    path: '/ordersWithZoneId/:id',
    method: 'put',
    auth: true,
    validator: orderPutByIdWithZoneIdValidator,
    handler: orderPutByIdWithZoneIdHandler,
  },
  {
    path: '/orders/:id',
    method: 'delete',
    auth: true,
    validator: orderDelByIdValidator,
    handler: orderDelByIdHandler,
  },
];
