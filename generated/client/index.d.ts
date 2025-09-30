
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
    Attachments: 'Attachments'
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
      modelProps: "categories" | "users" | "issues" | "locations" | "attachments"
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
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | CategoriesCountOutputTypeCountIssueArgs
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    issue: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | UsersCountOutputTypeCountIssueArgs
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
   * Count Type IssuesCountOutputType
   */

  export type IssuesCountOutputType = {
    locations: number
    attachments: number
  }

  export type IssuesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | IssuesCountOutputTypeCountLocationsArgs
    attachments?: boolean | IssuesCountOutputTypeCountAttachmentsArgs
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
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      issue: Prisma.$IssuesPayload<ExtArgs>[]
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
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      issue: Prisma.$IssuesPayload<ExtArgs>[]
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
  }

  export type CategoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issue?: IssuesOrderByRelationAggregateInput
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

  export type CategoriesCreateInput = {
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    category_id?: number
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssuesUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssuesUncheckedUpdateManyWithoutCategoryNestedInput
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

  export type IssuesOrderByRelationAggregateInput = {
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

  export type IssuesCreateNestedManyWithoutCategoryInput = {
    create?: XOR<IssuesCreateWithoutCategoryInput, IssuesUncheckedCreateWithoutCategoryInput> | IssuesCreateWithoutCategoryInput[] | IssuesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutCategoryInput | IssuesCreateOrConnectWithoutCategoryInput[]
    createMany?: IssuesCreateManyCategoryInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
  }

  export type IssuesUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<IssuesCreateWithoutCategoryInput, IssuesUncheckedCreateWithoutCategoryInput> | IssuesCreateWithoutCategoryInput[] | IssuesUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutCategoryInput | IssuesCreateOrConnectWithoutCategoryInput[]
    createMany?: IssuesCreateManyCategoryInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
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

  export type IssuesCreateNestedManyWithoutUserInput = {
    create?: XOR<IssuesCreateWithoutUserInput, IssuesUncheckedCreateWithoutUserInput> | IssuesCreateWithoutUserInput[] | IssuesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutUserInput | IssuesCreateOrConnectWithoutUserInput[]
    createMany?: IssuesCreateManyUserInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
  }

  export type IssuesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IssuesCreateWithoutUserInput, IssuesUncheckedCreateWithoutUserInput> | IssuesCreateWithoutUserInput[] | IssuesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IssuesCreateOrConnectWithoutUserInput | IssuesCreateOrConnectWithoutUserInput[]
    createMany?: IssuesCreateManyUserInputEnvelope
    connect?: IssuesWhereUniqueInput | IssuesWhereUniqueInput[]
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
  }

  export type IssuesCreateOrConnectWithoutCategoryInput = {
    where: IssuesWhereUniqueInput
    create: XOR<IssuesCreateWithoutCategoryInput, IssuesUncheckedCreateWithoutCategoryInput>
  }

  export type IssuesCreateManyCategoryInputEnvelope = {
    data: IssuesCreateManyCategoryInput | IssuesCreateManyCategoryInput[]
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

  export type IssuesCreateWithoutUserInput = {
    title: string
    description: string
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutIssueInput
    locations?: LocationsCreateNestedManyWithoutIssuesInput
    attachments?: AttachmentsCreateNestedManyWithoutIssuesInput
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
  }

  export type IssuesCreateOrConnectWithoutUserInput = {
    where: IssuesWhereUniqueInput
    create: XOR<IssuesCreateWithoutUserInput, IssuesUncheckedCreateWithoutUserInput>
  }

  export type IssuesCreateManyUserInputEnvelope = {
    data: IssuesCreateManyUserInput | IssuesCreateManyUserInput[]
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

  export type CategoriesCreateWithoutIssueInput = {
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoriesUncheckedCreateWithoutIssueInput = {
    category_id?: number
    category_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
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
  }

  export type CategoriesUncheckedUpdateWithoutIssueInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type IssuesCreateWithoutLocationsInput = {
    title: string
    description: string
    status?: $Enums.statusList
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoriesCreateNestedOneWithoutIssueInput
    user: UsersCreateNestedOneWithoutIssueInput
    attachments?: AttachmentsCreateNestedManyWithoutIssuesInput
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

  export type IssuesUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusListFieldUpdateOperationsInput | $Enums.statusList
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutIssueNestedInput
    locations?: LocationsUpdateManyWithoutIssuesNestedInput
    attachments?: AttachmentsUpdateManyWithoutIssuesNestedInput
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

  export type IssuesCreateManyUserInput = {
    issue_id?: number
    title: string
    description: string
    categoryId: number
    status?: $Enums.statusList
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