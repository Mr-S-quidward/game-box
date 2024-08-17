export const makeActionType = (host: string, actionType: string): string => {
  return `[${host}]_${actionType}`;
}
