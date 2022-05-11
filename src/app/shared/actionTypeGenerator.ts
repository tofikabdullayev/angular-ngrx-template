interface ActionSagaTypes {
  start: string;
  complete: string;
  error: string;
}

export const actionTypeGenerator = (
  pageName: string,
  operation: string
): ActionSagaTypes => {
  return {
    start: `[${pageName}] operation`,
    complete: `[${pageName}] operation Complete`,
    error: `[${pageName}] operation Error`,
  };
};
