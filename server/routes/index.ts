export default [
  {
    method: 'GET',
    path: '/',
    handler: 'webhookController.index',
    config: {
      policies: [],
      auth: false
    },
  },
];
