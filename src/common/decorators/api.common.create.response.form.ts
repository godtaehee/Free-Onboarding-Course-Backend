import { applyDecorators, Type } from '@nestjs/common';
import { ApiCreatedResponse, getSchemaPath } from '@nestjs/swagger';
import { ApiResponseOptions } from '@nestjs/swagger/dist/decorators/api-response.decorator';

export const ApiCommonCreateResponseForm = <TModel extends Type<any>>(
  model: TModel,
  options?: Omit<ApiResponseOptions, 'schema'>,
) => {
  return applyDecorators(
    ApiCreatedResponse({
      ...options,
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
