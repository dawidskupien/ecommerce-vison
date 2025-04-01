import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalCurrencySelect extends Schema.Component {
  collectionName: 'components_select_currency_selects';
  info: {
    displayName: 'currencySelect';
    description: '';
  };
  attributes: {
    currency: Attribute.String & Attribute.Required;
    countryImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

export interface HeaderAnnouncments extends Schema.Component {
  collectionName: 'components_header_announcments';
  info: {
    displayName: 'announcements';
    description: '';
  };
  attributes: {
    announcement: Attribute.String;
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface HeaderLinks extends Schema.Component {
  collectionName: 'components_header_links';
  info: {
    displayName: 'links';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    sublinks: Attribute.Component<'header.sublinks', true>;
  };
}

export interface HeaderSocials extends Schema.Component {
  collectionName: 'components_header_socials';
  info: {
    displayName: 'Socials';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    url: Attribute.String;
  };
}

export interface HeaderSublinks extends Schema.Component {
  collectionName: 'components_header_sublinks';
  info: {
    displayName: 'sublinks';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
  };
}

export interface ProductAccordion extends Schema.Component {
  collectionName: 'components_product_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface ProductColor extends Schema.Component {
  collectionName: 'components_colors_colors';
  info: {
    displayName: 'Color';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    value: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface ProductCurrency extends Schema.Component {
  collectionName: 'components_currencies_currencies';
  info: {
    displayName: 'Price';
    description: '';
  };
  attributes: {
    value: Attribute.Decimal & Attribute.Required;
    currency: Attribute.Enumeration<['USD', 'PLN']> & Attribute.Required;
    discountedValue: Attribute.Decimal;
  };
}

export interface ProductLabel extends Schema.Component {
  collectionName: 'components_labels_labels';
  info: {
    displayName: 'Label';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ProductMaterial extends Schema.Component {
  collectionName: 'components_materials_materials';
  info: {
    displayName: 'Material';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface ProductVariant extends Schema.Component {
  collectionName: 'components_product_variants';
  info: {
    displayName: 'Variant';
    description: '';
  };
  attributes: {
    color: Attribute.Component<'product.color'>;
    material: Attribute.Component<'product.material'>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    variantId: Attribute.BigInteger;
  };
}

export interface ProductVendor extends Schema.Component {
  collectionName: 'components_product_vendors';
  info: {
    displayName: 'vendor';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    slug: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.currency-select': GlobalCurrencySelect;
      'header.announcments': HeaderAnnouncments;
      'header.links': HeaderLinks;
      'header.socials': HeaderSocials;
      'header.sublinks': HeaderSublinks;
      'product.accordion': ProductAccordion;
      'product.color': ProductColor;
      'product.currency': ProductCurrency;
      'product.label': ProductLabel;
      'product.material': ProductMaterial;
      'product.variant': ProductVariant;
      'product.vendor': ProductVendor;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
