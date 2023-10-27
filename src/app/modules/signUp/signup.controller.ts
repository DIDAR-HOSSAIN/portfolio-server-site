import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { SignUpService } from './signup.service';
import { ISignUp } from './signup.interface';

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { userData } = req.body;
    const result = await SignUpService.createUser( userData);

    sendResponse<ISignUp>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Sign up successfully!',
      data: result,
    });
  }
);

export const SignUpController = {
  createUser,
};
