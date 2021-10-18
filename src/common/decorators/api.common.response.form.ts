import { applyDecorators, Type } from '@nestjs/common';
import { ApiCreatedResponse, getSchemaPath } from '@nestjs/swagger';

export const ApiCommonResponseForm = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiCreatedResponse({
      schema: {
        allOf: [
          {
            properties: {
              success: {
                type: `boolean`,
                example: 'true',
              },
              data: {
                $ref: getSchemaPath(model),
              },
            },
          },
        ],
      },
    }),
  );
};
