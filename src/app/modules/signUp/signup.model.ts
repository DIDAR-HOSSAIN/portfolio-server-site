/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { ISignUp, SignUpModel } from './signup.interface';
// import bcrypt from 'bcrypt';
// import config from '../../../config';

const SignUpSchema = new Schema<ISignUp, SignUpModel>(
  {
    name: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: 0,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// UserSchema.statics.isUserExist = async function (
//   id: string
// ): Promise<Pick<
//   IUser,
//   'id' | 'password' | 'role' | 'needsPasswordChange'
// > | null> {
//   return await UserSignUp.findOne(
//     { id },
//     { id: 1, password: 1, role: 1, needsPasswordChange: 1 }
//   );
// };

// UserSchema.statics.isPasswordMatched = async function (
//   givenPassword: string,
//   savedPassword: string
// ): Promise<boolean> {
//   return await bcrypt.compare(givenPassword, savedPassword);
// };

// User.create() / user.save()
// UserSchema.pre('save', async function (next) {
//   // hashing user password
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds)
//   );
//   next();
// });

export const UserSignUp = model<ISignUp, SignUpModel>('UserSignUp', SignUpSchema);
