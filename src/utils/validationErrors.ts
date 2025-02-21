import type { ZodError } from 'zod';
import type { Response } from 'express';

export const handleValidationError = (error: ZodError, res: Response) => {
  return res.status(400).json({
    message: 'Validation error.',
    errors: error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message
    }))
  });
};
