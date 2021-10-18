const seedConfig = {
  type: 'sqlite',
  database: 'wecode',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  seeds: ['src/database/seeds/**/*.seeds.ts'],
  factories: ['src/database/factories/**/*.factories.ts'],
};
export default seedConfig;
