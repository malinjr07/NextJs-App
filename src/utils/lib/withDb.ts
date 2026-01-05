const withDb = <T extends unknown[], R>(
  handler: (...args: T) => Promise<R>,
) => {
  return async (...args: T): Promise<R> => {
    console.log('Requesting Database connection via withDb handler...');
    return handler(...args);
  };
};

export default withDb;
