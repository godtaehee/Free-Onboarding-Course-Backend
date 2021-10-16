import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';
@Injectable()
export class UtilsHelper<T> {
  getDeepCloneObject(target: T) {
    return _.cloneDeep(target);
  }
}
