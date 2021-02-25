import express from 'express';
import { Router } from 'express';

import { expressSwagger } from '../lib';

const app: express.Application = express();
const router: Router = Router();

app.use(expressSwagger());
export default app;

router.get('/moredocs', expressSwagger({ routePrefix: false }));

app.use(router);

// istanbul ignore next
if (!module.parent) {
  app.listen(3000);
  console.log('listening on: http://localhost:3000/docs');
}
