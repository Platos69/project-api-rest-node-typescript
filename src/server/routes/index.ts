import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from '../controllers';

const router = Router();

router.get(
    '/',
    (req, res) => {
        return res.send('Olá, Dev! Você está na página principal');
    });

router.post(
    '/teste',
    (req, res) => {
        return res.status(StatusCodes.UNAUTHORIZED).send(req.body);
    });


export { router };