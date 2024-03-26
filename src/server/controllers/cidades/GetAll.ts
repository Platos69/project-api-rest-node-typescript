import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';

interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}

export const getAllValidations = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().optional(),
        limit: yup.number().optional(),
        filter: yup.string().optional(),
    }))
}));

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    console.log(req.query.filter, req.query.page);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};