import { Router } from 'express';
import { userInfo } from 'os';
import product from './routes/products';
import services from './routes/services';
import user from './routes/user';
import role from './routes/role';


export default () => {
  const app = Router();
  product(app);
  services(app);
  user(app);
  role(app);
  

  return app;
};
