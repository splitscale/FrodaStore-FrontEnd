export const logger = (msg: any) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('[DEBUG]: ', msg);
  }
};
