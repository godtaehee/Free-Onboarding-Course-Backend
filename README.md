# [위코드 x 원티드] 백엔드 프리온보딩 선발 과제

[Github Repository Link](https://github.com/godtaehee/Free-Onboarding-Course-Backend)

## 목차

1. 기술스택
2. 자세한 애플리케이션 실행방법
3. 자세한 테스팅 실행방법
4. API 명세
5. 구현한 방법과 이유에 대한 간략한 내용

## 1. 기술스택

### Framework

- Nest.js

### Language

- TypeScript

### Database

- SQLite

### Testing

- Jest (Unit Test)
- Supertest (E2E Test)

### Tool

- faker (Dummy Data 생성)
- Bcrypt && JWT && Passport (인증, 인가 기능)
- Winston (Logging)
- Swagger (API 명세 생성)
- Prettier (코드 세이브시 코드를 가독성있게 정리해주기 위하여 사용)

## 2. 자세한 애플리케이션 실행방법
<details>
 <summary><strong>Command Line Interface</strong></summary>

Terminal 혹은 Cmd를 이용하여 실행해보겠습니다.

### 1. 해당 Repository를 Clone 받기 위해 Clone 받을 원하는 위치로 `cd` 명령어를 사용하여 이동해줍니다.

![Screen Shot 2021-10-21 at 9 51 31 PM](https://user-images.githubusercontent.com/44861205/138281033-2743a46a-fd6d-425c-b07c-a697964e166c.png)

### 2. 해당 Repository를 Clone 받습니다.

```shell
git clone https://github.com/godtaehee/Free-Onboarding-Course-Backend
```

![Screen Shot 2021-10-21 at 9 52 31 PM](https://user-images.githubusercontent.com/44861205/138281194-11fd356a-51e1-4d5f-a657-d619ceb9419e.png)

### 3. 해당 애플리케이션을 실행시킬 수 있는 폴더로 이동합니다.

![Screen Shot 2021-10-21 at 9 53 26 PM](https://user-images.githubusercontent.com/44861205/138281355-8b270486-9b05-4343-9586-15f0f5cb903d.png)

위와 같이 성공적으로 Clone받아오면 프로젝트 폴더로 이동합니다.

### 4. 애플리케이션 실행에 필요한 의존성 들을 설치해줍니다.

![Screen Shot 2021-10-21 at 9 56 16 PM](https://user-images.githubusercontent.com/44861205/138281907-41c529e0-6c17-48cd-9ba9-6982735a6721.png)

위와 같이 `npm i` 명령어를 이용하여 애플리케이션 실행에 필요한 의존성 들을 설치하실 수 있습니다. 설치 과정 중에서 찍히는 로그는 다를 수 있습니다.

### 5. 애플리케이션을 실행합니다.

![Screen Shot 2021-10-21 at 9 58 38 PM](https://user-images.githubusercontent.com/44861205/138282389-1aa3f175-6101-4703-a1a4-8c02f44785ac.png)

위와 같이 `npm run start` 명령어를 이용하여 애플리케이션을 실행시킬 수 있습니다. 애플리케이션이 성공적으로 실행이 되면 위 사진의 맨 아랫부분에 아래와 같은 로그가 찍히면 애플리케이션 실행은 성공한 것입니다.

> http://localhost:3000 에서 서버가 시작되었습니다. 애플리케이션의 API 문서는 http://localhost:3000/api 에서 확인하실수 있습니다.


### 6. API 명세 페이지에서 본격적으로 애플리케이션의 API를 사용할수 있습니다.

사용하시는 브라우저의 주소창에 `http://localhost:3000/api`를 입력하고 해당 페이지에 접속하면 아래와 같은 API 명세 문서를 확인하실 수 있습니다.

![Screen Shot 2021-10-21 at 10 08 48 PM](https://user-images.githubusercontent.com/44861205/138284110-cc88d0ce-9b1e-490d-9e7e-655c9df73975.png)

</details>

<details>
 <summary><strong>자신의 IDE</strong></summary>

### 1. 해당 Repository를 Clone 받기 위해 Clone 받을 원하는 위치로 `cd` 명령어를 사용하여 이동해줍니다.

![Screen Shot 2021-10-21 at 9 51 31 PM](https://user-images.githubusercontent.com/44861205/138281033-2743a46a-fd6d-425c-b07c-a697964e166c.png)

### 2. 해당 Repository를 Clone 받거나 Download ZIP을 통해 프로젝트 파일을 받습니다.

```shell
git clone https://github.com/godtaehee/Free-Onboarding-Course-Backend
```

1. `git clone` 명령어를 이용하는 경우

![Screen Shot 2021-10-21 at 9 52 31 PM](https://user-images.githubusercontent.com/44861205/138281194-11fd356a-51e1-4d5f-a657-d619ceb9419e.png)

2. `Download ZIP` 버튼을 이용하여 다운로드 받는 경우

![Screen Shot 2021-10-21 at 10 15 26 PM](https://user-images.githubusercontent.com/44861205/138285223-af985be3-6472-45f6-b70a-179c649f80ea.png)

### 2. 다운로드 받은 ZIP 파일의 압축을 풉니다.

![Screen Shot 2021-10-21 at 10 17 52 PM](https://user-images.githubusercontent.com/44861205/138285669-01ab36f9-03b8-40da-8eee-977f0bcd0ad6.png)

![Screen Shot 2021-10-21 at 10 18 42 PM](https://user-images.githubusercontent.com/44861205/138285822-79622df8-c050-4a42-b92a-313d7d980189.png)

### 3. 각자의 IDE로 프로젝트를 열어줍니다.

저는 `Webstorm` IDE를 사용하였습니다.

> `Webstorm` 사용자의 경우 Terminal에서 `webstorm <해당프로젝트 경로>` 명령어로도 프로젝트를 열수 있습니다.

![Screen Shot 2021-10-21 at 10 20 24 PM](https://user-images.githubusercontent.com/44861205/138286134-be5179f5-8b78-4878-a7dc-bc2d7925e27e.png)

### 4. 애플리케이션 실행에 필요한 의존성 들을 설치해줍니다.

![Screen Shot 2021-10-21 at 9 56 16 PM](https://user-images.githubusercontent.com/44861205/138281907-41c529e0-6c17-48cd-9ba9-6982735a6721.png)

자신의 IDE Terminal을 사용하여 위와 같이 `npm i` 명령어를 이용하여 애플리케이션 실행에 필요한 의존성들을 설치하실수 있습니다. 설치과정 중에서 찍히는 로그는 다를수 있습니다.

### 5. 애플리케이션을 실행합니다.

![Screen Shot 2021-10-21 at 9 58 38 PM](https://user-images.githubusercontent.com/44861205/138282389-1aa3f175-6101-4703-a1a4-8c02f44785ac.png)

위와 같이 `npm run start` 명령어를 이용하여 애플리케이션을 실행시킬 수 있습니다. 애플리케이션이 성공적으로 실행이 되면 위 사진의 맨 아랫부분에 아래와 같은 로그가 찍히면 애플리케이션 실행은 성공한 것입니다.

> http://localhost:3000 에서 서버가 시작되었습니다. 애플리케이션의 API 문서는 http://localhost:3000/api 에서 확인하실 수 있습니다.


### 6. API 명세 페이지에서 본격적으로 애플리케이션의 API를 사용할 수 있습니다.

사용하시는 브라우저의 주소창에 `http://localhost:3000/api`를 입력하고 해당 페이지에 접속하면 아래와 같은 API 명세 문서를 확인하실 수 있습니다.

![Screen Shot 2021-10-21 at 10 08 48 PM](https://user-images.githubusercontent.com/44861205/138284110-cc88d0ce-9b1e-490d-9e7e-655c9df73975.png)

</details>

## 3. 자세한 테스팅 실행방법


<details>
 <summary><strong>Unit Test</strong></summary>

![Screen Shot 2021-10-24 at 4 53 34 PM](https://user-images.githubusercontent.com/44861205/138585452-a60b2f01-1060-495b-bc61-1b653e2db425.png)


위의 사진과 같이 `npm run test`를 이용하여 Unit Testing을 진행하실 수 있습니다.

총 43개의 `Unit Test Code`를 작성하였고 애플리케이션의 `ProtoType`을 만들 때까지는 TDD(Test-driven development)로 개발을 진행하였습니다.

후에 로직 변경 등의 이유로 테스트 코드를 다시 수정하거나 작성하여 개발도 진행하였습니다.

테스트 코드를 작성한다고 오류와 버그가 일어나지 않는 것은 아니지만, 개발하면서 많은 디테일한 부분까지 Unit Test 덕분에 챙겨갈 수 있었습니다.

총 7개의 `Suite`가 있습니다.

- `Auth`
  - AuthController
    - 회원가입과 로그인 시 요청으로 들어오는 정보의 유효성을 검사해주는 `Validation Pipe`, 요청 성공 시 어떠한 응답을 할 것인지에 대한 테스트를 진행하였습니다.
  - AuthService
    - `bcrypt`를 이용한 비밀번호 암호화 로직을 faker와 mocking을 이용하여 진행했으며, 로직이 성공했을 때 어떠한 응답을 반환해줄 것인지에 대한 테스트를 진행하였습니다.

- `Board`
  - BoardsController
    - 게시글의 생성, 조회, 수정, 삭제가 성공했을 때 어떠한 응답을 주며, 요청으로 받은 게시글의 아이디 혹은 유저의 아이디가 음수인지에 대한 `Validation Pipe` 테스트를 진행하였습니다.
  - BoardsService
    - Pagination을 사용하는 게시글의 API에서 어떠한 응답을 줘야 하는지, 게시글의 데이터를 다루는 도중 예기치 못한 에러가 난다면 어떠한 에러를 던져줄지에 대한 테스트를 진행하였습니다.
  - BoardsQueryRepositoy
    - 커버링 인덱스의 적용 유무를 기준으로 성능을 측정하는 테스트를 진행하였습니다. 

- `User`
  - UsersController
    - Auth, Board와 마찬가지로 Controller(Route Handler) 계층의 테스트는 Validation Pipe 혹은 어떠한 응답을 반환할지에 대한 테스트가 주를 이루었습니다. 
  - UsersService
    - BoardsService와 비슷하게 Pagination API의 응답과 에러핸들링에 대한 테스트를 진행하였습니다.

</details>

<details>
 <summary>
    <strong>E2E Test</strong>
</summary>

![Screen Shot 2021-10-21 at 10 36 59 PM](https://user-images.githubusercontent.com/44861205/138289053-c10962e9-3fef-43a4-b043-d819e45a2656.png)

위의 사진과 같이 `npm run test:e2e`를 이용하여 E2E Testing을 진행하실 수 있습니다.

총 10개의 `E2E Test Code`를 작성하였고 애플리케이션의 기반이 `Swagger`와 `Postman`을 이용하여 수동으로 API를 테스트하는 것이 상당한 시간이 걸릴 때부터 E2E Testing을 적극적으로 활용했습니다.

`CQRS Pattern`을 프로젝트 내에 적용하여 조회(Query)와 명령(Command)을 나누어 각각의 Database에 실제 접근하는 Repository도 나누어 개발을 진행했습니다. 이렇다 보니 E2E Test 또한 나누어 진행하게 됐습니다.

- `app.query.e2e-spec.ts`
  - 조회(Query)만 하는 E2E Test를 다루고 있습니다.

- `app.e2e-spec.ts`
  - `회원가입` - `로그인` - `게시글 생성` - `게시글 조회` - `게시글 Pagination을 이용하여 조회` - `게시글 수정` - `게시글 삭제` 순서로 한 사이클 테스트를 진행하였습니다. 
  - 테스트 전후로 트랜잭션 처리를 이용하여 E2E 테스트를 모두 마치고 나면 `testwecode`의 이름을 가진 Test Database에 데이터를 저장하지 않게 했습니다. 
  - `TypeORM` 내에서 Schema를 Drop 할 수 있는 명령어를 만들 수 있지만 그렇게 되면 수동으로 진행해야 하는 일이 하나 더 생겨서 E2E 테스트가 끝나기 전후로 Transaction Start와 RollBack을 이용했습니다.

- `app.command.e2e-spec.ts`
  - 조회(Query)를 제외한 명령(Command)을 이용한 API를 Testing 하였습니다.
  - Cycle Testing과 같이 데이터베이스에 Test가 끝나고 데이터가 저장되지 않게 Rollback 처리를 진행했습니다.

</details>

## 4. API 명세

총 10개의 API를 이용하실수 있습니다.

각각의 API는 해당 API에 알맞은 Request / Response에 대한 정보를 포함합니다.

![Screen Shot 2021-10-21 at 10 08 48 PM](https://user-images.githubusercontent.com/44861205/138284110-cc88d0ce-9b1e-490d-9e7e-655c9df73975.png)

### In-Memory Database 확인용

> 애플리케이션을 직접 개발한 제 입장에서 보면 어느 API를 어떠한 순서로 실행해야 알고 있고 해당 데이터가 어떠한 데이터인지 명확하게 알 수 있지만 사용자 입장에서 생각을 해보니 In-Memory DB를 GUI 환경에서도 물론 볼 수 있지만 채점환경은 바로바로 애플리케이션에서 데이터에 대한 정보를 알 수 있어야 할 것 같아서 따로 3개의 API를 추가로 만들게 되었습니다.

사실 해당 API는 실제 서비스의 API하고는 거리가 있습니다. 애플리케이션이 커지면 그만큼 민감한 데이터 정보(password)들을 포함하고 있을 확률이 높습니다.

물론 password가 bcrypt로 암호화되어서 회원가입 후 비밀번호를 다시 발급받는 API가 있지 않으면 비밀번호를 찾을 방법은 없습니다.

어디까지나 채점자분들의 편의를 위해서 만든 API이며 실제 배포환경에서는 당연히 API 명세에서도 제거하여 외부에 노출하지 않을 예정입니다. 

제가 생각했던 해당 API들의 사용 목적은 아래와 같습니다.

- `[GET] /users/{userId}`
  - 회원가입 후 실제 회원가입이 이루어졌는지 확인한다.
  - 게시글 작성 후 실제로 해당 유저가 작성한 게시글로 데이터가 저장되었는지 확인한다.
- `[GET] /users?page&limit`
  - 위의 API를 이용하려면 user의 Id 값이 있어야 하는데 그것마저 잃어버렸을 때 사용할 수 있습니다.
  - 최신 -> 과거순으로 정렬된 모든 유저의 limit 개의 정보를 JSON 형태로 반환합니다.
- `[GET] /boards/user`
  - user의 정보는 필요 없으며, user가 작성한 게시글의 정보만 응답받기 위해서 사용합니다.

해당 3개의 API가 채점하는데 조금 더 편한 환경을 제공하기를 바랍니다.

그 외의 모든 API는 서버 실행 시 이용 가능한 명세서에 자세하게 설명이 되어있습니다.

해당 문서는 Swagger로 만들어져있으며 애플리케이션 실행 후 http://localhost:3000/api 에서 확인하실 수 있습니다.

## 5. 구현한 방법과 이유에 대한 간략한 내용

### .env

- JWT_SECRET_KEY
  - JWT을 만들기 위한 SECRET_KEY가 있습니다.
- NODE_ENV
  - 해당 값에 따라 Database를 다르게 사용할 수 있습니다. `typeorm-seeding`을 이용하여 시드 데이터들을 넣거나 E2 E 테스트를 진행할 때 실제 배포환경의 데이터베이스가 아닌 테스트환경의 데이터베이스를 이용하기 위해 사용하였으며 그 외에도 다양한 환경 값에 따라 다르게 적용해야 하는 부분에서 사용할 수 있습니다.
- PORT
  - 서버의 포트값입니다.

<hr/>

### package.json (typeorm-seeding)
```typescript
...
"seed:run": "ts-node ./node_modules/typeorm-seeding/dist/cli.js seed -n seedconfig.ts",
"seed:board": "ts-node ./node_modules/typeorm-seeding/dist/cli.js seed -n seedconfig.ts --seed CreateBoard",
"seed:user": "ts-node ./node_modules/typeorm-seeding/dist/cli.js seed -n seedconfig.ts --seed CreateUser"
...
```

해당 명령어는 `typeorm-seeding`을 이용하여 Dummy Data를 테스트 데이터베이스에 제가 원하는 만큼 넣을수 있게 해줍니다.

해당 명령어들은 `npm run seed:run`과 같이 사용할수 있으며 각 명령어에 대한 설명은 아래와 같습니다.

> `seed:run`: 유저 10명의 정보, 게시글 100개를 생성합니다.  
`seed:board`: 게시글 100개를 생성합니다.  
`seed:user`: 유저 10명의 정보를 생성합니다.


저는 testwecode 데이터베이스에 약 10만개, 100만개의 게시글을 생성하여 Pagination의 성능을 측정해보기위한 데이터 생성으로서 사용하였습니다.

성능 측정의 결과는 후의 Pagination부분에서 다루도록 하겠습니다.

유저 521명, 게시글 200개를 생성하여 단순 API를 테스트하기위해서도 사용했습니다.

#### typeorm-seeding 설정은 아래경로의 `seedConfig.ts`에서 확인하실수 있습니다.

```
📦 
├─ package.json
├─ seedConfig.ts // 해당 파일
```

#### seed와 factory에 관한 파일은 아래경로에 해당하는 폴더에 있습니다.

```
📦 
├─ .env
├─ .eslintrc.js
├─ seedConfig.ts
├─ src
│  ├─ database
│  │  ├─ factories
│  │  │  ├─ board.factories.ts // 해당 파일
│  │  │  └─ user.factories.ts // 해당 파일
│  │  └─ seeds
│  │     ├─ board.seeds.ts // 해당 파일
│  │     └─ user.seeds.ts // 해당 파일
```

#### Factory

```typescript
// board.factories.ts
import { define } from 'typeorm-seeding';
import { User } from '../../users/users.entity';
import * as faker from 'faker';

define(User, () => {
  const email = faker.internet.email();
  const nickname = faker.internet.userName();

  const user = new User();
  user.email = email;
  user.password = nickname;
  user.nickname = nickname;
  return user;
});

```

User 데이터를 어떻게 만들지를 정의해주는 Factory에서 password와 nickname이 같은 값을 갖게 했습니다.

패스워드는 한번 bcrypt로 hash 값이 되면 API 테스트를 하기위해서 결국 수동으로 제가 유저를 하나 만들어야 했습니다.

따라서 어떠한 계정으로도 우선 테스트가 가능하게 하기 위해 위와 같이 구현했습니다.

즉 유저의 password는 nickname과 같게됩니다.

#### Seed

Factory를 기반으로 만든 유저의 정보를 바탕으로 테스트용 데이터베이스에 데이터들을 생성해줍니다.

<hr/>


### AppModule

```typescript
// 코드 전문
// app.module.ts
... imports
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WinstonModule.forRootAsync({
      useFactory: () => ({
        level: 'debug',
        transports: [new winston.transports.Console()],
        silent: true,
        // silent: process.env.NODE_ENV === 'prod',
      }),
    }),
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.NODE_ENV === 'prod' ? 'wecode' : 'testwecode',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV === 'dev',
      keepConnectionAlive: true,
    }),
    AuthModule,
    BoardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

#### ConfigModule

```typescript
    ConfigModule.forRoot({
      isGlobal: true,
    }),
```

process.env 값을 글로벌하게 사용할수 있도록 설정해주었습니다.

#### WinstonModule

```typescript
WinstonModule.forRootAsync({
  useFactory: () => ({
    level: 'debug',
    transports: [new winston.transports.Console()],
    silent: true,
    // silent: process.env.NODE_ENV === 'prod',
  }),
}),
```

E2E Test를 했을때 `NODE_ENV`값은 `test`가 됩니다.

README의 `자세한 테스팅 실행방법`의 `E2E Test`에서의 예처럼 아무런 로깅없이 로깅이 무조건 적용되지 않게 과제 제출을 했지만 `NODE_ENV`값을 prod가 아닌 dev로 바꾸고 주석을 제거하면 정상적으로 Controller 계층에서 설정해놓은 로그가 출력이 됩니다. 

Nest.js의 기본 내장 로거도 충분한 편의성을 갖췄지만 Nest.js 공식문서에서도 조금 더 많은 로깅옵션을 이용하고싶다면 `Winston`과 함께 사용해도 된다고 적혀있어 `Winston`을 적용해 보았습니다.

<hr/>


### TypeOrmModule

```typescript
    TypeOrmModule.forRoot({
  type: 'sqlite',
  database: process.env.NODE_ENV === 'prod' ? 'wecode' : 'testwecode',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV === 'dev',
  keepConnectionAlive: true,
}),
```

typeorm을 사용하기위한 설정을 해주었습니다. `SQLite`를 사용하였으며 환경변수에 따라 데이터베이스의 사용이 다릅니다.

`synchronize`를 통해 Database의 컬럼 이름이 바뀌었을때 자동으로 적용시켜주었습니다. prod상태에서는 반드시 false값이 되어야합니다. 그렇지 않으면 모든 테이블이 Drop이 될 위험이 있습니다.

`keepConnectionAlive` 옵션을 이용하여 E2E 테스트시 Connection이 테스트할때 유지되도록 해주었습니다.

<hr/>


### AuthModule

```typescript
// 코드 전문
// auth.module.ts
...imports

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET_KEY,
        signOptions: {
          expiresIn: 60 * 60,
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UtilsHelper],
})
export class AuthModule {}
```

#### TypeOrmModule

```typescript
TypeOrmModule.forFeature([UsersRepository]),
```

UsersRepository를 Auth Domain영역 전체에서 사용하기 위해 import 해주었습니다.

#### PassportModule

```typescript
PassportModule.register({ defaultStrategy: 'jwt' }),
```

제 애플리케이션에서는 Passport의 jwt전략을 기본전략으로 사용하여 인증 / 인가 처리를 해줬습니다.

그외에 `local`, `kakao`등등의 많은 전략이 있습니다.

#### JwtModule

```typescript
JwtModule.registerAsync({
  useFactory: () => ({
    secret: process.env.JWT_SECRET_KEY,
    signOptions: {
      expiresIn: 60 * 60,
    },
  }),
}),
```

과제를 진행함에 있어서 당황스러웠던 부분입니다.

`JwtModule.register`를 통하여 처음에는 동기적으로 JwtModule을 register해주었는데

`JwtService`의 `signin` method가 `process.env`의 값을 인식하지 못하여 undefined로 읽어 `POST /auth/sign-in` API를 개발함에 있어 어려움이 있었습니다.

![Screen Shot 2021-10-22 at 2 02 00 AM](https://user-images.githubusercontent.com/44861205/138324027-91aacdb1-f7d8-451b-a0d3-358af8ddd517.png)

> why I use가 아닌 why should I~ 로 질문을 했어야했는데 과동기 형한테 이 부분을 체크받았습니다.
 
Nest.js의 공식 `Discord`를 이용하여 여쭤보았는데 Module에서 만들어진 환경값을 서비스에서 사용하기위해서 `registerAsync`와 `useFactory`를 이용해야했습니다.

> **Dynamic module**  
With static module binding, there's no opportunity for the `consuming module` to influence how providers from the `host module` are configured. Why does this matter? Consider the case where we have a general purpose module that needs to behave differently in different use cases. This is analogous to the concept of a "plugin" in many systems, where a generic facility requires some configuration before it can be used by a consumer. [링크](https://docs.nestjs.com/fundamentals/dynamic-modules#dynamic-modules)

정확히는 `Nest.js` 공식문서의 `Dynamic module`글의 일부를 발췌해서 이해했습니다.

현재 제가 처한 상황은 `AppModule`에서 `ConfigModule`에서 `isGlobal`옵션을 통해 환경값을 글로벌하게 사용할수 있게 해주었지만 AppModule이 아닌 다른 모듈인 AuthModule에서 환경값을 사용하려고 했기 때문입니다.

위에서 consuming module이 AuthModule이 되고 host Module이 AppModule이 됩니다.

이러한 이유때문에 저는 환경값을 불러오지 못하는 상황을 마주했고 이것을 해결하기 위해 Dynamic하게 JwtModule의 설정을 해주었습니다.

<hr/>


### AuthController

```typescript
@Body(ValidationPipe) signUpDto: SignUpDto,
```

`class-validator` 패키지와 함께 사용하여 모든 Validation이 필요한 Route Handler는 `ValidationPipe`를 통하여 DTO를 검증할수 있습니다.

```typescript
@IsNotEmpty()
@IsEmail()
@Length(5, 50)
@Column({ unique: true })
email: string;
```

User Entity에서 일부 발췌한 소스코드입니다.

`@Length(5,50)`, `@IsEmail()`와 같은 데코레이터를 사용하여 `email` 프로퍼티의 제약조건을 줄수 있습니다.

모든 Route Handler는 해당 ValidationPipe를 사용하고 있으며 앞으로의 컨트롤러 설명에서는 해당 사항은 설명하지 않겠습니다.

```typescript
constructor(
  private authService: AuthService,
  @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
) {
  this.tag = '[AuthController]';
}
```

Controller에서는 Service와 Logger를 주입받아 사용하고 있습니다. 또한 각각 어떠한 부분에서 로그가 찍혔는지를 알기 쉽게 하기위해 tag를 사용했습니다. 로깅은 다음과 같이 사용했습니다.

```typescript
this.logger.debug(
  `${this.tag} ${new Date().toLocaleString()} '${
    signUpDto.email
  }' request sign-up`,
);
```

[태그] [로그가 찍힌 날짜 및 시간] [요청으로 들어온 DTO의 프로퍼티] [내용] 의 형식으로 로그 메시지를 구성하였습니다.

> @ApiOk~, @ApiCreate~ 와같은 데코레이터에 관해서는 Decorator 파트에서 설명하겠습니다.


<hr/>


### AuthService

```typescript
constructor(
  private usersRepository: UsersRepository,
  private jwtService: JwtService,
) {}
```

#### **Repository

Service 계층에서는 `**Repository` 혹은 `**QueryRepository`로 네이밍 되어있는 Repository들을 주입받습니다. 해당 AuthService에서는 조회(Query)부분이 없고 명령(Command)로직만을 사용하므로 `**Repository`를 주입받아 사용했습니다.

#### JwtService

JwtService의 sign메서드를 사용하여 JWT웹토큰을 발급받기위하여 주입받은 종속성입니다.

앞서 말씀드린 환경값을 불러오지 못한 이슈가 일어났던 부분입니다.

#### signIn Method

```typescript
async signIn(signInDto: SignInDto): Promise<SignInSuccessResponse> {
    const { email, password } = signInDto;
    const user: User = await this.usersRepository.signIn(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email };
      const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  } else throw new UnauthorizedException('logIn failed');
}
```

```typescript
const { email, password } = signInDto;
const user: User = await this.usersRepository.signIn(email);
```

email을 이용하여 유효한 유저인지를 판단합니다.

password는 이미 bcrypt를 통해 암호화가 되어있으므로 요청으로 들어온 password값과 Repository로 가져온 password의 값을 비교해줘야할 필요성이 있습니다.

```typescript
if (user && (await bcrypt.compare(password, user.password))) {
  const payload = { email };
  const accessToken = this.jwtService.sign(payload);

  return { accessToken };
} else throw new UnauthorizedException('logIn failed');
```
한줄한줄 설명드리자면,

```typescript
if (user && (await bcrypt.compare(password, user.password))) {
  const payload = { email };
  const accessToken = this.jwtService.sign(payload);
```

User가 존재하고 요청 DTO로 넘어온 password와 현재 Database에 저장된 유저 정보중 password를 `bcrypt.compare`함수로 비교를 합니다. 2개의 검증이 모두 통과가되면 본격적으로 다른 인증이 필요한 API들을 이용할 수 있도록 토큰을 발급합니다.

이때 JWT의 `PAYLOAD` 부분의 데이터를 유저의 고유값인 `email`로 설정해줌으로서 Token을 통한 인증이 필요한 API에서 해당 토큰의 PAYLOAD부분에 저장되어있는 email을 가지고 유저가 실제 존재하는지에 대한 여부를 판별합니다.

프론트가 없는 관계로 현재는 JSON형태로 그냥 반환하게 됬고 이 토큰을 Swagger 문서의 Authorization 에 등록을 해주면 `Bearer Header`에 토큰값을 저장하게 된것과 동일한 효과를 누릴수있습니다.

```typescript
} else throw new UnauthorizedException('logIn failed');
```

유저가 존재하지않거나 bcrypt로 hash화된 password가 서로 일치하지 않으면 `UnauthorizaedException`을 발생시킵니다.

<hr/>


### JwtStrategy

```typescript
// 코드 전문
// jwt.strategy.ts
...imports
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {
    super({
      secretOrKey: process.env.JWT_SECRET_KEY,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload) {
    const { email } = payload;
    const user: User = await this.usersRepository.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('요청을 처리할수 없습니다.');
    }
    return user;
  }
}
```

#### constructor

```typescript
import { ExtractJwt, Strategy } from 'passport-jwt';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
) {
  super({
          secretOrKey: process.env.JWT_SECRET_KEY,
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
});
}
```

`passport-jwt` 패키지 속의 Strategy를 매개변수로 받는 `PassportStrategy(Strategy)`를 상속함으로서

Strategy가 `jwt`방식일때 어떠한 옵션을 가지고 Strategy를 초기화 시켜주는지에 대한 로직을 작성합니다.

super의 생성자의 매개변수로 JWT를 생성할때 사용할 secretKey를 지정해주고 JWT토큰이 저장되어있는 곳이 Header의 `Bearer Token`임을 알려줍니다.

```typescript
  async validate(payload) {
    const { email } = payload;
    const user: User = await this.usersRepository.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('요청을 처리할수 없습니다.');
    }
    return user;
  }
```

후에 `BoardsController`에서 다루겠지만 `@UseGuards(AuthGuard('jwt'))` 데코레이터를 가진 Route Handler는 이 인증 / 인가를 처리할때 해당 validate 함수에서 처리를 하게됩니다.

![Screen Shot 2021-10-22 at 3 09 50 PM](https://user-images.githubusercontent.com/44861205/138401939-bc5f45d1-5e19-4dee-97de-dd2f7dfa0bad.png)

발급받으신 토큰을 [JWT 공식 사이트](https://jwt.io/)에서 사람이 알수있는 정보로 해석하실수 있으며 저희 애플리케이션에서 사용하는 토큰의 PAYLOAD부분은 위의 스크린샷과 같이 `email`을 가지고있으며 토큰 만료 시간을 1시간으로 해놓았기때문에 `exp`에서 `iat`를 뺀 값이 `3600`인것도 확인하실수 있습니다. 

해당 PAYLOAD에서 email을 destructuring하여 User의 실제 정보를 찾습니다.

유저의 정보가 있다면 `req.user`에 해당 validate함수가 유저의 정보를 저장해주며 그렇지 못할경우에는 에러를 발생시킵니다.

<hr/>


### BoardsController

모든 Controller들은 공통된 부분을 가지고있으며 이는 AuthController에서 설명을 드렸습니다.

이외의 BoardsController에서 가지고있는 부분을 설명 드리고자 합니다.

```typescript
// Boards Controller에 있는 Route Handler중 하나
  @Post('/create')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(CommonResponseFormInterceptor)
  createBoard(
    @GetUser() user,
    @Body(ValidationPipe) boardCreateDto: BoardCreateDto,
  ): Promise<CommonBoardResponse> {
    this.logger.debug(
      `${this.tag} ${new Date().toLocaleString()} userId: '${
        user.id
      }' request board-create`,
    );
    return this.boardsService.createBoard(user, boardCreateDto);
  }
```

#### @UseGuards(AuthGuard('jwt'))

앞서 `JwtStrategy`에서도 설명을 드렸지만 

> 어떠한 API가 `JWT`전략을 이용하며 요청 Header의 Bearer Token이 필요하다
 
라는 말은 게시글 생성, 수정, 삭제와 같은 인증/인가가 필요한 API를 말합니다.

게시글 생성은 회원가입을 마친 유저만 이용할수 있습니다.

따라서 JwtStrategy를 이용하여 해당 유저가 유효한 유저인지 Route Handler가 실행되기 이전에 검증합니다.

> Nest.js의 [Request LifeCycle](https://docs.nestjs.com/faq/request-lifecycle)에 Request의 생명주기가 자세히 순서대로 나와있습니다.

 무사히 검증을 성공하고 Request Body부분도 문제가 없다면 Service계층에게 작업을 넘깁니다.

#### @UseInterceptors(CommonResponseFormInterceptor)

해당 데코레이터를 가진 Route Handler는 항상 다음과 같은 응답 Body를 갖게됩니다.

```typescript
{
  success: true,
  data: ... some data
}
```

[알바로그](https://github.com/AlbalogTeam/AlbalogServer) 프로젝트를 진행하였을때 당시 협업을 하던 프론트 분들의 요청으로 매 요청의 응답으로서 위와같은 형태를 갖춰 보내주실것을 원하셨습니다.

`Express`를 처음으로 사용할 당시에는 매번 모든 요청에 저러한 형태의 데이터를 임의로 만들어 주었는데, Nest.js에서 `Interceptor`를 사용하여 응답 바디가 위와같은 형태를 갖게 처리해 주었습니다.

이렇게 하면 요청의 성공 여부를 프론트분들이 쉽게 판단할수 있다고 하셔서 이렇게 데이터를 구성하게 되었습니다.

하지만 알바로그 프로젝트분들과 현재 과제를 진행하면서 다시 이부분에대해서 여쭤봤을때는

`try ... catch`문으로 요청을 감싸면 알아서 성공여부를 알수있다고해서 굳이 필요없다라는 말씀을 해주셨습니다.

아직 위의 방식을 채택하시는 분도 있으실것같고 아니면 위의 방식을 사용하시지 않은 분이 있을것같습니다.

따라서 이 부분에 대해서는 협업을 하는 분과 충분한 협의를 통해 결정하면 될것 같습니다.

#### ValidationPipe 보충내용 && Pagination

```typescript
getAllBoard(limit: number, page: number) {
  return this.createQueryBuilder('boards')
      .innerJoinAndSelect('boards.user', 'user')
      .limit(limit)
      .offset((page - 1) * limit) 
      .getMany();
}
```

CQRS 패턴과 커버링 인덱스를 Pagination 처리에 적용하기 이전에 저는 다음과 같이 `limit`과 `page`를 QueryBduilder에 직접 매개변수로 넣어주어 코드를 작성하였습니다.

서비스가 커짐에 따라 Pagination을 할 Domain이 만약 Board뿐만 아니라 다른 도메인도 Pagination을 처리해줘야 한다면 limit과 page의 관리가 어려워질수가 있습니다.

따라서 저는 limit과 page의 관리에 대한 책임이 있고 이를 적절한 값으로 반환해주는 임무를 담당하는 객체를 생성했습니다.

```typescript
...imports
export abstract class PageRequest {
  @IsNotEmpty()
  @IsPositive()
  @Type(() => Number)
  page: number | 1;

  @IsNotEmpty()
  @IsPositive()
  @Max(50)
  @Type(() => Number)
  limit: number | 10;

  getOffset(): number {
    return (this.page - 1) * this.limit;
  }

  getLimit(): number {
    return this.limit;
  }

  getPage(): number {
    return this.page;
  }
}
```

해당 클래스는 limit과 page를 가지는 `PageRequest` 클래스입니다.

Pagination은 실제로 각각의 도메인의 정보량이 많아진다면 각각 도메인마다 필요한 기능이 될수 있습니다. 

따라서 해당 클래스를 `abstract` 클래스로 만들어주고 Pagination을 사용할 Domain에서 해당 클래스를 상속받는 또다른 클래스를 만들어 관리하는 방식을 택했습니다.

이렇게 하면 모든 Pagination을 처리해야하는 Domain에서 동일하게 limit값과 page값을 얻을 수 있으며 Pagination의 동일한 결과를 도출하는데 큰 역할을 합니다.

실제 사용 예시는 아래와 같습니다.


```typescript
// BoardSearchRequest
import { PageRequest } from '../../common/abstract/page.request';

export class BoardSearchRequest extends PageRequest {
  constructor() {
    super();
  }

  // 추후 검색 필터 데이터를 추가로 넣어도 됨 ex) title, content
}
```

```typescript
// UserSearchRequest
import { PageRequest } from '../../common/abstract/page.request';
import { ApiExtraModels } from '@nestjs/swagger';

@ApiExtraModels()
export class UserSearchRequest extends PageRequest {
  constructor() {
    super();
  }

  // 추후 검색 필터 데이터를 추가로 넣어도 됨 ex) id, email
}
```

해당 클래스들은 각각 Board, User에 대한 Pagination처리를 하기위한 DTO로서 사용됩니다.

추후 Board와 User의 도메인이 점점 더 커지고 그에 따른 요청 Body로 받아야 하는 추가적인 데이터가 있다면 따로 추가해주어도 됩니다.

> 예를들어 게시글의 제목을 기준으로 데이터를 가져옴과 동시에 Pagination처리를 하고싶다면 BoardSearchRequest에 title 프로퍼티를 추가하여 데이터를 추가적으로 요청할때 받아 처리해줍니다.

현재는 두 DTO는 단순히 limit과 page를 통해서만 페이지네이션처리를 하고 있습니다.



```typescript
// BoardsController의 Route Handler중 하나
 @Get('/')
  getAllBoard(
    @Query(new ValidationPipe({ transform: true })) query: BoardSearchRequest,
  ): Promise<Page<NotIncludeSensitiveInfoBoardResponse>> {
    return this.boardsService.getAllBoard(query);
  }
```

해당 Route Handler에서 아래와 같이 요청 쿼리로 들어온 값을 받아오고있습니다.


하지만 기존의 ValidationPipe와는 다른점이 있습니다.

```typescript
// 기존 방식
@Body(ValidationPipe) boardCreateDto: BoardCreateDto,
```

기존의 방식은 단순히 Body가 됬든 Query가 됬든 절대적인 이름만 맞다면 그 이름에 맞는 DTO의 속성에만 매칭을 시켜주었습니다.

```typescript
@Query(new ValidationPipe({ transform: true })) query: BoardSearchRequest,
```

하지만 위의 방식에서 BoardSearchRequest는 

abstract class인 `PageRequest`를 상속받고 있으므로 실제 프로퍼티간의 매칭 뿐만이 아니라 PageRequest에 정의된 모든 프로퍼티와 함수(getPage, getOffset, getLimit)를 가지고있는 실제 DTO객체가 되어야합니다.

따라서 transform 옵션을주어 이를 해결하였습니다.

만약 기존의 방식으로 하게된다면 Repository에서 `getPage`, `getOffset`, `getLimit`과 같은 함수는 `undefined`가 나오게 됩니다.

<hr/>


### BoardsService

저는 모든 비즈니스 로직은 Service계층, 모든 Database 접근 로직은 Repository에 책임을 맡겨 구분했습니다.

BoardsService의 로직들을 작성하는데 있었던 경험들을 아래에서 공유드리려고합니다.

#### Delete시 결과가 실패/성공 여부에 상관없이 같음

```typescript
async deleteBoard(
  userId: number,
  boardId: number,
): Promise<CommonBoardResponse> {
  await this.confirmValidBoard(userId, boardId);
  await this.boardsRepository.deleteBoard(boardId);
  return {
    boardId,
  };
}
```

SQLite와 TypeORM을 같이 사용하면 Delete시 아래와 같이실패를해도 성공을해도 똑같은 빈배열을 반환했습니다.

```typescript
{ generatedMaps: [], raw: [], affected: undefined }
```

이러한 문제는 아직 해결되지 않은것으로 보입니다. [Github Issue Link](https://github.com/typeorm/typeorm/issues/2415)

하지만 해당 게시글을 삭제하기전에 게시글의 존재유무에 대해서 알아야하며 이 게시글이 요청을 보낸 유저가 작성한 게시글인지를 판별해야했습니다. 

이러한 처리는 아래의 코드로 처리해주었습니다.

```typescript
await this.confirmValidBoard(userId, boardId);
```

이러한 검증덕분에 Delete를 안전하게 진행할수 있었습니다.

#### Pagination 비즈니스 로직

```typescript
  async getAllBoard(
    query: BoardSearchRequest,
  ): Promise<Page<NotIncludeSensitiveInfoBoardResponse>> {
    const [boards, count] = await this.boardsQueryRepository.getAllBoard(query);

    if (boards.length <= 0)
      throw new BadRequestException(
        `해당 ${query.offset}번째 페이지의 게시글이 존재하지 않습니다.`,
      );
    return this.paginationHelper.getPaginationItems<NotIncludeSensitiveInfoBoardResponse>(
      count,
      query.limit,
      boards.map((b) => new NotIncludeSensitiveInfoBoardResponse(b, b.user)),
    );
  }
```

한줄 한줄 설명을 드리겠습니다.

```typescript
const [boards, count] = await this.boardsQueryRepository.getAllBoard(query);
```

boardsQueryRepository를 통해 Pagination처리가 된 Board의 리스트를 가져옵니다.

이때 Board의 전체 개수와 함께 가져옵니다. QueryRepository의 Board를 가져오는 로직에 대해서는 `Repository` 챕터에서 설명드리겠습니다.

```typescript
if (boards.length <= 0)
  throw new BadRequestException(
    `해당 ${query.page}번째 페이지의 게시글이 존재하지 않습니다.`,
  );
```

이때 가져온 게시글이 없다면 `BadRequestException`을 발생시켰습니다. 

```typescript
return this.paginationHelper.getPaginationItems<NotIncludeSensitiveInfoBoardResponse>(
  count,
  query.limit,
  boards.map((b) => new NotIncludeSensitiveInfoBoardResponse(b, b.user)),
);
```

게시글의 리스트를 반환할때 게시글을 작성한 유저의 정보도 함께 반환됩니다. 하지만 이때 유저의 password와같은 정보는 불필요하다고 판단하여

민감한 정보를 포함하지않은 응답객체를 따로 `NotIncludeSensitiveInfoBoardResponse`로 만들어주었습니다.

또한 해당 부분은 원래 아래와 같이 어떠한 Helper에 도움없이 바로 반환하는 형태였습니다.

```typescript
return new Page<NotInclueSensitiveBoardInfoResponse>(
  count,
  query.limit,
  boards.map((b) => new NotInclueSensitiveBoardInfoResponse(b, b.user)),
);
```

하지만 Board뿐만이 아니라 User에대한 Pagination처리도 고려하게 되면서 이는 중복제거와 관리를 위해 Helper로 따로 관리해야할 필요성을 느끼게 됬습니다.

작성한 헬퍼는 아래와 같이 단순히 `Page<T>`타입의 객체를 반환해주는 함수를 가지고 있습니다.

```typescript
import { Injectable } from '@nestjs/common';
import { Page } from '../page';

@Injectable()
export class PaginationHelper<T> {
  getPaginationItems<T>(count: number, limit: number, items: T[]): Page<T> {
    return new Page<T>(count, limit, items);
  }
}
```

<hr/>

### BoardsQueryRepository

조회(Query)부분만을 담당하는 Repository입니다.

등록/수정/삭제 명령(Command)는 실제 Domain과 상당히 연관이 있지만

조회 같은경우에는 해당 API마다 노출시킬 데이터가 무엇인가에 대해 연관이 있습니다.

따라서 집중하는 영역이 다른 두개의 로직을 분리시킬 필요가 있었습니다.

이렇게 로직을 분리해놓으니 유지관리도 쉽고 가독성 측면에서도 훨씬 좋았습니다.


#### Pagination 처리 쿼리 성능 향상

```typescript
getAllBoard(limit: number, page: number) {
  return this.createQueryBuilder('boards')
    .innerJoinAndSelect('boards.user', 'user')
    .limit(limit)
    .offset((page - 1) * limit)
    .getMany();
}
```

처음 구현했던 Pagination 로직은 위와 같았습니다. 

하지만 이러한 방식은 데이터가 많아지고 유저가 클릭하는 페이지의 번호가 높을수록 상당히 느려진다는 단점이 있습니다.

특히 아래의 사진과 같이 게시글의 데이터 110만개를 기준으로 첫번째 페이지와 마지막페이지를 불러올때 1.5배정도의 시간 차이가 납니다.


![Screen Shot 2021-10-23 at 12 44 00 AM](https://user-images.githubusercontent.com/44861205/138484336-3963682c-44c9-4e78-b480-fbe2575b5bca.png)

이는 마지막 페이지의 데이터를 불러오기위해 그 결과로서 사용도 하지않을 데이터들을 거쳐서 마지막 페이지의 데이터에 도달하기 때문입니다.

이렇게 첫페이지의 50개의 글만 불러와도 1초에 가까운시간이 걸리는 해당 API는 사용하기에는 무리가 있을것 같습니다.

따라서 이러한 단점을 극복할수있는 방법으로 `커버링 인덱스`를 사용하였습니다.

> 커버링 인덱스란 인덱스가 쿼리의 질의를 모두 '커버'한 경우를 말합니다.

해당 과제의 데이터베이스의 경우 board의 id 혹은 user의 id가 인덱스이며, 이것으로만 만약 질의가 이루어져있다면 그것이 바로 커버링 인덱스를 사용한 경우라고 말할수 있습니다.

커버링 인덱스를 적용한 코드는 아래와 같습니다.

```typescript
async getAllBoard(query: BoardSearchRequest): Promise<[Board[], number]> {
  const coveringIndexQueryBuilder = this.createQueryBuilder('covers')
    .select('covers.id')
    .orderBy('covers.id', 'DESC')
    .limit(query.getLimit())
    .offset(query.getOffset());

  const count = await coveringIndexQueryBuilder.getCount();

  const boards = await this.createQueryBuilder('boards')
    .innerJoin(
      `(${coveringIndexQueryBuilder.getQuery()})`,
      'covers',
      'boards.id = covers.id',
    )
    .innerJoinAndSelect('boards.user', 'user')
    .select(['boards', 'user.userId', 'user.nickname'])
    .getMany();

  return [boards, count];
}
```

아래의 코드는 커버링 인덱스 쿼리를 먼저 만들기위한 작업입니다.

```typescript
this.createQueryBuilder('covers')
    .select('covers.id')
    .orderBy('covers.id', 'DESC')
    .limit(query.getLimit())
    .offset(query.getOffset());
```

해당 QueryBuilder의 질의는 아래와 같습니다.

```sqlite
SELECT
     "covers"."id" AS "covers_id"
FROM 
     "board" "covers"
WHERE 
      "covers"."deletedAt" IS NULL 
ORDER BY "covers"."id" DESC 
LIMIT 50
OFFSET 1
```

이처럼 1번 Row의 게시글부터 50개의 "게시글의 아이디"만을 가져오는 질의입니다.

이때 게시글의 아이디는 Primary Key로서 Index입니다. 해당 질의의 결과는 아래와 같이 게시글의 아이디로만 이루어져있습니다.

![Screen Shot 2021-10-24 at 12 31 38 AM](https://user-images.githubusercontent.com/44861205/138562573-47320b70-88df-45de-9985-bed36e40c6d0.png)

해당 커버링 인덱스의 결과를 얻었으니 이제 실제 저희가 가져와야하는 Board의 데이터를 해당 질의를 이용해 가져와야합니다. 

가져오기전, 총 페이지의 개수를 구하기위한 총 Row의 개수를 아래와 같이 구해줍니다.

```typescript
const count = await coveringIndexQueryBuilder.getCount();
```

> TypeORM은 Join과 같은 관계형성이 되어있지않으면 해당 테이블의 전체 Row의 개수를 Count합니다. `node_modules/typeorm/query-builder/SelectQueryBuilder.js`의 `SelectQueryBuilder.prototype.computeCountExpression`에서 확인하실수 있습니다. 처음에 coveringIndexQueryBuilder.getCount()의 결과값이 LIMIT개로 예상했지만 테이블의 전체 데이터의 개수를 가져와서 의문점이 생겨 찾아보았습니다.

이제 커버링 인덱스를 가지고 본격적으로 Board의 데이터를 추출해보겠습니다.

```typescript
  const boards = await this.createQueryBuilder('boards')
    .innerJoin(
      `(${coveringIndexQueryBuilder.getQuery()})`,
      'covers',
      'boards.id = covers.id',
    )
    .innerJoinAndSelect('boards.user', 'user')
    .select(['boards', 'user.userId', 'user.nickname'])
    .getMany();
```

Board테이블의 id와 커버링 인덱스의 결과에 있는 id가 같은 Board의 게시글을 불러오면 

커버링 인덱스의 결과는 이미 Pagination처리가 되어있던 Board의 id가 있으므로 이와 같은 id를 가지는

Board의 데이터를 가져오면 됩니다.

또한 유저의 정보가 필요하므로 커버링 인덱스와 Board의 조인결과를 바탕으로 User와 Join을 합니다.

이렇게 커버링 인덱스를 적용하여 Pagination처리를 마무리했습니다. 그럼 이제 성능에 대해서 테스트해보겠습니다.


### 게시글 데이터 600만개 기준

> 들어가기에 앞서 저는 성능 테스트를 하기위해 실제 SQLite에 쿼리를 날려봤고, console.time을 이용한 시간측정, QueryRepository의 실제 테스트코드 작성을하여 총 3가지의 방법으로 성능 테스트를 진행해 보았습니다. 이때 QueryRepository의 실제 테스트코드로의 테스트가 console.time을 이용한 테스트보다 월등하게 빨랐습니다. 
 
> 예를들어 실제 API호출시는 커버링 인덱스 적용의 전과 후가 100배의 성능이 차이가 났는데 테스트환경에서는 최대 10배밖에 차이가 나지 않았습니다. 이 점을 이상하게 여겨 많은 현업에 계신분들께 여쭤봤지만 마땅한 해결책을 얻지 못해 아무래도 실제 개발환경보다는 조금 더 가벼운 환경이기때문으로 추측을 하고 있습니다. 
 
> 만약 제가 실무에서 이러한 상황을 마주친다면 테스트코드의 결과로 10배정도의 성능향상을 생각해 실제 개발이나 운영환경에서는 100배정도의 성능향상이 일어난다고 생각하니 더더욱 "성능측정에 있어서는" 테스트를 100% 맹신하는것은 옳지 못한것이라고 생각을 하게 됬습니다. 10배정도의 성능향상이 일어나 그에 맞게 리소스를 설정해놓았는데 실제로는 100배의 성능향상을 이끌어내서 준비한 리소스의 낭비가 일어날수 있게될것 같다고 생각했기 때문입니다. 이 부분은 추후 Jest가 아닌 Mocha를 통한 테스트로 다시 해볼예정입니다. 많은 원인을 생각해보다가 결국 테스트 프레임워크의 문제인가에 까지 도달하게 됬습니다.



### SQLite Query Execute

> 사진을 클릭하시면 더 자세하게 보실수 있습니다.

#### 먼저 커버링 인덱스를 적용하지않은 1번 페이지의 50개를 가져오는 쿼리의 실행결과입니다.

![Screen Shot 2021-10-24 at 12 54 46 AM](https://user-images.githubusercontent.com/44861205/138563239-e6bc440a-1bdc-48c4-8ec5-5dbe59b98682.png)

`9ms`가 소요됬습니다.

#### 커버링 인덱스를 적용하고 1번 페이지의 50개를 가져오는 쿼리의 실행결과입니다.

![Screen Shot 2021-10-24 at 12 53 00 AM](https://user-images.githubusercontent.com/44861205/138563194-42810374-7b7a-4442-992e-59026597b2a8.png)

`8ms`가 소요 됬습니다.

위와 같이 1번 페이지의 데이터를 가져올때는 전혀 성능차이를 볼수없습니다.



#### 커버링 인덱스를 적용하지않고 1000번 페이지의 50개를 가져오는 쿼리의 실행결과입니다.

![Screen Shot 2021-10-24 at 2 03 18 AM](https://user-images.githubusercontent.com/44861205/138565301-c723f28b-f3f6-4734-a4c3-11cde70f9e62.png)

`41ms`가 소요 됬습니다.

#### 커버링 인덱스를 적용하고 1000번 페이지의 50개를 가져오는 쿼리의 실행결과입니다.

![Screen Shot 2021-10-24 at 1 02 00 AM](https://user-images.githubusercontent.com/44861205/138563421-9aa55a49-fe40-419b-8c1d-fb6e23595a7e.png)

`3ms`가 소요 됬습니다.

물론 `3ms`와 `41ms`모두 어마어마하게 짧은 시간이지만 수치상으로만 보면 13배차이가 납니다.

#### 커버링 인덱스를 적용하지않은 10만번 페이지의 50개를 가져오는 쿼리의 실행결과입니다.


![Screen Shot 2021-10-24 at 1 04 28 AM](https://user-images.githubusercontent.com/44861205/138563505-955ef91c-729e-40e8-af6b-903cc13233a0.png)

`148ms`가 소요 됬습니다. 

#### 커버링 인덱스를 적용하고 10만번 페이지의 50개를 가져오는 쿼리의 실행결과입니다.


![Screen Shot 2021-10-24 at 1 04 05 AM](https://user-images.githubusercontent.com/44861205/138563496-4dc3816f-904c-4581-95d3-58e071e05af0.png)

`58ms`가 소요 됬습니다.

성능 차이가 10배였는데 페이지가 증가할수록 성능차이가 3배로 줄었습니다.

사실 Index도 결국 데이터이기 때문에 인덱스만을 담고있는 데이터도 많으면 많아질수록 성능은 떨어지기 마련입니다.

따라서 데이터가 방대하다면 커버링 인덱스의 효과를 많이 보진 못합니다.

### console.time

```typescript
console.time('커버링 적용하지 않음');
const result = await this.createQueryBuilder('boards')
  .innerJoinAndSelect('boards.user', 'user')
  .orderBy('boards.boardId', 'DESC')
  .limit(query.getLimit())
  .offset(query.getOffset())
  .getMany();
console.timeEnd('커버링 적용하지 않음');

console.time('커버링을 적용');
const boards = await this.createQueryBuilder('boards')
  .innerJoin(
    `(${coveringIndexQueryBuilder.getQuery()})`,
    'covers',
    'boards.boardId = covers.covers_id',
  )
  .innerJoinAndSelect('boards.user', 'user')
  .select(['boards', 'user.userId', 'user.nickname'])
  .getMany();
console.timeEnd('커버링을 적용');
```

해당 코드를 이용하여 실험해보았습니다.

#### 1번 페이지, 50개의 게시글 데이터

![Screen Shot 2021-10-24 at 1 25 44 AM](https://user-images.githubusercontent.com/44861205/138564172-be25ec5f-3de7-48f3-a574-6ea5ae46fb8f.png)

#### 1000번 페이지, 50개의 게시글 데이터

![Screen Shot 2021-10-24 at 1 26 29 AM](https://user-images.githubusercontent.com/44861205/138564191-4ec2cb65-7266-4844-ba86-90867c967f8f.png)

#### 10만번 페이지, 50개의 게시글 데이터

![Screen Shot 2021-10-24 at 1 27 24 AM](https://user-images.githubusercontent.com/44861205/138564233-8ba732ad-b1bf-4dbb-bb65-dce9d9fb5304.png)

쿼리를 직접날렸을때와 같이 1000번째 페이지를 가져올때 가장 성능이 좋게 보입니다.

10만번때도 괜찮아보입니다.

### BoardsQueryRepository Test

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { BoardsQueryRepository } from './boards.query.repository';
import { AppModule } from '../app.module';

describe('boards.query.repository', () => {
  let queryRepository: BoardsQueryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    queryRepository = module.get<BoardsQueryRepository>(BoardsQueryRepository);
  });

  it('커버링 인덱스 적용하지 않은 경우', async () => {
    const boardsQueryBuilder = queryRepository
      .createQueryBuilder('boards')
      .innerJoin('boards.user', 'user')
      .orderBy('boards.boardId', 'DESC')
      .limit(50)
      .offset(1); // 숫자 사용자 정의대로 변경

    const result = await boardsQueryBuilder.getMany();

    expect(result).toBeTruthy();
  });

  it('커버링 인덱스 적용한경우', async () => {
    const coveringIndexQueryBuilder = queryRepository
      .createQueryBuilder('covers')
      .select(['covers.boardId'])
      .orderBy('covers.boardId', 'DESC')
      .limit(50)
      .offset(1); // 숫자 사용자 정의대로 변경

    const boards = await queryRepository
      .createQueryBuilder('boards')
      .innerJoin(
        `(${coveringIndexQueryBuilder.getQuery()})`,
        'covers',
        'boards.boardId = covers.covers_id',
      )
      .innerJoinAndSelect('boards.user', 'user')
      .select(['boards', 'user.userId', 'user.nickname'])
      .getMany();

    expect(boards).toBeTruthy();
  });
});
```

사실 앞서 `console.time` 과 코드가 전혀 다르지않습니다. 하지만 앞서 말씀드린것처럼 개발환경과 테스트환경은 분명한 차이가 있었습니다.

#### 1번 페이지, 50개의 게시글 데이터

![Screen Shot 2021-10-24 at 1 44 57 AM](https://user-images.githubusercontent.com/44861205/138564757-d36f3613-55ae-413d-8261-897ba5c4c8dd.png)


#### 1000번 페이지, 50개의 게시글 데이터

![Screen Shot 2021-10-24 at 1 49 44 AM](https://user-images.githubusercontent.com/44861205/138564885-7eedf10e-ba82-4896-855a-e3cd19a1cea9.png)


#### 10만번 페이지, 50개의 게시글 데이터

![Screen Shot 2021-10-24 at 2 10 39 AM](https://user-images.githubusercontent.com/44861205/138565523-85acd529-5d0a-420e-a15d-6723249c31b2.png)

결과에서 알수있듯이 테스트환경에서는 10만번 페이지일때 가장 성능이 좋았습니다.


### 해당 테이블의 전체 Row의 개수

지금까지는 실제 Board의 Row 50개만을 가져오는 것으로 계속 테스트를 진행했습니다.

![Screen Shot 2021-10-24 at 2 17 00 AM](https://user-images.githubusercontent.com/44861205/138565709-fcdceecd-aec7-467c-be56-f01b61ec1e2b.png)

앞서 설명드린것처럼 이렇게 1페이지의 50개 데이터를 가져올때 무려 1초에 가까운 시간이 걸렸습니다.

하지만 1페이지의 데이터를 가져올때 30ms가 넘는경우는 없었습니다. 그럼 나머지 `970ms`은 어디갔을까요 ?

사실 Board의 게시글 50개 가져오는것은 앞서 보셨듯이 그리 오래걸리는 연산이 아닙니다.

문제는 페이지의 총 개수를 계산하기위해서 Board테이블의 전체 Row의 수를 가져온다는 것입니다.

이 경우가 Pagination API에서 대부분의 시간을 잡아먹습니다.

```typescript
async getAllBoard(query: BoardSearchRequest): Promise<[Board[], number]> {
  const coveringIndexQueryBuilder = this.createQueryBuilder('covers')
    .select('covers.id')
    .orderBy('covers.id', 'DESC')
    .limit(query.getLimit())
    .offset(query.getOffset());

  const count = await coveringIndexQueryBuilder.getCount();

  const boards = await this.createQueryBuilder('boards')
    .innerJoin(
      `(${coveringIndexQueryBuilder.getQuery()})`,
      'covers',
      'boards.id = covers.id',
    )
    .innerJoinAndSelect('boards.user', 'user')
    .select(['boards', 'user.userId', 'user.nickname'])
    .getMany();

  return [boards, count];
}
```

이 부분에서 저희는 `count`를 구해줬습니다. 페이지의 총 개수를 알기위해서입니다.

![Screen Shot 2021-10-24 at 2 36 31 AM](https://user-images.githubusercontent.com/44861205/138566227-5f96054f-01a9-46cf-ad40-4f085b1ad673.png)

많은 사용자는 첫페이지말고는 잘 이용하지 않은 경우가 많습니다 물론 여기서는 그렇지 않은 경우도 분명히 있습니다.

이렇게 첫번째 페이지의 데이터 50개를 요청했을때 600만개 데이터 기준으로 한개의 API가 1.588초가까이 시간이 소요되고 그중에 전체 Row의 개수를 구하는데만 1.577초를 사용합니다. 즉, 게시글을 실제 읽어오는건 0.011초밖에 되지 않습니다. 그렇다면 첫페이지에대한 요청은 실제 카운트를 하지않고 응답을 하는것으로 로직을 구성하면 더 빠르게 정보를 제공할수 있을것 같습니다. 구현 코드는 아래와 같습니다.

```typescript
async getAllBoard(query: BoardSearchRequest): Promise<[Board[], number]> {
  // 실제 구현부분
  const paginationBoards = this.getPaginationBoards(
    query.getOffset(),
    query.getLimit(),
  );

  if (query.getOffset() === 0) {
  const fixedPageCount = 10 * query.getLimit();
  return [await paginationBoards, fixedPageCount];
}

const totalCount = await this.createQueryBuilder('covers')
  .select(['covers.boardId'])
  .getCount();

if (totalCount > query.getOffset()) {
  return [await paginationBoards, totalCount];
}

return [
  await this.getPaginationBoards(
    Math.floor(totalCount / query.getLimit()) * query.getLimit(),
    query.getLimit(),
  ),
  totalCount,
];
}

getCoveringIndexQueryBuilder(offset: number, limit: number) {
  // helper
  return this.createQueryBuilder('covers')
    .select(['covers.boardId'])
    .orderBy('covers.boardId', 'DESC')
    .limit(limit)
    .offset(offset);
}

getPaginationBoards(offset: number, limit: number) {
  // helper
  return this.createQueryBuilder('boards')
    .innerJoin(
      `(${this.getCoveringIndexQueryBuilder(offset, limit).getQuery()})`,
      'covers',
      'boards.boardId = covers.covers_id',
    )
    .innerJoinAndSelect('boards.user', 'user')
    .select(['boards', 'user.userId', 'user.nickname'])
    .getMany();
}
```


```typescript
if (query.getOffset() === 0) {
  const fixedPageCount = 10 * query.getLimit();
  return [await paginationBoards, fixedPageCount];
}
```

검색버튼을 누르면 첫번째 페이지를 보여주기때문에 요청으로 들어온 page값은 1입니다. 이때 getOffset은 요청으로들어온 page값에서 1을빼고 limit값을 곱해주기때문에 최종적으로 서버에서는 getOffset값이 0일때를 말하게됩니다.

따라서 이때는 총 Row의 개수를 getCount를 통해 가져오지 않으며 임의로 10페이지가 있다고 응답을 보냅니다.

이렇게 10페이지로 보내버리면 실제 데이터가 10페이지만큼(게시글 500개) 있을수도 있고 없을 수도 있는데요

만약 실제 게시글이 6번페이지(400개)밖에없는데 사용자가 8번페이지를 요청한다면 이때는 실제 페이지수를 계산하고 마지막 페이지에 있는 게시글 데이터와 함께 보내줘야합니다.


```typescript
const totalCount = await this.createQueryBuilder('covers')
  .select(['covers.boardId'])
  .getCount();

if (totalCount > query.getOffset()) {
  return [await paginationBoards, totalCount];
}

return [
  await this.getPaginationBoards(
    Math.floor(totalCount / query.getLimit()) * query.getLimit(),
    query.getLimit(),
  ),
  totalCount,
];
```

첫번째 페이지의 요청에 대한 응답을 받은 사용자는 총 페이지의 개수가 10개로 알고있습니다 하지만 10개는 임의로 제가 설정한 값이며 페이지의 개수는 10개 일수도 있고, 적을수도 있고, 클수도 있습니다.

따라서 첫페이지가 아닌 요청이 오면 그제서야 실제 Row의 개수를 Database로 부터 가져옵니다.

이때 offSet이 실제 Row의 개수보다 작다면 그대로 Board의 데이터를 응답해주면 되지만

반대의 경우라면 사용자입장에서는 존재하는 페이지인줄 알고 요청을보냈는데 막상 서버입장에서보면 없는 데이터이기때문에

제일 마지막페이지의 데이터를 반환해주는 작업을 해줘야합니다.

```typescript
    return [
  await this.getPaginationBoards(
    Math.floor(totalCount / query.getLimit()) * query.getLimit(),
    query.getLimit(),
  ),
  totalCount,
];
```

마지막 페이지의 첫 데이터의 Offset을 구하기위해 전체 데이터 개수에서 Limit값을 나누어 내림을합니다

내림한 값과 다시 Limit값을 곱하게 되면 마지막페이지의 첫 데이터의 Row의 번호를 알수 있습니다.

이 값을 Offset으로 설정하여 그 값으로부터 Limit개의 게시글 데이터를 불러오면됩니다.

이렇게 Pagination을 최적화하여 구해봤습니다.

사실 구현하면서 정말 더 많은 최적화 방법을 알게됬습니다.

게시글의 데이터를 가져오는 부분과 개수를 세는 API를 아예 따로 분리하여 프론트가 어떠한 API를 호출할지를 판단하는것입니다.

이렇게 하면 첫페이지에 한정짓지 않고 원하는 페이지까지는 카운트를 세지않고 빠르게 응답을 줄수있었습니다.

협업을 하는 클라이언트와, 회사정책에 따라 이러한 구현방법들이 달라질것같아서 다양한 시도를 미리 많이 해보는게 변화하는 상황에 잘 대처할수 있겠다라고 생각이 들었던 구현경험이였습니다.

<hr/>


### Custom Decorator

#### @GetUser

```typescript
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../../users/users.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
```

Nest는 HTTP Server Framework로 Express와 Fastify를 사용할수 있습니다.

이렇게 여러개의 HTTP Server Framework를 사용하는 Nest.js의 HTTP Server Framework는 변경 될수 있습니다.

만약 이미 Express로 개발을 했는데 Fastify로 바꿔야하는 상황이 온다면 서로 Request, Response등등의 객체들이 모두 다르기때문에 실제코드 및 심지어 작성해놓은 테스트 코드또한 모두 변경해야하는 일이 생길수 있습니다.

6이러한 일을 막기위해 현재의 @GetUser 데코레이터 처럼 Request의 User객체를 가져와서 실제 우리가 필요한 유저 정보만 반환해주는 커스텀 데코레이터를 만듬으로서 이러한 종속성 문제를 해결할수 있습니다.

#### @ApiCommon~ Decorator

```typescript
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
```

제가 앞서 `CommonResponseFormInterceptor`에 대해 설명드릴때 해당 Interceptor를 사용하는 모든 Route Handler는 다음과 같은 형태를 클라이언트에게 응답한다고 설명드렸습니다.

```typescript
{
  success: true,
  data: ... some data
}
```

이러한 응답형태에서 data Property에는 어떠한 데이터든 들어올수가 있습니다.

하지만 따로 Response로 정의된 객체도 없어 `@ApiExtraModels()`를 사용하여 Swagger의 Schema로 만들수도 없었고

임의로 Interceptor로 만든 형태에 불과했기때문에 직접 schema 옵션을 이용하여 매 라우터마다 schema를 정의해 줘야했습니다.

또한 Nest.js의 Swagger가 제네릭에 대한 Swagger 스키마를 지원하지 않은것 같습니다.

결국 매 라우터마다 아래와 같이 schema를 정의해줬지만 해당 소스코드는 너무 많은 줄을 차지하고 이것이 많아지면 많아질수록 Route Handler를 찾기 어려워졌습니다.

```typescript
    @ApiCreatedResponse({
      schema: {
        allOf: [
          {
            properties: {
              success: {
                type: `boolean`,
                example: 'true',
              },
              data: {
                $ref: NotIncludeSensitiveInfoBoardResponse,
              },
            },
          },
        ],
      },
    }),
```

따라서 처음의 예시와 같이 중복을 제거하고 좀더 효율적인 관리를 위해 data로 들어올 타입과 나머지 @ApixxxResponse의 옵션들을 인자로 받는 커스텀 데코레이터를 생성하여 처리했습니다.

해당 데코레이터 덕분에 많은 양의 중복을 제거하고 관리가 매우 쉬워졌습니다.


