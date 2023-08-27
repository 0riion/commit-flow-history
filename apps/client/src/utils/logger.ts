import log from 'loglevel';
import { getEnv } from '../config';

const isDevEnvironment = getEnv().NEXT_PUBLIC_ENVIRONMENT === 'dev';
log.setLevel(isDevEnvironment ? log.levels.DEBUG : log.levels.INFO);

export default log;
