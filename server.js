// @ts-ignore
import * as serverBuild from 'virtual:react-router/server-build';
import { createRequestHandler } from '@shopify/hydrogen';

export default {
  async fetch(request, env, executionContext) {
    try {
      const handleRequest = createRequestHandler({
        build: serverBuild,
        mode: process.env.NODE_ENV,
      });

      const response = await handleRequest(request, {
        env,
        executionContext,
        // Aquí pasamos el contexto de Shopify (Storefront API, etc.) si es necesario
      });

      return response;
    } catch (error) {
      console.error(error);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};
