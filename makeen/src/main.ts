// npm
import { NestFactory } from '@nestjs/core';

// modules
import { AppModule } from './modules/app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
main();
