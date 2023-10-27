
import { ISignUp } from './signup.interface';
import { UserSignUp } from './signup.model';


const createUser = async (
  user: ISignUp
): Promise<ISignUp | null> => {
  // // default password
  const result = await UserSignUp.create(user);
  return result;


};

export const SignUpService = {
  createUser,
};
