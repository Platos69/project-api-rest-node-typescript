import { RequestHandler } from 'express';
import { ObjectSchema, ValidationError } from 'yup';
import { StatusCodes } from 'http-status-codes';
export * from './Validation';

type TValidation = (field: 'body' | 'params' | 'header' | 'query', scheme: ObjectSchema<object>) => RequestHandler;

export const validation: TValidation = (field, scheme) => async (req, res, next) => {
    console.log('oi');
    try {
        await scheme.validate(req[field], { abortEarly: false });
        return next();
    } catch (err) {
        const yupError = err as ValidationError;
        const errors: Record<string, string> = {};

        yupError.inner.forEach(error => {
            if (error.path === undefined) return;
            errors[error.path] = error.message;
        });

        return res.status(StatusCodes.BAD_REQUEST).json({ errors });
    }
};