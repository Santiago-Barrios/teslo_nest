import {
  ExecutionContext,
  InternalServerErrorException,
  createParamDecorator,
} from '@nestjs/common';
import { Request } from 'express';

export const RawHeaders = createParamDecorator(
  (data, ctx: ExecutionContext) => {
    const req: Request = ctx.switchToHttp().getRequest();
    if (!req) throw new InternalServerErrorException('Req not found (request)');
    return req.rawHeaders;
  },
);
