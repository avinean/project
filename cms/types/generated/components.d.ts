import type { Schema, Attribute } from '@strapi/strapi';

export interface TestTest extends Schema.Component {
  collectionName: 'components_test_tests';
  info: {
    displayName: 'test';
  };
  attributes: {
    resr: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'test.test': TestTest;
    }
  }
}
