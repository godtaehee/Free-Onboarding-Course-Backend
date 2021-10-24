import { applyDecorators, Type } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { ApiResponseOptions } from '@nestjs/swagger/dist/decorators/api-response.decorator';

export const ApiCommonPaginationOkResponseForm = <TModel extends Type<any>>(
  model: TModel,
  options?: Omit<ApiResponseOptions, 'schema'>,
) => {
  return applyDecorators(
    ApiOkResponse({
      ...options,
      schema: {
        allOf: [
          {
            properties: {
              pageSize: {
                type: 'number',
                example: '10',
              },
              totalCount: {
                type: 'number',
                example: '200',
              },
              totalPage: {
                type: 'number',
                example: '5',
              },
              items: {
                type: 'array',
                items: {
                  $ref: getSchemaPath(model),
                },
              },
            },
          },
        ],
      },
    }),
  );
};
