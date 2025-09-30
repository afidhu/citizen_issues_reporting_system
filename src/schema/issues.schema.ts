import { z } from "zod";

export const issueSchema = z.object({
  title: z.string().max(50, 'not more than 50').min(1, 'not less than 1'),
  description: z.string().min(1, 'description required'),
  categoryId: z.string( "must be int category" ).min(1,'must be from1'),
  userId: z.string("must be int user id" ).min(1,'from 1'),
});
