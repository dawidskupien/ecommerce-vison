import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AnnouncementBar = {
  announcements?: Maybe<Array<Maybe<ComponentHeaderAnnouncments>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AnnouncementBarAnnouncementsArgs = {
  filters?: InputMaybe<ComponentHeaderAnnouncmentsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AnnouncementBarEntity = {
  attributes?: Maybe<AnnouncementBar>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AnnouncementBarEntityResponse = {
  data?: Maybe<AnnouncementBarEntity>;
};

export type AnnouncementBarInput = {
  announcements?: InputMaybe<Array<InputMaybe<ComponentHeaderAnnouncmentsInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  name: Scalars['String']['output'];
  products?: Maybe<ProductRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  products?: InputMaybe<ProductFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type Color = {
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type ComponentGlobalCurrencySelect = {
  countryImage: UploadFileEntityResponse;
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentGlobalCurrencySelectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentGlobalCurrencySelectFiltersInput>>>;
  currency?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentGlobalCurrencySelectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentGlobalCurrencySelectFiltersInput>>>;
};

export type ComponentGlobalCurrencySelectInput = {
  countryImage?: InputMaybe<Scalars['ID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHeaderAnnouncments = {
  announcement?: Maybe<Scalars['String']['output']>;
  backgroundColor?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentHeaderAnnouncmentsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHeaderAnnouncmentsFiltersInput>>>;
  announcement?: InputMaybe<StringFilterInput>;
  backgroundColor?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHeaderAnnouncmentsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHeaderAnnouncmentsFiltersInput>>>;
};

export type ComponentHeaderAnnouncmentsInput = {
  announcement?: InputMaybe<Scalars['String']['input']>;
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHeaderLinks = {
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  sublinks?: Maybe<Array<Maybe<ComponentHeaderSublinks>>>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ComponentHeaderLinksSublinksArgs = {
  filters?: InputMaybe<ComponentHeaderSublinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHeaderLinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHeaderLinksFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHeaderLinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHeaderLinksFiltersInput>>>;
  sublinks?: InputMaybe<ComponentHeaderSublinksFiltersInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderLinksInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sublinks?: InputMaybe<Array<InputMaybe<ComponentHeaderSublinksInput>>>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeaderSocials = {
  icon?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentHeaderSocialsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHeaderSocialsFiltersInput>>>;
  not?: InputMaybe<ComponentHeaderSocialsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHeaderSocialsFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderSocialsInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHeaderSublinks = {
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentHeaderSublinksFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentHeaderSublinksFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentHeaderSublinksFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentHeaderSublinksFiltersInput>>>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentHeaderSublinksInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentProductAccordion = {
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentProductColor = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type ComponentProductColorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductColorFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentProductColorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductColorFiltersInput>>>;
  value?: InputMaybe<StringFilterInput>;
};

export type ComponentProductColorInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentProductCurrency = {
  currency: Enum_Componentproductcurrency_Currency;
  discountedValue?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  value: Scalars['Float']['output'];
};

export type ComponentProductCurrencyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductCurrencyFiltersInput>>>;
  currency?: InputMaybe<StringFilterInput>;
  discountedValue?: InputMaybe<FloatFilterInput>;
  not?: InputMaybe<ComponentProductCurrencyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductCurrencyFiltersInput>>>;
  value?: InputMaybe<FloatFilterInput>;
};

export type ComponentProductCurrencyInput = {
  currency?: InputMaybe<Enum_Componentproductcurrency_Currency>;
  discountedValue?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type ComponentProductLabel = {
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ComponentProductLabelFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductLabelFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentProductLabelFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductLabelFiltersInput>>>;
};

export type ComponentProductLabelInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentProductMaterial = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ComponentProductMaterialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductMaterialFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentProductMaterialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductMaterialFiltersInput>>>;
};

export type ComponentProductMaterialInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentProductVariant = {
  color?: Maybe<ComponentProductColor>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  material?: Maybe<ComponentProductMaterial>;
  variantId?: Maybe<Scalars['Long']['output']>;
};

export type ComponentProductVariantFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductVariantFiltersInput>>>;
  color?: InputMaybe<ComponentProductColorFiltersInput>;
  material?: InputMaybe<ComponentProductMaterialFiltersInput>;
  not?: InputMaybe<ComponentProductVariantFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductVariantFiltersInput>>>;
  variantId?: InputMaybe<LongFilterInput>;
};

export type ComponentProductVariantInput = {
  color?: InputMaybe<ComponentProductColorInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  material?: InputMaybe<ComponentProductMaterialInput>;
  variantId?: InputMaybe<Scalars['Long']['input']>;
};

export type ComponentProductVendor = {
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type ComponentProductVendorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentProductVendorFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentProductVendorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentProductVendorFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
};

export type ComponentProductVendorInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedMetaSocial = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedSeo = {
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CurrencySelect = {
  Option?: Maybe<Array<Maybe<ComponentGlobalCurrencySelect>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CurrencySelectOptionArgs = {
  filters?: InputMaybe<ComponentGlobalCurrencySelectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CurrencySelectEntity = {
  attributes?: Maybe<CurrencySelect>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CurrencySelectEntityResponse = {
  data?: Maybe<CurrencySelectEntity>;
};

export type CurrencySelectInput = {
  Option?: InputMaybe<Array<InputMaybe<ComponentGlobalCurrencySelectInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentproductcurrency_Currency {
  Pln = 'PLN',
  Usd = 'USD'
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Filter = {
  colors?: Maybe<Array<Maybe<Color>>>;
  materials?: Maybe<Array<Maybe<Material>>>;
  price?: Maybe<Price>;
  vendors?: Maybe<Array<Maybe<Vendor>>>;
};

/** Union Type of all registered slug content types */
export type FindSlugResponse = CategoryEntityResponse;

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = AnnouncementBar | Category | ComponentGlobalCurrencySelect | ComponentHeaderAnnouncments | ComponentHeaderLinks | ComponentHeaderSocials | ComponentHeaderSublinks | ComponentProductAccordion | ComponentProductColor | ComponentProductCurrency | ComponentProductLabel | ComponentProductMaterial | ComponentProductVariant | ComponentProductVendor | ComponentSharedMetaSocial | ComponentSharedSeo | CurrencySelect | I18NLocale | Navigation | Product | ReactIconsIconlibrary | SlugifySlug | SubNavigation | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  eqi?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  nei?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type Material = {
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createReactIconsIconlibrary?: Maybe<ReactIconsIconlibraryEntityResponse>;
  createSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAnnouncementBar?: Maybe<AnnouncementBarEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteCurrencySelect?: Maybe<CurrencySelectEntityResponse>;
  deleteNavigation?: Maybe<NavigationEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deleteReactIconsIconlibrary?: Maybe<ReactIconsIconlibraryEntityResponse>;
  deleteSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  deleteSubNavigation?: Maybe<SubNavigationEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAnnouncementBar?: Maybe<AnnouncementBarEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateCurrencySelect?: Maybe<CurrencySelectEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateNavigation?: Maybe<NavigationEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updateReactIconsIconlibrary?: Maybe<ReactIconsIconlibraryEntityResponse>;
  updateSlugifySlug?: Maybe<SlugifySlugEntityResponse>;
  updateSubNavigation?: Maybe<SubNavigationEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreateReactIconsIconlibraryArgs = {
  data: ReactIconsIconlibraryInput;
};


export type MutationCreateSlugifySlugArgs = {
  data: SlugifySlugInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReactIconsIconlibraryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSlugifySlugArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAnnouncementBarArgs = {
  data: AnnouncementBarInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCurrencySelectArgs = {
  data: CurrencySelectInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateNavigationArgs = {
  data: NavigationInput;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateReactIconsIconlibraryArgs = {
  data: ReactIconsIconlibraryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSlugifySlugArgs = {
  data: SlugifySlugInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSubNavigationArgs = {
  data: SubNavigationInput;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Navigation = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  links?: Maybe<Array<Maybe<ComponentHeaderLinks>>>;
  logo?: Maybe<UploadFileEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type NavigationLinksArgs = {
  filters?: InputMaybe<ComponentHeaderLinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NavigationEntity = {
  attributes?: Maybe<Navigation>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type NavigationEntityResponse = {
  data?: Maybe<NavigationEntity>;
};

export type NavigationInput = {
  links?: InputMaybe<Array<InputMaybe<ComponentHeaderLinksInput>>>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Pagination = {
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginationInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginationMeta = {
  page?: Maybe<Scalars['Int']['output']>;
  pageCount?: Maybe<Scalars['Int']['output']>;
  pageSize?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Price = {
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type PriceRangeInput = {
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type Product = {
  category?: Maybe<CategoryEntityResponse>;
  color?: Maybe<ComponentProductColor>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  images?: Maybe<UploadFileRelationResponseCollection>;
  labels?: Maybe<Array<Maybe<ComponentProductLabel>>>;
  material?: Maybe<ComponentProductMaterial>;
  price?: Maybe<ComponentProductCurrency>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  sku: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  stock: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  variants?: Maybe<Array<Maybe<ComponentProductVariant>>>;
  vendor?: Maybe<ComponentProductVendor>;
};


export type ProductImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductLabelsArgs = {
  filters?: InputMaybe<ComponentProductLabelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProductVariantsArgs = {
  filters?: InputMaybe<ComponentProductVariantFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProductEntity = {
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductEntityResponse = {
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  category?: InputMaybe<CategoryFiltersInput>;
  color?: InputMaybe<ComponentProductColorFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  labels?: InputMaybe<ComponentProductLabelFiltersInput>;
  material?: InputMaybe<ComponentProductMaterialFiltersInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  price?: InputMaybe<ComponentProductCurrencyFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sku?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  stock?: InputMaybe<IntFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  variants?: InputMaybe<ComponentProductVariantFiltersInput>;
  vendor?: InputMaybe<ComponentProductVendorFiltersInput>;
};

export type ProductInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  color?: InputMaybe<ComponentProductColorInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  labels?: InputMaybe<Array<InputMaybe<ComponentProductLabelInput>>>;
  material?: InputMaybe<ComponentProductMaterialInput>;
  price?: InputMaybe<ComponentProductCurrencyInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  variants?: InputMaybe<Array<InputMaybe<ComponentProductVariantInput>>>;
  vendor?: InputMaybe<ComponentProductVendorInput>;
};

export type ProductRelationResponseCollection = {
  data: Array<ProductEntity>;
};

export type ProductsByCategory = {
  data?: Maybe<Array<Maybe<Product>>>;
  meta?: Maybe<PaginationMeta>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  announcementBar?: Maybe<AnnouncementBarEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  currencySelect?: Maybe<CurrencySelectEntityResponse>;
  filters?: Maybe<Filter>;
  findSlug?: Maybe<FindSlugResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  navigation?: Maybe<NavigationEntityResponse>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  productsByCategory?: Maybe<ProductsByCategory>;
  reactIconsIconlibraries?: Maybe<ReactIconsIconlibraryEntityResponseCollection>;
  reactIconsIconlibrary?: Maybe<ReactIconsIconlibraryEntityResponse>;
  slugifySlug?: Maybe<SlugifySlugEntityResponse>;
  slugifySlugs?: Maybe<SlugifySlugEntityResponseCollection>;
  subNavigation?: Maybe<SubNavigationEntityResponse>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAnnouncementBarArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCurrencySelectArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryFiltersArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFindSlugArgs = {
  modelName?: InputMaybe<Scalars['String']['input']>;
  publicationState?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNavigationArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductsByCategoryArgs = {
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  materials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pagination?: InputMaybe<PaginationInput>;
  price?: InputMaybe<PriceRangeInput>;
  slug: Scalars['String']['input'];
  sort?: InputMaybe<SortOptions>;
  vendors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReactIconsIconlibrariesArgs = {
  filters?: InputMaybe<ReactIconsIconlibraryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryReactIconsIconlibraryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySlugifySlugArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySlugifySlugsArgs = {
  filters?: InputMaybe<SlugifySlugFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySubNavigationArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReactIconsIconlibrary = {
  abbreviation: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isEnabled?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ReactIconsIconlibraryEntity = {
  attributes?: Maybe<ReactIconsIconlibrary>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ReactIconsIconlibraryEntityResponse = {
  data?: Maybe<ReactIconsIconlibraryEntity>;
};

export type ReactIconsIconlibraryEntityResponseCollection = {
  data: Array<ReactIconsIconlibraryEntity>;
  meta: ResponseCollectionMeta;
};

export type ReactIconsIconlibraryFiltersInput = {
  abbreviation?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ReactIconsIconlibraryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isEnabled?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReactIconsIconlibraryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReactIconsIconlibraryFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReactIconsIconlibraryInput = {
  abbreviation?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ResponseCollectionMeta = {
  pagination: Pagination;
};

export type SlugifySlug = {
  count?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SlugifySlugEntity = {
  attributes?: Maybe<SlugifySlug>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SlugifySlugEntityResponse = {
  data?: Maybe<SlugifySlugEntity>;
};

export type SlugifySlugEntityResponseCollection = {
  data: Array<SlugifySlugEntity>;
  meta: ResponseCollectionMeta;
};

export type SlugifySlugFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  count?: InputMaybe<IntFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SlugifySlugFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SlugifySlugFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SlugifySlugInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export enum SortOptions {
  DateAsc = 'date_asc',
  DateDesc = 'date_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  PriceAsc = 'price_asc',
  PriceDesc = 'price_desc'
}

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SubNavigation = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currencySelect?: Maybe<Array<Maybe<ComponentGlobalCurrencySelect>>>;
  links?: Maybe<Array<Maybe<ComponentHeaderSublinks>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  socials?: Maybe<Array<Maybe<ComponentHeaderSocials>>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SubNavigationCurrencySelectArgs = {
  filters?: InputMaybe<ComponentGlobalCurrencySelectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SubNavigationLinksArgs = {
  filters?: InputMaybe<ComponentHeaderSublinksFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SubNavigationSocialsArgs = {
  filters?: InputMaybe<ComponentHeaderSocialsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubNavigationEntity = {
  attributes?: Maybe<SubNavigation>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SubNavigationEntityResponse = {
  data?: Maybe<SubNavigationEntity>;
};

export type SubNavigationInput = {
  currencySelect?: InputMaybe<Array<InputMaybe<ComponentGlobalCurrencySelectInput>>>;
  links?: InputMaybe<Array<InputMaybe<ComponentHeaderSublinksInput>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  socials?: InputMaybe<Array<InputMaybe<ComponentHeaderSocialsInput>>>;
};

export type UploadFile = {
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  data: Array<UsersPermissionsUserEntity>;
};

export type Vendor = {
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type GetHeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeaderQuery = { announcementBar?: { data?: { attributes?: { announcements?: Array<{ announcement?: string | undefined, backgroundColor?: string | undefined } | undefined> | undefined } | undefined } | undefined } | undefined, navigation?: { data?: { attributes?: { logo?: { data?: { attributes?: { url: string, width?: number | undefined, height?: number | undefined, alternativeText?: string | undefined } | undefined } | undefined } | undefined, links?: Array<{ id: string, name?: string | undefined, url?: string | undefined, sublinks?: Array<{ id: string, name?: string | undefined, url?: string | undefined } | undefined> | undefined } | undefined> | undefined } | undefined } | undefined } | undefined, subNavigation?: { data?: { attributes?: { currencySelect?: Array<{ currency: string, countryImage: { data?: { attributes?: { url: string, alternativeText?: string | undefined, width?: number | undefined, height?: number | undefined } | undefined } | undefined } } | undefined> | undefined, links?: Array<{ id: string, name?: string | undefined, url?: string | undefined } | undefined> | undefined, socials?: Array<{ id: string, url?: string | undefined, icon?: { data?: { attributes?: { url: string, alternativeText?: string | undefined, height?: number | undefined, width?: number | undefined } | undefined } | undefined } | undefined } | undefined> | undefined } | undefined } | undefined } | undefined };

export type GetAnnouncementBarQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnnouncementBarQuery = { announcementBar?: { data?: { attributes?: { announcements?: Array<{ announcement?: string | undefined, backgroundColor?: string | undefined } | undefined> | undefined } | undefined } | undefined } | undefined };

export type GetNavigationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNavigationQuery = { navigation?: { data?: { attributes?: { logo?: { data?: { attributes?: { url: string, width?: number | undefined, height?: number | undefined, alternativeText?: string | undefined } | undefined } | undefined } | undefined, links?: Array<{ id: string, name?: string | undefined, url?: string | undefined, sublinks?: Array<{ id: string, name?: string | undefined, url?: string | undefined } | undefined> | undefined } | undefined> | undefined } | undefined } | undefined } | undefined };

export type GetNavigationTopBarQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNavigationTopBarQuery = { subNavigation?: { data?: { attributes?: { currencySelect?: Array<{ currency: string, countryImage: { data?: { attributes?: { url: string, alternativeText?: string | undefined, width?: number | undefined, height?: number | undefined } | undefined } | undefined } } | undefined> | undefined, links?: Array<{ id: string, name?: string | undefined, url?: string | undefined } | undefined> | undefined, socials?: Array<{ id: string, url?: string | undefined, icon?: { data?: { attributes?: { url: string, alternativeText?: string | undefined, height?: number | undefined, width?: number | undefined } | undefined } | undefined } | undefined } | undefined> | undefined } | undefined } | undefined } | undefined };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { categories?: { data: Array<{ id?: string | undefined, attributes?: { name: string, slug?: string | undefined, description?: string | undefined, image?: { data?: { attributes?: { url: string, alternativeText?: string | undefined } | undefined } | undefined } | undefined } | undefined }> } | undefined };

export type GetCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCategoryQuery = { categories?: { data: Array<{ id?: string | undefined, attributes?: { name: string, description?: string | undefined, slug?: string | undefined } | undefined }> } | undefined };

export type ProductFragment = { title: string, slug: string, description?: string | undefined, sku: string, stock: number, vendor?: { name?: string | undefined, slug?: string | undefined } | undefined, price?: { value: number, currency: Enum_Componentproductcurrency_Currency, discountedValue?: number | undefined } | undefined, images?: { data: Array<{ attributes?: { url: string, alternativeText?: string | undefined } | undefined }> } | undefined, category?: { data?: { attributes?: { name: string, description?: string | undefined, slug?: string | undefined } | undefined } | undefined } | undefined, labels?: Array<{ name?: string | undefined } | undefined> | undefined, variants?: Array<{ id: string, variantId?: any | undefined, image?: { data?: { attributes?: { url: string, alternativeText?: string | undefined } | undefined } | undefined } | undefined, color?: { name: string, value?: string | undefined } | undefined, material?: { name: string } | undefined } | undefined> | undefined };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { products?: { data: Array<{ id?: string | undefined, attributes?: { title: string, slug: string, description?: string | undefined, sku: string, stock: number, vendor?: { name?: string | undefined, slug?: string | undefined } | undefined, price?: { value: number, currency: Enum_Componentproductcurrency_Currency, discountedValue?: number | undefined } | undefined, images?: { data: Array<{ attributes?: { url: string, alternativeText?: string | undefined } | undefined }> } | undefined, category?: { data?: { attributes?: { name: string, description?: string | undefined, slug?: string | undefined } | undefined } | undefined } | undefined, labels?: Array<{ name?: string | undefined } | undefined> | undefined, variants?: Array<{ id: string, variantId?: any | undefined, image?: { data?: { attributes?: { url: string, alternativeText?: string | undefined } | undefined } | undefined } | undefined, color?: { name: string, value?: string | undefined } | undefined, material?: { name: string } | undefined } | undefined> | undefined } | undefined }> } | undefined };

export type GetProductsByCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  vendors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  materials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  price?: InputMaybe<PriceRangeInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortOptions>;
}>;


export type GetProductsByCategoryQuery = { productsByCategory?: { data?: Array<{ title: string, slug: string, description?: string | undefined, sku: string, stock: number, vendor?: { name?: string | undefined, slug?: string | undefined } | undefined, price?: { value: number, currency: Enum_Componentproductcurrency_Currency, discountedValue?: number | undefined } | undefined, images?: { data: Array<{ attributes?: { url: string, alternativeText?: string | undefined } | undefined }> } | undefined, category?: { data?: { attributes?: { name: string, description?: string | undefined, slug?: string | undefined } | undefined } | undefined } | undefined, labels?: Array<{ name?: string | undefined } | undefined> | undefined, variants?: Array<{ id: string, variantId?: any | undefined, image?: { data?: { attributes?: { url: string, alternativeText?: string | undefined } | undefined } | undefined } | undefined, color?: { name: string, value?: string | undefined } | undefined, material?: { name: string } | undefined } | undefined> | undefined } | undefined> | undefined, meta?: { total?: number | undefined, page?: number | undefined, pageSize?: number | undefined, pageCount?: number | undefined } | undefined } | undefined };

export type GetProductQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetProductQuery = { products?: { data: Array<{ id?: string | undefined, attributes?: { title: string, slug: string, description?: string | undefined, sku: string, stock: number, vendor?: { name?: string | undefined, slug?: string | undefined } | undefined, price?: { value: number, currency: Enum_Componentproductcurrency_Currency, discountedValue?: number | undefined } | undefined, images?: { data: Array<{ attributes?: { url: string, alternativeText?: string | undefined } | undefined }> } | undefined, category?: { data?: { attributes?: { name: string, description?: string | undefined, slug?: string | undefined } | undefined } | undefined } | undefined, labels?: Array<{ name?: string | undefined } | undefined> | undefined, variants?: Array<{ id: string, variantId?: any | undefined, image?: { data?: { attributes?: { url: string, alternativeText?: string | undefined } | undefined } | undefined } | undefined, color?: { name: string, value?: string | undefined } | undefined, material?: { name: string } | undefined } | undefined> | undefined } | undefined }> } | undefined };

export type GetProductNameQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetProductNameQuery = { products?: { data: Array<{ attributes?: { title: string } | undefined }> } | undefined };

export type GetCategoryFiltersQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetCategoryFiltersQuery = { filters?: { colors?: Array<{ name?: string | undefined, value?: string | undefined, count?: number | undefined } | undefined> | undefined, vendors?: Array<{ name?: string | undefined, count?: number | undefined } | undefined> | undefined, materials?: Array<{ name?: string | undefined, count?: number | undefined } | undefined> | undefined, price?: { min?: number | undefined, max?: number | undefined } | undefined } | undefined };

export type GetCurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrenciesQuery = { currencySelect?: { data?: { attributes?: { Option?: Array<{ id: string, currency: string, countryImage: { data?: { attributes?: { alternativeText?: string | undefined, url: string } | undefined } | undefined } } | undefined> | undefined } | undefined } | undefined } | undefined };


export const ProductFragmentDoc = `
    fragment Product on Product {
  title
  slug
  description
  sku
  stock
  vendor {
    name
    slug
  }
  price {
    value
    currency
    discountedValue
  }
  images {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }
  category {
    data {
      attributes {
        name
        description
        slug
      }
    }
  }
  labels {
    name
  }
  variants {
    id
    variantId
    image {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    color {
      name
      value
    }
    material {
      name
    }
  }
}
    `;
export const GetHeaderDocument = `
    query getHeader {
  announcementBar {
    data {
      attributes {
        announcements {
          announcement
          backgroundColor
        }
      }
    }
  }
  navigation {
    data {
      attributes {
        logo {
          data {
            attributes {
              url
              width
              height
              alternativeText
            }
          }
        }
        links {
          id
          name
          url
          sublinks {
            id
            name
            url
          }
        }
      }
    }
  }
  subNavigation {
    data {
      attributes {
        currencySelect {
          currency
          countryImage {
            data {
              attributes {
                url
                alternativeText
                width
                height
              }
            }
          }
        }
        links {
          id
          name
          url
        }
        socials {
          id
          url
          icon {
            data {
              attributes {
                url
                alternativeText
                height
                width
              }
            }
          }
        }
      }
    }
  }
}
    `;

export const useGetHeaderQuery = <
      TData = GetHeaderQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetHeaderQueryVariables,
      options?: Omit<UseQueryOptions<GetHeaderQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetHeaderQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetHeaderQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getHeader'] : ['getHeader', variables],
    queryFn: fetcher<GetHeaderQuery, GetHeaderQueryVariables>(client, GetHeaderDocument, variables, headers),
    ...options
  }
    )};

useGetHeaderQuery.getKey = (variables?: GetHeaderQueryVariables) => variables === undefined ? ['getHeader'] : ['getHeader', variables];


useGetHeaderQuery.fetcher = (client: GraphQLClient, variables?: GetHeaderQueryVariables, headers?: RequestInit['headers']) => fetcher<GetHeaderQuery, GetHeaderQueryVariables>(client, GetHeaderDocument, variables, headers);

export const GetAnnouncementBarDocument = `
    query getAnnouncementBar {
  announcementBar {
    data {
      attributes {
        announcements {
          announcement
          backgroundColor
        }
      }
    }
  }
}
    `;

export const useGetAnnouncementBarQuery = <
      TData = GetAnnouncementBarQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAnnouncementBarQueryVariables,
      options?: Omit<UseQueryOptions<GetAnnouncementBarQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetAnnouncementBarQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetAnnouncementBarQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getAnnouncementBar'] : ['getAnnouncementBar', variables],
    queryFn: fetcher<GetAnnouncementBarQuery, GetAnnouncementBarQueryVariables>(client, GetAnnouncementBarDocument, variables, headers),
    ...options
  }
    )};

useGetAnnouncementBarQuery.getKey = (variables?: GetAnnouncementBarQueryVariables) => variables === undefined ? ['getAnnouncementBar'] : ['getAnnouncementBar', variables];


useGetAnnouncementBarQuery.fetcher = (client: GraphQLClient, variables?: GetAnnouncementBarQueryVariables, headers?: RequestInit['headers']) => fetcher<GetAnnouncementBarQuery, GetAnnouncementBarQueryVariables>(client, GetAnnouncementBarDocument, variables, headers);

export const GetNavigationDocument = `
    query getNavigation {
  navigation {
    data {
      attributes {
        logo {
          data {
            attributes {
              url
              width
              height
              alternativeText
            }
          }
        }
        links {
          id
          name
          url
          sublinks {
            id
            name
            url
          }
        }
      }
    }
  }
}
    `;

export const useGetNavigationQuery = <
      TData = GetNavigationQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetNavigationQueryVariables,
      options?: Omit<UseQueryOptions<GetNavigationQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetNavigationQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetNavigationQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getNavigation'] : ['getNavigation', variables],
    queryFn: fetcher<GetNavigationQuery, GetNavigationQueryVariables>(client, GetNavigationDocument, variables, headers),
    ...options
  }
    )};

useGetNavigationQuery.getKey = (variables?: GetNavigationQueryVariables) => variables === undefined ? ['getNavigation'] : ['getNavigation', variables];


useGetNavigationQuery.fetcher = (client: GraphQLClient, variables?: GetNavigationQueryVariables, headers?: RequestInit['headers']) => fetcher<GetNavigationQuery, GetNavigationQueryVariables>(client, GetNavigationDocument, variables, headers);

export const GetNavigationTopBarDocument = `
    query getNavigationTopBar {
  subNavigation {
    data {
      attributes {
        currencySelect {
          currency
          countryImage {
            data {
              attributes {
                url
                alternativeText
                width
                height
              }
            }
          }
        }
        links {
          id
          name
          url
        }
        socials {
          id
          url
          icon {
            data {
              attributes {
                url
                alternativeText
                height
                width
              }
            }
          }
        }
      }
    }
  }
}
    `;

export const useGetNavigationTopBarQuery = <
      TData = GetNavigationTopBarQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetNavigationTopBarQueryVariables,
      options?: Omit<UseQueryOptions<GetNavigationTopBarQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetNavigationTopBarQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetNavigationTopBarQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getNavigationTopBar'] : ['getNavigationTopBar', variables],
    queryFn: fetcher<GetNavigationTopBarQuery, GetNavigationTopBarQueryVariables>(client, GetNavigationTopBarDocument, variables, headers),
    ...options
  }
    )};

useGetNavigationTopBarQuery.getKey = (variables?: GetNavigationTopBarQueryVariables) => variables === undefined ? ['getNavigationTopBar'] : ['getNavigationTopBar', variables];


useGetNavigationTopBarQuery.fetcher = (client: GraphQLClient, variables?: GetNavigationTopBarQueryVariables, headers?: RequestInit['headers']) => fetcher<GetNavigationTopBarQuery, GetNavigationTopBarQueryVariables>(client, GetNavigationTopBarDocument, variables, headers);

export const GetCategoriesDocument = `
    query getCategories {
  categories {
    data {
      id
      attributes {
        name
        slug
        description
        image {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
}
    `;

export const useGetCategoriesQuery = <
      TData = GetCategoriesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCategoriesQueryVariables,
      options?: Omit<UseQueryOptions<GetCategoriesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetCategoriesQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetCategoriesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getCategories'] : ['getCategories', variables],
    queryFn: fetcher<GetCategoriesQuery, GetCategoriesQueryVariables>(client, GetCategoriesDocument, variables, headers),
    ...options
  }
    )};

useGetCategoriesQuery.getKey = (variables?: GetCategoriesQueryVariables) => variables === undefined ? ['getCategories'] : ['getCategories', variables];


useGetCategoriesQuery.fetcher = (client: GraphQLClient, variables?: GetCategoriesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCategoriesQuery, GetCategoriesQueryVariables>(client, GetCategoriesDocument, variables, headers);

export const GetCategoryDocument = `
    query getCategory($slug: String!) {
  categories(filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        name
        description
        slug
      }
    }
  }
}
    `;

export const useGetCategoryQuery = <
      TData = GetCategoryQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCategoryQueryVariables,
      options?: Omit<UseQueryOptions<GetCategoryQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetCategoryQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetCategoryQuery, TError, TData>(
      {
    queryKey: ['getCategory', variables],
    queryFn: fetcher<GetCategoryQuery, GetCategoryQueryVariables>(client, GetCategoryDocument, variables, headers),
    ...options
  }
    )};

useGetCategoryQuery.getKey = (variables: GetCategoryQueryVariables) => ['getCategory', variables];


useGetCategoryQuery.fetcher = (client: GraphQLClient, variables: GetCategoryQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCategoryQuery, GetCategoryQueryVariables>(client, GetCategoryDocument, variables, headers);

export const GetProductsDocument = `
    query getProducts {
  products {
    data {
      id
      attributes {
        ...Product
      }
    }
  }
}
    ${ProductFragmentDoc}`;

export const useGetProductsQuery = <
      TData = GetProductsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetProductsQueryVariables,
      options?: Omit<UseQueryOptions<GetProductsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetProductsQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetProductsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getProducts'] : ['getProducts', variables],
    queryFn: fetcher<GetProductsQuery, GetProductsQueryVariables>(client, GetProductsDocument, variables, headers),
    ...options
  }
    )};

useGetProductsQuery.getKey = (variables?: GetProductsQueryVariables) => variables === undefined ? ['getProducts'] : ['getProducts', variables];


useGetProductsQuery.fetcher = (client: GraphQLClient, variables?: GetProductsQueryVariables, headers?: RequestInit['headers']) => fetcher<GetProductsQuery, GetProductsQueryVariables>(client, GetProductsDocument, variables, headers);

export const GetProductsByCategoryDocument = `
    query getProductsByCategory($slug: String!, $colors: [String], $vendors: [String], $materials: [String], $price: PriceRangeInput, $pagination: PaginationInput, $sort: SortOptions) {
  productsByCategory(
    slug: $slug
    colors: $colors
    vendors: $vendors
    price: $price
    materials: $materials
    pagination: $pagination
    sort: $sort
  ) {
    data {
      ...Product
    }
    meta {
      total
      page
      pageSize
      pageCount
    }
  }
}
    ${ProductFragmentDoc}`;

export const useGetProductsByCategoryQuery = <
      TData = GetProductsByCategoryQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetProductsByCategoryQueryVariables,
      options?: Omit<UseQueryOptions<GetProductsByCategoryQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetProductsByCategoryQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetProductsByCategoryQuery, TError, TData>(
      {
    queryKey: ['getProductsByCategory', variables],
    queryFn: fetcher<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>(client, GetProductsByCategoryDocument, variables, headers),
    ...options
  }
    )};

useGetProductsByCategoryQuery.getKey = (variables: GetProductsByCategoryQueryVariables) => ['getProductsByCategory', variables];


useGetProductsByCategoryQuery.fetcher = (client: GraphQLClient, variables: GetProductsByCategoryQueryVariables, headers?: RequestInit['headers']) => fetcher<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>(client, GetProductsByCategoryDocument, variables, headers);

export const GetProductDocument = `
    query getProduct($slug: String!) {
  products(filters: {slug: {eq: $slug}}) {
    data {
      id
      attributes {
        ...Product
      }
    }
  }
}
    ${ProductFragmentDoc}`;

export const useGetProductQuery = <
      TData = GetProductQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetProductQueryVariables,
      options?: Omit<UseQueryOptions<GetProductQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetProductQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetProductQuery, TError, TData>(
      {
    queryKey: ['getProduct', variables],
    queryFn: fetcher<GetProductQuery, GetProductQueryVariables>(client, GetProductDocument, variables, headers),
    ...options
  }
    )};

useGetProductQuery.getKey = (variables: GetProductQueryVariables) => ['getProduct', variables];


useGetProductQuery.fetcher = (client: GraphQLClient, variables: GetProductQueryVariables, headers?: RequestInit['headers']) => fetcher<GetProductQuery, GetProductQueryVariables>(client, GetProductDocument, variables, headers);

export const GetProductNameDocument = `
    query getProductName($slug: String!) {
  products(filters: {slug: {eq: $slug}}) {
    data {
      attributes {
        title
      }
    }
  }
}
    `;

export const useGetProductNameQuery = <
      TData = GetProductNameQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetProductNameQueryVariables,
      options?: Omit<UseQueryOptions<GetProductNameQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetProductNameQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetProductNameQuery, TError, TData>(
      {
    queryKey: ['getProductName', variables],
    queryFn: fetcher<GetProductNameQuery, GetProductNameQueryVariables>(client, GetProductNameDocument, variables, headers),
    ...options
  }
    )};

useGetProductNameQuery.getKey = (variables: GetProductNameQueryVariables) => ['getProductName', variables];


useGetProductNameQuery.fetcher = (client: GraphQLClient, variables: GetProductNameQueryVariables, headers?: RequestInit['headers']) => fetcher<GetProductNameQuery, GetProductNameQueryVariables>(client, GetProductNameDocument, variables, headers);

export const GetCategoryFiltersDocument = `
    query getCategoryFilters($slug: String!) {
  filters(slug: $slug) {
    colors {
      name
      value
      count
    }
    vendors {
      name
      count
    }
    materials {
      name
      count
    }
    price {
      min
      max
    }
  }
}
    `;

export const useGetCategoryFiltersQuery = <
      TData = GetCategoryFiltersQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCategoryFiltersQueryVariables,
      options?: Omit<UseQueryOptions<GetCategoryFiltersQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetCategoryFiltersQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetCategoryFiltersQuery, TError, TData>(
      {
    queryKey: ['getCategoryFilters', variables],
    queryFn: fetcher<GetCategoryFiltersQuery, GetCategoryFiltersQueryVariables>(client, GetCategoryFiltersDocument, variables, headers),
    ...options
  }
    )};

useGetCategoryFiltersQuery.getKey = (variables: GetCategoryFiltersQueryVariables) => ['getCategoryFilters', variables];


useGetCategoryFiltersQuery.fetcher = (client: GraphQLClient, variables: GetCategoryFiltersQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCategoryFiltersQuery, GetCategoryFiltersQueryVariables>(client, GetCategoryFiltersDocument, variables, headers);

export const GetCurrenciesDocument = `
    query getCurrencies {
  currencySelect {
    data {
      attributes {
        Option {
          id
          currency
          countryImage {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
}
    `;

export const useGetCurrenciesQuery = <
      TData = GetCurrenciesQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetCurrenciesQueryVariables,
      options?: Omit<UseQueryOptions<GetCurrenciesQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GetCurrenciesQuery, TError, TData>['queryKey'] },
      headers?: RequestInit['headers']
    ) => {
    
    return useQuery<GetCurrenciesQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['getCurrencies'] : ['getCurrencies', variables],
    queryFn: fetcher<GetCurrenciesQuery, GetCurrenciesQueryVariables>(client, GetCurrenciesDocument, variables, headers),
    ...options
  }
    )};

useGetCurrenciesQuery.getKey = (variables?: GetCurrenciesQueryVariables) => variables === undefined ? ['getCurrencies'] : ['getCurrencies', variables];


useGetCurrenciesQuery.fetcher = (client: GraphQLClient, variables?: GetCurrenciesQueryVariables, headers?: RequestInit['headers']) => fetcher<GetCurrenciesQuery, GetCurrenciesQueryVariables>(client, GetCurrenciesDocument, variables, headers);
