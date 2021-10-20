import { PageRequest } from '../../common/abstract/page.request';

export class UserSearchRequest extends PageRequest {
  constructor() {
    super();
  }

  // 추후 검색 필터 데이터를 추가로 넣어도 됨 ex) id, email
}
