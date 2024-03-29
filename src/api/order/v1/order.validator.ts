import { celebrate, Joi } from 'celebrate';
import { description } from 'joi';

export const orderGetAllValidator = celebrate({
  query: {
    limit: Joi.number()
      .integer()
      .min(1)
      .max(5000)
      .default(100),
    offset: Joi.number()
      .integer()
      .min(0)
      .default(0),
  },
});

export const orderGetByIdValidator = celebrate({
  params: {
    id: Joi.number()
      .integer()
      .positive()
      .required(),
  },
});

export const orderGetByTrackingNumberValidator = celebrate({
  params: {
    trackingNumber: Joi.string().required(),
  },
});

export const orderPostByTrackingNumberListValidator = celebrate({
  body: {
    trackingNumberList: Joi.array().items(Joi.string()),
  },
});

export const orderGetByUpdatedAtValidator = celebrate({
  params: {
    from: Joi.string().required(),
    to: Joi.string().required(),
  },
});

export const orderPostValidator = celebrate({
  body: {
    MAWB: Joi.string()
      .max(50)
      .default('')
      .allow(''),
    containerNumber: Joi.string()
      .default('')
      .allow(''),
    trackingNumber: Joi.string().required(),
    shipper: Joi.string()
      .default('')
      .allow(''),
    shipperPhoneNumber: Joi.string()
      .default('')
      .allow(''),
    shipperAddress: Joi.string()
      .default('')
      .allow(''),
    destinationCountry: Joi.string().required(),
    recipient: Joi.string().required(),
    RUT: Joi.string()
      .default('')
      .allow(''),
    recipientPhoneNumber: Joi.string().required(),
    recipientEmail: Joi.string()
      .email()
      .default('')
      .allow(''),
    region: Joi.string()
      .default('')
      .allow('')
      .required(),
    province: Joi.string()
      .default('')
      .allow('')
      .required(),
    comuna: Joi.string()
      .default('')
      .allow('')
      .required(),
    address: Joi.string().required(),
    weight: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    height: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    length: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    width: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    value: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    quantity: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    description: Joi.string()
      .default('')
      .allow(''),
  },
});

export const orderPostListValidator = celebrate({
  body: Joi.array().items(
    Joi.object({
      MAWB: Joi.string()
        .max(50)
        .default('')
        .allow(''),
      containerNumber: Joi.string()
        .default('')
        .allow(''),
      trackingNumber: Joi.string().required(),
      shipper: Joi.string()
        .default('')
        .allow(''),
      shipperPhoneNumber: Joi.string()
        .default('')
        .allow(''),
      shipperAddress: Joi.string()
        .default('')
        .allow(''),
      destinationCountry: Joi.string().required(),
      recipient: Joi.string().required(),
      RUT: Joi.string()
        .default('')
        .allow(''),
      recipientPhoneNumber: Joi.string().required(),
      recipientEmail: Joi.string()
        .email()
        .default('')
        .allow(''),
      region: Joi.string()
        .default('')
        .allow('')
        .required(),
      province: Joi.string()
        .default('')
        .allow('')
        .required(),
      comuna: Joi.string()
        .default('')
        .allow('')
        .required(),
      address: Joi.string().required(),
      weight: Joi.number()
        .positive()
        .allow(0)
        .default(0),
      height: Joi.number()
        .positive()
        .allow(0)
        .default(0),
      length: Joi.number()
        .positive()
        .allow(0)
        .default(0),
      width: Joi.number()
        .positive()
        .allow(0)
        .default(0),
      value: Joi.number()
        .positive()
        .allow(0)
        .default(0),
      quantity: Joi.number()
        .positive()
        .allow(0)
        .default(0),
      description: Joi.string()
        .default('')
        .allow(''),
    }),
  ),
});

export const orderPutByIdValidator = celebrate({
  params: {
    id: Joi.number()
      .integer()
      .positive()
      .required(),
  },
  body: {
    id: Joi.number()
      .integer()
      .positive(),
    MAWB: Joi.string()
      .max(50)
      .default('')
      .allow(''),
    containerNumber: Joi.string()
      .default('')
      .allow(''),
    trackingNumber: Joi.string().required(),
    shipper: Joi.string()
      .default('')
      .allow(''),
    shipperPhoneNumber: Joi.string()
      .default('')
      .allow(''),
    shipperAddress: Joi.string()
      .default('')
      .allow(''),
    destinationCountry: Joi.string().required(),
    recipient: Joi.string().required(),
    RUT: Joi.string()
      .default('')
      .allow(''),
    recipientPhoneNumber: Joi.string().required(),
    recipientEmail: Joi.string()
      .email()
      .default('')
      .allow(''),
    region: Joi.string()
      .default('')
      .allow('')
      .required(),
    province: Joi.string()
      .default('')
      .allow('')
      .required(),
    comuna: Joi.string()
      .default('')
      .allow('')
      .required(),
    address: Joi.string().required(),
    weight: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    height: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    length: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    width: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    value: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    quantity: Joi.number()
      .positive()
      .allow(0)
      .default(0),
    description: Joi.string()
      .default('')
      .allow(''),
  },
});

export const orderPutByIdWithZoneIdValidator = celebrate({
  params: {
    id: Joi.number()
      .integer()
      .positive()
      .required(),
  },
  body: {
    zoneId: Joi.number()
      .integer()
      .positive()
      .allow(0)
      .allow(-1)
      .required(),
  },
});

export const orderDelByIdValidator = celebrate({
  params: {
    id: Joi.number()
      .integer()
      .positive()
      .required(),
  },
});
