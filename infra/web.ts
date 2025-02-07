export const myWeb = new sst.aws.Nextjs('MyWeb', {
  path: 'packages/web',
  buildCommand:
    'node /home/lillemagga/Koding/git/opennextjs-aws/packages/open-next/dist/index.js build',
});
