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

![Screen Shot 2021-10-21 at 10 30 08 PM](https://user-images.githubusercontent.com/44861205/138287918-745e1832-462e-4790-801c-be13c9a722ac.png)

위의 사진과 같이 `npm run test`를 이용하여 Unit Testing을 진행하실 수 있습니다.

총 41개의 `Unit Test Code`를 작성하였고 애플리케이션의 `ProtoType`을 만들 때까지는 TDD(Test-driven development)로 개발을 진행하였습니다.

후에 로직 변경 등의 이유로 테스트 코드를 다시 수정하거나 작성하여 개발도 진행하였습니다.

테스트 코드를 작성한다고 오류와 버그가 일어나지 않는 것은 아니지만, 개발하면서 많은 디테일한 부분까지 Unit Test 덕분에 챙겨갈 수 있었습니다.

총 6개의 `Suite`가 있습니다.

- `Auth`
  - AuthController
    - 회원가입과 로그인 시 요청으로 들어오는 정보의 유효성을 검사해주는 `Validation Pipe`, 요청 성공 시 어떠한 응답을 할 것인지에 대한 테스트를 진행하였습니다.
  - AuthService
    - `bcrypt`를 이용한 비밀번호 암호화 로직을 faker와 mocking을 이용하여 진행했으며, 로직이 성공했을 때 어떠한 응답을 반환해줄 것인지에 대한 테스트를 진행하였습니다.

- `Board`
  - BoardsController
    - 게시글의 생성, 조회, 수정, 삭제가 성공했을 때 어떠한 응답을 주며, 요청으로 받은 게시글의 아이디 혹은 유저의 아이디가 음수인지에 대한 `Validation Pipe` 테스트를 진행하였습니다.
  - BoardsService
    -  Pagination을 사용하는 게시글의 API에서 어떠한 응답을 줘야 하는지, 게시글의 데이터를 다루는 도중 예기치 못한 에러가 난다면 어떠한 에러를 던져줄지에 대한 테스트를 진행하였습니다.

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
- `[GET] /users?offset&limit`
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
  - 해당값에 따라 Database를 다르게 사용할수 있습니다. `typeorm-seeding`을 이용하여 시드 데이터들을 넣거나 E2E테스트를 진행할때 실제 배포환경의 데이터베이스가 아닌 테스트환경의 데이터베이스를 이용하기위해 사용하였으며 그 외에도 다양한 환경값에 따라 다르게 적용해야하는 부분에서 사용할수 있습니다.
- PORT
  - 서버의 포트값입니다.

### package.json (typeorm-seeding)

```javascript
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

유저 20명, 게시글 200개를 생성하여 단순 API를 테스트하기위해서도 사용했습니다.

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

```javascript
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

Factory를 기반으로 만든 유저의 정보를 바탕으로 실제 데이터베이스에 데이터들을 생성해줍니다.


### AppModule

```javascript
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

```javascript
    ConfigModule.forRoot({
      isGlobal: true,
    }),
```

process.env 값을 글로벌하게 사용할수 있도록 설정해주었습니다.

#### WinstonModule

```javascript
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

README의 `자세한 테스팅 실행방법`의 `E2E Test`에서의 예처럼 로깅이 무조건 적용되지 않게 과제 제출을 했지만 `NODE_ENV`값을 prod가 아닌 dev로 바꾸고 주석을 제거하면 정상적으로 로그 출력이 됩니다. 

Nest.js의 기본 내장 로거도 충분한 편의성을 갖췄지만 Nest.js 공식문서에서도 조금 더 많은 로깅옵션을 이용하고싶다면 `Winston`과 함께 사용해도 된다고 적혀있어 `Winston`을 적용해 보았습니다.

### TypeOrmModule

```javascript
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

### AuthModule

```javascript
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

```javascript
TypeOrmModule.forFeature([UsersRepository]),
```

UsersRepository를 Auth Domain영역 전체에서 사용하기 위해 import 해주었습니다.

#### PassportModule

```javascript
PassportModule.register({ defaultStrategy: 'jwt' }),
```

제 애플리케이션에서는 Passport의 jwt전략을 기본전략으로 사용하여 인증 / 인가 처리를 해줬습니다.

그외에 `local`, `kakao`등등의 많은 전략이 있습니다.

#### JwtModule

```javascript
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

Nest.js의 공식 `Discord`를 이용하여 여쭤보았는데 Module에서 만들어진 환경값을 서비스에서 사용하기위해서 `registerAsync`와 `useFactory`를 이용해야했습니다.

> **Dynamic module**  
With static module binding, there's no opportunity for the `consuming module` to influence how providers from the `host module` are configured. Why does this matter? Consider the case where we have a general purpose module that needs to behave differently in different use cases. This is analogous to the concept of a "plugin" in many systems, where a generic facility requires some configuration before it can be used by a consumer. [링크](https://docs.nestjs.com/fundamentals/dynamic-modules#dynamic-modules)

정확히는 `Nest.js` 공식문서의 `Dynamic module`글의 일부를 발췌해서 이해했습니다.

현재 제가 처한 상황은 `AppModule`에서 `ConfigModule`에서 `isGlobal`옵션을 통해 환경값을 글로벌하게 사용할수 있게 해주었지만 AppModule이 아닌 다른 모듈인 AuthModule에서 환경값을 사용하려고 했기 때문입니다.

위에서 consuming module이 AuthModule이 되고 host Module이 AppModule이 됩니다.

이러한 이유때문에 저는 환경값을 불러오지 못하는 상황을 마주했고 이것을 해결하기 위해 Dynamic하게 JwtModule의 설정을 해주었습니다.


