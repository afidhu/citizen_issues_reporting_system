
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Issues
 * 
 */
export type Issues = $Result.DefaultSelection<Prisma.$IssuesPayload>
/**
 * Model Locations
 * 
 */
export type Locations = $Result.DefaultSelection<Prisma.$LocationsPayload>
/**
 * Model Attachments
 * 
 */
export type Attachments = $Result.DefaultSelection<Prisma.$AttachmentsPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model AnnouncementsAttachments
 * 
 */
export type AnnouncementsAttachments = $Result.DefaultSelection<Prisma.$AnnouncementsAttachmentsPayload>
/**
 * Model Announcements
 * 
 */
export type Announcements = $Result.DefaultSelection<Prisma.$AnnouncementsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserList: {
  Citizen: 'Citizen',
  Admin: 'Admin',
  Staff: 'Staff'
};

export type UserList = (typeof UserList)[keyof typeof UserList]


export const statusList: {
  Pending: 'Pending',
  In_Progress: 'In_Progress',
  Resolved: 'Resolved'
};

export type statusList = (typeof statusList)[keyof typeof statusList]

}

export type UserList = $Enums.UserList

export const UserList: typeof $Enums.UserList

export type statusList = $Enums.statusList

export const statusList: typeof $Enums.statusList

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categories.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issues`: Exposes CRUD operations for the **Issues** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issues.findMany()
    * ```
    */
  get issues(): Prisma.IssuesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locations`: Exposes CRUD operations for the **Locations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.locations.findMany()
    * ```
    */
  get locations(): Prisma.LocationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachments`: Exposes CRUD operations for the **Attachments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachments.findMany()
    * ```
    */
  get attachments(): Prisma.AttachmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcementsAttachments`: Exposes CRUD operations for the **AnnouncementsAttachments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnouncementsAttachments
    * const announcementsAttachments = await prisma.announcementsAttachments.findMany()
    * ```
    */
  get announcementsAttachments(): Prisma.AnnouncementsAttachmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.announcements`: Exposes CRUD operations for the **Announcements** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcements.findMany()
    * ```
    */
  get announcements(): Prisma.AnnouncementsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Categories: 'Categories',
    Users: 'Users',
    Issues: 'Issues',
    Locations: 'Locations',
    Attachments: 'Attachments',
    Comments: 'Comments',
    AnnouncementsAttachments: 'AnnouncementsAttachments',
    Announcements: 'Announcements'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categories" | "users" | "issues" | "locations" | "attachments" | "comments" | "announcementsAttachments" | "announcements"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Issues: {
        payload: Prisma.$IssuesPayload<ExtArgs>
        fields: Prisma.IssuesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssuesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssuesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          findFirst: {
            args: Prisma.IssuesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssuesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          findMany: {
            args: Prisma.IssuesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>[]
          }
          create: {
            args: Prisma.IssuesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          createMany: {
            args: Prisma.IssuesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssuesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>[]
          }
          delete: {
            args: Prisma.IssuesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          update: {
            args: Prisma.IssuesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          deleteMany: {
            args: Prisma.IssuesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssuesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IssuesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>[]
          }
          upsert: {
            args: Prisma.IssuesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuesPayload>
          }
          aggregate: {
            args: Prisma.IssuesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssues>
          }
          groupBy: {
            args: Prisma.IssuesGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssuesGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssuesCountArgs<ExtArgs>
            result: $Utils.Optional<IssuesCountAggregateOutputType> | number
          }
        }
      }
      Locations: {
        payload: Prisma.$LocationsPayload<ExtArgs>
        fields: Prisma.LocationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          findFirst: {
            args: Prisma.LocationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          findMany: {
            args: Prisma.LocationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>[]
          }
          create: {
            args: Prisma.LocationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          createMany: {
            args: Prisma.LocationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>[]
          }
          delete: {
            args: Prisma.LocationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          update: {
            args: Prisma.LocationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          deleteMany: {
            args: Prisma.LocationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>[]
          }
          upsert: {
            args: Prisma.LocationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationsPayload>
          }
          aggregate: {
            args: Prisma.LocationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocations>
          }
          groupBy: {
            args: Prisma.LocationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationsCountArgs<ExtArgs>
            result: $Utils.Optional<LocationsCountAggregateOutputType> | number
          }
        }
      }
      Attachments: {
        payload: Prisma.$AttachmentsPayload<ExtArgs>
        fields: Prisma.AttachmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          findFirst: {
            args: Prisma.AttachmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          findMany: {
            args: Prisma.AttachmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>[]
          }
          create: {
            args: Prisma.AttachmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          createMany: {
            args: Prisma.AttachmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttachmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>[]
          }
          delete: {
            args: Prisma.AttachmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          update: {
            args: Prisma.AttachmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttachmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>[]
          }
          upsert: {
            args: Prisma.AttachmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          aggregate: {
            args: Prisma.AttachmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachments>
          }
          groupBy: {
            args: Prisma.AttachmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentsCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      AnnouncementsAttachments: {
        payload: Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>
        fields: Prisma.AnnouncementsAttachmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementsAttachmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsAttachmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementsAttachmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsAttachmentsPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementsAttachmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsAttachmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementsAttachmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsAttachmentsPayload>
          }
          findMany: {
            args: Prisma.AnnouncementsAttachmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsAttachmentsPayload>[]
          }
          create: {
            args: Prisma.AnnouncementsAttachmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsAttachmentsPayload>
          }
          createMany: {
            args: Prisma.AnnouncementsAttachmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementsAttachmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsAttachmentsPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementsAttachmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsAttachmentsPayload>
          }
          update: {
            args: Prisma.AnnouncementsAttachmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsAttachmentsPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementsAttachmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementsAttachmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementsAttachmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsAttachmentsPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementsAttachmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsAttachmentsPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementsAttachmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncementsAttachments>
          }
          groupBy: {
            args: Prisma.AnnouncementsAttachmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementsAttachmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementsAttachmentsCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementsAttachmentsCountAggregateOutputType> | number
          }
        }
      }
      Announcements: {
        payload: Prisma.$AnnouncementsPayload<ExtArgs>
        fields: Prisma.AnnouncementsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          findMany: {
            args: Prisma.AnnouncementsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>[]
          }
          create: {
            args: Prisma.AnnouncementsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          createMany: {
            args: Prisma.AnnouncementsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          update: {
            args: Prisma.AnnouncementsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnnouncementsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>[]
          }
          upsert: {
            args: Prisma.AnnouncementsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementsPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncements>
          }
          groupBy: {
            args: Prisma.AnnouncementsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementsCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categories?: CategoriesOmit
    users?: UsersOmit
    issues?: IssuesOmit
    locations?: LocationsOmit
    attachments?: AttachmentsOmit
    comments?: CommentsOmit
    announcementsAttachments?: AnnouncementsAttachmentsOmit
    announcements?: AnnouncementsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    issue: number
    announcements: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | CategoriesCountOutputTypeCountIssueArgs
    announcements?: boolean | CategoriesCountOutputTypeCountAnnouncementsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountIssueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuesWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    issue: number
    comment: number
    announcements: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | UsersCountOutputTypeCountIssueArgs
    comment?: boolean | UsersCountOutputTypeCountCommentArgs
    announcements?: boolean | UsersCountOutputTypeCountAnnouncementsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountIssueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementsWhereInput
  }


  /**
   * Count Type IssuesCountOutputType
   */

  export type IssuesCountOutputType = {
    locations: number
    attachments: number
    comment: number
  }

  export type IssuesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | IssuesCountOutputTypeCountLocationsArgs
    attachments?: boolean | IssuesCountOutputTypeCountAttachmentsArgs
    comment?: boolean | IssuesCountOutputTypeCountCommentArgs
  }

  // Custom InputTypes
  /**
   * IssuesCountOutputType without action
   */
  export type IssuesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuesCountOutputType
     */
    select?: IssuesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IssuesCountOutputType without action
   */
  export type IssuesCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationsWhereInput
  }

  /**
   * IssuesCountOutputType without action
   */
  export type IssuesCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentsWhereInput
  }

  /**
   * IssuesCountOutputType without action
   */
  export type IssuesCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }


  /**
   * Count Type AnnouncementsCountOutputType
   */

  export type AnnouncementsCountOutputType = {
    attachments: number
  }

  export type AnnouncementsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | AnnouncementsCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * AnnouncementsCountOutputType without action
   */
  export type AnnouncementsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsCountOutputType
     */
    select?: AnnouncementsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnouncementsCountOutputType without action
   */
  export type AnnouncementsCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementsAttachmentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    category_id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    category_id: number
    category_name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    category_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    category_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    category_id?: true
    category_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesMaxAggregateInputType = {
    category_id?: true
    category_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoriesCountAggregateInputType = {
    category_id?: true
    category_name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    category_id: number
    category_name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issue?: boolean | Categories$issueArgs<ExtArgs>
    announcements?: boolean | Categories$announcementsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    category_id?: boolean
    category_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "category_name" | "createdAt" | "updatedAt", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | Categories$issueArgs<ExtArgs>
    announcements?: boolean | Categories$announcementsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      issue: Prisma.$IssuesPayload<ExtArgs>[]
      announcements: Prisma.$AnnouncementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      category_name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.updateManyAndReturn({
     *   select: { category_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issue<T extends Categories$issueArgs<ExtArgs> = {}>(args?: Subset<T, Categories$issueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcements<T extends Categories$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly category_id: FieldRef<"Categories", 'Int'>
    readonly category_name: FieldRef<"Categories", 'String'>
    readonly createdAt: FieldRef<"Categories", 'DateTime'>
    readonly updatedAt: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.issue
   */
  export type Categories$issueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    where?: IssuesWhereInput
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    cursor?: IssuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }

  /**
   * Categories.announcements
   */
  export type Categories$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    where?: AnnouncementsWhereInput
    orderBy?: AnnouncementsOrderByWithRelationInput | AnnouncementsOrderByWithRelationInput[]
    cursor?: AnnouncementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
    phone: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
    phone: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    phone: number | null
    role: $Enums.UserList | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    email: string | null
    phone: number | null
    role: $Enums.UserList | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    name: number
    email: number
    phone: number
    role: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
    phone?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
    phone?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    name?: true
    email?: true
    phone?: true
    role?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    name: string
    email: string
    phone: number
    role: $Enums.UserList
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issue?: boolean | Users$issueArgs<ExtArgs>
    comment?: boolean | Users$commentArgs<ExtArgs>
    announcements?: boolean | Users$announcementsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    user_id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "email" | "phone" | "role" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | Users$issueArgs<ExtArgs>
    comment?: boolean | Users$commentArgs<ExtArgs>
    announcements?: boolean | Users$announcementsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      issue: Prisma.$IssuesPayload<ExtArgs>[]
      comment: Prisma.$CommentsPayload<ExtArgs>[]
      announcements: Prisma.$AnnouncementsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
      email: string
      phone: number
      role: $Enums.UserList
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const usersWithUser_idOnly = await prisma.users.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issue<T extends Users$issueArgs<ExtArgs> = {}>(args?: Subset<T, Users$issueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comment<T extends Users$commentArgs<ExtArgs> = {}>(args?: Subset<T, Users$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    announcements<T extends Users$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, Users$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly user_id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'Int'>
    readonly role: FieldRef<"Users", 'UserList'>
    readonly password: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.issue
   */
  export type Users$issueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    where?: IssuesWhereInput
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    cursor?: IssuesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }

  /**
   * Users.comment
   */
  export type Users$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Users.announcements
   */
  export type Users$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    where?: AnnouncementsWhereInput
    orderBy?: AnnouncementsOrderByWithRelationInput | AnnouncementsOrderByWithRelationInput[]
    cursor?: AnnouncementsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Issues
   */

  export type AggregateIssues = {
    _count: IssuesCountAggregateOutputType | null
    _avg: IssuesAvgAggregateOutputType | null
    _sum: IssuesSumAggregateOutputType | null
    _min: IssuesMinAggregateOutputType | null
    _max: IssuesMaxAggregateOutputType | null
  }

  export type IssuesAvgAggregateOutputType = {
    issue_id: number | null
    categoryId: number | null
    userId: number | null
  }

  export type IssuesSumAggregateOutputType = {
    issue_id: number | null
    categoryId: number | null
    userId: number | null
  }

  export type IssuesMinAggregateOutputType = {
    issue_id: number | null
    title: string | null
    description: string | null
    categoryId: number | null
    userId: number | null
    status: $Enums.statusList | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssuesMaxAggregateOutputType = {
    issue_id: number | null
    title: string | null
    description: string | null
    categoryId: number | null
    userId: number | null
    status: $Enums.statusList | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssuesCountAggregateOutputType = {
    issue_id: number
    title: number
    description: number
    categoryId: number
    userId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IssuesAvgAggregateInputType = {
    issue_id?: true
    categoryId?: true
    userId?: true
  }

  export type IssuesSumAggregateInputType = {
    issue_id?: true
    categoryId?: true
    userId?: true
  }

  export type IssuesMinAggregateInputType = {
    issue_id?: true
    title?: true
    description?: true
    categoryId?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssuesMaxAggregateInputType = {
    issue_id?: true
    title?: true
    description?: true
    categoryId?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssuesCountAggregateInputType = {
    issue_id?: true
    title?: true
    description?: true
    categoryId?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IssuesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to aggregate.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssuesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssuesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssuesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssuesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssuesMaxAggregateInputType
  }

  export type GetIssuesAggregateType<T extends IssuesAggregateArgs> = {
        [P in keyof T & keyof AggregateIssues]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssues[P]>
      : GetScalarType<T[P], AggregateIssues[P]>
  }




  export type IssuesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuesWhereInput
    orderBy?: IssuesOrderByWithAggregationInput | IssuesOrderByWithAggregationInput[]
    by: IssuesScalarFieldEnum[] | IssuesScalarFieldEnum
    having?: IssuesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssuesCountAggregateInputType | true
    _avg?: IssuesAvgAggregateInputType
    _sum?: IssuesSumAggregateInputType
    _min?: IssuesMinAggregateInputType
    _max?: IssuesMaxAggregateInputType
  }

  export type IssuesGroupByOutputType = {
    issue_id: number
    title: string
    description: string
    categoryId: number
    userId: number
    status: $Enums.statusList
    createdAt: Date
    updatedAt: Date
    _count: IssuesCountAggregateOutputType | null
    _avg: IssuesAvgAggregateOutputType | null
    _sum: IssuesSumAggregateOutputType | null
    _min: IssuesMinAggregateOutputType | null
    _max: IssuesMaxAggregateOutputType | null
  }

  type GetIssuesGroupByPayload<T extends IssuesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssuesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssuesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssuesGroupByOutputType[P]>
            : GetScalarType<T[P], IssuesGroupByOutputType[P]>
        }
      >
    >


  export type IssuesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    issue_id?: boolean
    title?: boolean
    description?: boolean
    categoryId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    locations?: boolean | Issues$locationsArgs<ExtArgs>
    attachments?: boolean | Issues$attachmentsArgs<ExtArgs>
    comment?: boolean | Issues$commentArgs<ExtArgs>
    _count?: boolean | IssuesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issues"]>

  export type IssuesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    issue_id?: boolean
    title?: boolean
    description?: boolean
    categoryId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issues"]>

  export type IssuesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    issue_id?: boolean
    title?: boolean
    description?: boolean
    categoryId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issues"]>

  export type IssuesSelectScalar = {
    issue_id?: boolean
    title?: boolean
    description?: boolean
    categoryId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IssuesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"issue_id" | "title" | "description" | "categoryId" | "userId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["issues"]>
  export type IssuesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
    locations?: boolean | Issues$locationsArgs<ExtArgs>
    attachments?: boolean | Issues$attachmentsArgs<ExtArgs>
    comment?: boolean | Issues$commentArgs<ExtArgs>
    _count?: boolean | IssuesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IssuesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type IssuesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $IssuesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issues"
    objects: {
      category: Prisma.$CategoriesPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
      locations: Prisma.$LocationsPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentsPayload<ExtArgs>[]
      comment: Prisma.$CommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      issue_id: number
      title: string
      description: string
      categoryId: number
      userId: number
      status: $Enums.statusList
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["issues"]>
    composites: {}
  }

  type IssuesGetPayload<S extends boolean | null | undefined | IssuesDefaultArgs> = $Result.GetResult<Prisma.$IssuesPayload, S>

  type IssuesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssuesCountAggregateInputType | true
    }

  export interface IssuesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issues'], meta: { name: 'Issues' } }
    /**
     * Find zero or one Issues that matches the filter.
     * @param {IssuesFindUniqueArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssuesFindUniqueArgs>(args: SelectSubset<T, IssuesFindUniqueArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Issues that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssuesFindUniqueOrThrowArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssuesFindUniqueOrThrowArgs>(args: SelectSubset<T, IssuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesFindFirstArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssuesFindFirstArgs>(args?: SelectSubset<T, IssuesFindFirstArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issues that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesFindFirstOrThrowArgs} args - Arguments to find a Issues
     * @example
     * // Get one Issues
     * const issues = await prisma.issues.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssuesFindFirstOrThrowArgs>(args?: SelectSubset<T, IssuesFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issues.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issues.findMany({ take: 10 })
     * 
     * // Only select the `issue_id`
     * const issuesWithIssue_idOnly = await prisma.issues.findMany({ select: { issue_id: true } })
     * 
     */
    findMany<T extends IssuesFindManyArgs>(args?: SelectSubset<T, IssuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Issues.
     * @param {IssuesCreateArgs} args - Arguments to create a Issues.
     * @example
     * // Create one Issues
     * const Issues = await prisma.issues.create({
     *   data: {
     *     // ... data to create a Issues
     *   }
     * })
     * 
     */
    create<T extends IssuesCreateArgs>(args: SelectSubset<T, IssuesCreateArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Issues.
     * @param {IssuesCreateManyArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issues = await prisma.issues.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssuesCreateManyArgs>(args?: SelectSubset<T, IssuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Issues and returns the data saved in the database.
     * @param {IssuesCreateManyAndReturnArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issues = await prisma.issues.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Issues and only return the `issue_id`
     * const issuesWithIssue_idOnly = await prisma.issues.createManyAndReturn({
     *   select: { issue_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssuesCreateManyAndReturnArgs>(args?: SelectSubset<T, IssuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Issues.
     * @param {IssuesDeleteArgs} args - Arguments to delete one Issues.
     * @example
     * // Delete one Issues
     * const Issues = await prisma.issues.delete({
     *   where: {
     *     // ... filter to delete one Issues
     *   }
     * })
     * 
     */
    delete<T extends IssuesDeleteArgs>(args: SelectSubset<T, IssuesDeleteArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Issues.
     * @param {IssuesUpdateArgs} args - Arguments to update one Issues.
     * @example
     * // Update one Issues
     * const issues = await prisma.issues.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssuesUpdateArgs>(args: SelectSubset<T, IssuesUpdateArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Issues.
     * @param {IssuesDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issues.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssuesDeleteManyArgs>(args?: SelectSubset<T, IssuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issues = await prisma.issues.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssuesUpdateManyArgs>(args: SelectSubset<T, IssuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues and returns the data updated in the database.
     * @param {IssuesUpdateManyAndReturnArgs} args - Arguments to update many Issues.
     * @example
     * // Update many Issues
     * const issues = await prisma.issues.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Issues and only return the `issue_id`
     * const issuesWithIssue_idOnly = await prisma.issues.updateManyAndReturn({
     *   select: { issue_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IssuesUpdateManyAndReturnArgs>(args: SelectSubset<T, IssuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Issues.
     * @param {IssuesUpsertArgs} args - Arguments to update or create a Issues.
     * @example
     * // Update or create a Issues
     * const issues = await prisma.issues.upsert({
     *   create: {
     *     // ... data to create a Issues
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issues we want to update
     *   }
     * })
     */
    upsert<T extends IssuesUpsertArgs>(args: SelectSubset<T, IssuesUpsertArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issues.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssuesCountArgs>(
      args?: Subset<T, IssuesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssuesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssuesAggregateArgs>(args: Subset<T, IssuesAggregateArgs>): Prisma.PrismaPromise<GetIssuesAggregateType<T>>

    /**
     * Group by Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssuesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssuesGroupByArgs['orderBy'] }
        : { orderBy?: IssuesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issues model
   */
  readonly fields: IssuesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issues.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssuesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    locations<T extends Issues$locationsArgs<ExtArgs> = {}>(args?: Subset<T, Issues$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Issues$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Issues$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comment<T extends Issues$commentArgs<ExtArgs> = {}>(args?: Subset<T, Issues$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Issues model
   */
  interface IssuesFieldRefs {
    readonly issue_id: FieldRef<"Issues", 'Int'>
    readonly title: FieldRef<"Issues", 'String'>
    readonly description: FieldRef<"Issues", 'String'>
    readonly categoryId: FieldRef<"Issues", 'Int'>
    readonly userId: FieldRef<"Issues", 'Int'>
    readonly status: FieldRef<"Issues", 'statusList'>
    readonly createdAt: FieldRef<"Issues", 'DateTime'>
    readonly updatedAt: FieldRef<"Issues", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Issues findUnique
   */
  export type IssuesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where: IssuesWhereUniqueInput
  }

  /**
   * Issues findUniqueOrThrow
   */
  export type IssuesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where: IssuesWhereUniqueInput
  }

  /**
   * Issues findFirst
   */
  export type IssuesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }

  /**
   * Issues findFirstOrThrow
   */
  export type IssuesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }

  /**
   * Issues findMany
   */
  export type IssuesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssuesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssuesOrderByWithRelationInput | IssuesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssuesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssuesScalarFieldEnum | IssuesScalarFieldEnum[]
  }

  /**
   * Issues create
   */
  export type IssuesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * The data needed to create a Issues.
     */
    data: XOR<IssuesCreateInput, IssuesUncheckedCreateInput>
  }

  /**
   * Issues createMany
   */
  export type IssuesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssuesCreateManyInput | IssuesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issues createManyAndReturn
   */
  export type IssuesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * The data used to create many Issues.
     */
    data: IssuesCreateManyInput | IssuesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issues update
   */
  export type IssuesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * The data needed to update a Issues.
     */
    data: XOR<IssuesUpdateInput, IssuesUncheckedUpdateInput>
    /**
     * Choose, which Issues to update.
     */
    where: IssuesWhereUniqueInput
  }

  /**
   * Issues updateMany
   */
  export type IssuesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssuesUpdateManyMutationInput, IssuesUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssuesWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
  }

  /**
   * Issues updateManyAndReturn
   */
  export type IssuesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * The data used to update Issues.
     */
    data: XOR<IssuesUpdateManyMutationInput, IssuesUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssuesWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issues upsert
   */
  export type IssuesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * The filter to search for the Issues to update in case it exists.
     */
    where: IssuesWhereUniqueInput
    /**
     * In case the Issues found by the `where` argument doesn't exist, create a new Issues with this data.
     */
    create: XOR<IssuesCreateInput, IssuesUncheckedCreateInput>
    /**
     * In case the Issues was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssuesUpdateInput, IssuesUncheckedUpdateInput>
  }

  /**
   * Issues delete
   */
  export type IssuesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
    /**
     * Filter which Issues to delete.
     */
    where: IssuesWhereUniqueInput
  }

  /**
   * Issues deleteMany
   */
  export type IssuesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssuesWhereInput
    /**
     * Limit how many Issues to delete.
     */
    limit?: number
  }

  /**
   * Issues.locations
   */
  export type Issues$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    where?: LocationsWhereInput
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    cursor?: LocationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Issues.attachments
   */
  export type Issues$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    where?: AttachmentsWhereInput
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    cursor?: AttachmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * Issues.comment
   */
  export type Issues$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Issues without action
   */
  export type IssuesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issues
     */
    select?: IssuesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issues
     */
    omit?: IssuesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuesInclude<ExtArgs> | null
  }


  /**
   * Model Locations
   */

  export type AggregateLocations = {
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  export type LocationsAvgAggregateOutputType = {
    location_id: number | null
    latitude: number | null
    longitude: number | null
    issueId: number | null
  }

  export type LocationsSumAggregateOutputType = {
    location_id: number | null
    latitude: number | null
    longitude: number | null
    issueId: number | null
  }

  export type LocationsMinAggregateOutputType = {
    location_id: number | null
    latitude: number | null
    longitude: number | null
    address: string | null
    issueId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationsMaxAggregateOutputType = {
    location_id: number | null
    latitude: number | null
    longitude: number | null
    address: string | null
    issueId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationsCountAggregateOutputType = {
    location_id: number
    latitude: number
    longitude: number
    address: number
    issueId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationsAvgAggregateInputType = {
    location_id?: true
    latitude?: true
    longitude?: true
    issueId?: true
  }

  export type LocationsSumAggregateInputType = {
    location_id?: true
    latitude?: true
    longitude?: true
    issueId?: true
  }

  export type LocationsMinAggregateInputType = {
    location_id?: true
    latitude?: true
    longitude?: true
    address?: true
    issueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationsMaxAggregateInputType = {
    location_id?: true
    latitude?: true
    longitude?: true
    address?: true
    issueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationsCountAggregateInputType = {
    location_id?: true
    latitude?: true
    longitude?: true
    address?: true
    issueId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to aggregate.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationsMaxAggregateInputType
  }

  export type GetLocationsAggregateType<T extends LocationsAggregateArgs> = {
        [P in keyof T & keyof AggregateLocations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocations[P]>
      : GetScalarType<T[P], AggregateLocations[P]>
  }




  export type LocationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationsWhereInput
    orderBy?: LocationsOrderByWithAggregationInput | LocationsOrderByWithAggregationInput[]
    by: LocationsScalarFieldEnum[] | LocationsScalarFieldEnum
    having?: LocationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationsCountAggregateInputType | true
    _avg?: LocationsAvgAggregateInputType
    _sum?: LocationsSumAggregateInputType
    _min?: LocationsMinAggregateInputType
    _max?: LocationsMaxAggregateInputType
  }

  export type LocationsGroupByOutputType = {
    location_id: number
    latitude: number
    longitude: number
    address: string
    issueId: number
    createdAt: Date
    updatedAt: Date
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  type GetLocationsGroupByPayload<T extends LocationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationsGroupByOutputType[P]>
            : GetScalarType<T[P], LocationsGroupByOutputType[P]>
        }
      >
    >


  export type LocationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_id?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    issueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type LocationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_id?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    issueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type LocationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    location_id?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    issueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type LocationsSelectScalar = {
    location_id?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    issueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"location_id" | "latitude" | "longitude" | "address" | "issueId" | "createdAt" | "updatedAt", ExtArgs["result"]["locations"]>
  export type LocationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }
  export type LocationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }
  export type LocationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }

  export type $LocationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Locations"
    objects: {
      issues: Prisma.$IssuesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      location_id: number
      latitude: number
      longitude: number
      address: string
      issueId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["locations"]>
    composites: {}
  }

  type LocationsGetPayload<S extends boolean | null | undefined | LocationsDefaultArgs> = $Result.GetResult<Prisma.$LocationsPayload, S>

  type LocationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationsCountAggregateInputType | true
    }

  export interface LocationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Locations'], meta: { name: 'Locations' } }
    /**
     * Find zero or one Locations that matches the filter.
     * @param {LocationsFindUniqueArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationsFindUniqueArgs>(args: SelectSubset<T, LocationsFindUniqueArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationsFindUniqueOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationsFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationsFindFirstArgs>(args?: SelectSubset<T, LocationsFindFirstArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindFirstOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationsFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.locations.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.locations.findMany({ take: 10 })
     * 
     * // Only select the `location_id`
     * const locationsWithLocation_idOnly = await prisma.locations.findMany({ select: { location_id: true } })
     * 
     */
    findMany<T extends LocationsFindManyArgs>(args?: SelectSubset<T, LocationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locations.
     * @param {LocationsCreateArgs} args - Arguments to create a Locations.
     * @example
     * // Create one Locations
     * const Locations = await prisma.locations.create({
     *   data: {
     *     // ... data to create a Locations
     *   }
     * })
     * 
     */
    create<T extends LocationsCreateArgs>(args: SelectSubset<T, LocationsCreateArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationsCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationsCreateManyArgs>(args?: SelectSubset<T, LocationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationsCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `location_id`
     * const locationsWithLocation_idOnly = await prisma.locations.createManyAndReturn({
     *   select: { location_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationsCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locations.
     * @param {LocationsDeleteArgs} args - Arguments to delete one Locations.
     * @example
     * // Delete one Locations
     * const Locations = await prisma.locations.delete({
     *   where: {
     *     // ... filter to delete one Locations
     *   }
     * })
     * 
     */
    delete<T extends LocationsDeleteArgs>(args: SelectSubset<T, LocationsDeleteArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locations.
     * @param {LocationsUpdateArgs} args - Arguments to update one Locations.
     * @example
     * // Update one Locations
     * const locations = await prisma.locations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationsUpdateArgs>(args: SelectSubset<T, LocationsUpdateArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationsDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.locations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationsDeleteManyArgs>(args?: SelectSubset<T, LocationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationsUpdateManyArgs>(args: SelectSubset<T, LocationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationsUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `location_id`
     * const locationsWithLocation_idOnly = await prisma.locations.updateManyAndReturn({
     *   select: { location_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationsUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locations.
     * @param {LocationsUpsertArgs} args - Arguments to update or create a Locations.
     * @example
     * // Update or create a Locations
     * const locations = await prisma.locations.upsert({
     *   create: {
     *     // ... data to create a Locations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locations we want to update
     *   }
     * })
     */
    upsert<T extends LocationsUpsertArgs>(args: SelectSubset<T, LocationsUpsertArgs<ExtArgs>>): Prisma__LocationsClient<$Result.GetResult<Prisma.$LocationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.locations.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationsCountArgs>(
      args?: Subset<T, LocationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationsAggregateArgs>(args: Subset<T, LocationsAggregateArgs>): Prisma.PrismaPromise<GetLocationsAggregateType<T>>

    /**
     * Group by Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationsGroupByArgs['orderBy'] }
        : { orderBy?: LocationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Locations model
   */
  readonly fields: LocationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Locations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issues<T extends IssuesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssuesDefaultArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Locations model
   */
  interface LocationsFieldRefs {
    readonly location_id: FieldRef<"Locations", 'Int'>
    readonly latitude: FieldRef<"Locations", 'Float'>
    readonly longitude: FieldRef<"Locations", 'Float'>
    readonly address: FieldRef<"Locations", 'String'>
    readonly issueId: FieldRef<"Locations", 'Int'>
    readonly createdAt: FieldRef<"Locations", 'DateTime'>
    readonly updatedAt: FieldRef<"Locations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Locations findUnique
   */
  export type LocationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations findUniqueOrThrow
   */
  export type LocationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations findFirst
   */
  export type LocationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations findFirstOrThrow
   */
  export type LocationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations findMany
   */
  export type LocationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationsOrderByWithRelationInput | LocationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * Locations create
   */
  export type LocationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Locations.
     */
    data: XOR<LocationsCreateInput, LocationsUncheckedCreateInput>
  }

  /**
   * Locations createMany
   */
  export type LocationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationsCreateManyInput | LocationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Locations createManyAndReturn
   */
  export type LocationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationsCreateManyInput | LocationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locations update
   */
  export type LocationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Locations.
     */
    data: XOR<LocationsUpdateInput, LocationsUncheckedUpdateInput>
    /**
     * Choose, which Locations to update.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations updateMany
   */
  export type LocationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Locations updateManyAndReturn
   */
  export type LocationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Locations upsert
   */
  export type LocationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Locations to update in case it exists.
     */
    where: LocationsWhereUniqueInput
    /**
     * In case the Locations found by the `where` argument doesn't exist, create a new Locations with this data.
     */
    create: XOR<LocationsCreateInput, LocationsUncheckedCreateInput>
    /**
     * In case the Locations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationsUpdateInput, LocationsUncheckedUpdateInput>
  }

  /**
   * Locations delete
   */
  export type LocationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
    /**
     * Filter which Locations to delete.
     */
    where: LocationsWhereUniqueInput
  }

  /**
   * Locations deleteMany
   */
  export type LocationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationsWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Locations without action
   */
  export type LocationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Locations
     */
    select?: LocationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Locations
     */
    omit?: LocationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationsInclude<ExtArgs> | null
  }


  /**
   * Model Attachments
   */

  export type AggregateAttachments = {
    _count: AttachmentsCountAggregateOutputType | null
    _avg: AttachmentsAvgAggregateOutputType | null
    _sum: AttachmentsSumAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  export type AttachmentsAvgAggregateOutputType = {
    attachment_id: number | null
    issueId: number | null
  }

  export type AttachmentsSumAggregateOutputType = {
    attachment_id: number | null
    issueId: number | null
  }

  export type AttachmentsMinAggregateOutputType = {
    attachment_id: number | null
    file_url: string | null
    issueId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentsMaxAggregateOutputType = {
    attachment_id: number | null
    file_url: string | null
    issueId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AttachmentsCountAggregateOutputType = {
    attachment_id: number
    file_url: number
    issueId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AttachmentsAvgAggregateInputType = {
    attachment_id?: true
    issueId?: true
  }

  export type AttachmentsSumAggregateInputType = {
    attachment_id?: true
    issueId?: true
  }

  export type AttachmentsMinAggregateInputType = {
    attachment_id?: true
    file_url?: true
    issueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentsMaxAggregateInputType = {
    attachment_id?: true
    file_url?: true
    issueId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AttachmentsCountAggregateInputType = {
    attachment_id?: true
    file_url?: true
    issueId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AttachmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to aggregate.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentsMaxAggregateInputType
  }

  export type GetAttachmentsAggregateType<T extends AttachmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachments[P]>
      : GetScalarType<T[P], AggregateAttachments[P]>
  }




  export type AttachmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentsWhereInput
    orderBy?: AttachmentsOrderByWithAggregationInput | AttachmentsOrderByWithAggregationInput[]
    by: AttachmentsScalarFieldEnum[] | AttachmentsScalarFieldEnum
    having?: AttachmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentsCountAggregateInputType | true
    _avg?: AttachmentsAvgAggregateInputType
    _sum?: AttachmentsSumAggregateInputType
    _min?: AttachmentsMinAggregateInputType
    _max?: AttachmentsMaxAggregateInputType
  }

  export type AttachmentsGroupByOutputType = {
    attachment_id: number
    file_url: string
    issueId: number
    createdAt: Date
    updatedAt: Date
    _count: AttachmentsCountAggregateOutputType | null
    _avg: AttachmentsAvgAggregateOutputType | null
    _sum: AttachmentsSumAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  type GetAttachmentsGroupByPayload<T extends AttachmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attachment_id?: boolean
    file_url?: boolean
    issueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type AttachmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attachment_id?: boolean
    file_url?: boolean
    issueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type AttachmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attachment_id?: boolean
    file_url?: boolean
    issueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type AttachmentsSelectScalar = {
    attachment_id?: boolean
    file_url?: boolean
    issueId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AttachmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attachment_id" | "file_url" | "issueId" | "createdAt" | "updatedAt", ExtArgs["result"]["attachments"]>
  export type AttachmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }
  export type AttachmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }
  export type AttachmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
  }

  export type $AttachmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachments"
    objects: {
      issues: Prisma.$IssuesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      attachment_id: number
      file_url: string
      issueId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["attachments"]>
    composites: {}
  }

  type AttachmentsGetPayload<S extends boolean | null | undefined | AttachmentsDefaultArgs> = $Result.GetResult<Prisma.$AttachmentsPayload, S>

  type AttachmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentsCountAggregateInputType | true
    }

  export interface AttachmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachments'], meta: { name: 'Attachments' } }
    /**
     * Find zero or one Attachments that matches the filter.
     * @param {AttachmentsFindUniqueArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentsFindUniqueArgs>(args: SelectSubset<T, AttachmentsFindUniqueArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentsFindUniqueOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsFindFirstArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentsFindFirstArgs>(args?: SelectSubset<T, AttachmentsFindFirstArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsFindFirstOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachments.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachments.findMany({ take: 10 })
     * 
     * // Only select the `attachment_id`
     * const attachmentsWithAttachment_idOnly = await prisma.attachments.findMany({ select: { attachment_id: true } })
     * 
     */
    findMany<T extends AttachmentsFindManyArgs>(args?: SelectSubset<T, AttachmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachments.
     * @param {AttachmentsCreateArgs} args - Arguments to create a Attachments.
     * @example
     * // Create one Attachments
     * const Attachments = await prisma.attachments.create({
     *   data: {
     *     // ... data to create a Attachments
     *   }
     * })
     * 
     */
    create<T extends AttachmentsCreateArgs>(args: SelectSubset<T, AttachmentsCreateArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentsCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachments = await prisma.attachments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentsCreateManyArgs>(args?: SelectSubset<T, AttachmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attachments and returns the data saved in the database.
     * @param {AttachmentsCreateManyAndReturnArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachments = await prisma.attachments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attachments and only return the `attachment_id`
     * const attachmentsWithAttachment_idOnly = await prisma.attachments.createManyAndReturn({
     *   select: { attachment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttachmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, AttachmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attachments.
     * @param {AttachmentsDeleteArgs} args - Arguments to delete one Attachments.
     * @example
     * // Delete one Attachments
     * const Attachments = await prisma.attachments.delete({
     *   where: {
     *     // ... filter to delete one Attachments
     *   }
     * })
     * 
     */
    delete<T extends AttachmentsDeleteArgs>(args: SelectSubset<T, AttachmentsDeleteArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachments.
     * @param {AttachmentsUpdateArgs} args - Arguments to update one Attachments.
     * @example
     * // Update one Attachments
     * const attachments = await prisma.attachments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentsUpdateArgs>(args: SelectSubset<T, AttachmentsUpdateArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentsDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentsDeleteManyArgs>(args?: SelectSubset<T, AttachmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachments = await prisma.attachments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentsUpdateManyArgs>(args: SelectSubset<T, AttachmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments and returns the data updated in the database.
     * @param {AttachmentsUpdateManyAndReturnArgs} args - Arguments to update many Attachments.
     * @example
     * // Update many Attachments
     * const attachments = await prisma.attachments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attachments and only return the `attachment_id`
     * const attachmentsWithAttachment_idOnly = await prisma.attachments.updateManyAndReturn({
     *   select: { attachment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttachmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, AttachmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attachments.
     * @param {AttachmentsUpsertArgs} args - Arguments to update or create a Attachments.
     * @example
     * // Update or create a Attachments
     * const attachments = await prisma.attachments.upsert({
     *   create: {
     *     // ... data to create a Attachments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachments we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentsUpsertArgs>(args: SelectSubset<T, AttachmentsUpsertArgs<ExtArgs>>): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachments.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentsCountArgs>(
      args?: Subset<T, AttachmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentsAggregateArgs>(args: Subset<T, AttachmentsAggregateArgs>): Prisma.PrismaPromise<GetAttachmentsAggregateType<T>>

    /**
     * Group by Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentsGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachments model
   */
  readonly fields: AttachmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issues<T extends IssuesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssuesDefaultArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attachments model
   */
  interface AttachmentsFieldRefs {
    readonly attachment_id: FieldRef<"Attachments", 'Int'>
    readonly file_url: FieldRef<"Attachments", 'String'>
    readonly issueId: FieldRef<"Attachments", 'Int'>
    readonly createdAt: FieldRef<"Attachments", 'DateTime'>
    readonly updatedAt: FieldRef<"Attachments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attachments findUnique
   */
  export type AttachmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where: AttachmentsWhereUniqueInput
  }

  /**
   * Attachments findUniqueOrThrow
   */
  export type AttachmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where: AttachmentsWhereUniqueInput
  }

  /**
   * Attachments findFirst
   */
  export type AttachmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * Attachments findFirstOrThrow
   */
  export type AttachmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * Attachments findMany
   */
  export type AttachmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }

  /**
   * Attachments create
   */
  export type AttachmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachments.
     */
    data: XOR<AttachmentsCreateInput, AttachmentsUncheckedCreateInput>
  }

  /**
   * Attachments createMany
   */
  export type AttachmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentsCreateManyInput | AttachmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachments createManyAndReturn
   */
  export type AttachmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentsCreateManyInput | AttachmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachments update
   */
  export type AttachmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachments.
     */
    data: XOR<AttachmentsUpdateInput, AttachmentsUncheckedUpdateInput>
    /**
     * Choose, which Attachments to update.
     */
    where: AttachmentsWhereUniqueInput
  }

  /**
   * Attachments updateMany
   */
  export type AttachmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentsUpdateManyMutationInput, AttachmentsUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentsWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachments updateManyAndReturn
   */
  export type AttachmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentsUpdateManyMutationInput, AttachmentsUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentsWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attachments upsert
   */
  export type AttachmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachments to update in case it exists.
     */
    where: AttachmentsWhereUniqueInput
    /**
     * In case the Attachments found by the `where` argument doesn't exist, create a new Attachments with this data.
     */
    create: XOR<AttachmentsCreateInput, AttachmentsUncheckedCreateInput>
    /**
     * In case the Attachments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentsUpdateInput, AttachmentsUncheckedUpdateInput>
  }

  /**
   * Attachments delete
   */
  export type AttachmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter which Attachments to delete.
     */
    where: AttachmentsWhereUniqueInput
  }

  /**
   * Attachments deleteMany
   */
  export type AttachmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentsWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachments without action
   */
  export type AttachmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachments
     */
    omit?: AttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentsInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    issuesId: number | null
    userId: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    issuesId: number | null
    userId: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    issuesId: number | null
    userId: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    issuesId: number | null
    userId: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    issuesId: number
    userId: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    issuesId?: true
    userId?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    issuesId?: true
    userId?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    issuesId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    issuesId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    issuesId?: true
    userId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    issuesId: number
    userId: number
    content: string
    createdAt: Date
    updatedAt: Date
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issuesId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issuesId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    issuesId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    issuesId?: boolean
    userId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "issuesId" | "userId" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | IssuesDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      issues: Prisma.$IssuesPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      issuesId: number
      userId: number
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issues<T extends IssuesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssuesDefaultArgs<ExtArgs>>): Prisma__IssuesClient<$Result.GetResult<Prisma.$IssuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'Int'>
    readonly issuesId: FieldRef<"Comments", 'Int'>
    readonly userId: FieldRef<"Comments", 'Int'>
    readonly content: FieldRef<"Comments", 'String'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly updatedAt: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model AnnouncementsAttachments
   */

  export type AggregateAnnouncementsAttachments = {
    _count: AnnouncementsAttachmentsCountAggregateOutputType | null
    _avg: AnnouncementsAttachmentsAvgAggregateOutputType | null
    _sum: AnnouncementsAttachmentsSumAggregateOutputType | null
    _min: AnnouncementsAttachmentsMinAggregateOutputType | null
    _max: AnnouncementsAttachmentsMaxAggregateOutputType | null
  }

  export type AnnouncementsAttachmentsAvgAggregateOutputType = {
    attachment_id: number | null
    announcementId: number | null
  }

  export type AnnouncementsAttachmentsSumAggregateOutputType = {
    attachment_id: number | null
    announcementId: number | null
  }

  export type AnnouncementsAttachmentsMinAggregateOutputType = {
    attachment_id: number | null
    file_url: string | null
    announcementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementsAttachmentsMaxAggregateOutputType = {
    attachment_id: number | null
    file_url: string | null
    announcementId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementsAttachmentsCountAggregateOutputType = {
    attachment_id: number
    file_url: number
    announcementId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnouncementsAttachmentsAvgAggregateInputType = {
    attachment_id?: true
    announcementId?: true
  }

  export type AnnouncementsAttachmentsSumAggregateInputType = {
    attachment_id?: true
    announcementId?: true
  }

  export type AnnouncementsAttachmentsMinAggregateInputType = {
    attachment_id?: true
    file_url?: true
    announcementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementsAttachmentsMaxAggregateInputType = {
    attachment_id?: true
    file_url?: true
    announcementId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementsAttachmentsCountAggregateInputType = {
    attachment_id?: true
    file_url?: true
    announcementId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnouncementsAttachmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementsAttachments to aggregate.
     */
    where?: AnnouncementsAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementsAttachments to fetch.
     */
    orderBy?: AnnouncementsAttachmentsOrderByWithRelationInput | AnnouncementsAttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementsAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementsAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementsAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnnouncementsAttachments
    **/
    _count?: true | AnnouncementsAttachmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementsAttachmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementsAttachmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementsAttachmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementsAttachmentsMaxAggregateInputType
  }

  export type GetAnnouncementsAttachmentsAggregateType<T extends AnnouncementsAttachmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncementsAttachments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncementsAttachments[P]>
      : GetScalarType<T[P], AggregateAnnouncementsAttachments[P]>
  }




  export type AnnouncementsAttachmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementsAttachmentsWhereInput
    orderBy?: AnnouncementsAttachmentsOrderByWithAggregationInput | AnnouncementsAttachmentsOrderByWithAggregationInput[]
    by: AnnouncementsAttachmentsScalarFieldEnum[] | AnnouncementsAttachmentsScalarFieldEnum
    having?: AnnouncementsAttachmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementsAttachmentsCountAggregateInputType | true
    _avg?: AnnouncementsAttachmentsAvgAggregateInputType
    _sum?: AnnouncementsAttachmentsSumAggregateInputType
    _min?: AnnouncementsAttachmentsMinAggregateInputType
    _max?: AnnouncementsAttachmentsMaxAggregateInputType
  }

  export type AnnouncementsAttachmentsGroupByOutputType = {
    attachment_id: number
    file_url: string
    announcementId: number
    createdAt: Date
    updatedAt: Date
    _count: AnnouncementsAttachmentsCountAggregateOutputType | null
    _avg: AnnouncementsAttachmentsAvgAggregateOutputType | null
    _sum: AnnouncementsAttachmentsSumAggregateOutputType | null
    _min: AnnouncementsAttachmentsMinAggregateOutputType | null
    _max: AnnouncementsAttachmentsMaxAggregateOutputType | null
  }

  type GetAnnouncementsAttachmentsGroupByPayload<T extends AnnouncementsAttachmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementsAttachmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementsAttachmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementsAttachmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementsAttachmentsGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementsAttachmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attachment_id?: boolean
    file_url?: boolean
    announcementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    announcements?: boolean | AnnouncementsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementsAttachments"]>

  export type AnnouncementsAttachmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attachment_id?: boolean
    file_url?: boolean
    announcementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    announcements?: boolean | AnnouncementsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementsAttachments"]>

  export type AnnouncementsAttachmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attachment_id?: boolean
    file_url?: boolean
    announcementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    announcements?: boolean | AnnouncementsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementsAttachments"]>

  export type AnnouncementsAttachmentsSelectScalar = {
    attachment_id?: boolean
    file_url?: boolean
    announcementId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnouncementsAttachmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attachment_id" | "file_url" | "announcementId" | "createdAt" | "updatedAt", ExtArgs["result"]["announcementsAttachments"]>
  export type AnnouncementsAttachmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcements?: boolean | AnnouncementsDefaultArgs<ExtArgs>
  }
  export type AnnouncementsAttachmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcements?: boolean | AnnouncementsDefaultArgs<ExtArgs>
  }
  export type AnnouncementsAttachmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcements?: boolean | AnnouncementsDefaultArgs<ExtArgs>
  }

  export type $AnnouncementsAttachmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnnouncementsAttachments"
    objects: {
      announcements: Prisma.$AnnouncementsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      attachment_id: number
      file_url: string
      announcementId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["announcementsAttachments"]>
    composites: {}
  }

  type AnnouncementsAttachmentsGetPayload<S extends boolean | null | undefined | AnnouncementsAttachmentsDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload, S>

  type AnnouncementsAttachmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementsAttachmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementsAttachmentsCountAggregateInputType | true
    }

  export interface AnnouncementsAttachmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnnouncementsAttachments'], meta: { name: 'AnnouncementsAttachments' } }
    /**
     * Find zero or one AnnouncementsAttachments that matches the filter.
     * @param {AnnouncementsAttachmentsFindUniqueArgs} args - Arguments to find a AnnouncementsAttachments
     * @example
     * // Get one AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementsAttachmentsFindUniqueArgs>(args: SelectSubset<T, AnnouncementsAttachmentsFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementsAttachmentsClient<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnnouncementsAttachments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementsAttachmentsFindUniqueOrThrowArgs} args - Arguments to find a AnnouncementsAttachments
     * @example
     * // Get one AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementsAttachmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementsAttachmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementsAttachmentsClient<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnouncementsAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsAttachmentsFindFirstArgs} args - Arguments to find a AnnouncementsAttachments
     * @example
     * // Get one AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementsAttachmentsFindFirstArgs>(args?: SelectSubset<T, AnnouncementsAttachmentsFindFirstArgs<ExtArgs>>): Prisma__AnnouncementsAttachmentsClient<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnnouncementsAttachments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsAttachmentsFindFirstOrThrowArgs} args - Arguments to find a AnnouncementsAttachments
     * @example
     * // Get one AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementsAttachmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementsAttachmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementsAttachmentsClient<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnnouncementsAttachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsAttachmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.findMany()
     * 
     * // Get first 10 AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.findMany({ take: 10 })
     * 
     * // Only select the `attachment_id`
     * const announcementsAttachmentsWithAttachment_idOnly = await prisma.announcementsAttachments.findMany({ select: { attachment_id: true } })
     * 
     */
    findMany<T extends AnnouncementsAttachmentsFindManyArgs>(args?: SelectSubset<T, AnnouncementsAttachmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnnouncementsAttachments.
     * @param {AnnouncementsAttachmentsCreateArgs} args - Arguments to create a AnnouncementsAttachments.
     * @example
     * // Create one AnnouncementsAttachments
     * const AnnouncementsAttachments = await prisma.announcementsAttachments.create({
     *   data: {
     *     // ... data to create a AnnouncementsAttachments
     *   }
     * })
     * 
     */
    create<T extends AnnouncementsAttachmentsCreateArgs>(args: SelectSubset<T, AnnouncementsAttachmentsCreateArgs<ExtArgs>>): Prisma__AnnouncementsAttachmentsClient<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnnouncementsAttachments.
     * @param {AnnouncementsAttachmentsCreateManyArgs} args - Arguments to create many AnnouncementsAttachments.
     * @example
     * // Create many AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementsAttachmentsCreateManyArgs>(args?: SelectSubset<T, AnnouncementsAttachmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnnouncementsAttachments and returns the data saved in the database.
     * @param {AnnouncementsAttachmentsCreateManyAndReturnArgs} args - Arguments to create many AnnouncementsAttachments.
     * @example
     * // Create many AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnnouncementsAttachments and only return the `attachment_id`
     * const announcementsAttachmentsWithAttachment_idOnly = await prisma.announcementsAttachments.createManyAndReturn({
     *   select: { attachment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementsAttachmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementsAttachmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnnouncementsAttachments.
     * @param {AnnouncementsAttachmentsDeleteArgs} args - Arguments to delete one AnnouncementsAttachments.
     * @example
     * // Delete one AnnouncementsAttachments
     * const AnnouncementsAttachments = await prisma.announcementsAttachments.delete({
     *   where: {
     *     // ... filter to delete one AnnouncementsAttachments
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementsAttachmentsDeleteArgs>(args: SelectSubset<T, AnnouncementsAttachmentsDeleteArgs<ExtArgs>>): Prisma__AnnouncementsAttachmentsClient<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnnouncementsAttachments.
     * @param {AnnouncementsAttachmentsUpdateArgs} args - Arguments to update one AnnouncementsAttachments.
     * @example
     * // Update one AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementsAttachmentsUpdateArgs>(args: SelectSubset<T, AnnouncementsAttachmentsUpdateArgs<ExtArgs>>): Prisma__AnnouncementsAttachmentsClient<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnnouncementsAttachments.
     * @param {AnnouncementsAttachmentsDeleteManyArgs} args - Arguments to filter AnnouncementsAttachments to delete.
     * @example
     * // Delete a few AnnouncementsAttachments
     * const { count } = await prisma.announcementsAttachments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementsAttachmentsDeleteManyArgs>(args?: SelectSubset<T, AnnouncementsAttachmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnouncementsAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsAttachmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementsAttachmentsUpdateManyArgs>(args: SelectSubset<T, AnnouncementsAttachmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnouncementsAttachments and returns the data updated in the database.
     * @param {AnnouncementsAttachmentsUpdateManyAndReturnArgs} args - Arguments to update many AnnouncementsAttachments.
     * @example
     * // Update many AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnnouncementsAttachments and only return the `attachment_id`
     * const announcementsAttachmentsWithAttachment_idOnly = await prisma.announcementsAttachments.updateManyAndReturn({
     *   select: { attachment_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnouncementsAttachmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementsAttachmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnnouncementsAttachments.
     * @param {AnnouncementsAttachmentsUpsertArgs} args - Arguments to update or create a AnnouncementsAttachments.
     * @example
     * // Update or create a AnnouncementsAttachments
     * const announcementsAttachments = await prisma.announcementsAttachments.upsert({
     *   create: {
     *     // ... data to create a AnnouncementsAttachments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnnouncementsAttachments we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementsAttachmentsUpsertArgs>(args: SelectSubset<T, AnnouncementsAttachmentsUpsertArgs<ExtArgs>>): Prisma__AnnouncementsAttachmentsClient<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnnouncementsAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsAttachmentsCountArgs} args - Arguments to filter AnnouncementsAttachments to count.
     * @example
     * // Count the number of AnnouncementsAttachments
     * const count = await prisma.announcementsAttachments.count({
     *   where: {
     *     // ... the filter for the AnnouncementsAttachments we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementsAttachmentsCountArgs>(
      args?: Subset<T, AnnouncementsAttachmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementsAttachmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnnouncementsAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsAttachmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementsAttachmentsAggregateArgs>(args: Subset<T, AnnouncementsAttachmentsAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementsAttachmentsAggregateType<T>>

    /**
     * Group by AnnouncementsAttachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsAttachmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementsAttachmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementsAttachmentsGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementsAttachmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementsAttachmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementsAttachmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnnouncementsAttachments model
   */
  readonly fields: AnnouncementsAttachmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnnouncementsAttachments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementsAttachmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcements<T extends AnnouncementsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementsDefaultArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnnouncementsAttachments model
   */
  interface AnnouncementsAttachmentsFieldRefs {
    readonly attachment_id: FieldRef<"AnnouncementsAttachments", 'Int'>
    readonly file_url: FieldRef<"AnnouncementsAttachments", 'String'>
    readonly announcementId: FieldRef<"AnnouncementsAttachments", 'Int'>
    readonly createdAt: FieldRef<"AnnouncementsAttachments", 'DateTime'>
    readonly updatedAt: FieldRef<"AnnouncementsAttachments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnnouncementsAttachments findUnique
   */
  export type AnnouncementsAttachmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementsAttachments to fetch.
     */
    where: AnnouncementsAttachmentsWhereUniqueInput
  }

  /**
   * AnnouncementsAttachments findUniqueOrThrow
   */
  export type AnnouncementsAttachmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementsAttachments to fetch.
     */
    where: AnnouncementsAttachmentsWhereUniqueInput
  }

  /**
   * AnnouncementsAttachments findFirst
   */
  export type AnnouncementsAttachmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementsAttachments to fetch.
     */
    where?: AnnouncementsAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementsAttachments to fetch.
     */
    orderBy?: AnnouncementsAttachmentsOrderByWithRelationInput | AnnouncementsAttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementsAttachments.
     */
    cursor?: AnnouncementsAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementsAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementsAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementsAttachments.
     */
    distinct?: AnnouncementsAttachmentsScalarFieldEnum | AnnouncementsAttachmentsScalarFieldEnum[]
  }

  /**
   * AnnouncementsAttachments findFirstOrThrow
   */
  export type AnnouncementsAttachmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementsAttachments to fetch.
     */
    where?: AnnouncementsAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementsAttachments to fetch.
     */
    orderBy?: AnnouncementsAttachmentsOrderByWithRelationInput | AnnouncementsAttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementsAttachments.
     */
    cursor?: AnnouncementsAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementsAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementsAttachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementsAttachments.
     */
    distinct?: AnnouncementsAttachmentsScalarFieldEnum | AnnouncementsAttachmentsScalarFieldEnum[]
  }

  /**
   * AnnouncementsAttachments findMany
   */
  export type AnnouncementsAttachmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementsAttachments to fetch.
     */
    where?: AnnouncementsAttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementsAttachments to fetch.
     */
    orderBy?: AnnouncementsAttachmentsOrderByWithRelationInput | AnnouncementsAttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnnouncementsAttachments.
     */
    cursor?: AnnouncementsAttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementsAttachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementsAttachments.
     */
    skip?: number
    distinct?: AnnouncementsAttachmentsScalarFieldEnum | AnnouncementsAttachmentsScalarFieldEnum[]
  }

  /**
   * AnnouncementsAttachments create
   */
  export type AnnouncementsAttachmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a AnnouncementsAttachments.
     */
    data: XOR<AnnouncementsAttachmentsCreateInput, AnnouncementsAttachmentsUncheckedCreateInput>
  }

  /**
   * AnnouncementsAttachments createMany
   */
  export type AnnouncementsAttachmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnnouncementsAttachments.
     */
    data: AnnouncementsAttachmentsCreateManyInput | AnnouncementsAttachmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnnouncementsAttachments createManyAndReturn
   */
  export type AnnouncementsAttachmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * The data used to create many AnnouncementsAttachments.
     */
    data: AnnouncementsAttachmentsCreateManyInput | AnnouncementsAttachmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnouncementsAttachments update
   */
  export type AnnouncementsAttachmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a AnnouncementsAttachments.
     */
    data: XOR<AnnouncementsAttachmentsUpdateInput, AnnouncementsAttachmentsUncheckedUpdateInput>
    /**
     * Choose, which AnnouncementsAttachments to update.
     */
    where: AnnouncementsAttachmentsWhereUniqueInput
  }

  /**
   * AnnouncementsAttachments updateMany
   */
  export type AnnouncementsAttachmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnnouncementsAttachments.
     */
    data: XOR<AnnouncementsAttachmentsUpdateManyMutationInput, AnnouncementsAttachmentsUncheckedUpdateManyInput>
    /**
     * Filter which AnnouncementsAttachments to update
     */
    where?: AnnouncementsAttachmentsWhereInput
    /**
     * Limit how many AnnouncementsAttachments to update.
     */
    limit?: number
  }

  /**
   * AnnouncementsAttachments updateManyAndReturn
   */
  export type AnnouncementsAttachmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * The data used to update AnnouncementsAttachments.
     */
    data: XOR<AnnouncementsAttachmentsUpdateManyMutationInput, AnnouncementsAttachmentsUncheckedUpdateManyInput>
    /**
     * Filter which AnnouncementsAttachments to update
     */
    where?: AnnouncementsAttachmentsWhereInput
    /**
     * Limit how many AnnouncementsAttachments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnouncementsAttachments upsert
   */
  export type AnnouncementsAttachmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the AnnouncementsAttachments to update in case it exists.
     */
    where: AnnouncementsAttachmentsWhereUniqueInput
    /**
     * In case the AnnouncementsAttachments found by the `where` argument doesn't exist, create a new AnnouncementsAttachments with this data.
     */
    create: XOR<AnnouncementsAttachmentsCreateInput, AnnouncementsAttachmentsUncheckedCreateInput>
    /**
     * In case the AnnouncementsAttachments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementsAttachmentsUpdateInput, AnnouncementsAttachmentsUncheckedUpdateInput>
  }

  /**
   * AnnouncementsAttachments delete
   */
  export type AnnouncementsAttachmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsInclude<ExtArgs> | null
    /**
     * Filter which AnnouncementsAttachments to delete.
     */
    where: AnnouncementsAttachmentsWhereUniqueInput
  }

  /**
   * AnnouncementsAttachments deleteMany
   */
  export type AnnouncementsAttachmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementsAttachments to delete
     */
    where?: AnnouncementsAttachmentsWhereInput
    /**
     * Limit how many AnnouncementsAttachments to delete.
     */
    limit?: number
  }

  /**
   * AnnouncementsAttachments without action
   */
  export type AnnouncementsAttachmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsInclude<ExtArgs> | null
  }


  /**
   * Model Announcements
   */

  export type AggregateAnnouncements = {
    _count: AnnouncementsCountAggregateOutputType | null
    _avg: AnnouncementsAvgAggregateOutputType | null
    _sum: AnnouncementsSumAggregateOutputType | null
    _min: AnnouncementsMinAggregateOutputType | null
    _max: AnnouncementsMaxAggregateOutputType | null
  }

  export type AnnouncementsAvgAggregateOutputType = {
    announcement_id: number | null
    authorId: number | null
    categoryId: number | null
  }

  export type AnnouncementsSumAggregateOutputType = {
    announcement_id: number | null
    authorId: number | null
    categoryId: number | null
  }

  export type AnnouncementsMinAggregateOutputType = {
    announcement_id: number | null
    title: string | null
    content: string | null
    authorId: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementsMaxAggregateOutputType = {
    announcement_id: number | null
    title: string | null
    content: string | null
    authorId: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnnouncementsCountAggregateOutputType = {
    announcement_id: number
    title: number
    content: number
    authorId: number
    categoryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnnouncementsAvgAggregateInputType = {
    announcement_id?: true
    authorId?: true
    categoryId?: true
  }

  export type AnnouncementsSumAggregateInputType = {
    announcement_id?: true
    authorId?: true
    categoryId?: true
  }

  export type AnnouncementsMinAggregateInputType = {
    announcement_id?: true
    title?: true
    content?: true
    authorId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementsMaxAggregateInputType = {
    announcement_id?: true
    title?: true
    content?: true
    authorId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnnouncementsCountAggregateInputType = {
    announcement_id?: true
    title?: true
    content?: true
    authorId?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnnouncementsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to aggregate.
     */
    where?: AnnouncementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementsOrderByWithRelationInput | AnnouncementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementsMaxAggregateInputType
  }

  export type GetAnnouncementsAggregateType<T extends AnnouncementsAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncements]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncements[P]>
      : GetScalarType<T[P], AggregateAnnouncements[P]>
  }




  export type AnnouncementsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementsWhereInput
    orderBy?: AnnouncementsOrderByWithAggregationInput | AnnouncementsOrderByWithAggregationInput[]
    by: AnnouncementsScalarFieldEnum[] | AnnouncementsScalarFieldEnum
    having?: AnnouncementsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementsCountAggregateInputType | true
    _avg?: AnnouncementsAvgAggregateInputType
    _sum?: AnnouncementsSumAggregateInputType
    _min?: AnnouncementsMinAggregateInputType
    _max?: AnnouncementsMaxAggregateInputType
  }

  export type AnnouncementsGroupByOutputType = {
    announcement_id: number
    title: string
    content: string
    authorId: number
    categoryId: number
    createdAt: Date
    updatedAt: Date
    _count: AnnouncementsCountAggregateOutputType | null
    _avg: AnnouncementsAvgAggregateOutputType | null
    _sum: AnnouncementsSumAggregateOutputType | null
    _min: AnnouncementsMinAggregateOutputType | null
    _max: AnnouncementsMaxAggregateOutputType | null
  }

  type GetAnnouncementsGroupByPayload<T extends AnnouncementsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementsGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementsGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    announcement_id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
    attachments?: boolean | Announcements$attachmentsArgs<ExtArgs>
    _count?: boolean | AnnouncementsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcements"]>

  export type AnnouncementsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    announcement_id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcements"]>

  export type AnnouncementsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    announcement_id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcements"]>

  export type AnnouncementsSelectScalar = {
    announcement_id?: boolean
    title?: boolean
    content?: boolean
    authorId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnnouncementsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"announcement_id" | "title" | "content" | "authorId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["announcements"]>
  export type AnnouncementsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
    attachments?: boolean | Announcements$attachmentsArgs<ExtArgs>
    _count?: boolean | AnnouncementsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnouncementsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type AnnouncementsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $AnnouncementsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcements"
    objects: {
      category: Prisma.$CategoriesPayload<ExtArgs>
      author: Prisma.$UsersPayload<ExtArgs>
      attachments: Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      announcement_id: number
      title: string
      content: string
      authorId: number
      categoryId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["announcements"]>
    composites: {}
  }

  type AnnouncementsGetPayload<S extends boolean | null | undefined | AnnouncementsDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementsPayload, S>

  type AnnouncementsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnnouncementsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnnouncementsCountAggregateInputType | true
    }

  export interface AnnouncementsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcements'], meta: { name: 'Announcements' } }
    /**
     * Find zero or one Announcements that matches the filter.
     * @param {AnnouncementsFindUniqueArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementsFindUniqueArgs>(args: SelectSubset<T, AnnouncementsFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Announcements that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnnouncementsFindUniqueOrThrowArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementsFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsFindFirstArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementsFindFirstArgs>(args?: SelectSubset<T, AnnouncementsFindFirstArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Announcements that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsFindFirstOrThrowArgs} args - Arguments to find a Announcements
     * @example
     * // Get one Announcements
     * const announcements = await prisma.announcements.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementsFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcements.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcements.findMany({ take: 10 })
     * 
     * // Only select the `announcement_id`
     * const announcementsWithAnnouncement_idOnly = await prisma.announcements.findMany({ select: { announcement_id: true } })
     * 
     */
    findMany<T extends AnnouncementsFindManyArgs>(args?: SelectSubset<T, AnnouncementsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Announcements.
     * @param {AnnouncementsCreateArgs} args - Arguments to create a Announcements.
     * @example
     * // Create one Announcements
     * const Announcements = await prisma.announcements.create({
     *   data: {
     *     // ... data to create a Announcements
     *   }
     * })
     * 
     */
    create<T extends AnnouncementsCreateArgs>(args: SelectSubset<T, AnnouncementsCreateArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Announcements.
     * @param {AnnouncementsCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcements = await prisma.announcements.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementsCreateManyArgs>(args?: SelectSubset<T, AnnouncementsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementsCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcements = await prisma.announcements.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `announcement_id`
     * const announcementsWithAnnouncement_idOnly = await prisma.announcements.createManyAndReturn({
     *   select: { announcement_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementsCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Announcements.
     * @param {AnnouncementsDeleteArgs} args - Arguments to delete one Announcements.
     * @example
     * // Delete one Announcements
     * const Announcements = await prisma.announcements.delete({
     *   where: {
     *     // ... filter to delete one Announcements
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementsDeleteArgs>(args: SelectSubset<T, AnnouncementsDeleteArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Announcements.
     * @param {AnnouncementsUpdateArgs} args - Arguments to update one Announcements.
     * @example
     * // Update one Announcements
     * const announcements = await prisma.announcements.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementsUpdateArgs>(args: SelectSubset<T, AnnouncementsUpdateArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementsDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcements.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementsDeleteManyArgs>(args?: SelectSubset<T, AnnouncementsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcements = await prisma.announcements.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementsUpdateManyArgs>(args: SelectSubset<T, AnnouncementsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements and returns the data updated in the database.
     * @param {AnnouncementsUpdateManyAndReturnArgs} args - Arguments to update many Announcements.
     * @example
     * // Update many Announcements
     * const announcements = await prisma.announcements.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Announcements and only return the `announcement_id`
     * const announcementsWithAnnouncement_idOnly = await prisma.announcements.updateManyAndReturn({
     *   select: { announcement_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnnouncementsUpdateManyAndReturnArgs>(args: SelectSubset<T, AnnouncementsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Announcements.
     * @param {AnnouncementsUpsertArgs} args - Arguments to update or create a Announcements.
     * @example
     * // Update or create a Announcements
     * const announcements = await prisma.announcements.upsert({
     *   create: {
     *     // ... data to create a Announcements
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcements we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementsUpsertArgs>(args: SelectSubset<T, AnnouncementsUpsertArgs<ExtArgs>>): Prisma__AnnouncementsClient<$Result.GetResult<Prisma.$AnnouncementsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcements.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementsCountArgs>(
      args?: Subset<T, AnnouncementsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementsAggregateArgs>(args: Subset<T, AnnouncementsAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementsAggregateType<T>>

    /**
     * Group by Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementsGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcements model
   */
  readonly fields: AnnouncementsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcements.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attachments<T extends Announcements$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Announcements$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementsAttachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announcements model
   */
  interface AnnouncementsFieldRefs {
    readonly announcement_id: FieldRef<"Announcements", 'Int'>
    readonly title: FieldRef<"Announcements", 'String'>
    readonly content: FieldRef<"Announcements", 'String'>
    readonly authorId: FieldRef<"Announcements", 'Int'>
    readonly categoryId: FieldRef<"Announcements", 'Int'>
    readonly createdAt: FieldRef<"Announcements", 'DateTime'>
    readonly updatedAt: FieldRef<"Announcements", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcements findUnique
   */
  export type AnnouncementsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where: AnnouncementsWhereUniqueInput
  }

  /**
   * Announcements findUniqueOrThrow
   */
  export type AnnouncementsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where: AnnouncementsWhereUniqueInput
  }

  /**
   * Announcements findFirst
   */
  export type AnnouncementsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementsOrderByWithRelationInput | AnnouncementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * Announcements findFirstOrThrow
   */
  export type AnnouncementsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementsOrderByWithRelationInput | AnnouncementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * Announcements findMany
   */
  export type AnnouncementsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementsOrderByWithRelationInput | AnnouncementsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementsScalarFieldEnum | AnnouncementsScalarFieldEnum[]
  }

  /**
   * Announcements create
   */
  export type AnnouncementsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcements.
     */
    data: XOR<AnnouncementsCreateInput, AnnouncementsUncheckedCreateInput>
  }

  /**
   * Announcements createMany
   */
  export type AnnouncementsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementsCreateManyInput | AnnouncementsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcements createManyAndReturn
   */
  export type AnnouncementsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementsCreateManyInput | AnnouncementsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcements update
   */
  export type AnnouncementsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcements.
     */
    data: XOR<AnnouncementsUpdateInput, AnnouncementsUncheckedUpdateInput>
    /**
     * Choose, which Announcements to update.
     */
    where: AnnouncementsWhereUniqueInput
  }

  /**
   * Announcements updateMany
   */
  export type AnnouncementsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementsUpdateManyMutationInput, AnnouncementsUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementsWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
  }

  /**
   * Announcements updateManyAndReturn
   */
  export type AnnouncementsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementsUpdateManyMutationInput, AnnouncementsUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementsWhereInput
    /**
     * Limit how many Announcements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcements upsert
   */
  export type AnnouncementsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcements to update in case it exists.
     */
    where: AnnouncementsWhereUniqueInput
    /**
     * In case the Announcements found by the `where` argument doesn't exist, create a new Announcements with this data.
     */
    create: XOR<AnnouncementsCreateInput, AnnouncementsUncheckedCreateInput>
    /**
     * In case the Announcements was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementsUpdateInput, AnnouncementsUncheckedUpdateInput>
  }

  /**
   * Announcements delete
   */
  export type AnnouncementsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
    /**
     * Filter which Announcements to delete.
     */
    where: AnnouncementsWhereUniqueInput
  }

  /**
   * Announcements deleteMany
   */
  export type AnnouncementsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementsWhereInput
    /**
     * Limit how many Announcements to delete.
     */
    limit?: number
  }

  /**
   * Announcements.attachments
   */
  export type Announcements$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementsAttachments
     */
    select?: AnnouncementsAttachmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnnouncementsAttachments
     */
    omit?: AnnouncementsAttachmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsAttachmentsInclude<ExtArgs> | null
    where?: AnnouncementsAttachmentsWhereInput
    orderBy?: AnnouncementsAttachmentsOrderByWithRelationInput | AnnouncementsAttachmentsOrderByWithRelationInput[]
    cursor?: AnnouncementsAttachmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementsAttachmentsScalarFieldEnum | AnnouncementsAttachmentsScalarFieldEnum[]
  }

  /**
   * Announcements without action
   */
  export type AnnouncementsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcements
     */
    select?: AnnouncementsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Announcements
     */
    omit?: AnnouncementsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoriesScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const IssuesScalarFieldEnum: {
    issue_id: 'issue_id',
    title: 'title',
    description: 'description',
    categoryId: 'categoryId',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IssuesScalarFieldEnum = (typeof IssuesScalarFieldEnum)[keyof typeof IssuesScalarFieldEnum]


  export const LocationsScalarFieldEnum: {
    location_id: 'location_id',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    issueId: 'issueId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationsScalarFieldEnum = (typeof LocationsScalarFieldEnum)[keyof typeof LocationsScalarFieldEnum]


  export const AttachmentsScalarFieldEnum: {
    attachment_id: 'attachment_id',
    file_url: 'file_url',
    issueId: 'issueId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AttachmentsScalarFieldEnum = (typeof AttachmentsScalarFieldEnum)[keyof typeof AttachmentsScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    issuesId: 'issuesId',
    userId: 'userId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const AnnouncementsAttachmentsScalarFieldEnum: {
    attachment_id: 'attachment_id',
    file_url: 'file_url',
    announcementId: 'announcementId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnouncementsAttachmentsScalarFieldEnum = (typeof AnnouncementsAttachmentsScalarFieldEnum)[keyof typeof AnnouncementsAttachmentsScalarFieldEnum]


  export const AnnouncementsScalarFieldEnum: {
    announcement_id: 'announcement_id',
    title: 'title',
    content: 'content',
    authorId: 'authorId',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnnouncementsScalarFieldEnum = (typeof AnnouncementsScalarFieldEnum)[keyof typeof AnnouncementsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserList'
   */
  export type EnumUserListFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserList'>
    


  /**
   * Reference to a field of type 'UserList[]'
   */
  export type ListEnumUserListFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserList[]'>
    


  /**
   * Reference to a field of type 'statusList'
   */
  export type EnumstatusListFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusList'>
    


  /**
   * Reference to a field of type 'statusList[]'
   */
  export type ListEnumstatusListFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusList[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    category_id?: IntFilter<"Categories"> | number
    category_name?: StringFilter<"Categories"> | string
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    issue?: IssuesListRelationFilter
    announcements?: AnnouncementsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issue?: IssuesOrderByRelationAggregateInput
    announcements?: AnnouncementsOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    category_name?: StringFilter<"Categories"> | string
    createdAt?: DateTimeFilter<"Categories"> | Date | string
    updatedAt?: DateTimeFilter<"Categories"> | Date | string
    issue?: IssuesListRelationFilter
    announcements?: AnnouncementsListRelationFilter
  }, "category_id">

  export type CategoriesOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _avg?: CategoriesAvgOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
    _sum?: CategoriesSumOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"Categories"> | number
    category_name?: StringWithAggregatesFilter<"Categories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categories"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    user_id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    phone?: IntFilter<"Users"> | number
    role?: EnumUserListFilter<"Users"> | $Enums.UserList
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    issue?: IssuesListRelationFilter
    comment?: CommentsListRelationFilter
    announcements?: AnnouncementsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issue?: IssuesOrderByRelationAggregateInput
    comment?: CommentsOrderByRelationAggregateInput
    announcements?: AnnouncementsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    phone?: IntFilter<"Users"> | number
    role?: EnumUserListFilter<"Users"> | $Enums.UserList
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    issue?: IssuesListRelationFilter
    comment?: CommentsListRelationFilter
    announcements?: AnnouncementsListRelationFilter
  }, "user_id" | "email">

  export type UsersOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    phone?: IntWithAggregatesFilter<"Users"> | number
    role?: EnumUserListWithAggregatesFilter<"Users"> | $Enums.UserList
    password?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type IssuesWhereInput = {
    AND?: IssuesWhereInput | IssuesWhereInput[]
    OR?: IssuesWhereInput[]
    NOT?: IssuesWhereInput | IssuesWhereInput[]
    issue_id?: IntFilter<"Issues"> | number
    title?: StringFilter<"Issues"> | string
    description?: StringFilter<"Issues"> | string
    categoryId?: IntFilter<"Issues"> | number
    userId?: IntFilter<"Issues"> | number
    status?: EnumstatusListFilter<"Issues"> | $Enums.statusList
    createdAt?: DateTimeFilter<"Issues"> | Date | string
    updatedAt?: DateTimeFilter<"Issues"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    locations?: LocationsListRelationFilter
    attachments?: AttachmentsListRelationFilter
    comment?: CommentsListRelationFilter
  }

  export type IssuesOrderByWithRelationInput = {
    issue_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoriesOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
    locations?: LocationsOrderByRelationAggregateInput
    attachments?: AttachmentsOrderByRelationAggregateInput
    comment?: CommentsOrderByRelationAggregateInput
  }

  export type IssuesWhereUniqueInput = Prisma.AtLeast<{
    issue_id?: number
    AND?: IssuesWhereInput | IssuesWhereInput[]
    OR?: IssuesWhereInput[]
    NOT?: IssuesWhereInput | IssuesWhereInput[]
    title?: StringFilter<"Issues"> | string
    description?: StringFilter<"Issues"> | string
    categoryId?: IntFilter<"Issues"> | number
    userId?: IntFilter<"Issues"> | number
    status?: EnumstatusListFilter<"Issues"> | $Enums.statusList
    createdAt?: DateTimeFilter<"Issues"> | Date | string
    updatedAt?: DateTimeFilter<"Issues"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    locations?: LocationsListRelationFilter
    attachments?: AttachmentsListRelationFilter
    comment?: CommentsListRelationFilter
  }, "issue_id">

  export type IssuesOrderByWithAggregationInput = {
    issue_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IssuesCountOrderByAggregateInput
    _avg?: IssuesAvgOrderByAggregateInput
    _max?: IssuesMaxOrderByAggregateInput
    _min?: IssuesMinOrderByAggregateInput
    _sum?: IssuesSumOrderByAggregateInput
  }

  export type IssuesScalarWhereWithAggregatesInput = {
    AND?: IssuesScalarWhereWithAggregatesInput | IssuesScalarWhereWithAggregatesInput[]
    OR?: IssuesScalarWhereWithAggregatesInput[]
    NOT?: IssuesScalarWhereWithAggregatesInput | IssuesScalarWhereWithAggregatesInput[]
    issue_id?: IntWithAggregatesFilter<"Issues"> | number
    title?: StringWithAggregatesFilter<"Issues"> | string
    description?: StringWithAggregatesFilter<"Issues"> | string
    categoryId?: IntWithAggregatesFilter<"Issues"> | number
    userId?: IntWithAggregatesFilter<"Issues"> | number
    status?: EnumstatusListWithAggregatesFilter<"Issues"> | $Enums.statusList
    createdAt?: DateTimeWithAggregatesFilter<"Issues"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Issues"> | Date | string
  }

  export type LocationsWhereInput = {
    AND?: LocationsWhereInput | LocationsWhereInput[]
    OR?: LocationsWhereInput[]
    NOT?: LocationsWhereInput | LocationsWhereInput[]
    location_id?: IntFilter<"Locations"> | number
    latitude?: FloatFilter<"Locations"> | number
    longitude?: FloatFilter<"Locations"> | number
    address?: StringFilter<"Locations"> | string
    issueId?: IntFilter<"Locations"> | number
    createdAt?: DateTimeFilter<"Locations"> | Date | string
    updatedAt?: DateTimeFilter<"Locations"> | Date | string
    issues?: XOR<IssuesScalarRelationFilter, IssuesWhereInput>
  }

  export type LocationsOrderByWithRelationInput = {
    location_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    issueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issues?: IssuesOrderByWithRelationInput
  }

  export type LocationsWhereUniqueInput = Prisma.AtLeast<{
    location_id?: number
    AND?: LocationsWhereInput | LocationsWhereInput[]
    OR?: LocationsWhereInput[]
    NOT?: LocationsWhereInput | LocationsWhereInput[]
    latitude?: FloatFilter<"Locations"> | number
    longitude?: FloatFilter<"Locations"> | number
    address?: StringFilter<"Locations"> | string
    issueId?: IntFilter<"Locations"> | number
    createdAt?: DateTimeFilter<"Locations"> | Date | string
    updatedAt?: DateTimeFilter<"Locations"> | Date | string
    issues?: XOR<IssuesScalarRelationFilter, IssuesWhereInput>
  }, "location_id">

  export type LocationsOrderByWithAggregationInput = {
    location_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    issueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationsCountOrderByAggregateInput
    _avg?: LocationsAvgOrderByAggregateInput
    _max?: LocationsMaxOrderByAggregateInput
    _min?: LocationsMinOrderByAggregateInput
    _sum?: LocationsSumOrderByAggregateInput
  }

  export type LocationsScalarWhereWithAggregatesInput = {
    AND?: LocationsScalarWhereWithAggregatesInput | LocationsScalarWhereWithAggregatesInput[]
    OR?: LocationsScalarWhereWithAggregatesInput[]
    NOT?: LocationsScalarWhereWithAggregatesInput | LocationsScalarWhereWithAggregatesInput[]
    location_id?: IntWithAggregatesFilter<"Locations"> | number
    latitude?: FloatWithAggregatesFilter<"Locations"> | number
    longitude?: FloatWithAggregatesFilter<"Locations"> | number
    address?: StringWithAggregatesFilter<"Locations"> | string
    issueId?: IntWithAggregatesFilter<"Locations"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Locations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Locations"> | Date | string
  }

  export type AttachmentsWhereInput = {
    AND?: AttachmentsWhereInput | AttachmentsWhereInput[]
    OR?: AttachmentsWhereInput[]
    NOT?: AttachmentsWhereInput | AttachmentsWhereInput[]
    attachment_id?: IntFilter<"Attachments"> | number
    file_url?: StringFilter<"Attachments"> | string
    issueId?: IntFilter<"Attachments"> | number
    createdAt?: DateTimeFilter<"Attachments"> | Date | string
    updatedAt?: DateTimeFilter<"Attachments"> | Date | string
    issues?: XOR<IssuesScalarRelationFilter, IssuesWhereInput>
  }

  export type AttachmentsOrderByWithRelationInput = {
    attachment_id?: SortOrder
    file_url?: SortOrder
    issueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issues?: IssuesOrderByWithRelationInput
  }

  export type AttachmentsWhereUniqueInput = Prisma.AtLeast<{
    attachment_id?: number
    AND?: AttachmentsWhereInput | AttachmentsWhereInput[]
    OR?: AttachmentsWhereInput[]
    NOT?: AttachmentsWhereInput | AttachmentsWhereInput[]
    file_url?: StringFilter<"Attachments"> | string
    issueId?: IntFilter<"Attachments"> | number
    createdAt?: DateTimeFilter<"Attachments"> | Date | string
    updatedAt?: DateTimeFilter<"Attachments"> | Date | string
    issues?: XOR<IssuesScalarRelationFilter, IssuesWhereInput>
  }, "attachment_id">

  export type AttachmentsOrderByWithAggregationInput = {
    attachment_id?: SortOrder
    file_url?: SortOrder
    issueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AttachmentsCountOrderByAggregateInput
    _avg?: AttachmentsAvgOrderByAggregateInput
    _max?: AttachmentsMaxOrderByAggregateInput
    _min?: AttachmentsMinOrderByAggregateInput
    _sum?: AttachmentsSumOrderByAggregateInput
  }

  export type AttachmentsScalarWhereWithAggregatesInput = {
    AND?: AttachmentsScalarWhereWithAggregatesInput | AttachmentsScalarWhereWithAggregatesInput[]
    OR?: AttachmentsScalarWhereWithAggregatesInput[]
    NOT?: AttachmentsScalarWhereWithAggregatesInput | AttachmentsScalarWhereWithAggregatesInput[]
    attachment_id?: IntWithAggregatesFilter<"Attachments"> | number
    file_url?: StringWithAggregatesFilter<"Attachments"> | string
    issueId?: IntWithAggregatesFilter<"Attachments"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Attachments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Attachments"> | Date | string
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: IntFilter<"Comments"> | number
    issuesId?: IntFilter<"Comments"> | number
    userId?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
    issues?: XOR<IssuesScalarRelationFilter, IssuesWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    issuesId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issues?: IssuesOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    issuesId?: IntFilter<"Comments"> | number
    userId?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
    issues?: XOR<IssuesScalarRelationFilter, IssuesWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    issuesId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comments"> | number
    issuesId?: IntWithAggregatesFilter<"Comments"> | number
    userId?: IntWithAggregatesFilter<"Comments"> | number
    content?: StringWithAggregatesFilter<"Comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
  }

  export type AnnouncementsAttachmentsWhereInput = {
    AND?: AnnouncementsAttachmentsWhereInput | AnnouncementsAttachmentsWhereInput[]
    OR?: AnnouncementsAttachmentsWhereInput[]
    NOT?: AnnouncementsAttachmentsWhereInput | AnnouncementsAttachmentsWhereInput[]
    attachment_id?: IntFilter<"AnnouncementsAttachments"> | number
    file_url?: StringFilter<"AnnouncementsAttachments"> | string
    announcementId?: IntFilter<"AnnouncementsAttachments"> | number
    createdAt?: DateTimeFilter<"AnnouncementsAttachments"> | Date | string
    updatedAt?: DateTimeFilter<"AnnouncementsAttachments"> | Date | string
    announcements?: XOR<AnnouncementsScalarRelationFilter, AnnouncementsWhereInput>
  }

  export type AnnouncementsAttachmentsOrderByWithRelationInput = {
    attachment_id?: SortOrder
    file_url?: SortOrder
    announcementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    announcements?: AnnouncementsOrderByWithRelationInput
  }

  export type AnnouncementsAttachmentsWhereUniqueInput = Prisma.AtLeast<{
    attachment_id?: number
    AND?: AnnouncementsAttachmentsWhereInput | AnnouncementsAttachmentsWhereInput[]
    OR?: AnnouncementsAttachmentsWhereInput[]
    NOT?: AnnouncementsAttachmentsWhereInput | AnnouncementsAttachmentsWhereInput[]
    file_url?: StringFilter<"AnnouncementsAttachments"> | string
    announcementId?: IntFilter<"AnnouncementsAttachments"> | number
    createdAt?: DateTimeFilter<"AnnouncementsAttachments"> | Date | string
    updatedAt?: DateTimeFilter<"AnnouncementsAttachments"> | Date | string
    announcements?: XOR<AnnouncementsScalarRelationFilter, AnnouncementsWhereInput>
  }, "attachment_id">

  export type AnnouncementsAttachmentsOrderByWithAggregationInput = {
    attachment_id?: SortOrder
    file_url?: SortOrder
    announcementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnouncementsAttachmentsCountOrderByAggregateInput
    _avg?: AnnouncementsAttachmentsAvgOrderByAggregateInput
    _max?: AnnouncementsAttachmentsMaxOrderByAggregateInput
    _min?: AnnouncementsAttachmentsMinOrderByAggregateInput
    _sum?: AnnouncementsAttachmentsSumOrderByAggregateInput
  }

  export type AnnouncementsAttachmentsScalarWhereWithAggregatesInput = {
    AND?: AnnouncementsAttachmentsScalarWhereWithAggregatesInput | AnnouncementsAttachmentsScalarWhereWithAggregatesInput[]
    OR?: AnnouncementsAttachmentsScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementsAttachmentsScalarWhereWithAggregatesInput | AnnouncementsAttachmentsScalarWhereWithAggregatesInput[]
    attachment_id?: IntWithAggregatesFilter<"AnnouncementsAttachments"> | number
    file_url?: StringWithAggregatesFilter<"AnnouncementsAttachments"> | string
    announcementId?: IntWithAggregatesFilter<"AnnouncementsAttachments"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AnnouncementsAttachments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnnouncementsAttachments"> | Date | string
  }

  export type AnnouncementsWhereInput = {
    AND?: AnnouncementsWhereInput | AnnouncementsWhereInput[]
    OR?: AnnouncementsWhereInput[]
    NOT?: AnnouncementsWhereInput | AnnouncementsWhereInput[]
    announcement_id?: IntFilter<"Announcements"> | number
    title?: StringFilter<"Announcements"> | string
    content?: StringFilter<"Announcements"> | string
    authorId?: IntFilter<"Announcements"> | number
    categoryId?: IntFilter<"Announcements"> | number
    createdAt?: DateTimeFilter<"Announcements"> | Date | string
    updatedAt?: DateTimeFilter<"Announcements"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    attachments?: AnnouncementsAttachmentsListRelationFilter
  }

  export type AnnouncementsOrderByWithRelationInput = {
    announcement_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: CategoriesOrderByWithRelationInput
    author?: UsersOrderByWithRelationInput
    attachments?: AnnouncementsAttachmentsOrderByRelationAggregateInput
  }

  export type AnnouncementsWhereUniqueInput = Prisma.AtLeast<{
    announcement_id?: number
    AND?: AnnouncementsWhereInput | AnnouncementsWhereInput[]
    OR?: AnnouncementsWhereInput[]
    NOT?: AnnouncementsWhereInput | AnnouncementsWhereInput[]
    title?: StringFilter<"Announcements"> | string
    content?: StringFilter<"Announcements"> | string
    authorId?: IntFilter<"Announcements"> | number
    categoryId?: IntFilter<"Announcements"> | number
    createdAt?: DateTimeFilter<"Announcements"> | Date | string
    updatedAt?: DateTimeFilter<"Announcements"> | Date | string
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    attachments?: AnnouncementsAttachmentsListRelationFilter
  }, "announcement_id">

  export type AnnouncementsOrderByWithAggregationInput = {
    announcement_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnnouncementsCountOrderByAggregateInput
    _avg?: AnnouncementsAvgOrderByAggregateInput
    _max?: AnnouncementsMaxOrderByAggregateInput
    _min?: AnnouncementsMinOrderByAggregateInput
    _sum?: AnnouncementsSumOrderByAggregateInput
  }

  export type AnnouncementsScalarWhereWithAggregatesInput = {
    AND?: AnnouncementsScalarWhereWithAggregatesInput | AnnouncementsScalarWhereWithAggregatesInput[]
    OR?: AnnouncementsScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementsScalarWhereWithAggregatesInput | AnnouncementsScalarWhereWithAggregatesInput[]
    announcement_id?: IntWithAggregatesFilter<"Announcements"> | number
    title?: StringWithAggregatesFilter<"Announcements"> | string
    content?: StringWithAggregatesFilter<"Announcements"> | string
    authorId?: IntWithAggregatesFilter<"Announcements"> | number
    categoryId?: IntWithAggregatesFilter<"Announcements"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Announcements"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Announcements"> | Date | string
  }

  export type CategoriesCreateInput = {
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesCreateNestedManyWithoutCategoryInput
    announcements?: AnnouncementsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    category_id?: number
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesUncheckedCreateNestedManyWithoutCategoryInput
    announcements?: AnnouncementsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUpdateManyWithoutCategoryNestedInput
    announcements?: AnnouncementsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUncheckedUpdateManyWithoutCategoryNestedInput
    announcements?: AnnouncementsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    category_id?: number
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    name: string
    email: string
    phone: number
    role?: $Enums.UserList
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesCreateNestedManyWithoutUserInput
    comment?: CommentsCreateNestedManyWithoutUserInput
    announcements?: AnnouncementsCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateInput = {
    user_id?: number
    name: string
    email: string
    phone: number
    role?: $Enums.UserList
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentsUncheckedCreateNestedManyWithoutUserInput
    announcements?: AnnouncementsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    role?: EnumUserListFieldUpdateOperationsInput | $Enums.UserList
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUpdateManyWithoutUserNestedInput
    comment?: CommentsUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementsUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    role?: EnumUserListFieldUpdateOperationsInput | $Enums.UserList
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUncheckedUpdateManyWithoutUserNestedInput
    comment?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UsersCreateManyInput = {
    user_id?: number
    name: string
    email: string
    phone: number
    role?: $Enums.UserList
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    role?: EnumUserListFieldUpdateOperationsInput | $Enums.UserList
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    role?: EnumUserListFieldUpdateOperationsInput | $Enums.UserList
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuesCreateInput = {
    title: string
    description: string
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutIssueInput
    user: UsersCreateNestedOneWithoutIssueInput
    locations?: LocationsCreateNestedManyWithoutIssuesInput
    attachments?: AttachmentsCreateNestedManyWithoutIssuesInput
    comment?: CommentsCreateNestedManyWithoutIssuesInput
  }

  export type IssuesUncheckedCreateInput = {
    issue_id?: number
    title: string
    description: string
    categoryId: number
    userId: number
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationsUncheckedCreateNestedManyWithoutIssuesInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutIssuesInput
    comment?: CommentsUncheckedCreateNestedManyWithoutIssuesInput
  }

  export type IssuesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutIssueNestedInput
    user?: UsersUpdateOneRequiredWithoutIssueNestedInput
    locations?: LocationsUpdateManyWithoutIssuesNestedInput
    attachments?: AttachmentsUpdateManyWithoutIssuesNestedInput
    comment?: CommentsUpdateManyWithoutIssuesNestedInput
  }

  export type IssuesUncheckedUpdateInput = {
    issue_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationsUncheckedUpdateManyWithoutIssuesNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutIssuesNestedInput
    comment?: CommentsUncheckedUpdateManyWithoutIssuesNestedInput
  }

  export type IssuesCreateManyInput = {
    issue_id?: number
    title: string
    description: string
    categoryId: number
    userId: number
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuesUncheckedUpdateManyInput = {
    issue_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsCreateInput = {
    latitude: number
    longitude: number
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issues: IssuesCreateNestedOneWithoutLocationsInput
  }

  export type LocationsUncheckedCreateInput = {
    location_id?: number
    latitude: number
    longitude: number
    address: string
    issueId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationsUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssuesUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type LocationsUncheckedUpdateInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    issueId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsCreateManyInput = {
    location_id?: number
    latitude: number
    longitude: number
    address: string
    issueId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationsUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateManyInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    issueId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentsCreateInput = {
    file_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issues: IssuesCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentsUncheckedCreateInput = {
    attachment_id?: number
    file_url: string
    issueId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentsUpdateInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssuesUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentsUncheckedUpdateInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    issueId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentsCreateManyInput = {
    attachment_id?: number
    file_url: string
    issueId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentsUpdateManyMutationInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentsUncheckedUpdateManyInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    issueId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issues: IssuesCreateNestedOneWithoutCommentInput
    user: UsersCreateNestedOneWithoutCommentInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: number
    issuesId: number
    userId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssuesUpdateOneRequiredWithoutCommentNestedInput
    user?: UsersUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    issuesId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyInput = {
    id?: number
    issuesId: number
    userId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    issuesId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementsAttachmentsCreateInput = {
    file_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    announcements: AnnouncementsCreateNestedOneWithoutAttachmentsInput
  }

  export type AnnouncementsAttachmentsUncheckedCreateInput = {
    attachment_id?: number
    file_url: string
    announcementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementsAttachmentsUpdateInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcements?: AnnouncementsUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AnnouncementsAttachmentsUncheckedUpdateInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    announcementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementsAttachmentsCreateManyInput = {
    attachment_id?: number
    file_url: string
    announcementId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementsAttachmentsUpdateManyMutationInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementsAttachmentsUncheckedUpdateManyInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    announcementId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementsCreateInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutAnnouncementsInput
    author: UsersCreateNestedOneWithoutAnnouncementsInput
    attachments?: AnnouncementsAttachmentsCreateNestedManyWithoutAnnouncementsInput
  }

  export type AnnouncementsUncheckedCreateInput = {
    announcement_id?: number
    title: string
    content: string
    authorId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AnnouncementsAttachmentsUncheckedCreateNestedManyWithoutAnnouncementsInput
  }

  export type AnnouncementsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutAnnouncementsNestedInput
    author?: UsersUpdateOneRequiredWithoutAnnouncementsNestedInput
    attachments?: AnnouncementsAttachmentsUpdateManyWithoutAnnouncementsNestedInput
  }

  export type AnnouncementsUncheckedUpdateInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AnnouncementsAttachmentsUncheckedUpdateManyWithoutAnnouncementsNestedInput
  }

  export type AnnouncementsCreateManyInput = {
    announcement_id?: number
    title: string
    content: string
    authorId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementsUncheckedUpdateManyInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IssuesListRelationFilter = {
    every?: IssuesWhereInput
    some?: IssuesWhereInput
    none?: IssuesWhereInput
  }

  export type AnnouncementsListRelationFilter = {
    every?: AnnouncementsWhereInput
    some?: AnnouncementsWhereInput
    none?: AnnouncementsWhereInput
  }

  export type IssuesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriesCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoriesSumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserListFilter<$PrismaModel = never> = {
    equals?: $Enums.UserList | EnumUserListFieldRefInput<$PrismaModel>
    in?: $Enums.UserList[] | ListEnumUserListFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserList[] | ListEnumUserListFieldRefInput<$PrismaModel>
    not?: NestedEnumUserListFilter<$PrismaModel> | $Enums.UserList
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    phone?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    user_id?: SortOrder
    phone?: SortOrder
  }

  export type EnumUserListWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserList | EnumUserListFieldRefInput<$PrismaModel>
    in?: $Enums.UserList[] | ListEnumUserListFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserList[] | ListEnumUserListFieldRefInput<$PrismaModel>
    not?: NestedEnumUserListWithAggregatesFilter<$PrismaModel> | $Enums.UserList
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserListFilter<$PrismaModel>
    _max?: NestedEnumUserListFilter<$PrismaModel>
  }

  export type EnumstatusListFilter<$PrismaModel = never> = {
    equals?: $Enums.statusList | EnumstatusListFieldRefInput<$PrismaModel>
    in?: $Enums.statusList[] | ListEnumstatusListFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusList[] | ListEnumstatusListFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusListFilter<$PrismaModel> | $Enums.statusList
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type LocationsListRelationFilter = {
    every?: LocationsWhereInput
    some?: LocationsWhereInput
    none?: LocationsWhereInput
  }

  export type AttachmentsListRelationFilter = {
    every?: AttachmentsWhereInput
    some?: AttachmentsWhereInput
    none?: AttachmentsWhereInput
  }

  export type LocationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IssuesCountOrderByAggregateInput = {
    issue_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssuesAvgOrderByAggregateInput = {
    issue_id?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
  }

  export type IssuesMaxOrderByAggregateInput = {
    issue_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssuesMinOrderByAggregateInput = {
    issue_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssuesSumOrderByAggregateInput = {
    issue_id?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
  }

  export type EnumstatusListWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusList | EnumstatusListFieldRefInput<$PrismaModel>
    in?: $Enums.statusList[] | ListEnumstatusListFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusList[] | ListEnumstatusListFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusListWithAggregatesFilter<$PrismaModel> | $Enums.statusList
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusListFilter<$PrismaModel>
    _max?: NestedEnumstatusListFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IssuesScalarRelationFilter = {
    is?: IssuesWhereInput
    isNot?: IssuesWhereInput
  }

  export type LocationsCountOrderByAggregateInput = {
    location_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    issueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationsAvgOrderByAggregateInput = {
    location_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    issueId?: SortOrder
  }

  export type LocationsMaxOrderByAggregateInput = {
    location_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    issueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationsMinOrderByAggregateInput = {
    location_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    issueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationsSumOrderByAggregateInput = {
    location_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    issueId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AttachmentsCountOrderByAggregateInput = {
    attachment_id?: SortOrder
    file_url?: SortOrder
    issueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentsAvgOrderByAggregateInput = {
    attachment_id?: SortOrder
    issueId?: SortOrder
  }

  export type AttachmentsMaxOrderByAggregateInput = {
    attachment_id?: SortOrder
    file_url?: SortOrder
    issueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentsMinOrderByAggregateInput = {
    attachment_id?: SortOrder
    file_url?: SortOrder
    issueId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AttachmentsSumOrderByAggregateInput = {
    attachment_id?: SortOrder
    issueId?: SortOrder
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    issuesId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    issuesId?: SortOrder
    userId?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    issuesId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    issuesId?: SortOrder
    userId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    id?: SortOrder
    issuesId?: SortOrder
    userId?: SortOrder
  }

  export type AnnouncementsScalarRelationFilter = {
    is?: AnnouncementsWhereInput
    isNot?: AnnouncementsWhereInput
  }

  export type AnnouncementsAttachmentsCountOrderByAggregateInput = {
    attachment_id?: SortOrder
    file_url?: SortOrder
    announcementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementsAttachmentsAvgOrderByAggregateInput = {
    attachment_id?: SortOrder
    announcementId?: SortOrder
  }

  export type AnnouncementsAttachmentsMaxOrderByAggregateInput = {
    attachment_id?: SortOrder
    file_url?: SortOrder
    announcementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementsAttachmentsMinOrderByAggregateInput = {
    attachment_id?: SortOrder
    file_url?: SortOrder
    announcementId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementsAttachmentsSumOrderByAggregateInput = {
    attachment_id?: SortOrder
    announcementId?: SortOrder
  }

  export type AnnouncementsAttachmentsListRelationFilter = {
    every?: AnnouncementsAttachmentsWhereInput
    some?: AnnouncementsAttachmentsWhereInput
    none?: AnnouncementsAttachmentsWhereInput
  }

  export type AnnouncementsAttachmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementsCountOrderByAggregateInput = {
    announcement_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementsAvgOrderByAggregateInput = {
    announcement_id?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type AnnouncementsMaxOrderByAggregateInput = {
    announcement_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementsMinOrderByAggregateInput = {
    announcement_id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnnouncementsSumOrderByAggregateInput = {
    announcement_id?: SortOrder
    authorId?: SortOrder
    categoryId?: SortOrder
  }

  export type IssuesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<IssuesCreateWithoutCategoryInput, IssuesUncheckedCreateWithoutCategoryInput> | IssuesCreateWithoutCategoryInput[] | IssuesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutCategoryInput | IssuesCreateOrConnectWithoutCategoryInput[]
    createMany?: IssuesCreateManyCategoryInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
  }

  export type AnnouncementsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AnnouncementsCreateWithoutCategoryInput, AnnouncementsUncheckedCreateWithoutCategoryInput> | AnnouncementsCreateWithoutCategoryInput[] | AnnouncementsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutCategoryInput | AnnouncementsCreateOrConnectWithoutCategoryInput[]
    createMany?: AnnouncementsCreateManyCategoryInputEnvelope
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
  }

  export type IssuesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<IssuesCreateWithoutCategoryInput, IssuesUncheckedCreateWithoutCategoryInput> | IssuesCreateWithoutCategoryInput[] | IssuesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutCategoryInput | IssuesCreateOrConnectWithoutCategoryInput[]
    createMany?: IssuesCreateManyCategoryInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
  }

  export type AnnouncementsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AnnouncementsCreateWithoutCategoryInput, AnnouncementsUncheckedCreateWithoutCategoryInput> | AnnouncementsCreateWithoutCategoryInput[] | AnnouncementsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutCategoryInput | AnnouncementsCreateOrConnectWithoutCategoryInput[]
    createMany?: AnnouncementsCreateManyCategoryInputEnvelope
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IssuesUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<IssuesCreateWithoutCategoryInput, IssuesUncheckedCreateWithoutCategoryInput> | IssuesCreateWithoutCategoryInput[] | IssuesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutCategoryInput | IssuesCreateOrConnectWithoutCategoryInput[]
    upsert?: IssuesUpsertWithWhereUniqueWithoutCategoryInput | IssuesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: IssuesCreateManyCategoryInputEnvelope
    set?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    disconnect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    delete?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    update?: IssuesUpdateWithWhereUniqueWithoutCategoryInput | IssuesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: IssuesUpdateManyWithWhereWithoutCategoryInput | IssuesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
  }

  export type AnnouncementsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AnnouncementsCreateWithoutCategoryInput, AnnouncementsUncheckedCreateWithoutCategoryInput> | AnnouncementsCreateWithoutCategoryInput[] | AnnouncementsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutCategoryInput | AnnouncementsCreateOrConnectWithoutCategoryInput[]
    upsert?: AnnouncementsUpsertWithWhereUniqueWithoutCategoryInput | AnnouncementsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AnnouncementsCreateManyCategoryInputEnvelope
    set?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    disconnect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    delete?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    update?: AnnouncementsUpdateWithWhereUniqueWithoutCategoryInput | AnnouncementsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AnnouncementsUpdateManyWithWhereWithoutCategoryInput | AnnouncementsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AnnouncementsScalarWhereInput | AnnouncementsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IssuesUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<IssuesCreateWithoutCategoryInput, IssuesUncheckedCreateWithoutCategoryInput> | IssuesCreateWithoutCategoryInput[] | IssuesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutCategoryInput | IssuesCreateOrConnectWithoutCategoryInput[]
    upsert?: IssuesUpsertWithWhereUniqueWithoutCategoryInput | IssuesUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: IssuesCreateManyCategoryInputEnvelope
    set?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    disconnect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    delete?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    update?: IssuesUpdateWithWhereUniqueWithoutCategoryInput | IssuesUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: IssuesUpdateManyWithWhereWithoutCategoryInput | IssuesUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
  }

  export type AnnouncementsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AnnouncementsCreateWithoutCategoryInput, AnnouncementsUncheckedCreateWithoutCategoryInput> | AnnouncementsCreateWithoutCategoryInput[] | AnnouncementsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutCategoryInput | AnnouncementsCreateOrConnectWithoutCategoryInput[]
    upsert?: AnnouncementsUpsertWithWhereUniqueWithoutCategoryInput | AnnouncementsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AnnouncementsCreateManyCategoryInputEnvelope
    set?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    disconnect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    delete?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    update?: AnnouncementsUpdateWithWhereUniqueWithoutCategoryInput | AnnouncementsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AnnouncementsUpdateManyWithWhereWithoutCategoryInput | AnnouncementsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AnnouncementsScalarWhereInput | AnnouncementsScalarWhereInput[]
  }

  export type IssuesCreateNestedManyWithoutUserInput = {
    create?: XOR<IssuesCreateWithoutUserInput, IssuesUncheckedCreateWithoutUserInput> | IssuesCreateWithoutUserInput[] | IssuesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutUserInput | IssuesCreateOrConnectWithoutUserInput[]
    createMany?: IssuesCreateManyUserInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type AnnouncementsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AnnouncementsCreateWithoutAuthorInput, AnnouncementsUncheckedCreateWithoutAuthorInput> | AnnouncementsCreateWithoutAuthorInput[] | AnnouncementsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutAuthorInput | AnnouncementsCreateOrConnectWithoutAuthorInput[]
    createMany?: AnnouncementsCreateManyAuthorInputEnvelope
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
  }

  export type IssuesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IssuesCreateWithoutUserInput, IssuesUncheckedCreateWithoutUserInput> | IssuesCreateWithoutUserInput[] | IssuesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutUserInput | IssuesCreateOrConnectWithoutUserInput[]
    createMany?: IssuesCreateManyUserInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type AnnouncementsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AnnouncementsCreateWithoutAuthorInput, AnnouncementsUncheckedCreateWithoutAuthorInput> | AnnouncementsCreateWithoutAuthorInput[] | AnnouncementsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutAuthorInput | AnnouncementsCreateOrConnectWithoutAuthorInput[]
    createMany?: AnnouncementsCreateManyAuthorInputEnvelope
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
  }

  export type EnumUserListFieldUpdateOperationsInput = {
    set?: $Enums.UserList
  }

  export type IssuesUpdateManyWithoutUserNestedInput = {
    create?: XOR<IssuesCreateWithoutUserInput, IssuesUncheckedCreateWithoutUserInput> | IssuesCreateWithoutUserInput[] | IssuesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutUserInput | IssuesCreateOrConnectWithoutUserInput[]
    upsert?: IssuesUpsertWithWhereUniqueWithoutUserInput | IssuesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IssuesCreateManyUserInputEnvelope
    set?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    disconnect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    delete?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    update?: IssuesUpdateWithWhereUniqueWithoutUserInput | IssuesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IssuesUpdateManyWithWhereWithoutUserInput | IssuesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type AnnouncementsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AnnouncementsCreateWithoutAuthorInput, AnnouncementsUncheckedCreateWithoutAuthorInput> | AnnouncementsCreateWithoutAuthorInput[] | AnnouncementsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutAuthorInput | AnnouncementsCreateOrConnectWithoutAuthorInput[]
    upsert?: AnnouncementsUpsertWithWhereUniqueWithoutAuthorInput | AnnouncementsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AnnouncementsCreateManyAuthorInputEnvelope
    set?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    disconnect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    delete?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    update?: AnnouncementsUpdateWithWhereUniqueWithoutAuthorInput | AnnouncementsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AnnouncementsUpdateManyWithWhereWithoutAuthorInput | AnnouncementsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AnnouncementsScalarWhereInput | AnnouncementsScalarWhereInput[]
  }

  export type IssuesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IssuesCreateWithoutUserInput, IssuesUncheckedCreateWithoutUserInput> | IssuesCreateWithoutUserInput[] | IssuesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutUserInput | IssuesCreateOrConnectWithoutUserInput[]
    upsert?: IssuesUpsertWithWhereUniqueWithoutUserInput | IssuesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IssuesCreateManyUserInputEnvelope
    set?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    disconnect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    delete?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
    update?: IssuesUpdateWithWhereUniqueWithoutUserInput | IssuesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IssuesUpdateManyWithWhereWithoutUserInput | IssuesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type AnnouncementsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AnnouncementsCreateWithoutAuthorInput, AnnouncementsUncheckedCreateWithoutAuthorInput> | AnnouncementsCreateWithoutAuthorInput[] | AnnouncementsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutAuthorInput | AnnouncementsCreateOrConnectWithoutAuthorInput[]
    upsert?: AnnouncementsUpsertWithWhereUniqueWithoutAuthorInput | AnnouncementsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AnnouncementsCreateManyAuthorInputEnvelope
    set?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    disconnect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    delete?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    connect?: AnnouncementsWhereUniqueInput | AnnouncementsWhereUniqueInput[]
    update?: AnnouncementsUpdateWithWhereUniqueWithoutAuthorInput | AnnouncementsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AnnouncementsUpdateManyWithWhereWithoutAuthorInput | AnnouncementsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AnnouncementsScalarWhereInput | AnnouncementsScalarWhereInput[]
  }

  export type CategoriesCreateNestedOneWithoutIssueInput = {
    create?: XOR<CategoriesCreateWithoutIssueInput, CategoriesUncheckedCreateWithoutIssueInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutIssueInput
    connect?: CategoriesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutIssueInput = {
    create?: XOR<UsersCreateWithoutIssueInput, UsersUncheckedCreateWithoutIssueInput>
    connectOrCreate?: UsersCreateOrConnectWithoutIssueInput
    connect?: UsersWhereUniqueInput
  }

  export type LocationsCreateNestedManyWithoutIssuesInput = {
    create?: XOR<LocationsCreateWithoutIssuesInput, LocationsUncheckedCreateWithoutIssuesInput> | LocationsCreateWithoutIssuesInput[] | LocationsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutIssuesInput | LocationsCreateOrConnectWithoutIssuesInput[]
    createMany?: LocationsCreateManyIssuesInputEnvelope
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
  }

  export type AttachmentsCreateNestedManyWithoutIssuesInput = {
    create?: XOR<AttachmentsCreateWithoutIssuesInput, AttachmentsUncheckedCreateWithoutIssuesInput> | AttachmentsCreateWithoutIssuesInput[] | AttachmentsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutIssuesInput | AttachmentsCreateOrConnectWithoutIssuesInput[]
    createMany?: AttachmentsCreateManyIssuesInputEnvelope
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutIssuesInput = {
    create?: XOR<CommentsCreateWithoutIssuesInput, CommentsUncheckedCreateWithoutIssuesInput> | CommentsCreateWithoutIssuesInput[] | CommentsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutIssuesInput | CommentsCreateOrConnectWithoutIssuesInput[]
    createMany?: CommentsCreateManyIssuesInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type LocationsUncheckedCreateNestedManyWithoutIssuesInput = {
    create?: XOR<LocationsCreateWithoutIssuesInput, LocationsUncheckedCreateWithoutIssuesInput> | LocationsCreateWithoutIssuesInput[] | LocationsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutIssuesInput | LocationsCreateOrConnectWithoutIssuesInput[]
    createMany?: LocationsCreateManyIssuesInputEnvelope
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
  }

  export type AttachmentsUncheckedCreateNestedManyWithoutIssuesInput = {
    create?: XOR<AttachmentsCreateWithoutIssuesInput, AttachmentsUncheckedCreateWithoutIssuesInput> | AttachmentsCreateWithoutIssuesInput[] | AttachmentsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutIssuesInput | AttachmentsCreateOrConnectWithoutIssuesInput[]
    createMany?: AttachmentsCreateManyIssuesInputEnvelope
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutIssuesInput = {
    create?: XOR<CommentsCreateWithoutIssuesInput, CommentsUncheckedCreateWithoutIssuesInput> | CommentsCreateWithoutIssuesInput[] | CommentsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutIssuesInput | CommentsCreateOrConnectWithoutIssuesInput[]
    createMany?: CommentsCreateManyIssuesInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type EnumstatusListFieldUpdateOperationsInput = {
    set?: $Enums.statusList
  }

  export type CategoriesUpdateOneRequiredWithoutIssueNestedInput = {
    create?: XOR<CategoriesCreateWithoutIssueInput, CategoriesUncheckedCreateWithoutIssueInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutIssueInput
    upsert?: CategoriesUpsertWithoutIssueInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutIssueInput, CategoriesUpdateWithoutIssueInput>, CategoriesUncheckedUpdateWithoutIssueInput>
  }

  export type UsersUpdateOneRequiredWithoutIssueNestedInput = {
    create?: XOR<UsersCreateWithoutIssueInput, UsersUncheckedCreateWithoutIssueInput>
    connectOrCreate?: UsersCreateOrConnectWithoutIssueInput
    upsert?: UsersUpsertWithoutIssueInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutIssueInput, UsersUpdateWithoutIssueInput>, UsersUncheckedUpdateWithoutIssueInput>
  }

  export type LocationsUpdateManyWithoutIssuesNestedInput = {
    create?: XOR<LocationsCreateWithoutIssuesInput, LocationsUncheckedCreateWithoutIssuesInput> | LocationsCreateWithoutIssuesInput[] | LocationsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutIssuesInput | LocationsCreateOrConnectWithoutIssuesInput[]
    upsert?: LocationsUpsertWithWhereUniqueWithoutIssuesInput | LocationsUpsertWithWhereUniqueWithoutIssuesInput[]
    createMany?: LocationsCreateManyIssuesInputEnvelope
    set?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    disconnect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    delete?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    update?: LocationsUpdateWithWhereUniqueWithoutIssuesInput | LocationsUpdateWithWhereUniqueWithoutIssuesInput[]
    updateMany?: LocationsUpdateManyWithWhereWithoutIssuesInput | LocationsUpdateManyWithWhereWithoutIssuesInput[]
    deleteMany?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
  }

  export type AttachmentsUpdateManyWithoutIssuesNestedInput = {
    create?: XOR<AttachmentsCreateWithoutIssuesInput, AttachmentsUncheckedCreateWithoutIssuesInput> | AttachmentsCreateWithoutIssuesInput[] | AttachmentsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutIssuesInput | AttachmentsCreateOrConnectWithoutIssuesInput[]
    upsert?: AttachmentsUpsertWithWhereUniqueWithoutIssuesInput | AttachmentsUpsertWithWhereUniqueWithoutIssuesInput[]
    createMany?: AttachmentsCreateManyIssuesInputEnvelope
    set?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    disconnect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    delete?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    update?: AttachmentsUpdateWithWhereUniqueWithoutIssuesInput | AttachmentsUpdateWithWhereUniqueWithoutIssuesInput[]
    updateMany?: AttachmentsUpdateManyWithWhereWithoutIssuesInput | AttachmentsUpdateManyWithWhereWithoutIssuesInput[]
    deleteMany?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutIssuesNestedInput = {
    create?: XOR<CommentsCreateWithoutIssuesInput, CommentsUncheckedCreateWithoutIssuesInput> | CommentsCreateWithoutIssuesInput[] | CommentsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutIssuesInput | CommentsCreateOrConnectWithoutIssuesInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutIssuesInput | CommentsUpsertWithWhereUniqueWithoutIssuesInput[]
    createMany?: CommentsCreateManyIssuesInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutIssuesInput | CommentsUpdateWithWhereUniqueWithoutIssuesInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutIssuesInput | CommentsUpdateManyWithWhereWithoutIssuesInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type LocationsUncheckedUpdateManyWithoutIssuesNestedInput = {
    create?: XOR<LocationsCreateWithoutIssuesInput, LocationsUncheckedCreateWithoutIssuesInput> | LocationsCreateWithoutIssuesInput[] | LocationsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: LocationsCreateOrConnectWithoutIssuesInput | LocationsCreateOrConnectWithoutIssuesInput[]
    upsert?: LocationsUpsertWithWhereUniqueWithoutIssuesInput | LocationsUpsertWithWhereUniqueWithoutIssuesInput[]
    createMany?: LocationsCreateManyIssuesInputEnvelope
    set?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    disconnect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    delete?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    connect?: LocationsWhereUniqueInput | LocationsWhereUniqueInput[]
    update?: LocationsUpdateWithWhereUniqueWithoutIssuesInput | LocationsUpdateWithWhereUniqueWithoutIssuesInput[]
    updateMany?: LocationsUpdateManyWithWhereWithoutIssuesInput | LocationsUpdateManyWithWhereWithoutIssuesInput[]
    deleteMany?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
  }

  export type AttachmentsUncheckedUpdateManyWithoutIssuesNestedInput = {
    create?: XOR<AttachmentsCreateWithoutIssuesInput, AttachmentsUncheckedCreateWithoutIssuesInput> | AttachmentsCreateWithoutIssuesInput[] | AttachmentsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutIssuesInput | AttachmentsCreateOrConnectWithoutIssuesInput[]
    upsert?: AttachmentsUpsertWithWhereUniqueWithoutIssuesInput | AttachmentsUpsertWithWhereUniqueWithoutIssuesInput[]
    createMany?: AttachmentsCreateManyIssuesInputEnvelope
    set?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    disconnect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    delete?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    update?: AttachmentsUpdateWithWhereUniqueWithoutIssuesInput | AttachmentsUpdateWithWhereUniqueWithoutIssuesInput[]
    updateMany?: AttachmentsUpdateManyWithWhereWithoutIssuesInput | AttachmentsUpdateManyWithWhereWithoutIssuesInput[]
    deleteMany?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutIssuesNestedInput = {
    create?: XOR<CommentsCreateWithoutIssuesInput, CommentsUncheckedCreateWithoutIssuesInput> | CommentsCreateWithoutIssuesInput[] | CommentsUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutIssuesInput | CommentsCreateOrConnectWithoutIssuesInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutIssuesInput | CommentsUpsertWithWhereUniqueWithoutIssuesInput[]
    createMany?: CommentsCreateManyIssuesInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutIssuesInput | CommentsUpdateWithWhereUniqueWithoutIssuesInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutIssuesInput | CommentsUpdateManyWithWhereWithoutIssuesInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type IssuesCreateNestedOneWithoutLocationsInput = {
    create?: XOR<IssuesCreateWithoutLocationsInput, IssuesUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: IssuesCreateOrConnectWithoutLocationsInput
    connect?: IssuesWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IssuesUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<IssuesCreateWithoutLocationsInput, IssuesUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: IssuesCreateOrConnectWithoutLocationsInput
    upsert?: IssuesUpsertWithoutLocationsInput
    connect?: IssuesWhereUniqueInput
    update?: XOR<XOR<IssuesUpdateToOneWithWhereWithoutLocationsInput, IssuesUpdateWithoutLocationsInput>, IssuesUncheckedUpdateWithoutLocationsInput>
  }

  export type IssuesCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<IssuesCreateWithoutAttachmentsInput, IssuesUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: IssuesCreateOrConnectWithoutAttachmentsInput
    connect?: IssuesWhereUniqueInput
  }

  export type IssuesUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<IssuesCreateWithoutAttachmentsInput, IssuesUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: IssuesCreateOrConnectWithoutAttachmentsInput
    upsert?: IssuesUpsertWithoutAttachmentsInput
    connect?: IssuesWhereUniqueInput
    update?: XOR<XOR<IssuesUpdateToOneWithWhereWithoutAttachmentsInput, IssuesUpdateWithoutAttachmentsInput>, IssuesUncheckedUpdateWithoutAttachmentsInput>
  }

  export type IssuesCreateNestedOneWithoutCommentInput = {
    create?: XOR<IssuesCreateWithoutCommentInput, IssuesUncheckedCreateWithoutCommentInput>
    connectOrCreate?: IssuesCreateOrConnectWithoutCommentInput
    connect?: IssuesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutCommentInput = {
    create?: XOR<UsersCreateWithoutCommentInput, UsersUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentInput
    connect?: UsersWhereUniqueInput
  }

  export type IssuesUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<IssuesCreateWithoutCommentInput, IssuesUncheckedCreateWithoutCommentInput>
    connectOrCreate?: IssuesCreateOrConnectWithoutCommentInput
    upsert?: IssuesUpsertWithoutCommentInput
    connect?: IssuesWhereUniqueInput
    update?: XOR<XOR<IssuesUpdateToOneWithWhereWithoutCommentInput, IssuesUpdateWithoutCommentInput>, IssuesUncheckedUpdateWithoutCommentInput>
  }

  export type UsersUpdateOneRequiredWithoutCommentNestedInput = {
    create?: XOR<UsersCreateWithoutCommentInput, UsersUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentInput
    upsert?: UsersUpsertWithoutCommentInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentInput, UsersUpdateWithoutCommentInput>, UsersUncheckedUpdateWithoutCommentInput>
  }

  export type AnnouncementsCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<AnnouncementsCreateWithoutAttachmentsInput, AnnouncementsUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutAttachmentsInput
    connect?: AnnouncementsWhereUniqueInput
  }

  export type AnnouncementsUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<AnnouncementsCreateWithoutAttachmentsInput, AnnouncementsUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: AnnouncementsCreateOrConnectWithoutAttachmentsInput
    upsert?: AnnouncementsUpsertWithoutAttachmentsInput
    connect?: AnnouncementsWhereUniqueInput
    update?: XOR<XOR<AnnouncementsUpdateToOneWithWhereWithoutAttachmentsInput, AnnouncementsUpdateWithoutAttachmentsInput>, AnnouncementsUncheckedUpdateWithoutAttachmentsInput>
  }

  export type CategoriesCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<CategoriesCreateWithoutAnnouncementsInput, CategoriesUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutAnnouncementsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<UsersCreateWithoutAnnouncementsInput, UsersUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAnnouncementsInput
    connect?: UsersWhereUniqueInput
  }

  export type AnnouncementsAttachmentsCreateNestedManyWithoutAnnouncementsInput = {
    create?: XOR<AnnouncementsAttachmentsCreateWithoutAnnouncementsInput, AnnouncementsAttachmentsUncheckedCreateWithoutAnnouncementsInput> | AnnouncementsAttachmentsCreateWithoutAnnouncementsInput[] | AnnouncementsAttachmentsUncheckedCreateWithoutAnnouncementsInput[]
    connectOrCreate?: AnnouncementsAttachmentsCreateOrConnectWithoutAnnouncementsInput | AnnouncementsAttachmentsCreateOrConnectWithoutAnnouncementsInput[]
    createMany?: AnnouncementsAttachmentsCreateManyAnnouncementsInputEnvelope
    connect?: AnnouncementsAttachmentsWhereUniqueInput | AnnouncementsAttachmentsWhereUniqueInput[]
  }

  export type AnnouncementsAttachmentsUncheckedCreateNestedManyWithoutAnnouncementsInput = {
    create?: XOR<AnnouncementsAttachmentsCreateWithoutAnnouncementsInput, AnnouncementsAttachmentsUncheckedCreateWithoutAnnouncementsInput> | AnnouncementsAttachmentsCreateWithoutAnnouncementsInput[] | AnnouncementsAttachmentsUncheckedCreateWithoutAnnouncementsInput[]
    connectOrCreate?: AnnouncementsAttachmentsCreateOrConnectWithoutAnnouncementsInput | AnnouncementsAttachmentsCreateOrConnectWithoutAnnouncementsInput[]
    createMany?: AnnouncementsAttachmentsCreateManyAnnouncementsInputEnvelope
    connect?: AnnouncementsAttachmentsWhereUniqueInput | AnnouncementsAttachmentsWhereUniqueInput[]
  }

  export type CategoriesUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<CategoriesCreateWithoutAnnouncementsInput, CategoriesUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutAnnouncementsInput
    upsert?: CategoriesUpsertWithoutAnnouncementsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutAnnouncementsInput, CategoriesUpdateWithoutAnnouncementsInput>, CategoriesUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type UsersUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<UsersCreateWithoutAnnouncementsInput, UsersUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAnnouncementsInput
    upsert?: UsersUpsertWithoutAnnouncementsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAnnouncementsInput, UsersUpdateWithoutAnnouncementsInput>, UsersUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type AnnouncementsAttachmentsUpdateManyWithoutAnnouncementsNestedInput = {
    create?: XOR<AnnouncementsAttachmentsCreateWithoutAnnouncementsInput, AnnouncementsAttachmentsUncheckedCreateWithoutAnnouncementsInput> | AnnouncementsAttachmentsCreateWithoutAnnouncementsInput[] | AnnouncementsAttachmentsUncheckedCreateWithoutAnnouncementsInput[]
    connectOrCreate?: AnnouncementsAttachmentsCreateOrConnectWithoutAnnouncementsInput | AnnouncementsAttachmentsCreateOrConnectWithoutAnnouncementsInput[]
    upsert?: AnnouncementsAttachmentsUpsertWithWhereUniqueWithoutAnnouncementsInput | AnnouncementsAttachmentsUpsertWithWhereUniqueWithoutAnnouncementsInput[]
    createMany?: AnnouncementsAttachmentsCreateManyAnnouncementsInputEnvelope
    set?: AnnouncementsAttachmentsWhereUniqueInput | AnnouncementsAttachmentsWhereUniqueInput[]
    disconnect?: AnnouncementsAttachmentsWhereUniqueInput | AnnouncementsAttachmentsWhereUniqueInput[]
    delete?: AnnouncementsAttachmentsWhereUniqueInput | AnnouncementsAttachmentsWhereUniqueInput[]
    connect?: AnnouncementsAttachmentsWhereUniqueInput | AnnouncementsAttachmentsWhereUniqueInput[]
    update?: AnnouncementsAttachmentsUpdateWithWhereUniqueWithoutAnnouncementsInput | AnnouncementsAttachmentsUpdateWithWhereUniqueWithoutAnnouncementsInput[]
    updateMany?: AnnouncementsAttachmentsUpdateManyWithWhereWithoutAnnouncementsInput | AnnouncementsAttachmentsUpdateManyWithWhereWithoutAnnouncementsInput[]
    deleteMany?: AnnouncementsAttachmentsScalarWhereInput | AnnouncementsAttachmentsScalarWhereInput[]
  }

  export type AnnouncementsAttachmentsUncheckedUpdateManyWithoutAnnouncementsNestedInput = {
    create?: XOR<AnnouncementsAttachmentsCreateWithoutAnnouncementsInput, AnnouncementsAttachmentsUncheckedCreateWithoutAnnouncementsInput> | AnnouncementsAttachmentsCreateWithoutAnnouncementsInput[] | AnnouncementsAttachmentsUncheckedCreateWithoutAnnouncementsInput[]
    connectOrCreate?: AnnouncementsAttachmentsCreateOrConnectWithoutAnnouncementsInput | AnnouncementsAttachmentsCreateOrConnectWithoutAnnouncementsInput[]
    upsert?: AnnouncementsAttachmentsUpsertWithWhereUniqueWithoutAnnouncementsInput | AnnouncementsAttachmentsUpsertWithWhereUniqueWithoutAnnouncementsInput[]
    createMany?: AnnouncementsAttachmentsCreateManyAnnouncementsInputEnvelope
    set?: AnnouncementsAttachmentsWhereUniqueInput | AnnouncementsAttachmentsWhereUniqueInput[]
    disconnect?: AnnouncementsAttachmentsWhereUniqueInput | AnnouncementsAttachmentsWhereUniqueInput[]
    delete?: AnnouncementsAttachmentsWhereUniqueInput | AnnouncementsAttachmentsWhereUniqueInput[]
    connect?: AnnouncementsAttachmentsWhereUniqueInput | AnnouncementsAttachmentsWhereUniqueInput[]
    update?: AnnouncementsAttachmentsUpdateWithWhereUniqueWithoutAnnouncementsInput | AnnouncementsAttachmentsUpdateWithWhereUniqueWithoutAnnouncementsInput[]
    updateMany?: AnnouncementsAttachmentsUpdateManyWithWhereWithoutAnnouncementsInput | AnnouncementsAttachmentsUpdateManyWithWhereWithoutAnnouncementsInput[]
    deleteMany?: AnnouncementsAttachmentsScalarWhereInput | AnnouncementsAttachmentsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserListFilter<$PrismaModel = never> = {
    equals?: $Enums.UserList | EnumUserListFieldRefInput<$PrismaModel>
    in?: $Enums.UserList[] | ListEnumUserListFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserList[] | ListEnumUserListFieldRefInput<$PrismaModel>
    not?: NestedEnumUserListFilter<$PrismaModel> | $Enums.UserList
  }

  export type NestedEnumUserListWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserList | EnumUserListFieldRefInput<$PrismaModel>
    in?: $Enums.UserList[] | ListEnumUserListFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserList[] | ListEnumUserListFieldRefInput<$PrismaModel>
    not?: NestedEnumUserListWithAggregatesFilter<$PrismaModel> | $Enums.UserList
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserListFilter<$PrismaModel>
    _max?: NestedEnumUserListFilter<$PrismaModel>
  }

  export type NestedEnumstatusListFilter<$PrismaModel = never> = {
    equals?: $Enums.statusList | EnumstatusListFieldRefInput<$PrismaModel>
    in?: $Enums.statusList[] | ListEnumstatusListFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusList[] | ListEnumstatusListFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusListFilter<$PrismaModel> | $Enums.statusList
  }

  export type NestedEnumstatusListWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusList | EnumstatusListFieldRefInput<$PrismaModel>
    in?: $Enums.statusList[] | ListEnumstatusListFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusList[] | ListEnumstatusListFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusListWithAggregatesFilter<$PrismaModel> | $Enums.statusList
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusListFilter<$PrismaModel>
    _max?: NestedEnumstatusListFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IssuesCreateWithoutCategoryInput = {
    title: string
    description: string
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutIssueInput
    locations?: LocationsCreateNestedManyWithoutIssuesInput
    attachments?: AttachmentsCreateNestedManyWithoutIssuesInput
    comment?: CommentsCreateNestedManyWithoutIssuesInput
  }

  export type IssuesUncheckedCreateWithoutCategoryInput = {
    issue_id?: number
    title: string
    description: string
    userId: number
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationsUncheckedCreateNestedManyWithoutIssuesInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutIssuesInput
    comment?: CommentsUncheckedCreateNestedManyWithoutIssuesInput
  }

  export type IssuesCreateOrConnectWithoutCategoryInput = {
    where: IssuesWhereUniqueInput
    create: XOR<IssuesCreateWithoutCategoryInput, IssuesUncheckedCreateWithoutCategoryInput>
  }

  export type IssuesCreateManyCategoryInputEnvelope = {
    data: IssuesCreateManyCategoryInput | IssuesCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementsCreateWithoutCategoryInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UsersCreateNestedOneWithoutAnnouncementsInput
    attachments?: AnnouncementsAttachmentsCreateNestedManyWithoutAnnouncementsInput
  }

  export type AnnouncementsUncheckedCreateWithoutCategoryInput = {
    announcement_id?: number
    title: string
    content: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AnnouncementsAttachmentsUncheckedCreateNestedManyWithoutAnnouncementsInput
  }

  export type AnnouncementsCreateOrConnectWithoutCategoryInput = {
    where: AnnouncementsWhereUniqueInput
    create: XOR<AnnouncementsCreateWithoutCategoryInput, AnnouncementsUncheckedCreateWithoutCategoryInput>
  }

  export type AnnouncementsCreateManyCategoryInputEnvelope = {
    data: AnnouncementsCreateManyCategoryInput | AnnouncementsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type IssuesUpsertWithWhereUniqueWithoutCategoryInput = {
    where: IssuesWhereUniqueInput
    update: XOR<IssuesUpdateWithoutCategoryInput, IssuesUncheckedUpdateWithoutCategoryInput>
    create: XOR<IssuesCreateWithoutCategoryInput, IssuesUncheckedCreateWithoutCategoryInput>
  }

  export type IssuesUpdateWithWhereUniqueWithoutCategoryInput = {
    where: IssuesWhereUniqueInput
    data: XOR<IssuesUpdateWithoutCategoryInput, IssuesUncheckedUpdateWithoutCategoryInput>
  }

  export type IssuesUpdateManyWithWhereWithoutCategoryInput = {
    where: IssuesScalarWhereInput
    data: XOR<IssuesUpdateManyMutationInput, IssuesUncheckedUpdateManyWithoutCategoryInput>
  }

  export type IssuesScalarWhereInput = {
    AND?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
    OR?: IssuesScalarWhereInput[]
    NOT?: IssuesScalarWhereInput | IssuesScalarWhereInput[]
    issue_id?: IntFilter<"Issues"> | number
    title?: StringFilter<"Issues"> | string
    description?: StringFilter<"Issues"> | string
    categoryId?: IntFilter<"Issues"> | number
    userId?: IntFilter<"Issues"> | number
    status?: EnumstatusListFilter<"Issues"> | $Enums.statusList
    createdAt?: DateTimeFilter<"Issues"> | Date | string
    updatedAt?: DateTimeFilter<"Issues"> | Date | string
  }

  export type AnnouncementsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: AnnouncementsWhereUniqueInput
    update: XOR<AnnouncementsUpdateWithoutCategoryInput, AnnouncementsUncheckedUpdateWithoutCategoryInput>
    create: XOR<AnnouncementsCreateWithoutCategoryInput, AnnouncementsUncheckedCreateWithoutCategoryInput>
  }

  export type AnnouncementsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: AnnouncementsWhereUniqueInput
    data: XOR<AnnouncementsUpdateWithoutCategoryInput, AnnouncementsUncheckedUpdateWithoutCategoryInput>
  }

  export type AnnouncementsUpdateManyWithWhereWithoutCategoryInput = {
    where: AnnouncementsScalarWhereInput
    data: XOR<AnnouncementsUpdateManyMutationInput, AnnouncementsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AnnouncementsScalarWhereInput = {
    AND?: AnnouncementsScalarWhereInput | AnnouncementsScalarWhereInput[]
    OR?: AnnouncementsScalarWhereInput[]
    NOT?: AnnouncementsScalarWhereInput | AnnouncementsScalarWhereInput[]
    announcement_id?: IntFilter<"Announcements"> | number
    title?: StringFilter<"Announcements"> | string
    content?: StringFilter<"Announcements"> | string
    authorId?: IntFilter<"Announcements"> | number
    categoryId?: IntFilter<"Announcements"> | number
    createdAt?: DateTimeFilter<"Announcements"> | Date | string
    updatedAt?: DateTimeFilter<"Announcements"> | Date | string
  }

  export type IssuesCreateWithoutUserInput = {
    title: string
    description: string
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutIssueInput
    locations?: LocationsCreateNestedManyWithoutIssuesInput
    attachments?: AttachmentsCreateNestedManyWithoutIssuesInput
    comment?: CommentsCreateNestedManyWithoutIssuesInput
  }

  export type IssuesUncheckedCreateWithoutUserInput = {
    issue_id?: number
    title: string
    description: string
    categoryId: number
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationsUncheckedCreateNestedManyWithoutIssuesInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutIssuesInput
    comment?: CommentsUncheckedCreateNestedManyWithoutIssuesInput
  }

  export type IssuesCreateOrConnectWithoutUserInput = {
    where: IssuesWhereUniqueInput
    create: XOR<IssuesCreateWithoutUserInput, IssuesUncheckedCreateWithoutUserInput>
  }

  export type IssuesCreateManyUserInputEnvelope = {
    data: IssuesCreateManyUserInput | IssuesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutUserInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issues: IssuesCreateNestedOneWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: number
    issuesId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: CommentsCreateManyUserInput | CommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementsCreateWithoutAuthorInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutAnnouncementsInput
    attachments?: AnnouncementsAttachmentsCreateNestedManyWithoutAnnouncementsInput
  }

  export type AnnouncementsUncheckedCreateWithoutAuthorInput = {
    announcement_id?: number
    title: string
    content: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AnnouncementsAttachmentsUncheckedCreateNestedManyWithoutAnnouncementsInput
  }

  export type AnnouncementsCreateOrConnectWithoutAuthorInput = {
    where: AnnouncementsWhereUniqueInput
    create: XOR<AnnouncementsCreateWithoutAuthorInput, AnnouncementsUncheckedCreateWithoutAuthorInput>
  }

  export type AnnouncementsCreateManyAuthorInputEnvelope = {
    data: AnnouncementsCreateManyAuthorInput | AnnouncementsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type IssuesUpsertWithWhereUniqueWithoutUserInput = {
    where: IssuesWhereUniqueInput
    update: XOR<IssuesUpdateWithoutUserInput, IssuesUncheckedUpdateWithoutUserInput>
    create: XOR<IssuesCreateWithoutUserInput, IssuesUncheckedCreateWithoutUserInput>
  }

  export type IssuesUpdateWithWhereUniqueWithoutUserInput = {
    where: IssuesWhereUniqueInput
    data: XOR<IssuesUpdateWithoutUserInput, IssuesUncheckedUpdateWithoutUserInput>
  }

  export type IssuesUpdateManyWithWhereWithoutUserInput = {
    where: IssuesScalarWhereInput
    data: XOR<IssuesUpdateManyMutationInput, IssuesUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: IntFilter<"Comments"> | number
    issuesId?: IntFilter<"Comments"> | number
    userId?: IntFilter<"Comments"> | number
    content?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
  }

  export type AnnouncementsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AnnouncementsWhereUniqueInput
    update: XOR<AnnouncementsUpdateWithoutAuthorInput, AnnouncementsUncheckedUpdateWithoutAuthorInput>
    create: XOR<AnnouncementsCreateWithoutAuthorInput, AnnouncementsUncheckedCreateWithoutAuthorInput>
  }

  export type AnnouncementsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AnnouncementsWhereUniqueInput
    data: XOR<AnnouncementsUpdateWithoutAuthorInput, AnnouncementsUncheckedUpdateWithoutAuthorInput>
  }

  export type AnnouncementsUpdateManyWithWhereWithoutAuthorInput = {
    where: AnnouncementsScalarWhereInput
    data: XOR<AnnouncementsUpdateManyMutationInput, AnnouncementsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CategoriesCreateWithoutIssueInput = {
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    announcements?: AnnouncementsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateWithoutIssueInput = {
    category_id?: number
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    announcements?: AnnouncementsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesCreateOrConnectWithoutIssueInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutIssueInput, CategoriesUncheckedCreateWithoutIssueInput>
  }

  export type UsersCreateWithoutIssueInput = {
    name: string
    email: string
    phone: number
    role?: $Enums.UserList
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentsCreateNestedManyWithoutUserInput
    announcements?: AnnouncementsCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateWithoutIssueInput = {
    user_id?: number
    name: string
    email: string
    phone: number
    role?: $Enums.UserList
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comment?: CommentsUncheckedCreateNestedManyWithoutUserInput
    announcements?: AnnouncementsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersCreateOrConnectWithoutIssueInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutIssueInput, UsersUncheckedCreateWithoutIssueInput>
  }

  export type LocationsCreateWithoutIssuesInput = {
    latitude: number
    longitude: number
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationsUncheckedCreateWithoutIssuesInput = {
    location_id?: number
    latitude: number
    longitude: number
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationsCreateOrConnectWithoutIssuesInput = {
    where: LocationsWhereUniqueInput
    create: XOR<LocationsCreateWithoutIssuesInput, LocationsUncheckedCreateWithoutIssuesInput>
  }

  export type LocationsCreateManyIssuesInputEnvelope = {
    data: LocationsCreateManyIssuesInput | LocationsCreateManyIssuesInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentsCreateWithoutIssuesInput = {
    file_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentsUncheckedCreateWithoutIssuesInput = {
    attachment_id?: number
    file_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentsCreateOrConnectWithoutIssuesInput = {
    where: AttachmentsWhereUniqueInput
    create: XOR<AttachmentsCreateWithoutIssuesInput, AttachmentsUncheckedCreateWithoutIssuesInput>
  }

  export type AttachmentsCreateManyIssuesInputEnvelope = {
    data: AttachmentsCreateManyIssuesInput | AttachmentsCreateManyIssuesInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutIssuesInput = {
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutCommentInput
  }

  export type CommentsUncheckedCreateWithoutIssuesInput = {
    id?: number
    userId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutIssuesInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutIssuesInput, CommentsUncheckedCreateWithoutIssuesInput>
  }

  export type CommentsCreateManyIssuesInputEnvelope = {
    data: CommentsCreateManyIssuesInput | CommentsCreateManyIssuesInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutIssueInput = {
    update: XOR<CategoriesUpdateWithoutIssueInput, CategoriesUncheckedUpdateWithoutIssueInput>
    create: XOR<CategoriesCreateWithoutIssueInput, CategoriesUncheckedCreateWithoutIssueInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutIssueInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutIssueInput, CategoriesUncheckedUpdateWithoutIssueInput>
  }

  export type CategoriesUpdateWithoutIssueInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcements?: AnnouncementsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutIssueInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcements?: AnnouncementsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UsersUpsertWithoutIssueInput = {
    update: XOR<UsersUpdateWithoutIssueInput, UsersUncheckedUpdateWithoutIssueInput>
    create: XOR<UsersCreateWithoutIssueInput, UsersUncheckedCreateWithoutIssueInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutIssueInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutIssueInput, UsersUncheckedUpdateWithoutIssueInput>
  }

  export type UsersUpdateWithoutIssueInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    role?: EnumUserListFieldUpdateOperationsInput | $Enums.UserList
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentsUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementsUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateWithoutIssueInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    role?: EnumUserListFieldUpdateOperationsInput | $Enums.UserList
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type LocationsUpsertWithWhereUniqueWithoutIssuesInput = {
    where: LocationsWhereUniqueInput
    update: XOR<LocationsUpdateWithoutIssuesInput, LocationsUncheckedUpdateWithoutIssuesInput>
    create: XOR<LocationsCreateWithoutIssuesInput, LocationsUncheckedCreateWithoutIssuesInput>
  }

  export type LocationsUpdateWithWhereUniqueWithoutIssuesInput = {
    where: LocationsWhereUniqueInput
    data: XOR<LocationsUpdateWithoutIssuesInput, LocationsUncheckedUpdateWithoutIssuesInput>
  }

  export type LocationsUpdateManyWithWhereWithoutIssuesInput = {
    where: LocationsScalarWhereInput
    data: XOR<LocationsUpdateManyMutationInput, LocationsUncheckedUpdateManyWithoutIssuesInput>
  }

  export type LocationsScalarWhereInput = {
    AND?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
    OR?: LocationsScalarWhereInput[]
    NOT?: LocationsScalarWhereInput | LocationsScalarWhereInput[]
    location_id?: IntFilter<"Locations"> | number
    latitude?: FloatFilter<"Locations"> | number
    longitude?: FloatFilter<"Locations"> | number
    address?: StringFilter<"Locations"> | string
    issueId?: IntFilter<"Locations"> | number
    createdAt?: DateTimeFilter<"Locations"> | Date | string
    updatedAt?: DateTimeFilter<"Locations"> | Date | string
  }

  export type AttachmentsUpsertWithWhereUniqueWithoutIssuesInput = {
    where: AttachmentsWhereUniqueInput
    update: XOR<AttachmentsUpdateWithoutIssuesInput, AttachmentsUncheckedUpdateWithoutIssuesInput>
    create: XOR<AttachmentsCreateWithoutIssuesInput, AttachmentsUncheckedCreateWithoutIssuesInput>
  }

  export type AttachmentsUpdateWithWhereUniqueWithoutIssuesInput = {
    where: AttachmentsWhereUniqueInput
    data: XOR<AttachmentsUpdateWithoutIssuesInput, AttachmentsUncheckedUpdateWithoutIssuesInput>
  }

  export type AttachmentsUpdateManyWithWhereWithoutIssuesInput = {
    where: AttachmentsScalarWhereInput
    data: XOR<AttachmentsUpdateManyMutationInput, AttachmentsUncheckedUpdateManyWithoutIssuesInput>
  }

  export type AttachmentsScalarWhereInput = {
    AND?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
    OR?: AttachmentsScalarWhereInput[]
    NOT?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
    attachment_id?: IntFilter<"Attachments"> | number
    file_url?: StringFilter<"Attachments"> | string
    issueId?: IntFilter<"Attachments"> | number
    createdAt?: DateTimeFilter<"Attachments"> | Date | string
    updatedAt?: DateTimeFilter<"Attachments"> | Date | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutIssuesInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutIssuesInput, CommentsUncheckedUpdateWithoutIssuesInput>
    create: XOR<CommentsCreateWithoutIssuesInput, CommentsUncheckedCreateWithoutIssuesInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutIssuesInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutIssuesInput, CommentsUncheckedUpdateWithoutIssuesInput>
  }

  export type CommentsUpdateManyWithWhereWithoutIssuesInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutIssuesInput>
  }

  export type IssuesCreateWithoutLocationsInput = {
    title: string
    description: string
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutIssueInput
    user: UsersCreateNestedOneWithoutIssueInput
    attachments?: AttachmentsCreateNestedManyWithoutIssuesInput
    comment?: CommentsCreateNestedManyWithoutIssuesInput
  }

  export type IssuesUncheckedCreateWithoutLocationsInput = {
    issue_id?: number
    title: string
    description: string
    categoryId: number
    userId: number
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutIssuesInput
    comment?: CommentsUncheckedCreateNestedManyWithoutIssuesInput
  }

  export type IssuesCreateOrConnectWithoutLocationsInput = {
    where: IssuesWhereUniqueInput
    create: XOR<IssuesCreateWithoutLocationsInput, IssuesUncheckedCreateWithoutLocationsInput>
  }

  export type IssuesUpsertWithoutLocationsInput = {
    update: XOR<IssuesUpdateWithoutLocationsInput, IssuesUncheckedUpdateWithoutLocationsInput>
    create: XOR<IssuesCreateWithoutLocationsInput, IssuesUncheckedCreateWithoutLocationsInput>
    where?: IssuesWhereInput
  }

  export type IssuesUpdateToOneWithWhereWithoutLocationsInput = {
    where?: IssuesWhereInput
    data: XOR<IssuesUpdateWithoutLocationsInput, IssuesUncheckedUpdateWithoutLocationsInput>
  }

  export type IssuesUpdateWithoutLocationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutIssueNestedInput
    user?: UsersUpdateOneRequiredWithoutIssueNestedInput
    attachments?: AttachmentsUpdateManyWithoutIssuesNestedInput
    comment?: CommentsUpdateManyWithoutIssuesNestedInput
  }

  export type IssuesUncheckedUpdateWithoutLocationsInput = {
    issue_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AttachmentsUncheckedUpdateManyWithoutIssuesNestedInput
    comment?: CommentsUncheckedUpdateManyWithoutIssuesNestedInput
  }

  export type IssuesCreateWithoutAttachmentsInput = {
    title: string
    description: string
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutIssueInput
    user: UsersCreateNestedOneWithoutIssueInput
    locations?: LocationsCreateNestedManyWithoutIssuesInput
    comment?: CommentsCreateNestedManyWithoutIssuesInput
  }

  export type IssuesUncheckedCreateWithoutAttachmentsInput = {
    issue_id?: number
    title: string
    description: string
    categoryId: number
    userId: number
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationsUncheckedCreateNestedManyWithoutIssuesInput
    comment?: CommentsUncheckedCreateNestedManyWithoutIssuesInput
  }

  export type IssuesCreateOrConnectWithoutAttachmentsInput = {
    where: IssuesWhereUniqueInput
    create: XOR<IssuesCreateWithoutAttachmentsInput, IssuesUncheckedCreateWithoutAttachmentsInput>
  }

  export type IssuesUpsertWithoutAttachmentsInput = {
    update: XOR<IssuesUpdateWithoutAttachmentsInput, IssuesUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<IssuesCreateWithoutAttachmentsInput, IssuesUncheckedCreateWithoutAttachmentsInput>
    where?: IssuesWhereInput
  }

  export type IssuesUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: IssuesWhereInput
    data: XOR<IssuesUpdateWithoutAttachmentsInput, IssuesUncheckedUpdateWithoutAttachmentsInput>
  }

  export type IssuesUpdateWithoutAttachmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutIssueNestedInput
    user?: UsersUpdateOneRequiredWithoutIssueNestedInput
    locations?: LocationsUpdateManyWithoutIssuesNestedInput
    comment?: CommentsUpdateManyWithoutIssuesNestedInput
  }

  export type IssuesUncheckedUpdateWithoutAttachmentsInput = {
    issue_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationsUncheckedUpdateManyWithoutIssuesNestedInput
    comment?: CommentsUncheckedUpdateManyWithoutIssuesNestedInput
  }

  export type IssuesCreateWithoutCommentInput = {
    title: string
    description: string
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutIssueInput
    user: UsersCreateNestedOneWithoutIssueInput
    locations?: LocationsCreateNestedManyWithoutIssuesInput
    attachments?: AttachmentsCreateNestedManyWithoutIssuesInput
  }

  export type IssuesUncheckedCreateWithoutCommentInput = {
    issue_id?: number
    title: string
    description: string
    categoryId: number
    userId: number
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: LocationsUncheckedCreateNestedManyWithoutIssuesInput
    attachments?: AttachmentsUncheckedCreateNestedManyWithoutIssuesInput
  }

  export type IssuesCreateOrConnectWithoutCommentInput = {
    where: IssuesWhereUniqueInput
    create: XOR<IssuesCreateWithoutCommentInput, IssuesUncheckedCreateWithoutCommentInput>
  }

  export type UsersCreateWithoutCommentInput = {
    name: string
    email: string
    phone: number
    role?: $Enums.UserList
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesCreateNestedManyWithoutUserInput
    announcements?: AnnouncementsCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateWithoutCommentInput = {
    user_id?: number
    name: string
    email: string
    phone: number
    role?: $Enums.UserList
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesUncheckedCreateNestedManyWithoutUserInput
    announcements?: AnnouncementsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersCreateOrConnectWithoutCommentInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentInput, UsersUncheckedCreateWithoutCommentInput>
  }

  export type IssuesUpsertWithoutCommentInput = {
    update: XOR<IssuesUpdateWithoutCommentInput, IssuesUncheckedUpdateWithoutCommentInput>
    create: XOR<IssuesCreateWithoutCommentInput, IssuesUncheckedCreateWithoutCommentInput>
    where?: IssuesWhereInput
  }

  export type IssuesUpdateToOneWithWhereWithoutCommentInput = {
    where?: IssuesWhereInput
    data: XOR<IssuesUpdateWithoutCommentInput, IssuesUncheckedUpdateWithoutCommentInput>
  }

  export type IssuesUpdateWithoutCommentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutIssueNestedInput
    user?: UsersUpdateOneRequiredWithoutIssueNestedInput
    locations?: LocationsUpdateManyWithoutIssuesNestedInput
    attachments?: AttachmentsUpdateManyWithoutIssuesNestedInput
  }

  export type IssuesUncheckedUpdateWithoutCommentInput = {
    issue_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationsUncheckedUpdateManyWithoutIssuesNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutIssuesNestedInput
  }

  export type UsersUpsertWithoutCommentInput = {
    update: XOR<UsersUpdateWithoutCommentInput, UsersUncheckedUpdateWithoutCommentInput>
    create: XOR<UsersCreateWithoutCommentInput, UsersUncheckedCreateWithoutCommentInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentInput, UsersUncheckedUpdateWithoutCommentInput>
  }

  export type UsersUpdateWithoutCommentInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    role?: EnumUserListFieldUpdateOperationsInput | $Enums.UserList
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementsUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    role?: EnumUserListFieldUpdateOperationsInput | $Enums.UserList
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUncheckedUpdateManyWithoutUserNestedInput
    announcements?: AnnouncementsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AnnouncementsCreateWithoutAttachmentsInput = {
    title: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutAnnouncementsInput
    author: UsersCreateNestedOneWithoutAnnouncementsInput
  }

  export type AnnouncementsUncheckedCreateWithoutAttachmentsInput = {
    announcement_id?: number
    title: string
    content: string
    authorId: number
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementsCreateOrConnectWithoutAttachmentsInput = {
    where: AnnouncementsWhereUniqueInput
    create: XOR<AnnouncementsCreateWithoutAttachmentsInput, AnnouncementsUncheckedCreateWithoutAttachmentsInput>
  }

  export type AnnouncementsUpsertWithoutAttachmentsInput = {
    update: XOR<AnnouncementsUpdateWithoutAttachmentsInput, AnnouncementsUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<AnnouncementsCreateWithoutAttachmentsInput, AnnouncementsUncheckedCreateWithoutAttachmentsInput>
    where?: AnnouncementsWhereInput
  }

  export type AnnouncementsUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: AnnouncementsWhereInput
    data: XOR<AnnouncementsUpdateWithoutAttachmentsInput, AnnouncementsUncheckedUpdateWithoutAttachmentsInput>
  }

  export type AnnouncementsUpdateWithoutAttachmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutAnnouncementsNestedInput
    author?: UsersUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type AnnouncementsUncheckedUpdateWithoutAttachmentsInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriesCreateWithoutAnnouncementsInput = {
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateWithoutAnnouncementsInput = {
    category_id?: number
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesCreateOrConnectWithoutAnnouncementsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutAnnouncementsInput, CategoriesUncheckedCreateWithoutAnnouncementsInput>
  }

  export type UsersCreateWithoutAnnouncementsInput = {
    name: string
    email: string
    phone: number
    role?: $Enums.UserList
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesCreateNestedManyWithoutUserInput
    comment?: CommentsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAnnouncementsInput = {
    user_id?: number
    name: string
    email: string
    phone: number
    role?: $Enums.UserList
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutAnnouncementsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAnnouncementsInput, UsersUncheckedCreateWithoutAnnouncementsInput>
  }

  export type AnnouncementsAttachmentsCreateWithoutAnnouncementsInput = {
    file_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementsAttachmentsUncheckedCreateWithoutAnnouncementsInput = {
    attachment_id?: number
    file_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementsAttachmentsCreateOrConnectWithoutAnnouncementsInput = {
    where: AnnouncementsAttachmentsWhereUniqueInput
    create: XOR<AnnouncementsAttachmentsCreateWithoutAnnouncementsInput, AnnouncementsAttachmentsUncheckedCreateWithoutAnnouncementsInput>
  }

  export type AnnouncementsAttachmentsCreateManyAnnouncementsInputEnvelope = {
    data: AnnouncementsAttachmentsCreateManyAnnouncementsInput | AnnouncementsAttachmentsCreateManyAnnouncementsInput[]
    skipDuplicates?: boolean
  }

  export type CategoriesUpsertWithoutAnnouncementsInput = {
    update: XOR<CategoriesUpdateWithoutAnnouncementsInput, CategoriesUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<CategoriesCreateWithoutAnnouncementsInput, CategoriesUncheckedCreateWithoutAnnouncementsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutAnnouncementsInput, CategoriesUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type CategoriesUpdateWithoutAnnouncementsInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateWithoutAnnouncementsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type UsersUpsertWithoutAnnouncementsInput = {
    update: XOR<UsersUpdateWithoutAnnouncementsInput, UsersUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<UsersCreateWithoutAnnouncementsInput, UsersUncheckedCreateWithoutAnnouncementsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAnnouncementsInput, UsersUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type UsersUpdateWithoutAnnouncementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    role?: EnumUserListFieldUpdateOperationsInput | $Enums.UserList
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUpdateManyWithoutUserNestedInput
    comment?: CommentsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAnnouncementsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: IntFieldUpdateOperationsInput | number
    role?: EnumUserListFieldUpdateOperationsInput | $Enums.UserList
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUncheckedUpdateManyWithoutUserNestedInput
    comment?: CommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnnouncementsAttachmentsUpsertWithWhereUniqueWithoutAnnouncementsInput = {
    where: AnnouncementsAttachmentsWhereUniqueInput
    update: XOR<AnnouncementsAttachmentsUpdateWithoutAnnouncementsInput, AnnouncementsAttachmentsUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<AnnouncementsAttachmentsCreateWithoutAnnouncementsInput, AnnouncementsAttachmentsUncheckedCreateWithoutAnnouncementsInput>
  }

  export type AnnouncementsAttachmentsUpdateWithWhereUniqueWithoutAnnouncementsInput = {
    where: AnnouncementsAttachmentsWhereUniqueInput
    data: XOR<AnnouncementsAttachmentsUpdateWithoutAnnouncementsInput, AnnouncementsAttachmentsUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type AnnouncementsAttachmentsUpdateManyWithWhereWithoutAnnouncementsInput = {
    where: AnnouncementsAttachmentsScalarWhereInput
    data: XOR<AnnouncementsAttachmentsUpdateManyMutationInput, AnnouncementsAttachmentsUncheckedUpdateManyWithoutAnnouncementsInput>
  }

  export type AnnouncementsAttachmentsScalarWhereInput = {
    AND?: AnnouncementsAttachmentsScalarWhereInput | AnnouncementsAttachmentsScalarWhereInput[]
    OR?: AnnouncementsAttachmentsScalarWhereInput[]
    NOT?: AnnouncementsAttachmentsScalarWhereInput | AnnouncementsAttachmentsScalarWhereInput[]
    attachment_id?: IntFilter<"AnnouncementsAttachments"> | number
    file_url?: StringFilter<"AnnouncementsAttachments"> | string
    announcementId?: IntFilter<"AnnouncementsAttachments"> | number
    createdAt?: DateTimeFilter<"AnnouncementsAttachments"> | Date | string
    updatedAt?: DateTimeFilter<"AnnouncementsAttachments"> | Date | string
  }

  export type IssuesCreateManyCategoryInput = {
    issue_id?: number
    title: string
    description: string
    userId: number
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementsCreateManyCategoryInput = {
    announcement_id?: number
    title: string
    content: string
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuesUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutIssueNestedInput
    locations?: LocationsUpdateManyWithoutIssuesNestedInput
    attachments?: AttachmentsUpdateManyWithoutIssuesNestedInput
    comment?: CommentsUpdateManyWithoutIssuesNestedInput
  }

  export type IssuesUncheckedUpdateWithoutCategoryInput = {
    issue_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationsUncheckedUpdateManyWithoutIssuesNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutIssuesNestedInput
    comment?: CommentsUncheckedUpdateManyWithoutIssuesNestedInput
  }

  export type IssuesUncheckedUpdateManyWithoutCategoryInput = {
    issue_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementsUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UsersUpdateOneRequiredWithoutAnnouncementsNestedInput
    attachments?: AnnouncementsAttachmentsUpdateManyWithoutAnnouncementsNestedInput
  }

  export type AnnouncementsUncheckedUpdateWithoutCategoryInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AnnouncementsAttachmentsUncheckedUpdateManyWithoutAnnouncementsNestedInput
  }

  export type AnnouncementsUncheckedUpdateManyWithoutCategoryInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuesCreateManyUserInput = {
    issue_id?: number
    title: string
    description: string
    categoryId: number
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateManyUserInput = {
    id?: number
    issuesId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementsCreateManyAuthorInput = {
    announcement_id?: number
    title: string
    content: string
    categoryId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuesUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutIssueNestedInput
    locations?: LocationsUpdateManyWithoutIssuesNestedInput
    attachments?: AttachmentsUpdateManyWithoutIssuesNestedInput
    comment?: CommentsUpdateManyWithoutIssuesNestedInput
  }

  export type IssuesUncheckedUpdateWithoutUserInput = {
    issue_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: LocationsUncheckedUpdateManyWithoutIssuesNestedInput
    attachments?: AttachmentsUncheckedUpdateManyWithoutIssuesNestedInput
    comment?: CommentsUncheckedUpdateManyWithoutIssuesNestedInput
  }

  export type IssuesUncheckedUpdateManyWithoutUserInput = {
    issue_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssuesUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    issuesId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    issuesId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementsUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoriesUpdateOneRequiredWithoutAnnouncementsNestedInput
    attachments?: AnnouncementsAttachmentsUpdateManyWithoutAnnouncementsNestedInput
  }

  export type AnnouncementsUncheckedUpdateWithoutAuthorInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attachments?: AnnouncementsAttachmentsUncheckedUpdateManyWithoutAnnouncementsNestedInput
  }

  export type AnnouncementsUncheckedUpdateManyWithoutAuthorInput = {
    announcement_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsCreateManyIssuesInput = {
    location_id?: number
    latitude: number
    longitude: number
    address: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AttachmentsCreateManyIssuesInput = {
    attachment_id?: number
    file_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateManyIssuesInput = {
    id?: number
    userId: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationsUpdateWithoutIssuesInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateWithoutIssuesInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationsUncheckedUpdateManyWithoutIssuesInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentsUpdateWithoutIssuesInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentsUncheckedUpdateWithoutIssuesInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttachmentsUncheckedUpdateManyWithoutIssuesInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutIssuesInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutCommentNestedInput
  }

  export type CommentsUncheckedUpdateWithoutIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyWithoutIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementsAttachmentsCreateManyAnnouncementsInput = {
    attachment_id?: number
    file_url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnnouncementsAttachmentsUpdateWithoutAnnouncementsInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementsAttachmentsUncheckedUpdateWithoutAnnouncementsInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementsAttachmentsUncheckedUpdateManyWithoutAnnouncementsInput = {
    attachment_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}