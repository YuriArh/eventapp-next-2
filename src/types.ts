export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type CreateInitialUserInput = {
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  readonly equals?: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
  readonly lt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not?: InputMaybe<DateTimeNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['DateTime']['input']>>;
};

export type Event = {
  readonly author?: Maybe<User>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly description?: Maybe<Event_Description_Document>;
  readonly id: Scalars['ID']['output'];
  readonly imageList?: Maybe<ReadonlyArray<ImgList>>;
  readonly imageListCount?: Maybe<Scalars['Int']['output']>;
  readonly latitude?: Maybe<Scalars['Float']['output']>;
  readonly longitude?: Maybe<Scalars['Float']['output']>;
  readonly status?: Maybe<Scalars['String']['output']>;
  readonly tags?: Maybe<ReadonlyArray<Tag>>;
  readonly tagsCount?: Maybe<Scalars['Int']['output']>;
  readonly title?: Maybe<Scalars['String']['output']>;
  readonly titleImage?: Maybe<ImageFieldOutput>;
};


export type EventImageListArgs = {
  cursor?: InputMaybe<ImgListWhereUniqueInput>;
  orderBy?: ReadonlyArray<ImgListOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ImgListWhereInput;
};


export type EventImageListCountArgs = {
  where?: ImgListWhereInput;
};


export type EventTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: ReadonlyArray<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type EventTagsCountArgs = {
  where?: TagWhereInput;
};

export type EventCreateInput = {
  readonly author?: InputMaybe<UserRelateToOneForCreateInput>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly description?: InputMaybe<Scalars['JSON']['input']>;
  readonly imageList?: InputMaybe<ImgListRelateToManyForCreateInput>;
  readonly latitude?: InputMaybe<Scalars['Float']['input']>;
  readonly longitude?: InputMaybe<Scalars['Float']['input']>;
  readonly status?: InputMaybe<Scalars['String']['input']>;
  readonly tags?: InputMaybe<TagRelateToManyForCreateInput>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly titleImage?: InputMaybe<ImageFieldInput>;
};

export type EventManyRelationFilter = {
  readonly every?: InputMaybe<EventWhereInput>;
  readonly none?: InputMaybe<EventWhereInput>;
  readonly some?: InputMaybe<EventWhereInput>;
};

export type EventOrderByInput = {
  readonly createdAt?: InputMaybe<OrderDirection>;
  readonly id?: InputMaybe<OrderDirection>;
  readonly latitude?: InputMaybe<OrderDirection>;
  readonly longitude?: InputMaybe<OrderDirection>;
  readonly status?: InputMaybe<OrderDirection>;
  readonly title?: InputMaybe<OrderDirection>;
};

export type EventRelateToManyForCreateInput = {
  readonly connect?: InputMaybe<ReadonlyArray<EventWhereUniqueInput>>;
  readonly create?: InputMaybe<ReadonlyArray<EventCreateInput>>;
};

export type EventRelateToManyForUpdateInput = {
  readonly connect?: InputMaybe<ReadonlyArray<EventWhereUniqueInput>>;
  readonly create?: InputMaybe<ReadonlyArray<EventCreateInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<EventWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<EventWhereUniqueInput>>;
};

export type EventRelateToOneForCreateInput = {
  readonly connect?: InputMaybe<EventWhereUniqueInput>;
  readonly create?: InputMaybe<EventCreateInput>;
};

export type EventRelateToOneForUpdateInput = {
  readonly connect?: InputMaybe<EventWhereUniqueInput>;
  readonly create?: InputMaybe<EventCreateInput>;
  readonly disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventUpdateArgs = {
  readonly data: EventUpdateInput;
  readonly where: EventWhereUniqueInput;
};

export type EventUpdateInput = {
  readonly author?: InputMaybe<UserRelateToOneForUpdateInput>;
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly description?: InputMaybe<Scalars['JSON']['input']>;
  readonly imageList?: InputMaybe<ImgListRelateToManyForUpdateInput>;
  readonly latitude?: InputMaybe<Scalars['Float']['input']>;
  readonly longitude?: InputMaybe<Scalars['Float']['input']>;
  readonly status?: InputMaybe<Scalars['String']['input']>;
  readonly tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly titleImage?: InputMaybe<ImageFieldInput>;
};

export type EventWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<EventWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<EventWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<EventWhereInput>>;
  readonly author?: InputMaybe<UserWhereInput>;
  readonly createdAt?: InputMaybe<DateTimeNullableFilter>;
  readonly id?: InputMaybe<IdFilter>;
  readonly imageList?: InputMaybe<ImgListManyRelationFilter>;
  readonly latitude?: InputMaybe<FloatFilter>;
  readonly longitude?: InputMaybe<FloatFilter>;
  readonly status?: InputMaybe<StringNullableFilter>;
  readonly tags?: InputMaybe<TagManyRelationFilter>;
  readonly title?: InputMaybe<StringFilter>;
};

export type EventWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
};

export type Event_Description_Document = {
  readonly document: Scalars['JSON']['output'];
};


export type Event_Description_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean']['input'];
};

export type FloatFilter = {
  readonly equals?: InputMaybe<Scalars['Float']['input']>;
  readonly gt?: InputMaybe<Scalars['Float']['input']>;
  readonly gte?: InputMaybe<Scalars['Float']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
  readonly lt?: InputMaybe<Scalars['Float']['input']>;
  readonly lte?: InputMaybe<Scalars['Float']['input']>;
  readonly not?: InputMaybe<FloatFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['Float']['input']>>;
};

export type IdFilter = {
  readonly equals?: InputMaybe<Scalars['ID']['input']>;
  readonly gt?: InputMaybe<Scalars['ID']['input']>;
  readonly gte?: InputMaybe<Scalars['ID']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
  readonly lt?: InputMaybe<Scalars['ID']['input']>;
  readonly lte?: InputMaybe<Scalars['ID']['input']>;
  readonly not?: InputMaybe<IdFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['ID']['input']>>;
};

export enum ImageExtension {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png',
  Webp = 'webp'
}

export type ImageFieldInput = {
  readonly upload: Scalars['Upload']['input'];
};

export type ImageFieldOutput = {
  readonly extension: ImageExtension;
  readonly filesize: Scalars['Int']['output'];
  readonly height: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly url: Scalars['String']['output'];
  readonly width: Scalars['Int']['output'];
};

export type ImgList = {
  readonly events?: Maybe<Event>;
  readonly id: Scalars['ID']['output'];
  readonly img?: Maybe<ImageFieldOutput>;
  readonly name?: Maybe<Scalars['String']['output']>;
};

export type ImgListCreateInput = {
  readonly events?: InputMaybe<EventRelateToOneForCreateInput>;
  readonly img?: InputMaybe<ImageFieldInput>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type ImgListManyRelationFilter = {
  readonly every?: InputMaybe<ImgListWhereInput>;
  readonly none?: InputMaybe<ImgListWhereInput>;
  readonly some?: InputMaybe<ImgListWhereInput>;
};

export type ImgListOrderByInput = {
  readonly id?: InputMaybe<OrderDirection>;
  readonly name?: InputMaybe<OrderDirection>;
};

export type ImgListRelateToManyForCreateInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ImgListWhereUniqueInput>>;
  readonly create?: InputMaybe<ReadonlyArray<ImgListCreateInput>>;
};

export type ImgListRelateToManyForUpdateInput = {
  readonly connect?: InputMaybe<ReadonlyArray<ImgListWhereUniqueInput>>;
  readonly create?: InputMaybe<ReadonlyArray<ImgListCreateInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ImgListWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ImgListWhereUniqueInput>>;
};

export type ImgListUpdateArgs = {
  readonly data: ImgListUpdateInput;
  readonly where: ImgListWhereUniqueInput;
};

export type ImgListUpdateInput = {
  readonly events?: InputMaybe<EventRelateToOneForUpdateInput>;
  readonly img?: InputMaybe<ImageFieldInput>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type ImgListWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<ImgListWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ImgListWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ImgListWhereInput>>;
  readonly events?: InputMaybe<EventWhereInput>;
  readonly id?: InputMaybe<IdFilter>;
  readonly name?: InputMaybe<StringFilter>;
};

export type ImgListWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminMeta = {
  readonly list?: Maybe<KeystoneAdminUiListMeta>;
  readonly lists: ReadonlyArray<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly fields: ReadonlyArray<KeystoneAdminUiFieldMeta>;
  readonly label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  readonly createView: KeystoneAdminUiFieldMetaCreateView;
  readonly customViewsIndex?: Maybe<Scalars['Int']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly fieldMeta?: Maybe<Scalars['JSON']['output']>;
  readonly isFilterable: Scalars['Boolean']['output'];
  readonly isNonNull?: Maybe<ReadonlyArray<KeystoneAdminUiFieldMetaIsNonNull>>;
  readonly isOrderable: Scalars['Boolean']['output'];
  readonly itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  readonly label: Scalars['String']['output'];
  readonly listView: KeystoneAdminUiFieldMetaListView;
  readonly path: Scalars['String']['output'];
  readonly search?: Maybe<QueryMode>;
  readonly viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  readonly fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  readonly fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  readonly fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  readonly fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly fields: ReadonlyArray<KeystoneAdminUiFieldMeta>;
  readonly groups: ReadonlyArray<KeystoneAdminUiFieldGroupMeta>;
  readonly hideCreate: Scalars['Boolean']['output'];
  readonly hideDelete: Scalars['Boolean']['output'];
  readonly initialColumns: ReadonlyArray<Scalars['String']['output']>;
  readonly initialSort?: Maybe<KeystoneAdminUiSort>;
  readonly isHidden: Scalars['Boolean']['output'];
  readonly isSingleton: Scalars['Boolean']['output'];
  readonly itemQueryName: Scalars['String']['output'];
  readonly key: Scalars['String']['output'];
  readonly label: Scalars['String']['output'];
  readonly labelField: Scalars['String']['output'];
  readonly listQueryName: Scalars['String']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly path: Scalars['String']['output'];
  readonly plural: Scalars['String']['output'];
  readonly singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  readonly direction: KeystoneAdminUiSortDirection;
  readonly field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  readonly adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  readonly authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  readonly createEvent?: Maybe<Event>;
  readonly createEvents?: Maybe<ReadonlyArray<Maybe<Event>>>;
  readonly createImgList?: Maybe<ImgList>;
  readonly createImgLists?: Maybe<ReadonlyArray<Maybe<ImgList>>>;
  readonly createInitialUser: UserAuthenticationWithPasswordSuccess;
  readonly createTag?: Maybe<Tag>;
  readonly createTags?: Maybe<ReadonlyArray<Maybe<Tag>>>;
  readonly createUser?: Maybe<User>;
  readonly createUsers?: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly deleteEvent?: Maybe<Event>;
  readonly deleteEvents?: Maybe<ReadonlyArray<Maybe<Event>>>;
  readonly deleteImgList?: Maybe<ImgList>;
  readonly deleteImgLists?: Maybe<ReadonlyArray<Maybe<ImgList>>>;
  readonly deleteTag?: Maybe<Tag>;
  readonly deleteTags?: Maybe<ReadonlyArray<Maybe<Tag>>>;
  readonly deleteUser?: Maybe<User>;
  readonly deleteUsers?: Maybe<ReadonlyArray<Maybe<User>>>;
  readonly endSession: Scalars['Boolean']['output'];
  readonly updateEvent?: Maybe<Event>;
  readonly updateEvents?: Maybe<ReadonlyArray<Maybe<Event>>>;
  readonly updateImgList?: Maybe<ImgList>;
  readonly updateImgLists?: Maybe<ReadonlyArray<Maybe<ImgList>>>;
  readonly updateTag?: Maybe<Tag>;
  readonly updateTags?: Maybe<ReadonlyArray<Maybe<Tag>>>;
  readonly updateUser?: Maybe<User>;
  readonly updateUsers?: Maybe<ReadonlyArray<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateEventArgs = {
  data: EventCreateInput;
};


export type MutationCreateEventsArgs = {
  data: ReadonlyArray<EventCreateInput>;
};


export type MutationCreateImgListArgs = {
  data: ImgListCreateInput;
};


export type MutationCreateImgListsArgs = {
  data: ReadonlyArray<ImgListCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: ReadonlyArray<TagCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: ReadonlyArray<UserCreateInput>;
};


export type MutationDeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationDeleteEventsArgs = {
  where: ReadonlyArray<EventWhereUniqueInput>;
};


export type MutationDeleteImgListArgs = {
  where: ImgListWhereUniqueInput;
};


export type MutationDeleteImgListsArgs = {
  where: ReadonlyArray<ImgListWhereUniqueInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: ReadonlyArray<TagWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: ReadonlyArray<UserWhereUniqueInput>;
};


export type MutationUpdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationUpdateEventsArgs = {
  data: ReadonlyArray<EventUpdateArgs>;
};


export type MutationUpdateImgListArgs = {
  data: ImgListUpdateInput;
  where: ImgListWhereUniqueInput;
};


export type MutationUpdateImgListsArgs = {
  data: ReadonlyArray<ImgListUpdateArgs>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: ReadonlyArray<TagUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: ReadonlyArray<UserUpdateArgs>;
};

export type NestedStringFilter = {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<NestedStringFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  readonly isSet: Scalars['Boolean']['output'];
};

export type Query = {
  readonly authenticatedItem?: Maybe<AuthenticatedItem>;
  readonly event?: Maybe<Event>;
  readonly events?: Maybe<ReadonlyArray<Event>>;
  readonly eventsCount?: Maybe<Scalars['Int']['output']>;
  readonly imgList?: Maybe<ImgList>;
  readonly imgLists?: Maybe<ReadonlyArray<ImgList>>;
  readonly imgListsCount?: Maybe<Scalars['Int']['output']>;
  readonly keystone: KeystoneMeta;
  readonly tag?: Maybe<Tag>;
  readonly tags?: Maybe<ReadonlyArray<Tag>>;
  readonly tagsCount?: Maybe<Scalars['Int']['output']>;
  readonly user?: Maybe<User>;
  readonly users?: Maybe<ReadonlyArray<User>>;
  readonly usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryEventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: ReadonlyArray<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type QueryEventsCountArgs = {
  where?: EventWhereInput;
};


export type QueryImgListArgs = {
  where: ImgListWhereUniqueInput;
};


export type QueryImgListsArgs = {
  cursor?: InputMaybe<ImgListWhereUniqueInput>;
  orderBy?: ReadonlyArray<ImgListOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: ImgListWhereInput;
};


export type QueryImgListsCountArgs = {
  where?: ImgListWhereInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: ReadonlyArray<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: ReadonlyArray<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly mode?: InputMaybe<QueryMode>;
  readonly not?: InputMaybe<NestedStringFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly equals?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly mode?: InputMaybe<QueryMode>;
  readonly not?: InputMaybe<StringNullableFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  readonly events?: Maybe<ReadonlyArray<Event>>;
  readonly eventsCount?: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name?: Maybe<Scalars['String']['output']>;
};


export type TagEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: ReadonlyArray<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type TagEventsCountArgs = {
  where?: EventWhereInput;
};

export type TagCreateInput = {
  readonly events?: InputMaybe<EventRelateToManyForCreateInput>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type TagManyRelationFilter = {
  readonly every?: InputMaybe<TagWhereInput>;
  readonly none?: InputMaybe<TagWhereInput>;
  readonly some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  readonly id?: InputMaybe<OrderDirection>;
  readonly name?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  readonly connect?: InputMaybe<ReadonlyArray<TagWhereUniqueInput>>;
  readonly create?: InputMaybe<ReadonlyArray<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  readonly connect?: InputMaybe<ReadonlyArray<TagWhereUniqueInput>>;
  readonly create?: InputMaybe<ReadonlyArray<TagCreateInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<TagWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  readonly data: TagUpdateInput;
  readonly where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  readonly events?: InputMaybe<EventRelateToManyForUpdateInput>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type TagWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<TagWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<TagWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<TagWhereInput>>;
  readonly events?: InputMaybe<EventManyRelationFilter>;
  readonly id?: InputMaybe<IdFilter>;
  readonly name?: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  readonly id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly events?: Maybe<ReadonlyArray<Event>>;
  readonly eventsCount?: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly password?: Maybe<PasswordState>;
};


export type UserEventsArgs = {
  cursor?: InputMaybe<EventWhereUniqueInput>;
  orderBy?: ReadonlyArray<EventOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: EventWhereInput;
};


export type UserEventsCountArgs = {
  where?: EventWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  readonly message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  readonly item: User;
  readonly sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly events?: InputMaybe<EventRelateToManyForCreateInput>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrderByInput = {
  readonly createdAt?: InputMaybe<OrderDirection>;
  readonly email?: InputMaybe<OrderDirection>;
  readonly id?: InputMaybe<OrderDirection>;
  readonly name?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  readonly create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  readonly create?: InputMaybe<UserCreateInput>;
  readonly disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  readonly data: UserUpdateInput;
  readonly where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  readonly createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly events?: InputMaybe<EventRelateToManyForUpdateInput>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
};

export type UserWhereInput = {
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly createdAt?: InputMaybe<DateTimeNullableFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly events?: InputMaybe<EventManyRelationFilter>;
  readonly id?: InputMaybe<IdFilter>;
  readonly name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly id?: InputMaybe<Scalars['ID']['input']>;
};
