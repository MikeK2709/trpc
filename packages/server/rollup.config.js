import { getRollupConfig } from '../../scripts/rollup';

const config = getRollupConfig({
  input: [
    'src/index.ts',
    'src/adapters/express.ts',
    'src/adapters/fastify/index.ts',
    'src/adapters/next.ts',
    'src/adapters/node-http/index.ts',
    'src/adapters/standalone.ts',
    'src/adapters/ws.ts',
    'src/rpc/index.ts',
    'src/observable/index.ts',
    'src/subscription.ts',
  ],
});

export default config;