export const sum = (a: number, b: number):number => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export { YdmGlobalConfig, YdmChannelModel, YdmDashboard, YdmVideoModel } from './models/ydm/v1';