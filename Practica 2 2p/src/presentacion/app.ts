import { envs } from '../config/envs';
import { AppRoutes } from '../presentacion/routes';
import { Server } from '../presentacion/server';


(async()=>{
  main();
})();


function main() {

  const server = new Server({
    port: envs.PORT as number,
    public_path: envs.PUBLIC_PATH as string,
    routes: AppRoutes.routes,
  });

  server.start();
}