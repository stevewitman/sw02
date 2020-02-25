module.exports = {
  name: 'sw02',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sw02',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
