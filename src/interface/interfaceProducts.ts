import { z } from "zod";
import {
    createdUserSchema,
    returnCreatedUser,
    loginUserSchema,
 
} from "../schema/schema.user";

export type TcreatedUser = z.infer<typeof createdUserSchema>;
export type TreturnCreateUser = z.infer<typeof returnCreatedUser>;
export type TLoginUser = z.infer<typeof loginUserSchema>;

export interface IemailRequest {
    to: string;
    subject: string;
    text: string;
}
