import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware/Validation';

interface ICidade {
    nome: string;
    estado: string;
}

interface IFilter {
    filter?: string;
}

export const createValidations = validation((getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(3),
    })),
    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().required().min(3)
    }))
}));

export const create: RequestHandler = async (req, res) => {
    const validatedData: ICidade | undefined = undefined;
    return res.send(`Nome: ${req.body.nome}<br>Estado: ${req.body.estado}<br>Filtrou por: ${req.query.filter}`);
};