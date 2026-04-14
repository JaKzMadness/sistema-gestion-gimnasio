
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PlanMembresia
 * 
 */
export type PlanMembresia = $Result.DefaultSelection<Prisma.$PlanMembresiaPayload>
/**
 * Model PlanHistory
 * 
 */
export type PlanHistory = $Result.DefaultSelection<Prisma.$PlanHistoryPayload>
/**
 * Model Miembro
 * 
 */
export type Miembro = $Result.DefaultSelection<Prisma.$MiembroPayload>
/**
 * Model MemberAuditLog
 * 
 */
export type MemberAuditLog = $Result.DefaultSelection<Prisma.$MemberAuditLogPayload>
/**
 * Model Entrenador
 * 
 */
export type Entrenador = $Result.DefaultSelection<Prisma.$EntrenadorPayload>
/**
 * Model TrainerAvailability
 * 
 */
export type TrainerAvailability = $Result.DefaultSelection<Prisma.$TrainerAvailabilityPayload>
/**
 * Model Rutina
 * 
 */
export type Rutina = $Result.DefaultSelection<Prisma.$RutinaPayload>
/**
 * Model Ejercicio
 * 
 */
export type Ejercicio = $Result.DefaultSelection<Prisma.$EjercicioPayload>
/**
 * Model RutinaEjercicio
 * 
 */
export type RutinaEjercicio = $Result.DefaultSelection<Prisma.$RutinaEjercicioPayload>
/**
 * Model RoutineHistory
 * 
 */
export type RoutineHistory = $Result.DefaultSelection<Prisma.$RoutineHistoryPayload>
/**
 * Model BodyMeasurement
 * 
 */
export type BodyMeasurement = $Result.DefaultSelection<Prisma.$BodyMeasurementPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more PlanMembresias
 * const planMembresias = await prisma.planMembresia.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more PlanMembresias
   * const planMembresias = await prisma.planMembresia.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.planMembresia`: Exposes CRUD operations for the **PlanMembresia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanMembresias
    * const planMembresias = await prisma.planMembresia.findMany()
    * ```
    */
  get planMembresia(): Prisma.PlanMembresiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.planHistory`: Exposes CRUD operations for the **PlanHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlanHistories
    * const planHistories = await prisma.planHistory.findMany()
    * ```
    */
  get planHistory(): Prisma.PlanHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.miembro`: Exposes CRUD operations for the **Miembro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Miembros
    * const miembros = await prisma.miembro.findMany()
    * ```
    */
  get miembro(): Prisma.MiembroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberAuditLog`: Exposes CRUD operations for the **MemberAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberAuditLogs
    * const memberAuditLogs = await prisma.memberAuditLog.findMany()
    * ```
    */
  get memberAuditLog(): Prisma.MemberAuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.entrenador`: Exposes CRUD operations for the **Entrenador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entrenadors
    * const entrenadors = await prisma.entrenador.findMany()
    * ```
    */
  get entrenador(): Prisma.EntrenadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trainerAvailability`: Exposes CRUD operations for the **TrainerAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrainerAvailabilities
    * const trainerAvailabilities = await prisma.trainerAvailability.findMany()
    * ```
    */
  get trainerAvailability(): Prisma.TrainerAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutina`: Exposes CRUD operations for the **Rutina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rutinas
    * const rutinas = await prisma.rutina.findMany()
    * ```
    */
  get rutina(): Prisma.RutinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ejercicio`: Exposes CRUD operations for the **Ejercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ejercicios
    * const ejercicios = await prisma.ejercicio.findMany()
    * ```
    */
  get ejercicio(): Prisma.EjercicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rutinaEjercicio`: Exposes CRUD operations for the **RutinaEjercicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RutinaEjercicios
    * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany()
    * ```
    */
  get rutinaEjercicio(): Prisma.RutinaEjercicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routineHistory`: Exposes CRUD operations for the **RoutineHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoutineHistories
    * const routineHistories = await prisma.routineHistory.findMany()
    * ```
    */
  get routineHistory(): Prisma.RoutineHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bodyMeasurement`: Exposes CRUD operations for the **BodyMeasurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BodyMeasurements
    * const bodyMeasurements = await prisma.bodyMeasurement.findMany()
    * ```
    */
  get bodyMeasurement(): Prisma.BodyMeasurementDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    PlanMembresia: 'PlanMembresia',
    PlanHistory: 'PlanHistory',
    Miembro: 'Miembro',
    MemberAuditLog: 'MemberAuditLog',
    Entrenador: 'Entrenador',
    TrainerAvailability: 'TrainerAvailability',
    Rutina: 'Rutina',
    Ejercicio: 'Ejercicio',
    RutinaEjercicio: 'RutinaEjercicio',
    RoutineHistory: 'RoutineHistory',
    BodyMeasurement: 'BodyMeasurement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "planMembresia" | "planHistory" | "miembro" | "memberAuditLog" | "entrenador" | "trainerAvailability" | "rutina" | "ejercicio" | "rutinaEjercicio" | "routineHistory" | "bodyMeasurement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PlanMembresia: {
        payload: Prisma.$PlanMembresiaPayload<ExtArgs>
        fields: Prisma.PlanMembresiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanMembresiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMembresiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanMembresiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMembresiaPayload>
          }
          findFirst: {
            args: Prisma.PlanMembresiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMembresiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanMembresiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMembresiaPayload>
          }
          findMany: {
            args: Prisma.PlanMembresiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMembresiaPayload>[]
          }
          create: {
            args: Prisma.PlanMembresiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMembresiaPayload>
          }
          createMany: {
            args: Prisma.PlanMembresiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanMembresiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMembresiaPayload>[]
          }
          delete: {
            args: Prisma.PlanMembresiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMembresiaPayload>
          }
          update: {
            args: Prisma.PlanMembresiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMembresiaPayload>
          }
          deleteMany: {
            args: Prisma.PlanMembresiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanMembresiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanMembresiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMembresiaPayload>[]
          }
          upsert: {
            args: Prisma.PlanMembresiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanMembresiaPayload>
          }
          aggregate: {
            args: Prisma.PlanMembresiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanMembresia>
          }
          groupBy: {
            args: Prisma.PlanMembresiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanMembresiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanMembresiaCountArgs<ExtArgs>
            result: $Utils.Optional<PlanMembresiaCountAggregateOutputType> | number
          }
        }
      }
      PlanHistory: {
        payload: Prisma.$PlanHistoryPayload<ExtArgs>
        fields: Prisma.PlanHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanHistoryPayload>
          }
          findFirst: {
            args: Prisma.PlanHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanHistoryPayload>
          }
          findMany: {
            args: Prisma.PlanHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanHistoryPayload>[]
          }
          create: {
            args: Prisma.PlanHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanHistoryPayload>
          }
          createMany: {
            args: Prisma.PlanHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanHistoryPayload>[]
          }
          delete: {
            args: Prisma.PlanHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanHistoryPayload>
          }
          update: {
            args: Prisma.PlanHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PlanHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PlanHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanHistoryPayload>
          }
          aggregate: {
            args: Prisma.PlanHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanHistory>
          }
          groupBy: {
            args: Prisma.PlanHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PlanHistoryCountAggregateOutputType> | number
          }
        }
      }
      Miembro: {
        payload: Prisma.$MiembroPayload<ExtArgs>
        fields: Prisma.MiembroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MiembroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MiembroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroPayload>
          }
          findFirst: {
            args: Prisma.MiembroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MiembroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroPayload>
          }
          findMany: {
            args: Prisma.MiembroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroPayload>[]
          }
          create: {
            args: Prisma.MiembroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroPayload>
          }
          createMany: {
            args: Prisma.MiembroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MiembroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroPayload>[]
          }
          delete: {
            args: Prisma.MiembroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroPayload>
          }
          update: {
            args: Prisma.MiembroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroPayload>
          }
          deleteMany: {
            args: Prisma.MiembroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MiembroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MiembroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroPayload>[]
          }
          upsert: {
            args: Prisma.MiembroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiembroPayload>
          }
          aggregate: {
            args: Prisma.MiembroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMiembro>
          }
          groupBy: {
            args: Prisma.MiembroGroupByArgs<ExtArgs>
            result: $Utils.Optional<MiembroGroupByOutputType>[]
          }
          count: {
            args: Prisma.MiembroCountArgs<ExtArgs>
            result: $Utils.Optional<MiembroCountAggregateOutputType> | number
          }
        }
      }
      MemberAuditLog: {
        payload: Prisma.$MemberAuditLogPayload<ExtArgs>
        fields: Prisma.MemberAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberAuditLogPayload>
          }
          findFirst: {
            args: Prisma.MemberAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberAuditLogPayload>
          }
          findMany: {
            args: Prisma.MemberAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberAuditLogPayload>[]
          }
          create: {
            args: Prisma.MemberAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberAuditLogPayload>
          }
          createMany: {
            args: Prisma.MemberAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberAuditLogPayload>[]
          }
          delete: {
            args: Prisma.MemberAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberAuditLogPayload>
          }
          update: {
            args: Prisma.MemberAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.MemberAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberAuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberAuditLogPayload>[]
          }
          upsert: {
            args: Prisma.MemberAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberAuditLogPayload>
          }
          aggregate: {
            args: Prisma.MemberAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberAuditLog>
          }
          groupBy: {
            args: Prisma.MemberAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<MemberAuditLogCountAggregateOutputType> | number
          }
        }
      }
      Entrenador: {
        payload: Prisma.$EntrenadorPayload<ExtArgs>
        fields: Prisma.EntrenadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntrenadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntrenadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          findFirst: {
            args: Prisma.EntrenadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntrenadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          findMany: {
            args: Prisma.EntrenadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>[]
          }
          create: {
            args: Prisma.EntrenadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          createMany: {
            args: Prisma.EntrenadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntrenadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>[]
          }
          delete: {
            args: Prisma.EntrenadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          update: {
            args: Prisma.EntrenadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          deleteMany: {
            args: Prisma.EntrenadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EntrenadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EntrenadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>[]
          }
          upsert: {
            args: Prisma.EntrenadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EntrenadorPayload>
          }
          aggregate: {
            args: Prisma.EntrenadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEntrenador>
          }
          groupBy: {
            args: Prisma.EntrenadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<EntrenadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntrenadorCountArgs<ExtArgs>
            result: $Utils.Optional<EntrenadorCountAggregateOutputType> | number
          }
        }
      }
      TrainerAvailability: {
        payload: Prisma.$TrainerAvailabilityPayload<ExtArgs>
        fields: Prisma.TrainerAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrainerAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrainerAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.TrainerAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrainerAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAvailabilityPayload>
          }
          findMany: {
            args: Prisma.TrainerAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAvailabilityPayload>[]
          }
          create: {
            args: Prisma.TrainerAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAvailabilityPayload>
          }
          createMany: {
            args: Prisma.TrainerAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrainerAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.TrainerAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAvailabilityPayload>
          }
          update: {
            args: Prisma.TrainerAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.TrainerAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrainerAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrainerAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.TrainerAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrainerAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.TrainerAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrainerAvailability>
          }
          groupBy: {
            args: Prisma.TrainerAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrainerAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrainerAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<TrainerAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Rutina: {
        payload: Prisma.$RutinaPayload<ExtArgs>
        fields: Prisma.RutinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findFirst: {
            args: Prisma.RutinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          findMany: {
            args: Prisma.RutinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          create: {
            args: Prisma.RutinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          createMany: {
            args: Prisma.RutinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          delete: {
            args: Prisma.RutinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          update: {
            args: Prisma.RutinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          deleteMany: {
            args: Prisma.RutinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>[]
          }
          upsert: {
            args: Prisma.RutinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaPayload>
          }
          aggregate: {
            args: Prisma.RutinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutina>
          }
          groupBy: {
            args: Prisma.RutinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutinaCountArgs<ExtArgs>
            result: $Utils.Optional<RutinaCountAggregateOutputType> | number
          }
        }
      }
      Ejercicio: {
        payload: Prisma.$EjercicioPayload<ExtArgs>
        fields: Prisma.EjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EjercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EjercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findFirst: {
            args: Prisma.EjercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EjercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          findMany: {
            args: Prisma.EjercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          create: {
            args: Prisma.EjercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          createMany: {
            args: Prisma.EjercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EjercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          delete: {
            args: Prisma.EjercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          update: {
            args: Prisma.EjercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          deleteMany: {
            args: Prisma.EjercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EjercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EjercicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>[]
          }
          upsert: {
            args: Prisma.EjercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EjercicioPayload>
          }
          aggregate: {
            args: Prisma.EjercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEjercicio>
          }
          groupBy: {
            args: Prisma.EjercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<EjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.EjercicioCountArgs<ExtArgs>
            result: $Utils.Optional<EjercicioCountAggregateOutputType> | number
          }
        }
      }
      RutinaEjercicio: {
        payload: Prisma.$RutinaEjercicioPayload<ExtArgs>
        fields: Prisma.RutinaEjercicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RutinaEjercicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          findFirst: {
            args: Prisma.RutinaEjercicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RutinaEjercicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          findMany: {
            args: Prisma.RutinaEjercicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>[]
          }
          create: {
            args: Prisma.RutinaEjercicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          createMany: {
            args: Prisma.RutinaEjercicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RutinaEjercicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>[]
          }
          delete: {
            args: Prisma.RutinaEjercicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          update: {
            args: Prisma.RutinaEjercicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          deleteMany: {
            args: Prisma.RutinaEjercicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RutinaEjercicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RutinaEjercicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>[]
          }
          upsert: {
            args: Prisma.RutinaEjercicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RutinaEjercicioPayload>
          }
          aggregate: {
            args: Prisma.RutinaEjercicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRutinaEjercicio>
          }
          groupBy: {
            args: Prisma.RutinaEjercicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RutinaEjercicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RutinaEjercicioCountArgs<ExtArgs>
            result: $Utils.Optional<RutinaEjercicioCountAggregateOutputType> | number
          }
        }
      }
      RoutineHistory: {
        payload: Prisma.$RoutineHistoryPayload<ExtArgs>
        fields: Prisma.RoutineHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoutineHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoutineHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHistoryPayload>
          }
          findFirst: {
            args: Prisma.RoutineHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoutineHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHistoryPayload>
          }
          findMany: {
            args: Prisma.RoutineHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHistoryPayload>[]
          }
          create: {
            args: Prisma.RoutineHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHistoryPayload>
          }
          createMany: {
            args: Prisma.RoutineHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoutineHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHistoryPayload>[]
          }
          delete: {
            args: Prisma.RoutineHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHistoryPayload>
          }
          update: {
            args: Prisma.RoutineHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHistoryPayload>
          }
          deleteMany: {
            args: Prisma.RoutineHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoutineHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoutineHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHistoryPayload>[]
          }
          upsert: {
            args: Prisma.RoutineHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutineHistoryPayload>
          }
          aggregate: {
            args: Prisma.RoutineHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoutineHistory>
          }
          groupBy: {
            args: Prisma.RoutineHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoutineHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoutineHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<RoutineHistoryCountAggregateOutputType> | number
          }
        }
      }
      BodyMeasurement: {
        payload: Prisma.$BodyMeasurementPayload<ExtArgs>
        fields: Prisma.BodyMeasurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BodyMeasurementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BodyMeasurementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          findFirst: {
            args: Prisma.BodyMeasurementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BodyMeasurementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          findMany: {
            args: Prisma.BodyMeasurementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          create: {
            args: Prisma.BodyMeasurementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          createMany: {
            args: Prisma.BodyMeasurementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BodyMeasurementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          delete: {
            args: Prisma.BodyMeasurementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          update: {
            args: Prisma.BodyMeasurementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          deleteMany: {
            args: Prisma.BodyMeasurementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BodyMeasurementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BodyMeasurementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>[]
          }
          upsert: {
            args: Prisma.BodyMeasurementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMeasurementPayload>
          }
          aggregate: {
            args: Prisma.BodyMeasurementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBodyMeasurement>
          }
          groupBy: {
            args: Prisma.BodyMeasurementGroupByArgs<ExtArgs>
            result: $Utils.Optional<BodyMeasurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.BodyMeasurementCountArgs<ExtArgs>
            result: $Utils.Optional<BodyMeasurementCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    planMembresia?: PlanMembresiaOmit
    planHistory?: PlanHistoryOmit
    miembro?: MiembroOmit
    memberAuditLog?: MemberAuditLogOmit
    entrenador?: EntrenadorOmit
    trainerAvailability?: TrainerAvailabilityOmit
    rutina?: RutinaOmit
    ejercicio?: EjercicioOmit
    rutinaEjercicio?: RutinaEjercicioOmit
    routineHistory?: RoutineHistoryOmit
    bodyMeasurement?: BodyMeasurementOmit
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
   * Count Type PlanMembresiaCountOutputType
   */

  export type PlanMembresiaCountOutputType = {
    miembros: number
    historialCambios: number
  }

  export type PlanMembresiaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembros?: boolean | PlanMembresiaCountOutputTypeCountMiembrosArgs
    historialCambios?: boolean | PlanMembresiaCountOutputTypeCountHistorialCambiosArgs
  }

  // Custom InputTypes
  /**
   * PlanMembresiaCountOutputType without action
   */
  export type PlanMembresiaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresiaCountOutputType
     */
    select?: PlanMembresiaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanMembresiaCountOutputType without action
   */
  export type PlanMembresiaCountOutputTypeCountMiembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiembroWhereInput
  }

  /**
   * PlanMembresiaCountOutputType without action
   */
  export type PlanMembresiaCountOutputTypeCountHistorialCambiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanHistoryWhereInput
  }


  /**
   * Count Type MiembroCountOutputType
   */

  export type MiembroCountOutputType = {
    rutinas: number
    medidasCorporales: number
    auditLog: number
  }

  export type MiembroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinas?: boolean | MiembroCountOutputTypeCountRutinasArgs
    medidasCorporales?: boolean | MiembroCountOutputTypeCountMedidasCorporalesArgs
    auditLog?: boolean | MiembroCountOutputTypeCountAuditLogArgs
  }

  // Custom InputTypes
  /**
   * MiembroCountOutputType without action
   */
  export type MiembroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiembroCountOutputType
     */
    select?: MiembroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MiembroCountOutputType without action
   */
  export type MiembroCountOutputTypeCountRutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
  }

  /**
   * MiembroCountOutputType without action
   */
  export type MiembroCountOutputTypeCountMedidasCorporalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyMeasurementWhereInput
  }

  /**
   * MiembroCountOutputType without action
   */
  export type MiembroCountOutputTypeCountAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberAuditLogWhereInput
  }


  /**
   * Count Type EntrenadorCountOutputType
   */

  export type EntrenadorCountOutputType = {
    disponibilidades: number
    rutinas: number
  }

  export type EntrenadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disponibilidades?: boolean | EntrenadorCountOutputTypeCountDisponibilidadesArgs
    rutinas?: boolean | EntrenadorCountOutputTypeCountRutinasArgs
  }

  // Custom InputTypes
  /**
   * EntrenadorCountOutputType without action
   */
  export type EntrenadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EntrenadorCountOutputType
     */
    select?: EntrenadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EntrenadorCountOutputType without action
   */
  export type EntrenadorCountOutputTypeCountDisponibilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainerAvailabilityWhereInput
  }

  /**
   * EntrenadorCountOutputType without action
   */
  export type EntrenadorCountOutputTypeCountRutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
  }


  /**
   * Count Type RutinaCountOutputType
   */

  export type RutinaCountOutputType = {
    ejercicios: number
    historial: number
  }

  export type RutinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ejercicios?: boolean | RutinaCountOutputTypeCountEjerciciosArgs
    historial?: boolean | RutinaCountOutputTypeCountHistorialArgs
  }

  // Custom InputTypes
  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaCountOutputType
     */
    select?: RutinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeCountEjerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
  }

  /**
   * RutinaCountOutputType without action
   */
  export type RutinaCountOutputTypeCountHistorialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineHistoryWhereInput
  }


  /**
   * Count Type EjercicioCountOutputType
   */

  export type EjercicioCountOutputType = {
    rutinas: number
  }

  export type EjercicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinas?: boolean | EjercicioCountOutputTypeCountRutinasArgs
  }

  // Custom InputTypes
  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioCountOutputType
     */
    select?: EjercicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EjercicioCountOutputType without action
   */
  export type EjercicioCountOutputTypeCountRutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PlanMembresia
   */

  export type AggregatePlanMembresia = {
    _count: PlanMembresiaCountAggregateOutputType | null
    _avg: PlanMembresiaAvgAggregateOutputType | null
    _sum: PlanMembresiaSumAggregateOutputType | null
    _min: PlanMembresiaMinAggregateOutputType | null
    _max: PlanMembresiaMaxAggregateOutputType | null
  }

  export type PlanMembresiaAvgAggregateOutputType = {
    id: number | null
    duracionDias: number | null
    precio: Decimal | null
  }

  export type PlanMembresiaSumAggregateOutputType = {
    id: number | null
    duracionDias: number | null
    precio: Decimal | null
  }

  export type PlanMembresiaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
    duracionDias: number | null
    precio: Decimal | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMembresiaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    codigo: string | null
    duracionDias: number | null
    precio: Decimal | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMembresiaCountAggregateOutputType = {
    id: number
    nombre: number
    codigo: number
    duracionDias: number
    precio: number
    beneficios: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanMembresiaAvgAggregateInputType = {
    id?: true
    duracionDias?: true
    precio?: true
  }

  export type PlanMembresiaSumAggregateInputType = {
    id?: true
    duracionDias?: true
    precio?: true
  }

  export type PlanMembresiaMinAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    duracionDias?: true
    precio?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMembresiaMaxAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    duracionDias?: true
    precio?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMembresiaCountAggregateInputType = {
    id?: true
    nombre?: true
    codigo?: true
    duracionDias?: true
    precio?: true
    beneficios?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanMembresiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanMembresia to aggregate.
     */
    where?: PlanMembresiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanMembresias to fetch.
     */
    orderBy?: PlanMembresiaOrderByWithRelationInput | PlanMembresiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanMembresiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanMembresias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanMembresias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanMembresias
    **/
    _count?: true | PlanMembresiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanMembresiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanMembresiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMembresiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMembresiaMaxAggregateInputType
  }

  export type GetPlanMembresiaAggregateType<T extends PlanMembresiaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanMembresia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanMembresia[P]>
      : GetScalarType<T[P], AggregatePlanMembresia[P]>
  }




  export type PlanMembresiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanMembresiaWhereInput
    orderBy?: PlanMembresiaOrderByWithAggregationInput | PlanMembresiaOrderByWithAggregationInput[]
    by: PlanMembresiaScalarFieldEnum[] | PlanMembresiaScalarFieldEnum
    having?: PlanMembresiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanMembresiaCountAggregateInputType | true
    _avg?: PlanMembresiaAvgAggregateInputType
    _sum?: PlanMembresiaSumAggregateInputType
    _min?: PlanMembresiaMinAggregateInputType
    _max?: PlanMembresiaMaxAggregateInputType
  }

  export type PlanMembresiaGroupByOutputType = {
    id: number
    nombre: string
    codigo: string
    duracionDias: number
    precio: Decimal
    beneficios: string[]
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: PlanMembresiaCountAggregateOutputType | null
    _avg: PlanMembresiaAvgAggregateOutputType | null
    _sum: PlanMembresiaSumAggregateOutputType | null
    _min: PlanMembresiaMinAggregateOutputType | null
    _max: PlanMembresiaMaxAggregateOutputType | null
  }

  type GetPlanMembresiaGroupByPayload<T extends PlanMembresiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanMembresiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanMembresiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanMembresiaGroupByOutputType[P]>
            : GetScalarType<T[P], PlanMembresiaGroupByOutputType[P]>
        }
      >
    >


  export type PlanMembresiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    duracionDias?: boolean
    precio?: boolean
    beneficios?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    miembros?: boolean | PlanMembresia$miembrosArgs<ExtArgs>
    historialCambios?: boolean | PlanMembresia$historialCambiosArgs<ExtArgs>
    _count?: boolean | PlanMembresiaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planMembresia"]>

  export type PlanMembresiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    duracionDias?: boolean
    precio?: boolean
    beneficios?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planMembresia"]>

  export type PlanMembresiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    duracionDias?: boolean
    precio?: boolean
    beneficios?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["planMembresia"]>

  export type PlanMembresiaSelectScalar = {
    id?: boolean
    nombre?: boolean
    codigo?: boolean
    duracionDias?: boolean
    precio?: boolean
    beneficios?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanMembresiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "codigo" | "duracionDias" | "precio" | "beneficios" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["planMembresia"]>
  export type PlanMembresiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembros?: boolean | PlanMembresia$miembrosArgs<ExtArgs>
    historialCambios?: boolean | PlanMembresia$historialCambiosArgs<ExtArgs>
    _count?: boolean | PlanMembresiaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanMembresiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanMembresiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanMembresiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanMembresia"
    objects: {
      miembros: Prisma.$MiembroPayload<ExtArgs>[]
      historialCambios: Prisma.$PlanHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      codigo: string
      duracionDias: number
      precio: Prisma.Decimal
      beneficios: string[]
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["planMembresia"]>
    composites: {}
  }

  type PlanMembresiaGetPayload<S extends boolean | null | undefined | PlanMembresiaDefaultArgs> = $Result.GetResult<Prisma.$PlanMembresiaPayload, S>

  type PlanMembresiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanMembresiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanMembresiaCountAggregateInputType | true
    }

  export interface PlanMembresiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanMembresia'], meta: { name: 'PlanMembresia' } }
    /**
     * Find zero or one PlanMembresia that matches the filter.
     * @param {PlanMembresiaFindUniqueArgs} args - Arguments to find a PlanMembresia
     * @example
     * // Get one PlanMembresia
     * const planMembresia = await prisma.planMembresia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanMembresiaFindUniqueArgs>(args: SelectSubset<T, PlanMembresiaFindUniqueArgs<ExtArgs>>): Prisma__PlanMembresiaClient<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanMembresia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanMembresiaFindUniqueOrThrowArgs} args - Arguments to find a PlanMembresia
     * @example
     * // Get one PlanMembresia
     * const planMembresia = await prisma.planMembresia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanMembresiaFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanMembresiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanMembresiaClient<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanMembresia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMembresiaFindFirstArgs} args - Arguments to find a PlanMembresia
     * @example
     * // Get one PlanMembresia
     * const planMembresia = await prisma.planMembresia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanMembresiaFindFirstArgs>(args?: SelectSubset<T, PlanMembresiaFindFirstArgs<ExtArgs>>): Prisma__PlanMembresiaClient<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanMembresia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMembresiaFindFirstOrThrowArgs} args - Arguments to find a PlanMembresia
     * @example
     * // Get one PlanMembresia
     * const planMembresia = await prisma.planMembresia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanMembresiaFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanMembresiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanMembresiaClient<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanMembresias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMembresiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanMembresias
     * const planMembresias = await prisma.planMembresia.findMany()
     * 
     * // Get first 10 PlanMembresias
     * const planMembresias = await prisma.planMembresia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planMembresiaWithIdOnly = await prisma.planMembresia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanMembresiaFindManyArgs>(args?: SelectSubset<T, PlanMembresiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanMembresia.
     * @param {PlanMembresiaCreateArgs} args - Arguments to create a PlanMembresia.
     * @example
     * // Create one PlanMembresia
     * const PlanMembresia = await prisma.planMembresia.create({
     *   data: {
     *     // ... data to create a PlanMembresia
     *   }
     * })
     * 
     */
    create<T extends PlanMembresiaCreateArgs>(args: SelectSubset<T, PlanMembresiaCreateArgs<ExtArgs>>): Prisma__PlanMembresiaClient<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanMembresias.
     * @param {PlanMembresiaCreateManyArgs} args - Arguments to create many PlanMembresias.
     * @example
     * // Create many PlanMembresias
     * const planMembresia = await prisma.planMembresia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanMembresiaCreateManyArgs>(args?: SelectSubset<T, PlanMembresiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanMembresias and returns the data saved in the database.
     * @param {PlanMembresiaCreateManyAndReturnArgs} args - Arguments to create many PlanMembresias.
     * @example
     * // Create many PlanMembresias
     * const planMembresia = await prisma.planMembresia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanMembresias and only return the `id`
     * const planMembresiaWithIdOnly = await prisma.planMembresia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanMembresiaCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanMembresiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanMembresia.
     * @param {PlanMembresiaDeleteArgs} args - Arguments to delete one PlanMembresia.
     * @example
     * // Delete one PlanMembresia
     * const PlanMembresia = await prisma.planMembresia.delete({
     *   where: {
     *     // ... filter to delete one PlanMembresia
     *   }
     * })
     * 
     */
    delete<T extends PlanMembresiaDeleteArgs>(args: SelectSubset<T, PlanMembresiaDeleteArgs<ExtArgs>>): Prisma__PlanMembresiaClient<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanMembresia.
     * @param {PlanMembresiaUpdateArgs} args - Arguments to update one PlanMembresia.
     * @example
     * // Update one PlanMembresia
     * const planMembresia = await prisma.planMembresia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanMembresiaUpdateArgs>(args: SelectSubset<T, PlanMembresiaUpdateArgs<ExtArgs>>): Prisma__PlanMembresiaClient<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanMembresias.
     * @param {PlanMembresiaDeleteManyArgs} args - Arguments to filter PlanMembresias to delete.
     * @example
     * // Delete a few PlanMembresias
     * const { count } = await prisma.planMembresia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanMembresiaDeleteManyArgs>(args?: SelectSubset<T, PlanMembresiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanMembresias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMembresiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanMembresias
     * const planMembresia = await prisma.planMembresia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanMembresiaUpdateManyArgs>(args: SelectSubset<T, PlanMembresiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanMembresias and returns the data updated in the database.
     * @param {PlanMembresiaUpdateManyAndReturnArgs} args - Arguments to update many PlanMembresias.
     * @example
     * // Update many PlanMembresias
     * const planMembresia = await prisma.planMembresia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanMembresias and only return the `id`
     * const planMembresiaWithIdOnly = await prisma.planMembresia.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlanMembresiaUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanMembresiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanMembresia.
     * @param {PlanMembresiaUpsertArgs} args - Arguments to update or create a PlanMembresia.
     * @example
     * // Update or create a PlanMembresia
     * const planMembresia = await prisma.planMembresia.upsert({
     *   create: {
     *     // ... data to create a PlanMembresia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanMembresia we want to update
     *   }
     * })
     */
    upsert<T extends PlanMembresiaUpsertArgs>(args: SelectSubset<T, PlanMembresiaUpsertArgs<ExtArgs>>): Prisma__PlanMembresiaClient<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanMembresias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMembresiaCountArgs} args - Arguments to filter PlanMembresias to count.
     * @example
     * // Count the number of PlanMembresias
     * const count = await prisma.planMembresia.count({
     *   where: {
     *     // ... the filter for the PlanMembresias we want to count
     *   }
     * })
    **/
    count<T extends PlanMembresiaCountArgs>(
      args?: Subset<T, PlanMembresiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanMembresiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanMembresia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMembresiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanMembresiaAggregateArgs>(args: Subset<T, PlanMembresiaAggregateArgs>): Prisma.PrismaPromise<GetPlanMembresiaAggregateType<T>>

    /**
     * Group by PlanMembresia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanMembresiaGroupByArgs} args - Group by arguments.
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
      T extends PlanMembresiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanMembresiaGroupByArgs['orderBy'] }
        : { orderBy?: PlanMembresiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanMembresiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanMembresiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanMembresia model
   */
  readonly fields: PlanMembresiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanMembresia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanMembresiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    miembros<T extends PlanMembresia$miembrosArgs<ExtArgs> = {}>(args?: Subset<T, PlanMembresia$miembrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historialCambios<T extends PlanMembresia$historialCambiosArgs<ExtArgs> = {}>(args?: Subset<T, PlanMembresia$historialCambiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PlanMembresia model
   */
  interface PlanMembresiaFieldRefs {
    readonly id: FieldRef<"PlanMembresia", 'Int'>
    readonly nombre: FieldRef<"PlanMembresia", 'String'>
    readonly codigo: FieldRef<"PlanMembresia", 'String'>
    readonly duracionDias: FieldRef<"PlanMembresia", 'Int'>
    readonly precio: FieldRef<"PlanMembresia", 'Decimal'>
    readonly beneficios: FieldRef<"PlanMembresia", 'String[]'>
    readonly activo: FieldRef<"PlanMembresia", 'Boolean'>
    readonly createdAt: FieldRef<"PlanMembresia", 'DateTime'>
    readonly updatedAt: FieldRef<"PlanMembresia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlanMembresia findUnique
   */
  export type PlanMembresiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMembresiaInclude<ExtArgs> | null
    /**
     * Filter, which PlanMembresia to fetch.
     */
    where: PlanMembresiaWhereUniqueInput
  }

  /**
   * PlanMembresia findUniqueOrThrow
   */
  export type PlanMembresiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMembresiaInclude<ExtArgs> | null
    /**
     * Filter, which PlanMembresia to fetch.
     */
    where: PlanMembresiaWhereUniqueInput
  }

  /**
   * PlanMembresia findFirst
   */
  export type PlanMembresiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMembresiaInclude<ExtArgs> | null
    /**
     * Filter, which PlanMembresia to fetch.
     */
    where?: PlanMembresiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanMembresias to fetch.
     */
    orderBy?: PlanMembresiaOrderByWithRelationInput | PlanMembresiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanMembresias.
     */
    cursor?: PlanMembresiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanMembresias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanMembresias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanMembresias.
     */
    distinct?: PlanMembresiaScalarFieldEnum | PlanMembresiaScalarFieldEnum[]
  }

  /**
   * PlanMembresia findFirstOrThrow
   */
  export type PlanMembresiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMembresiaInclude<ExtArgs> | null
    /**
     * Filter, which PlanMembresia to fetch.
     */
    where?: PlanMembresiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanMembresias to fetch.
     */
    orderBy?: PlanMembresiaOrderByWithRelationInput | PlanMembresiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanMembresias.
     */
    cursor?: PlanMembresiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanMembresias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanMembresias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanMembresias.
     */
    distinct?: PlanMembresiaScalarFieldEnum | PlanMembresiaScalarFieldEnum[]
  }

  /**
   * PlanMembresia findMany
   */
  export type PlanMembresiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMembresiaInclude<ExtArgs> | null
    /**
     * Filter, which PlanMembresias to fetch.
     */
    where?: PlanMembresiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanMembresias to fetch.
     */
    orderBy?: PlanMembresiaOrderByWithRelationInput | PlanMembresiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanMembresias.
     */
    cursor?: PlanMembresiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanMembresias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanMembresias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanMembresias.
     */
    distinct?: PlanMembresiaScalarFieldEnum | PlanMembresiaScalarFieldEnum[]
  }

  /**
   * PlanMembresia create
   */
  export type PlanMembresiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMembresiaInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanMembresia.
     */
    data: XOR<PlanMembresiaCreateInput, PlanMembresiaUncheckedCreateInput>
  }

  /**
   * PlanMembresia createMany
   */
  export type PlanMembresiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanMembresias.
     */
    data: PlanMembresiaCreateManyInput | PlanMembresiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanMembresia createManyAndReturn
   */
  export type PlanMembresiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * The data used to create many PlanMembresias.
     */
    data: PlanMembresiaCreateManyInput | PlanMembresiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanMembresia update
   */
  export type PlanMembresiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMembresiaInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanMembresia.
     */
    data: XOR<PlanMembresiaUpdateInput, PlanMembresiaUncheckedUpdateInput>
    /**
     * Choose, which PlanMembresia to update.
     */
    where: PlanMembresiaWhereUniqueInput
  }

  /**
   * PlanMembresia updateMany
   */
  export type PlanMembresiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanMembresias.
     */
    data: XOR<PlanMembresiaUpdateManyMutationInput, PlanMembresiaUncheckedUpdateManyInput>
    /**
     * Filter which PlanMembresias to update
     */
    where?: PlanMembresiaWhereInput
    /**
     * Limit how many PlanMembresias to update.
     */
    limit?: number
  }

  /**
   * PlanMembresia updateManyAndReturn
   */
  export type PlanMembresiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * The data used to update PlanMembresias.
     */
    data: XOR<PlanMembresiaUpdateManyMutationInput, PlanMembresiaUncheckedUpdateManyInput>
    /**
     * Filter which PlanMembresias to update
     */
    where?: PlanMembresiaWhereInput
    /**
     * Limit how many PlanMembresias to update.
     */
    limit?: number
  }

  /**
   * PlanMembresia upsert
   */
  export type PlanMembresiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMembresiaInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanMembresia to update in case it exists.
     */
    where: PlanMembresiaWhereUniqueInput
    /**
     * In case the PlanMembresia found by the `where` argument doesn't exist, create a new PlanMembresia with this data.
     */
    create: XOR<PlanMembresiaCreateInput, PlanMembresiaUncheckedCreateInput>
    /**
     * In case the PlanMembresia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanMembresiaUpdateInput, PlanMembresiaUncheckedUpdateInput>
  }

  /**
   * PlanMembresia delete
   */
  export type PlanMembresiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMembresiaInclude<ExtArgs> | null
    /**
     * Filter which PlanMembresia to delete.
     */
    where: PlanMembresiaWhereUniqueInput
  }

  /**
   * PlanMembresia deleteMany
   */
  export type PlanMembresiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanMembresias to delete
     */
    where?: PlanMembresiaWhereInput
    /**
     * Limit how many PlanMembresias to delete.
     */
    limit?: number
  }

  /**
   * PlanMembresia.miembros
   */
  export type PlanMembresia$miembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroInclude<ExtArgs> | null
    where?: MiembroWhereInput
    orderBy?: MiembroOrderByWithRelationInput | MiembroOrderByWithRelationInput[]
    cursor?: MiembroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiembroScalarFieldEnum | MiembroScalarFieldEnum[]
  }

  /**
   * PlanMembresia.historialCambios
   */
  export type PlanMembresia$historialCambiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryInclude<ExtArgs> | null
    where?: PlanHistoryWhereInput
    orderBy?: PlanHistoryOrderByWithRelationInput | PlanHistoryOrderByWithRelationInput[]
    cursor?: PlanHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanHistoryScalarFieldEnum | PlanHistoryScalarFieldEnum[]
  }

  /**
   * PlanMembresia without action
   */
  export type PlanMembresiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanMembresia
     */
    select?: PlanMembresiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanMembresia
     */
    omit?: PlanMembresiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanMembresiaInclude<ExtArgs> | null
  }


  /**
   * Model PlanHistory
   */

  export type AggregatePlanHistory = {
    _count: PlanHistoryCountAggregateOutputType | null
    _avg: PlanHistoryAvgAggregateOutputType | null
    _sum: PlanHistorySumAggregateOutputType | null
    _min: PlanHistoryMinAggregateOutputType | null
    _max: PlanHistoryMaxAggregateOutputType | null
  }

  export type PlanHistoryAvgAggregateOutputType = {
    id: number | null
    planMembresiId: number | null
    precioAnterior: Decimal | null
    precioNuevo: Decimal | null
    usuarioId: number | null
  }

  export type PlanHistorySumAggregateOutputType = {
    id: number | null
    planMembresiId: number | null
    precioAnterior: Decimal | null
    precioNuevo: Decimal | null
    usuarioId: number | null
  }

  export type PlanHistoryMinAggregateOutputType = {
    id: number | null
    planMembresiId: number | null
    precioAnterior: Decimal | null
    precioNuevo: Decimal | null
    usuarioId: number | null
    fechaCambio: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanHistoryMaxAggregateOutputType = {
    id: number | null
    planMembresiId: number | null
    precioAnterior: Decimal | null
    precioNuevo: Decimal | null
    usuarioId: number | null
    fechaCambio: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanHistoryCountAggregateOutputType = {
    id: number
    planMembresiId: number
    precioAnterior: number
    precioNuevo: number
    beneficiosAnteriores: number
    beneficiosNuevos: number
    usuarioId: number
    fechaCambio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanHistoryAvgAggregateInputType = {
    id?: true
    planMembresiId?: true
    precioAnterior?: true
    precioNuevo?: true
    usuarioId?: true
  }

  export type PlanHistorySumAggregateInputType = {
    id?: true
    planMembresiId?: true
    precioAnterior?: true
    precioNuevo?: true
    usuarioId?: true
  }

  export type PlanHistoryMinAggregateInputType = {
    id?: true
    planMembresiId?: true
    precioAnterior?: true
    precioNuevo?: true
    usuarioId?: true
    fechaCambio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanHistoryMaxAggregateInputType = {
    id?: true
    planMembresiId?: true
    precioAnterior?: true
    precioNuevo?: true
    usuarioId?: true
    fechaCambio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanHistoryCountAggregateInputType = {
    id?: true
    planMembresiId?: true
    precioAnterior?: true
    precioNuevo?: true
    beneficiosAnteriores?: true
    beneficiosNuevos?: true
    usuarioId?: true
    fechaCambio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanHistory to aggregate.
     */
    where?: PlanHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanHistories to fetch.
     */
    orderBy?: PlanHistoryOrderByWithRelationInput | PlanHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlanHistories
    **/
    _count?: true | PlanHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanHistoryMaxAggregateInputType
  }

  export type GetPlanHistoryAggregateType<T extends PlanHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanHistory[P]>
      : GetScalarType<T[P], AggregatePlanHistory[P]>
  }




  export type PlanHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanHistoryWhereInput
    orderBy?: PlanHistoryOrderByWithAggregationInput | PlanHistoryOrderByWithAggregationInput[]
    by: PlanHistoryScalarFieldEnum[] | PlanHistoryScalarFieldEnum
    having?: PlanHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanHistoryCountAggregateInputType | true
    _avg?: PlanHistoryAvgAggregateInputType
    _sum?: PlanHistorySumAggregateInputType
    _min?: PlanHistoryMinAggregateInputType
    _max?: PlanHistoryMaxAggregateInputType
  }

  export type PlanHistoryGroupByOutputType = {
    id: number
    planMembresiId: number
    precioAnterior: Decimal
    precioNuevo: Decimal
    beneficiosAnteriores: string[]
    beneficiosNuevos: string[]
    usuarioId: number
    fechaCambio: Date
    createdAt: Date
    updatedAt: Date
    _count: PlanHistoryCountAggregateOutputType | null
    _avg: PlanHistoryAvgAggregateOutputType | null
    _sum: PlanHistorySumAggregateOutputType | null
    _min: PlanHistoryMinAggregateOutputType | null
    _max: PlanHistoryMaxAggregateOutputType | null
  }

  type GetPlanHistoryGroupByPayload<T extends PlanHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PlanHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PlanHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planMembresiId?: boolean
    precioAnterior?: boolean
    precioNuevo?: boolean
    beneficiosAnteriores?: boolean
    beneficiosNuevos?: boolean
    usuarioId?: boolean
    fechaCambio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planHistory"]>

  export type PlanHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planMembresiId?: boolean
    precioAnterior?: boolean
    precioNuevo?: boolean
    beneficiosAnteriores?: boolean
    beneficiosNuevos?: boolean
    usuarioId?: boolean
    fechaCambio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planHistory"]>

  export type PlanHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    planMembresiId?: boolean
    precioAnterior?: boolean
    precioNuevo?: boolean
    beneficiosAnteriores?: boolean
    beneficiosNuevos?: boolean
    usuarioId?: boolean
    fechaCambio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planHistory"]>

  export type PlanHistorySelectScalar = {
    id?: boolean
    planMembresiId?: boolean
    precioAnterior?: boolean
    precioNuevo?: boolean
    beneficiosAnteriores?: boolean
    beneficiosNuevos?: boolean
    usuarioId?: boolean
    fechaCambio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "planMembresiId" | "precioAnterior" | "precioNuevo" | "beneficiosAnteriores" | "beneficiosNuevos" | "usuarioId" | "fechaCambio" | "createdAt" | "updatedAt", ExtArgs["result"]["planHistory"]>
  export type PlanHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
  }
  export type PlanHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
  }
  export type PlanHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
  }

  export type $PlanHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlanHistory"
    objects: {
      planMembresia: Prisma.$PlanMembresiaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      planMembresiId: number
      precioAnterior: Prisma.Decimal
      precioNuevo: Prisma.Decimal
      beneficiosAnteriores: string[]
      beneficiosNuevos: string[]
      usuarioId: number
      fechaCambio: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["planHistory"]>
    composites: {}
  }

  type PlanHistoryGetPayload<S extends boolean | null | undefined | PlanHistoryDefaultArgs> = $Result.GetResult<Prisma.$PlanHistoryPayload, S>

  type PlanHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanHistoryCountAggregateInputType | true
    }

  export interface PlanHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlanHistory'], meta: { name: 'PlanHistory' } }
    /**
     * Find zero or one PlanHistory that matches the filter.
     * @param {PlanHistoryFindUniqueArgs} args - Arguments to find a PlanHistory
     * @example
     * // Get one PlanHistory
     * const planHistory = await prisma.planHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanHistoryFindUniqueArgs>(args: SelectSubset<T, PlanHistoryFindUniqueArgs<ExtArgs>>): Prisma__PlanHistoryClient<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlanHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanHistoryFindUniqueOrThrowArgs} args - Arguments to find a PlanHistory
     * @example
     * // Get one PlanHistory
     * const planHistory = await prisma.planHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanHistoryClient<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanHistoryFindFirstArgs} args - Arguments to find a PlanHistory
     * @example
     * // Get one PlanHistory
     * const planHistory = await prisma.planHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanHistoryFindFirstArgs>(args?: SelectSubset<T, PlanHistoryFindFirstArgs<ExtArgs>>): Prisma__PlanHistoryClient<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlanHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanHistoryFindFirstOrThrowArgs} args - Arguments to find a PlanHistory
     * @example
     * // Get one PlanHistory
     * const planHistory = await prisma.planHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanHistoryClient<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlanHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlanHistories
     * const planHistories = await prisma.planHistory.findMany()
     * 
     * // Get first 10 PlanHistories
     * const planHistories = await prisma.planHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planHistoryWithIdOnly = await prisma.planHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanHistoryFindManyArgs>(args?: SelectSubset<T, PlanHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlanHistory.
     * @param {PlanHistoryCreateArgs} args - Arguments to create a PlanHistory.
     * @example
     * // Create one PlanHistory
     * const PlanHistory = await prisma.planHistory.create({
     *   data: {
     *     // ... data to create a PlanHistory
     *   }
     * })
     * 
     */
    create<T extends PlanHistoryCreateArgs>(args: SelectSubset<T, PlanHistoryCreateArgs<ExtArgs>>): Prisma__PlanHistoryClient<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlanHistories.
     * @param {PlanHistoryCreateManyArgs} args - Arguments to create many PlanHistories.
     * @example
     * // Create many PlanHistories
     * const planHistory = await prisma.planHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanHistoryCreateManyArgs>(args?: SelectSubset<T, PlanHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlanHistories and returns the data saved in the database.
     * @param {PlanHistoryCreateManyAndReturnArgs} args - Arguments to create many PlanHistories.
     * @example
     * // Create many PlanHistories
     * const planHistory = await prisma.planHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlanHistories and only return the `id`
     * const planHistoryWithIdOnly = await prisma.planHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlanHistory.
     * @param {PlanHistoryDeleteArgs} args - Arguments to delete one PlanHistory.
     * @example
     * // Delete one PlanHistory
     * const PlanHistory = await prisma.planHistory.delete({
     *   where: {
     *     // ... filter to delete one PlanHistory
     *   }
     * })
     * 
     */
    delete<T extends PlanHistoryDeleteArgs>(args: SelectSubset<T, PlanHistoryDeleteArgs<ExtArgs>>): Prisma__PlanHistoryClient<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlanHistory.
     * @param {PlanHistoryUpdateArgs} args - Arguments to update one PlanHistory.
     * @example
     * // Update one PlanHistory
     * const planHistory = await prisma.planHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanHistoryUpdateArgs>(args: SelectSubset<T, PlanHistoryUpdateArgs<ExtArgs>>): Prisma__PlanHistoryClient<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlanHistories.
     * @param {PlanHistoryDeleteManyArgs} args - Arguments to filter PlanHistories to delete.
     * @example
     * // Delete a few PlanHistories
     * const { count } = await prisma.planHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanHistoryDeleteManyArgs>(args?: SelectSubset<T, PlanHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlanHistories
     * const planHistory = await prisma.planHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanHistoryUpdateManyArgs>(args: SelectSubset<T, PlanHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlanHistories and returns the data updated in the database.
     * @param {PlanHistoryUpdateManyAndReturnArgs} args - Arguments to update many PlanHistories.
     * @example
     * // Update many PlanHistories
     * const planHistory = await prisma.planHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlanHistories and only return the `id`
     * const planHistoryWithIdOnly = await prisma.planHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlanHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlanHistory.
     * @param {PlanHistoryUpsertArgs} args - Arguments to update or create a PlanHistory.
     * @example
     * // Update or create a PlanHistory
     * const planHistory = await prisma.planHistory.upsert({
     *   create: {
     *     // ... data to create a PlanHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlanHistory we want to update
     *   }
     * })
     */
    upsert<T extends PlanHistoryUpsertArgs>(args: SelectSubset<T, PlanHistoryUpsertArgs<ExtArgs>>): Prisma__PlanHistoryClient<$Result.GetResult<Prisma.$PlanHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlanHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanHistoryCountArgs} args - Arguments to filter PlanHistories to count.
     * @example
     * // Count the number of PlanHistories
     * const count = await prisma.planHistory.count({
     *   where: {
     *     // ... the filter for the PlanHistories we want to count
     *   }
     * })
    **/
    count<T extends PlanHistoryCountArgs>(
      args?: Subset<T, PlanHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlanHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanHistoryAggregateArgs>(args: Subset<T, PlanHistoryAggregateArgs>): Prisma.PrismaPromise<GetPlanHistoryAggregateType<T>>

    /**
     * Group by PlanHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanHistoryGroupByArgs} args - Group by arguments.
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
      T extends PlanHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PlanHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlanHistory model
   */
  readonly fields: PlanHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlanHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planMembresia<T extends PlanMembresiaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanMembresiaDefaultArgs<ExtArgs>>): Prisma__PlanMembresiaClient<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlanHistory model
   */
  interface PlanHistoryFieldRefs {
    readonly id: FieldRef<"PlanHistory", 'Int'>
    readonly planMembresiId: FieldRef<"PlanHistory", 'Int'>
    readonly precioAnterior: FieldRef<"PlanHistory", 'Decimal'>
    readonly precioNuevo: FieldRef<"PlanHistory", 'Decimal'>
    readonly beneficiosAnteriores: FieldRef<"PlanHistory", 'String[]'>
    readonly beneficiosNuevos: FieldRef<"PlanHistory", 'String[]'>
    readonly usuarioId: FieldRef<"PlanHistory", 'Int'>
    readonly fechaCambio: FieldRef<"PlanHistory", 'DateTime'>
    readonly createdAt: FieldRef<"PlanHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"PlanHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlanHistory findUnique
   */
  export type PlanHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlanHistory to fetch.
     */
    where: PlanHistoryWhereUniqueInput
  }

  /**
   * PlanHistory findUniqueOrThrow
   */
  export type PlanHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlanHistory to fetch.
     */
    where: PlanHistoryWhereUniqueInput
  }

  /**
   * PlanHistory findFirst
   */
  export type PlanHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlanHistory to fetch.
     */
    where?: PlanHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanHistories to fetch.
     */
    orderBy?: PlanHistoryOrderByWithRelationInput | PlanHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanHistories.
     */
    cursor?: PlanHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanHistories.
     */
    distinct?: PlanHistoryScalarFieldEnum | PlanHistoryScalarFieldEnum[]
  }

  /**
   * PlanHistory findFirstOrThrow
   */
  export type PlanHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlanHistory to fetch.
     */
    where?: PlanHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanHistories to fetch.
     */
    orderBy?: PlanHistoryOrderByWithRelationInput | PlanHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlanHistories.
     */
    cursor?: PlanHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanHistories.
     */
    distinct?: PlanHistoryScalarFieldEnum | PlanHistoryScalarFieldEnum[]
  }

  /**
   * PlanHistory findMany
   */
  export type PlanHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlanHistories to fetch.
     */
    where?: PlanHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlanHistories to fetch.
     */
    orderBy?: PlanHistoryOrderByWithRelationInput | PlanHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlanHistories.
     */
    cursor?: PlanHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlanHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlanHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlanHistories.
     */
    distinct?: PlanHistoryScalarFieldEnum | PlanHistoryScalarFieldEnum[]
  }

  /**
   * PlanHistory create
   */
  export type PlanHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PlanHistory.
     */
    data: XOR<PlanHistoryCreateInput, PlanHistoryUncheckedCreateInput>
  }

  /**
   * PlanHistory createMany
   */
  export type PlanHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlanHistories.
     */
    data: PlanHistoryCreateManyInput | PlanHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlanHistory createManyAndReturn
   */
  export type PlanHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PlanHistories.
     */
    data: PlanHistoryCreateManyInput | PlanHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanHistory update
   */
  export type PlanHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PlanHistory.
     */
    data: XOR<PlanHistoryUpdateInput, PlanHistoryUncheckedUpdateInput>
    /**
     * Choose, which PlanHistory to update.
     */
    where: PlanHistoryWhereUniqueInput
  }

  /**
   * PlanHistory updateMany
   */
  export type PlanHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlanHistories.
     */
    data: XOR<PlanHistoryUpdateManyMutationInput, PlanHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PlanHistories to update
     */
    where?: PlanHistoryWhereInput
    /**
     * Limit how many PlanHistories to update.
     */
    limit?: number
  }

  /**
   * PlanHistory updateManyAndReturn
   */
  export type PlanHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PlanHistories.
     */
    data: XOR<PlanHistoryUpdateManyMutationInput, PlanHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PlanHistories to update
     */
    where?: PlanHistoryWhereInput
    /**
     * Limit how many PlanHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlanHistory upsert
   */
  export type PlanHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PlanHistory to update in case it exists.
     */
    where: PlanHistoryWhereUniqueInput
    /**
     * In case the PlanHistory found by the `where` argument doesn't exist, create a new PlanHistory with this data.
     */
    create: XOR<PlanHistoryCreateInput, PlanHistoryUncheckedCreateInput>
    /**
     * In case the PlanHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanHistoryUpdateInput, PlanHistoryUncheckedUpdateInput>
  }

  /**
   * PlanHistory delete
   */
  export type PlanHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryInclude<ExtArgs> | null
    /**
     * Filter which PlanHistory to delete.
     */
    where: PlanHistoryWhereUniqueInput
  }

  /**
   * PlanHistory deleteMany
   */
  export type PlanHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlanHistories to delete
     */
    where?: PlanHistoryWhereInput
    /**
     * Limit how many PlanHistories to delete.
     */
    limit?: number
  }

  /**
   * PlanHistory without action
   */
  export type PlanHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanHistory
     */
    select?: PlanHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlanHistory
     */
    omit?: PlanHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Miembro
   */

  export type AggregateMiembro = {
    _count: MiembroCountAggregateOutputType | null
    _avg: MiembroAvgAggregateOutputType | null
    _sum: MiembroSumAggregateOutputType | null
    _min: MiembroMinAggregateOutputType | null
    _max: MiembroMaxAggregateOutputType | null
  }

  export type MiembroAvgAggregateOutputType = {
    id: number | null
    planMembresiaId: number | null
  }

  export type MiembroSumAggregateOutputType = {
    id: number | null
    planMembresiaId: number | null
  }

  export type MiembroMinAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    documentoIdentidad: string | null
    correoPersonal: string | null
    telefono: string | null
    fechaNacimiento: Date | null
    planMembresiaId: number | null
    fechaInicio: Date | null
    fechaVencimiento: Date | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MiembroMaxAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    documentoIdentidad: string | null
    correoPersonal: string | null
    telefono: string | null
    fechaNacimiento: Date | null
    planMembresiaId: number | null
    fechaInicio: Date | null
    fechaVencimiento: Date | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MiembroCountAggregateOutputType = {
    id: number
    nombres: number
    apellidos: number
    documentoIdentidad: number
    correoPersonal: number
    telefono: number
    fechaNacimiento: number
    planMembresiaId: number
    fechaInicio: number
    fechaVencimiento: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MiembroAvgAggregateInputType = {
    id?: true
    planMembresiaId?: true
  }

  export type MiembroSumAggregateInputType = {
    id?: true
    planMembresiaId?: true
  }

  export type MiembroMinAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    documentoIdentidad?: true
    correoPersonal?: true
    telefono?: true
    fechaNacimiento?: true
    planMembresiaId?: true
    fechaInicio?: true
    fechaVencimiento?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MiembroMaxAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    documentoIdentidad?: true
    correoPersonal?: true
    telefono?: true
    fechaNacimiento?: true
    planMembresiaId?: true
    fechaInicio?: true
    fechaVencimiento?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MiembroCountAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    documentoIdentidad?: true
    correoPersonal?: true
    telefono?: true
    fechaNacimiento?: true
    planMembresiaId?: true
    fechaInicio?: true
    fechaVencimiento?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MiembroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Miembro to aggregate.
     */
    where?: MiembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Miembros to fetch.
     */
    orderBy?: MiembroOrderByWithRelationInput | MiembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MiembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Miembros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Miembros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Miembros
    **/
    _count?: true | MiembroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MiembroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MiembroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MiembroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MiembroMaxAggregateInputType
  }

  export type GetMiembroAggregateType<T extends MiembroAggregateArgs> = {
        [P in keyof T & keyof AggregateMiembro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMiembro[P]>
      : GetScalarType<T[P], AggregateMiembro[P]>
  }




  export type MiembroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiembroWhereInput
    orderBy?: MiembroOrderByWithAggregationInput | MiembroOrderByWithAggregationInput[]
    by: MiembroScalarFieldEnum[] | MiembroScalarFieldEnum
    having?: MiembroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MiembroCountAggregateInputType | true
    _avg?: MiembroAvgAggregateInputType
    _sum?: MiembroSumAggregateInputType
    _min?: MiembroMinAggregateInputType
    _max?: MiembroMaxAggregateInputType
  }

  export type MiembroGroupByOutputType = {
    id: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono: string | null
    fechaNacimiento: Date
    planMembresiaId: number
    fechaInicio: Date
    fechaVencimiento: Date
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: MiembroCountAggregateOutputType | null
    _avg: MiembroAvgAggregateOutputType | null
    _sum: MiembroSumAggregateOutputType | null
    _min: MiembroMinAggregateOutputType | null
    _max: MiembroMaxAggregateOutputType | null
  }

  type GetMiembroGroupByPayload<T extends MiembroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MiembroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MiembroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MiembroGroupByOutputType[P]>
            : GetScalarType<T[P], MiembroGroupByOutputType[P]>
        }
      >
    >


  export type MiembroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    correoPersonal?: boolean
    telefono?: boolean
    fechaNacimiento?: boolean
    planMembresiaId?: boolean
    fechaInicio?: boolean
    fechaVencimiento?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
    rutinas?: boolean | Miembro$rutinasArgs<ExtArgs>
    medidasCorporales?: boolean | Miembro$medidasCorporalesArgs<ExtArgs>
    auditLog?: boolean | Miembro$auditLogArgs<ExtArgs>
    _count?: boolean | MiembroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miembro"]>

  export type MiembroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    correoPersonal?: boolean
    telefono?: boolean
    fechaNacimiento?: boolean
    planMembresiaId?: boolean
    fechaInicio?: boolean
    fechaVencimiento?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miembro"]>

  export type MiembroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    correoPersonal?: boolean
    telefono?: boolean
    fechaNacimiento?: boolean
    planMembresiaId?: boolean
    fechaInicio?: boolean
    fechaVencimiento?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miembro"]>

  export type MiembroSelectScalar = {
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    correoPersonal?: boolean
    telefono?: boolean
    fechaNacimiento?: boolean
    planMembresiaId?: boolean
    fechaInicio?: boolean
    fechaVencimiento?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MiembroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombres" | "apellidos" | "documentoIdentidad" | "correoPersonal" | "telefono" | "fechaNacimiento" | "planMembresiaId" | "fechaInicio" | "fechaVencimiento" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["miembro"]>
  export type MiembroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
    rutinas?: boolean | Miembro$rutinasArgs<ExtArgs>
    medidasCorporales?: boolean | Miembro$medidasCorporalesArgs<ExtArgs>
    auditLog?: boolean | Miembro$auditLogArgs<ExtArgs>
    _count?: boolean | MiembroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MiembroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
  }
  export type MiembroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planMembresia?: boolean | PlanMembresiaDefaultArgs<ExtArgs>
  }

  export type $MiembroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Miembro"
    objects: {
      planMembresia: Prisma.$PlanMembresiaPayload<ExtArgs>
      rutinas: Prisma.$RutinaPayload<ExtArgs>[]
      medidasCorporales: Prisma.$BodyMeasurementPayload<ExtArgs>[]
      auditLog: Prisma.$MemberAuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombres: string
      apellidos: string
      documentoIdentidad: string
      correoPersonal: string
      telefono: string | null
      fechaNacimiento: Date
      planMembresiaId: number
      fechaInicio: Date
      fechaVencimiento: Date
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["miembro"]>
    composites: {}
  }

  type MiembroGetPayload<S extends boolean | null | undefined | MiembroDefaultArgs> = $Result.GetResult<Prisma.$MiembroPayload, S>

  type MiembroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MiembroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MiembroCountAggregateInputType | true
    }

  export interface MiembroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Miembro'], meta: { name: 'Miembro' } }
    /**
     * Find zero or one Miembro that matches the filter.
     * @param {MiembroFindUniqueArgs} args - Arguments to find a Miembro
     * @example
     * // Get one Miembro
     * const miembro = await prisma.miembro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MiembroFindUniqueArgs>(args: SelectSubset<T, MiembroFindUniqueArgs<ExtArgs>>): Prisma__MiembroClient<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Miembro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MiembroFindUniqueOrThrowArgs} args - Arguments to find a Miembro
     * @example
     * // Get one Miembro
     * const miembro = await prisma.miembro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MiembroFindUniqueOrThrowArgs>(args: SelectSubset<T, MiembroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MiembroClient<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Miembro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroFindFirstArgs} args - Arguments to find a Miembro
     * @example
     * // Get one Miembro
     * const miembro = await prisma.miembro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MiembroFindFirstArgs>(args?: SelectSubset<T, MiembroFindFirstArgs<ExtArgs>>): Prisma__MiembroClient<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Miembro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroFindFirstOrThrowArgs} args - Arguments to find a Miembro
     * @example
     * // Get one Miembro
     * const miembro = await prisma.miembro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MiembroFindFirstOrThrowArgs>(args?: SelectSubset<T, MiembroFindFirstOrThrowArgs<ExtArgs>>): Prisma__MiembroClient<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Miembros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Miembros
     * const miembros = await prisma.miembro.findMany()
     * 
     * // Get first 10 Miembros
     * const miembros = await prisma.miembro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const miembroWithIdOnly = await prisma.miembro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MiembroFindManyArgs>(args?: SelectSubset<T, MiembroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Miembro.
     * @param {MiembroCreateArgs} args - Arguments to create a Miembro.
     * @example
     * // Create one Miembro
     * const Miembro = await prisma.miembro.create({
     *   data: {
     *     // ... data to create a Miembro
     *   }
     * })
     * 
     */
    create<T extends MiembroCreateArgs>(args: SelectSubset<T, MiembroCreateArgs<ExtArgs>>): Prisma__MiembroClient<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Miembros.
     * @param {MiembroCreateManyArgs} args - Arguments to create many Miembros.
     * @example
     * // Create many Miembros
     * const miembro = await prisma.miembro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MiembroCreateManyArgs>(args?: SelectSubset<T, MiembroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Miembros and returns the data saved in the database.
     * @param {MiembroCreateManyAndReturnArgs} args - Arguments to create many Miembros.
     * @example
     * // Create many Miembros
     * const miembro = await prisma.miembro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Miembros and only return the `id`
     * const miembroWithIdOnly = await prisma.miembro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MiembroCreateManyAndReturnArgs>(args?: SelectSubset<T, MiembroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Miembro.
     * @param {MiembroDeleteArgs} args - Arguments to delete one Miembro.
     * @example
     * // Delete one Miembro
     * const Miembro = await prisma.miembro.delete({
     *   where: {
     *     // ... filter to delete one Miembro
     *   }
     * })
     * 
     */
    delete<T extends MiembroDeleteArgs>(args: SelectSubset<T, MiembroDeleteArgs<ExtArgs>>): Prisma__MiembroClient<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Miembro.
     * @param {MiembroUpdateArgs} args - Arguments to update one Miembro.
     * @example
     * // Update one Miembro
     * const miembro = await prisma.miembro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MiembroUpdateArgs>(args: SelectSubset<T, MiembroUpdateArgs<ExtArgs>>): Prisma__MiembroClient<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Miembros.
     * @param {MiembroDeleteManyArgs} args - Arguments to filter Miembros to delete.
     * @example
     * // Delete a few Miembros
     * const { count } = await prisma.miembro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MiembroDeleteManyArgs>(args?: SelectSubset<T, MiembroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Miembros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Miembros
     * const miembro = await prisma.miembro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MiembroUpdateManyArgs>(args: SelectSubset<T, MiembroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Miembros and returns the data updated in the database.
     * @param {MiembroUpdateManyAndReturnArgs} args - Arguments to update many Miembros.
     * @example
     * // Update many Miembros
     * const miembro = await prisma.miembro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Miembros and only return the `id`
     * const miembroWithIdOnly = await prisma.miembro.updateManyAndReturn({
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
    updateManyAndReturn<T extends MiembroUpdateManyAndReturnArgs>(args: SelectSubset<T, MiembroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Miembro.
     * @param {MiembroUpsertArgs} args - Arguments to update or create a Miembro.
     * @example
     * // Update or create a Miembro
     * const miembro = await prisma.miembro.upsert({
     *   create: {
     *     // ... data to create a Miembro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Miembro we want to update
     *   }
     * })
     */
    upsert<T extends MiembroUpsertArgs>(args: SelectSubset<T, MiembroUpsertArgs<ExtArgs>>): Prisma__MiembroClient<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Miembros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroCountArgs} args - Arguments to filter Miembros to count.
     * @example
     * // Count the number of Miembros
     * const count = await prisma.miembro.count({
     *   where: {
     *     // ... the filter for the Miembros we want to count
     *   }
     * })
    **/
    count<T extends MiembroCountArgs>(
      args?: Subset<T, MiembroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MiembroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Miembro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MiembroAggregateArgs>(args: Subset<T, MiembroAggregateArgs>): Prisma.PrismaPromise<GetMiembroAggregateType<T>>

    /**
     * Group by Miembro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiembroGroupByArgs} args - Group by arguments.
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
      T extends MiembroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MiembroGroupByArgs['orderBy'] }
        : { orderBy?: MiembroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MiembroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMiembroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Miembro model
   */
  readonly fields: MiembroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Miembro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MiembroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planMembresia<T extends PlanMembresiaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanMembresiaDefaultArgs<ExtArgs>>): Prisma__PlanMembresiaClient<$Result.GetResult<Prisma.$PlanMembresiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rutinas<T extends Miembro$rutinasArgs<ExtArgs> = {}>(args?: Subset<T, Miembro$rutinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medidasCorporales<T extends Miembro$medidasCorporalesArgs<ExtArgs> = {}>(args?: Subset<T, Miembro$medidasCorporalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLog<T extends Miembro$auditLogArgs<ExtArgs> = {}>(args?: Subset<T, Miembro$auditLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Miembro model
   */
  interface MiembroFieldRefs {
    readonly id: FieldRef<"Miembro", 'Int'>
    readonly nombres: FieldRef<"Miembro", 'String'>
    readonly apellidos: FieldRef<"Miembro", 'String'>
    readonly documentoIdentidad: FieldRef<"Miembro", 'String'>
    readonly correoPersonal: FieldRef<"Miembro", 'String'>
    readonly telefono: FieldRef<"Miembro", 'String'>
    readonly fechaNacimiento: FieldRef<"Miembro", 'DateTime'>
    readonly planMembresiaId: FieldRef<"Miembro", 'Int'>
    readonly fechaInicio: FieldRef<"Miembro", 'DateTime'>
    readonly fechaVencimiento: FieldRef<"Miembro", 'DateTime'>
    readonly activo: FieldRef<"Miembro", 'Boolean'>
    readonly createdAt: FieldRef<"Miembro", 'DateTime'>
    readonly updatedAt: FieldRef<"Miembro", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Miembro findUnique
   */
  export type MiembroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroInclude<ExtArgs> | null
    /**
     * Filter, which Miembro to fetch.
     */
    where: MiembroWhereUniqueInput
  }

  /**
   * Miembro findUniqueOrThrow
   */
  export type MiembroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroInclude<ExtArgs> | null
    /**
     * Filter, which Miembro to fetch.
     */
    where: MiembroWhereUniqueInput
  }

  /**
   * Miembro findFirst
   */
  export type MiembroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroInclude<ExtArgs> | null
    /**
     * Filter, which Miembro to fetch.
     */
    where?: MiembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Miembros to fetch.
     */
    orderBy?: MiembroOrderByWithRelationInput | MiembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Miembros.
     */
    cursor?: MiembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Miembros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Miembros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Miembros.
     */
    distinct?: MiembroScalarFieldEnum | MiembroScalarFieldEnum[]
  }

  /**
   * Miembro findFirstOrThrow
   */
  export type MiembroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroInclude<ExtArgs> | null
    /**
     * Filter, which Miembro to fetch.
     */
    where?: MiembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Miembros to fetch.
     */
    orderBy?: MiembroOrderByWithRelationInput | MiembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Miembros.
     */
    cursor?: MiembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Miembros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Miembros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Miembros.
     */
    distinct?: MiembroScalarFieldEnum | MiembroScalarFieldEnum[]
  }

  /**
   * Miembro findMany
   */
  export type MiembroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroInclude<ExtArgs> | null
    /**
     * Filter, which Miembros to fetch.
     */
    where?: MiembroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Miembros to fetch.
     */
    orderBy?: MiembroOrderByWithRelationInput | MiembroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Miembros.
     */
    cursor?: MiembroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Miembros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Miembros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Miembros.
     */
    distinct?: MiembroScalarFieldEnum | MiembroScalarFieldEnum[]
  }

  /**
   * Miembro create
   */
  export type MiembroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroInclude<ExtArgs> | null
    /**
     * The data needed to create a Miembro.
     */
    data: XOR<MiembroCreateInput, MiembroUncheckedCreateInput>
  }

  /**
   * Miembro createMany
   */
  export type MiembroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Miembros.
     */
    data: MiembroCreateManyInput | MiembroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Miembro createManyAndReturn
   */
  export type MiembroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * The data used to create many Miembros.
     */
    data: MiembroCreateManyInput | MiembroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Miembro update
   */
  export type MiembroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroInclude<ExtArgs> | null
    /**
     * The data needed to update a Miembro.
     */
    data: XOR<MiembroUpdateInput, MiembroUncheckedUpdateInput>
    /**
     * Choose, which Miembro to update.
     */
    where: MiembroWhereUniqueInput
  }

  /**
   * Miembro updateMany
   */
  export type MiembroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Miembros.
     */
    data: XOR<MiembroUpdateManyMutationInput, MiembroUncheckedUpdateManyInput>
    /**
     * Filter which Miembros to update
     */
    where?: MiembroWhereInput
    /**
     * Limit how many Miembros to update.
     */
    limit?: number
  }

  /**
   * Miembro updateManyAndReturn
   */
  export type MiembroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * The data used to update Miembros.
     */
    data: XOR<MiembroUpdateManyMutationInput, MiembroUncheckedUpdateManyInput>
    /**
     * Filter which Miembros to update
     */
    where?: MiembroWhereInput
    /**
     * Limit how many Miembros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Miembro upsert
   */
  export type MiembroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroInclude<ExtArgs> | null
    /**
     * The filter to search for the Miembro to update in case it exists.
     */
    where: MiembroWhereUniqueInput
    /**
     * In case the Miembro found by the `where` argument doesn't exist, create a new Miembro with this data.
     */
    create: XOR<MiembroCreateInput, MiembroUncheckedCreateInput>
    /**
     * In case the Miembro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MiembroUpdateInput, MiembroUncheckedUpdateInput>
  }

  /**
   * Miembro delete
   */
  export type MiembroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroInclude<ExtArgs> | null
    /**
     * Filter which Miembro to delete.
     */
    where: MiembroWhereUniqueInput
  }

  /**
   * Miembro deleteMany
   */
  export type MiembroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Miembros to delete
     */
    where?: MiembroWhereInput
    /**
     * Limit how many Miembros to delete.
     */
    limit?: number
  }

  /**
   * Miembro.rutinas
   */
  export type Miembro$rutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    cursor?: RutinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Miembro.medidasCorporales
   */
  export type Miembro$medidasCorporalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    where?: BodyMeasurementWhereInput
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    cursor?: BodyMeasurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * Miembro.auditLog
   */
  export type Miembro$auditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogInclude<ExtArgs> | null
    where?: MemberAuditLogWhereInput
    orderBy?: MemberAuditLogOrderByWithRelationInput | MemberAuditLogOrderByWithRelationInput[]
    cursor?: MemberAuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberAuditLogScalarFieldEnum | MemberAuditLogScalarFieldEnum[]
  }

  /**
   * Miembro without action
   */
  export type MiembroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Miembro
     */
    select?: MiembroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Miembro
     */
    omit?: MiembroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiembroInclude<ExtArgs> | null
  }


  /**
   * Model MemberAuditLog
   */

  export type AggregateMemberAuditLog = {
    _count: MemberAuditLogCountAggregateOutputType | null
    _avg: MemberAuditLogAvgAggregateOutputType | null
    _sum: MemberAuditLogSumAggregateOutputType | null
    _min: MemberAuditLogMinAggregateOutputType | null
    _max: MemberAuditLogMaxAggregateOutputType | null
  }

  export type MemberAuditLogAvgAggregateOutputType = {
    id: number | null
    miembroId: number | null
    usuarioId: number | null
  }

  export type MemberAuditLogSumAggregateOutputType = {
    id: number | null
    miembroId: number | null
    usuarioId: number | null
  }

  export type MemberAuditLogMinAggregateOutputType = {
    id: number | null
    miembroId: number | null
    usuarioId: number | null
    cambios: string | null
    valorAnterior: string | null
    valorNuevo: string | null
    fechaCambio: Date | null
    createdAt: Date | null
  }

  export type MemberAuditLogMaxAggregateOutputType = {
    id: number | null
    miembroId: number | null
    usuarioId: number | null
    cambios: string | null
    valorAnterior: string | null
    valorNuevo: string | null
    fechaCambio: Date | null
    createdAt: Date | null
  }

  export type MemberAuditLogCountAggregateOutputType = {
    id: number
    miembroId: number
    usuarioId: number
    cambios: number
    valorAnterior: number
    valorNuevo: number
    fechaCambio: number
    createdAt: number
    _all: number
  }


  export type MemberAuditLogAvgAggregateInputType = {
    id?: true
    miembroId?: true
    usuarioId?: true
  }

  export type MemberAuditLogSumAggregateInputType = {
    id?: true
    miembroId?: true
    usuarioId?: true
  }

  export type MemberAuditLogMinAggregateInputType = {
    id?: true
    miembroId?: true
    usuarioId?: true
    cambios?: true
    valorAnterior?: true
    valorNuevo?: true
    fechaCambio?: true
    createdAt?: true
  }

  export type MemberAuditLogMaxAggregateInputType = {
    id?: true
    miembroId?: true
    usuarioId?: true
    cambios?: true
    valorAnterior?: true
    valorNuevo?: true
    fechaCambio?: true
    createdAt?: true
  }

  export type MemberAuditLogCountAggregateInputType = {
    id?: true
    miembroId?: true
    usuarioId?: true
    cambios?: true
    valorAnterior?: true
    valorNuevo?: true
    fechaCambio?: true
    createdAt?: true
    _all?: true
  }

  export type MemberAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberAuditLog to aggregate.
     */
    where?: MemberAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberAuditLogs to fetch.
     */
    orderBy?: MemberAuditLogOrderByWithRelationInput | MemberAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberAuditLogs
    **/
    _count?: true | MemberAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberAuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberAuditLogMaxAggregateInputType
  }

  export type GetMemberAuditLogAggregateType<T extends MemberAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberAuditLog[P]>
      : GetScalarType<T[P], AggregateMemberAuditLog[P]>
  }




  export type MemberAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberAuditLogWhereInput
    orderBy?: MemberAuditLogOrderByWithAggregationInput | MemberAuditLogOrderByWithAggregationInput[]
    by: MemberAuditLogScalarFieldEnum[] | MemberAuditLogScalarFieldEnum
    having?: MemberAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberAuditLogCountAggregateInputType | true
    _avg?: MemberAuditLogAvgAggregateInputType
    _sum?: MemberAuditLogSumAggregateInputType
    _min?: MemberAuditLogMinAggregateInputType
    _max?: MemberAuditLogMaxAggregateInputType
  }

  export type MemberAuditLogGroupByOutputType = {
    id: number
    miembroId: number
    usuarioId: number
    cambios: string
    valorAnterior: string | null
    valorNuevo: string | null
    fechaCambio: Date
    createdAt: Date
    _count: MemberAuditLogCountAggregateOutputType | null
    _avg: MemberAuditLogAvgAggregateOutputType | null
    _sum: MemberAuditLogSumAggregateOutputType | null
    _min: MemberAuditLogMinAggregateOutputType | null
    _max: MemberAuditLogMaxAggregateOutputType | null
  }

  type GetMemberAuditLogGroupByPayload<T extends MemberAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], MemberAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type MemberAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    miembroId?: boolean
    usuarioId?: boolean
    cambios?: boolean
    valorAnterior?: boolean
    valorNuevo?: boolean
    fechaCambio?: boolean
    createdAt?: boolean
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberAuditLog"]>

  export type MemberAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    miembroId?: boolean
    usuarioId?: boolean
    cambios?: boolean
    valorAnterior?: boolean
    valorNuevo?: boolean
    fechaCambio?: boolean
    createdAt?: boolean
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberAuditLog"]>

  export type MemberAuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    miembroId?: boolean
    usuarioId?: boolean
    cambios?: boolean
    valorAnterior?: boolean
    valorNuevo?: boolean
    fechaCambio?: boolean
    createdAt?: boolean
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberAuditLog"]>

  export type MemberAuditLogSelectScalar = {
    id?: boolean
    miembroId?: boolean
    usuarioId?: boolean
    cambios?: boolean
    valorAnterior?: boolean
    valorNuevo?: boolean
    fechaCambio?: boolean
    createdAt?: boolean
  }

  export type MemberAuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "miembroId" | "usuarioId" | "cambios" | "valorAnterior" | "valorNuevo" | "fechaCambio" | "createdAt", ExtArgs["result"]["memberAuditLog"]>
  export type MemberAuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }
  export type MemberAuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }
  export type MemberAuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }

  export type $MemberAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberAuditLog"
    objects: {
      miembro: Prisma.$MiembroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      miembroId: number
      usuarioId: number
      cambios: string
      valorAnterior: string | null
      valorNuevo: string | null
      fechaCambio: Date
      createdAt: Date
    }, ExtArgs["result"]["memberAuditLog"]>
    composites: {}
  }

  type MemberAuditLogGetPayload<S extends boolean | null | undefined | MemberAuditLogDefaultArgs> = $Result.GetResult<Prisma.$MemberAuditLogPayload, S>

  type MemberAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberAuditLogCountAggregateInputType | true
    }

  export interface MemberAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberAuditLog'], meta: { name: 'MemberAuditLog' } }
    /**
     * Find zero or one MemberAuditLog that matches the filter.
     * @param {MemberAuditLogFindUniqueArgs} args - Arguments to find a MemberAuditLog
     * @example
     * // Get one MemberAuditLog
     * const memberAuditLog = await prisma.memberAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberAuditLogFindUniqueArgs>(args: SelectSubset<T, MemberAuditLogFindUniqueArgs<ExtArgs>>): Prisma__MemberAuditLogClient<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberAuditLogFindUniqueOrThrowArgs} args - Arguments to find a MemberAuditLog
     * @example
     * // Get one MemberAuditLog
     * const memberAuditLog = await prisma.memberAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberAuditLogClient<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAuditLogFindFirstArgs} args - Arguments to find a MemberAuditLog
     * @example
     * // Get one MemberAuditLog
     * const memberAuditLog = await prisma.memberAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberAuditLogFindFirstArgs>(args?: SelectSubset<T, MemberAuditLogFindFirstArgs<ExtArgs>>): Prisma__MemberAuditLogClient<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAuditLogFindFirstOrThrowArgs} args - Arguments to find a MemberAuditLog
     * @example
     * // Get one MemberAuditLog
     * const memberAuditLog = await prisma.memberAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberAuditLogClient<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberAuditLogs
     * const memberAuditLogs = await prisma.memberAuditLog.findMany()
     * 
     * // Get first 10 MemberAuditLogs
     * const memberAuditLogs = await prisma.memberAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberAuditLogWithIdOnly = await prisma.memberAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberAuditLogFindManyArgs>(args?: SelectSubset<T, MemberAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberAuditLog.
     * @param {MemberAuditLogCreateArgs} args - Arguments to create a MemberAuditLog.
     * @example
     * // Create one MemberAuditLog
     * const MemberAuditLog = await prisma.memberAuditLog.create({
     *   data: {
     *     // ... data to create a MemberAuditLog
     *   }
     * })
     * 
     */
    create<T extends MemberAuditLogCreateArgs>(args: SelectSubset<T, MemberAuditLogCreateArgs<ExtArgs>>): Prisma__MemberAuditLogClient<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberAuditLogs.
     * @param {MemberAuditLogCreateManyArgs} args - Arguments to create many MemberAuditLogs.
     * @example
     * // Create many MemberAuditLogs
     * const memberAuditLog = await prisma.memberAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberAuditLogCreateManyArgs>(args?: SelectSubset<T, MemberAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MemberAuditLogs and returns the data saved in the database.
     * @param {MemberAuditLogCreateManyAndReturnArgs} args - Arguments to create many MemberAuditLogs.
     * @example
     * // Create many MemberAuditLogs
     * const memberAuditLog = await prisma.memberAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MemberAuditLogs and only return the `id`
     * const memberAuditLogWithIdOnly = await prisma.memberAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MemberAuditLog.
     * @param {MemberAuditLogDeleteArgs} args - Arguments to delete one MemberAuditLog.
     * @example
     * // Delete one MemberAuditLog
     * const MemberAuditLog = await prisma.memberAuditLog.delete({
     *   where: {
     *     // ... filter to delete one MemberAuditLog
     *   }
     * })
     * 
     */
    delete<T extends MemberAuditLogDeleteArgs>(args: SelectSubset<T, MemberAuditLogDeleteArgs<ExtArgs>>): Prisma__MemberAuditLogClient<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberAuditLog.
     * @param {MemberAuditLogUpdateArgs} args - Arguments to update one MemberAuditLog.
     * @example
     * // Update one MemberAuditLog
     * const memberAuditLog = await prisma.memberAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberAuditLogUpdateArgs>(args: SelectSubset<T, MemberAuditLogUpdateArgs<ExtArgs>>): Prisma__MemberAuditLogClient<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberAuditLogs.
     * @param {MemberAuditLogDeleteManyArgs} args - Arguments to filter MemberAuditLogs to delete.
     * @example
     * // Delete a few MemberAuditLogs
     * const { count } = await prisma.memberAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberAuditLogDeleteManyArgs>(args?: SelectSubset<T, MemberAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberAuditLogs
     * const memberAuditLog = await prisma.memberAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberAuditLogUpdateManyArgs>(args: SelectSubset<T, MemberAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberAuditLogs and returns the data updated in the database.
     * @param {MemberAuditLogUpdateManyAndReturnArgs} args - Arguments to update many MemberAuditLogs.
     * @example
     * // Update many MemberAuditLogs
     * const memberAuditLog = await prisma.memberAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MemberAuditLogs and only return the `id`
     * const memberAuditLogWithIdOnly = await prisma.memberAuditLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends MemberAuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MemberAuditLog.
     * @param {MemberAuditLogUpsertArgs} args - Arguments to update or create a MemberAuditLog.
     * @example
     * // Update or create a MemberAuditLog
     * const memberAuditLog = await prisma.memberAuditLog.upsert({
     *   create: {
     *     // ... data to create a MemberAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends MemberAuditLogUpsertArgs>(args: SelectSubset<T, MemberAuditLogUpsertArgs<ExtArgs>>): Prisma__MemberAuditLogClient<$Result.GetResult<Prisma.$MemberAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAuditLogCountArgs} args - Arguments to filter MemberAuditLogs to count.
     * @example
     * // Count the number of MemberAuditLogs
     * const count = await prisma.memberAuditLog.count({
     *   where: {
     *     // ... the filter for the MemberAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends MemberAuditLogCountArgs>(
      args?: Subset<T, MemberAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAuditLogAggregateArgs>(args: Subset<T, MemberAuditLogAggregateArgs>): Prisma.PrismaPromise<GetMemberAuditLogAggregateType<T>>

    /**
     * Group by MemberAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAuditLogGroupByArgs} args - Group by arguments.
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
      T extends MemberAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: MemberAuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberAuditLog model
   */
  readonly fields: MemberAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    miembro<T extends MiembroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MiembroDefaultArgs<ExtArgs>>): Prisma__MiembroClient<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MemberAuditLog model
   */
  interface MemberAuditLogFieldRefs {
    readonly id: FieldRef<"MemberAuditLog", 'Int'>
    readonly miembroId: FieldRef<"MemberAuditLog", 'Int'>
    readonly usuarioId: FieldRef<"MemberAuditLog", 'Int'>
    readonly cambios: FieldRef<"MemberAuditLog", 'String'>
    readonly valorAnterior: FieldRef<"MemberAuditLog", 'String'>
    readonly valorNuevo: FieldRef<"MemberAuditLog", 'String'>
    readonly fechaCambio: FieldRef<"MemberAuditLog", 'DateTime'>
    readonly createdAt: FieldRef<"MemberAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemberAuditLog findUnique
   */
  export type MemberAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which MemberAuditLog to fetch.
     */
    where: MemberAuditLogWhereUniqueInput
  }

  /**
   * MemberAuditLog findUniqueOrThrow
   */
  export type MemberAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which MemberAuditLog to fetch.
     */
    where: MemberAuditLogWhereUniqueInput
  }

  /**
   * MemberAuditLog findFirst
   */
  export type MemberAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which MemberAuditLog to fetch.
     */
    where?: MemberAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberAuditLogs to fetch.
     */
    orderBy?: MemberAuditLogOrderByWithRelationInput | MemberAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberAuditLogs.
     */
    cursor?: MemberAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberAuditLogs.
     */
    distinct?: MemberAuditLogScalarFieldEnum | MemberAuditLogScalarFieldEnum[]
  }

  /**
   * MemberAuditLog findFirstOrThrow
   */
  export type MemberAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which MemberAuditLog to fetch.
     */
    where?: MemberAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberAuditLogs to fetch.
     */
    orderBy?: MemberAuditLogOrderByWithRelationInput | MemberAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberAuditLogs.
     */
    cursor?: MemberAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberAuditLogs.
     */
    distinct?: MemberAuditLogScalarFieldEnum | MemberAuditLogScalarFieldEnum[]
  }

  /**
   * MemberAuditLog findMany
   */
  export type MemberAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which MemberAuditLogs to fetch.
     */
    where?: MemberAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberAuditLogs to fetch.
     */
    orderBy?: MemberAuditLogOrderByWithRelationInput | MemberAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberAuditLogs.
     */
    cursor?: MemberAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberAuditLogs.
     */
    distinct?: MemberAuditLogScalarFieldEnum | MemberAuditLogScalarFieldEnum[]
  }

  /**
   * MemberAuditLog create
   */
  export type MemberAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberAuditLog.
     */
    data: XOR<MemberAuditLogCreateInput, MemberAuditLogUncheckedCreateInput>
  }

  /**
   * MemberAuditLog createMany
   */
  export type MemberAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberAuditLogs.
     */
    data: MemberAuditLogCreateManyInput | MemberAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberAuditLog createManyAndReturn
   */
  export type MemberAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many MemberAuditLogs.
     */
    data: MemberAuditLogCreateManyInput | MemberAuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberAuditLog update
   */
  export type MemberAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberAuditLog.
     */
    data: XOR<MemberAuditLogUpdateInput, MemberAuditLogUncheckedUpdateInput>
    /**
     * Choose, which MemberAuditLog to update.
     */
    where: MemberAuditLogWhereUniqueInput
  }

  /**
   * MemberAuditLog updateMany
   */
  export type MemberAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberAuditLogs.
     */
    data: XOR<MemberAuditLogUpdateManyMutationInput, MemberAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which MemberAuditLogs to update
     */
    where?: MemberAuditLogWhereInput
    /**
     * Limit how many MemberAuditLogs to update.
     */
    limit?: number
  }

  /**
   * MemberAuditLog updateManyAndReturn
   */
  export type MemberAuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * The data used to update MemberAuditLogs.
     */
    data: XOR<MemberAuditLogUpdateManyMutationInput, MemberAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which MemberAuditLogs to update
     */
    where?: MemberAuditLogWhereInput
    /**
     * Limit how many MemberAuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MemberAuditLog upsert
   */
  export type MemberAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberAuditLog to update in case it exists.
     */
    where: MemberAuditLogWhereUniqueInput
    /**
     * In case the MemberAuditLog found by the `where` argument doesn't exist, create a new MemberAuditLog with this data.
     */
    create: XOR<MemberAuditLogCreateInput, MemberAuditLogUncheckedCreateInput>
    /**
     * In case the MemberAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberAuditLogUpdateInput, MemberAuditLogUncheckedUpdateInput>
  }

  /**
   * MemberAuditLog delete
   */
  export type MemberAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogInclude<ExtArgs> | null
    /**
     * Filter which MemberAuditLog to delete.
     */
    where: MemberAuditLogWhereUniqueInput
  }

  /**
   * MemberAuditLog deleteMany
   */
  export type MemberAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberAuditLogs to delete
     */
    where?: MemberAuditLogWhereInput
    /**
     * Limit how many MemberAuditLogs to delete.
     */
    limit?: number
  }

  /**
   * MemberAuditLog without action
   */
  export type MemberAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberAuditLog
     */
    select?: MemberAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberAuditLog
     */
    omit?: MemberAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberAuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Entrenador
   */

  export type AggregateEntrenador = {
    _count: EntrenadorCountAggregateOutputType | null
    _avg: EntrenadorAvgAggregateOutputType | null
    _sum: EntrenadorSumAggregateOutputType | null
    _min: EntrenadorMinAggregateOutputType | null
    _max: EntrenadorMaxAggregateOutputType | null
  }

  export type EntrenadorAvgAggregateOutputType = {
    id: number | null
  }

  export type EntrenadorSumAggregateOutputType = {
    id: number | null
  }

  export type EntrenadorMinAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    documentoIdentidad: string | null
    correoInstitucional: string | null
    telefono: string | null
    especialidad: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntrenadorMaxAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    documentoIdentidad: string | null
    correoInstitucional: string | null
    telefono: string | null
    especialidad: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntrenadorCountAggregateOutputType = {
    id: number
    nombres: number
    apellidos: number
    documentoIdentidad: number
    correoInstitucional: number
    telefono: number
    especialidad: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EntrenadorAvgAggregateInputType = {
    id?: true
  }

  export type EntrenadorSumAggregateInputType = {
    id?: true
  }

  export type EntrenadorMinAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    documentoIdentidad?: true
    correoInstitucional?: true
    telefono?: true
    especialidad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntrenadorMaxAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    documentoIdentidad?: true
    correoInstitucional?: true
    telefono?: true
    especialidad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntrenadorCountAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    documentoIdentidad?: true
    correoInstitucional?: true
    telefono?: true
    especialidad?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EntrenadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrenador to aggregate.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entrenadors
    **/
    _count?: true | EntrenadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EntrenadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EntrenadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntrenadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntrenadorMaxAggregateInputType
  }

  export type GetEntrenadorAggregateType<T extends EntrenadorAggregateArgs> = {
        [P in keyof T & keyof AggregateEntrenador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntrenador[P]>
      : GetScalarType<T[P], AggregateEntrenador[P]>
  }




  export type EntrenadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntrenadorWhereInput
    orderBy?: EntrenadorOrderByWithAggregationInput | EntrenadorOrderByWithAggregationInput[]
    by: EntrenadorScalarFieldEnum[] | EntrenadorScalarFieldEnum
    having?: EntrenadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntrenadorCountAggregateInputType | true
    _avg?: EntrenadorAvgAggregateInputType
    _sum?: EntrenadorSumAggregateInputType
    _min?: EntrenadorMinAggregateInputType
    _max?: EntrenadorMaxAggregateInputType
  }

  export type EntrenadorGroupByOutputType = {
    id: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoInstitucional: string
    telefono: string | null
    especialidad: string
    createdAt: Date
    updatedAt: Date
    _count: EntrenadorCountAggregateOutputType | null
    _avg: EntrenadorAvgAggregateOutputType | null
    _sum: EntrenadorSumAggregateOutputType | null
    _min: EntrenadorMinAggregateOutputType | null
    _max: EntrenadorMaxAggregateOutputType | null
  }

  type GetEntrenadorGroupByPayload<T extends EntrenadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntrenadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntrenadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntrenadorGroupByOutputType[P]>
            : GetScalarType<T[P], EntrenadorGroupByOutputType[P]>
        }
      >
    >


  export type EntrenadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    correoInstitucional?: boolean
    telefono?: boolean
    especialidad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    disponibilidades?: boolean | Entrenador$disponibilidadesArgs<ExtArgs>
    rutinas?: boolean | Entrenador$rutinasArgs<ExtArgs>
    _count?: boolean | EntrenadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entrenador"]>

  export type EntrenadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    correoInstitucional?: boolean
    telefono?: boolean
    especialidad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["entrenador"]>

  export type EntrenadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    correoInstitucional?: boolean
    telefono?: boolean
    especialidad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["entrenador"]>

  export type EntrenadorSelectScalar = {
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    documentoIdentidad?: boolean
    correoInstitucional?: boolean
    telefono?: boolean
    especialidad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EntrenadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombres" | "apellidos" | "documentoIdentidad" | "correoInstitucional" | "telefono" | "especialidad" | "createdAt" | "updatedAt", ExtArgs["result"]["entrenador"]>
  export type EntrenadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    disponibilidades?: boolean | Entrenador$disponibilidadesArgs<ExtArgs>
    rutinas?: boolean | Entrenador$rutinasArgs<ExtArgs>
    _count?: boolean | EntrenadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EntrenadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EntrenadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EntrenadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entrenador"
    objects: {
      disponibilidades: Prisma.$TrainerAvailabilityPayload<ExtArgs>[]
      rutinas: Prisma.$RutinaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombres: string
      apellidos: string
      documentoIdentidad: string
      correoInstitucional: string
      telefono: string | null
      especialidad: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["entrenador"]>
    composites: {}
  }

  type EntrenadorGetPayload<S extends boolean | null | undefined | EntrenadorDefaultArgs> = $Result.GetResult<Prisma.$EntrenadorPayload, S>

  type EntrenadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EntrenadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EntrenadorCountAggregateInputType | true
    }

  export interface EntrenadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entrenador'], meta: { name: 'Entrenador' } }
    /**
     * Find zero or one Entrenador that matches the filter.
     * @param {EntrenadorFindUniqueArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EntrenadorFindUniqueArgs>(args: SelectSubset<T, EntrenadorFindUniqueArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Entrenador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EntrenadorFindUniqueOrThrowArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EntrenadorFindUniqueOrThrowArgs>(args: SelectSubset<T, EntrenadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorFindFirstArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EntrenadorFindFirstArgs>(args?: SelectSubset<T, EntrenadorFindFirstArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Entrenador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorFindFirstOrThrowArgs} args - Arguments to find a Entrenador
     * @example
     * // Get one Entrenador
     * const entrenador = await prisma.entrenador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EntrenadorFindFirstOrThrowArgs>(args?: SelectSubset<T, EntrenadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Entrenadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entrenadors
     * const entrenadors = await prisma.entrenador.findMany()
     * 
     * // Get first 10 Entrenadors
     * const entrenadors = await prisma.entrenador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entrenadorWithIdOnly = await prisma.entrenador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EntrenadorFindManyArgs>(args?: SelectSubset<T, EntrenadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Entrenador.
     * @param {EntrenadorCreateArgs} args - Arguments to create a Entrenador.
     * @example
     * // Create one Entrenador
     * const Entrenador = await prisma.entrenador.create({
     *   data: {
     *     // ... data to create a Entrenador
     *   }
     * })
     * 
     */
    create<T extends EntrenadorCreateArgs>(args: SelectSubset<T, EntrenadorCreateArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Entrenadors.
     * @param {EntrenadorCreateManyArgs} args - Arguments to create many Entrenadors.
     * @example
     * // Create many Entrenadors
     * const entrenador = await prisma.entrenador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EntrenadorCreateManyArgs>(args?: SelectSubset<T, EntrenadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entrenadors and returns the data saved in the database.
     * @param {EntrenadorCreateManyAndReturnArgs} args - Arguments to create many Entrenadors.
     * @example
     * // Create many Entrenadors
     * const entrenador = await prisma.entrenador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entrenadors and only return the `id`
     * const entrenadorWithIdOnly = await prisma.entrenador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EntrenadorCreateManyAndReturnArgs>(args?: SelectSubset<T, EntrenadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Entrenador.
     * @param {EntrenadorDeleteArgs} args - Arguments to delete one Entrenador.
     * @example
     * // Delete one Entrenador
     * const Entrenador = await prisma.entrenador.delete({
     *   where: {
     *     // ... filter to delete one Entrenador
     *   }
     * })
     * 
     */
    delete<T extends EntrenadorDeleteArgs>(args: SelectSubset<T, EntrenadorDeleteArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Entrenador.
     * @param {EntrenadorUpdateArgs} args - Arguments to update one Entrenador.
     * @example
     * // Update one Entrenador
     * const entrenador = await prisma.entrenador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EntrenadorUpdateArgs>(args: SelectSubset<T, EntrenadorUpdateArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Entrenadors.
     * @param {EntrenadorDeleteManyArgs} args - Arguments to filter Entrenadors to delete.
     * @example
     * // Delete a few Entrenadors
     * const { count } = await prisma.entrenador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EntrenadorDeleteManyArgs>(args?: SelectSubset<T, EntrenadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrenadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entrenadors
     * const entrenador = await prisma.entrenador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EntrenadorUpdateManyArgs>(args: SelectSubset<T, EntrenadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entrenadors and returns the data updated in the database.
     * @param {EntrenadorUpdateManyAndReturnArgs} args - Arguments to update many Entrenadors.
     * @example
     * // Update many Entrenadors
     * const entrenador = await prisma.entrenador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Entrenadors and only return the `id`
     * const entrenadorWithIdOnly = await prisma.entrenador.updateManyAndReturn({
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
    updateManyAndReturn<T extends EntrenadorUpdateManyAndReturnArgs>(args: SelectSubset<T, EntrenadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Entrenador.
     * @param {EntrenadorUpsertArgs} args - Arguments to update or create a Entrenador.
     * @example
     * // Update or create a Entrenador
     * const entrenador = await prisma.entrenador.upsert({
     *   create: {
     *     // ... data to create a Entrenador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entrenador we want to update
     *   }
     * })
     */
    upsert<T extends EntrenadorUpsertArgs>(args: SelectSubset<T, EntrenadorUpsertArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Entrenadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorCountArgs} args - Arguments to filter Entrenadors to count.
     * @example
     * // Count the number of Entrenadors
     * const count = await prisma.entrenador.count({
     *   where: {
     *     // ... the filter for the Entrenadors we want to count
     *   }
     * })
    **/
    count<T extends EntrenadorCountArgs>(
      args?: Subset<T, EntrenadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntrenadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entrenador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EntrenadorAggregateArgs>(args: Subset<T, EntrenadorAggregateArgs>): Prisma.PrismaPromise<GetEntrenadorAggregateType<T>>

    /**
     * Group by Entrenador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntrenadorGroupByArgs} args - Group by arguments.
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
      T extends EntrenadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntrenadorGroupByArgs['orderBy'] }
        : { orderBy?: EntrenadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EntrenadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntrenadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entrenador model
   */
  readonly fields: EntrenadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entrenador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntrenadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    disponibilidades<T extends Entrenador$disponibilidadesArgs<ExtArgs> = {}>(args?: Subset<T, Entrenador$disponibilidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rutinas<T extends Entrenador$rutinasArgs<ExtArgs> = {}>(args?: Subset<T, Entrenador$rutinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Entrenador model
   */
  interface EntrenadorFieldRefs {
    readonly id: FieldRef<"Entrenador", 'Int'>
    readonly nombres: FieldRef<"Entrenador", 'String'>
    readonly apellidos: FieldRef<"Entrenador", 'String'>
    readonly documentoIdentidad: FieldRef<"Entrenador", 'String'>
    readonly correoInstitucional: FieldRef<"Entrenador", 'String'>
    readonly telefono: FieldRef<"Entrenador", 'String'>
    readonly especialidad: FieldRef<"Entrenador", 'String'>
    readonly createdAt: FieldRef<"Entrenador", 'DateTime'>
    readonly updatedAt: FieldRef<"Entrenador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entrenador findUnique
   */
  export type EntrenadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where: EntrenadorWhereUniqueInput
  }

  /**
   * Entrenador findUniqueOrThrow
   */
  export type EntrenadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where: EntrenadorWhereUniqueInput
  }

  /**
   * Entrenador findFirst
   */
  export type EntrenadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entrenadors.
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entrenadors.
     */
    distinct?: EntrenadorScalarFieldEnum | EntrenadorScalarFieldEnum[]
  }

  /**
   * Entrenador findFirstOrThrow
   */
  export type EntrenadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenador to fetch.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entrenadors.
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entrenadors.
     */
    distinct?: EntrenadorScalarFieldEnum | EntrenadorScalarFieldEnum[]
  }

  /**
   * Entrenador findMany
   */
  export type EntrenadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter, which Entrenadors to fetch.
     */
    where?: EntrenadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entrenadors to fetch.
     */
    orderBy?: EntrenadorOrderByWithRelationInput | EntrenadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entrenadors.
     */
    cursor?: EntrenadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entrenadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entrenadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entrenadors.
     */
    distinct?: EntrenadorScalarFieldEnum | EntrenadorScalarFieldEnum[]
  }

  /**
   * Entrenador create
   */
  export type EntrenadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Entrenador.
     */
    data: XOR<EntrenadorCreateInput, EntrenadorUncheckedCreateInput>
  }

  /**
   * Entrenador createMany
   */
  export type EntrenadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entrenadors.
     */
    data: EntrenadorCreateManyInput | EntrenadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entrenador createManyAndReturn
   */
  export type EntrenadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * The data used to create many Entrenadors.
     */
    data: EntrenadorCreateManyInput | EntrenadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entrenador update
   */
  export type EntrenadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Entrenador.
     */
    data: XOR<EntrenadorUpdateInput, EntrenadorUncheckedUpdateInput>
    /**
     * Choose, which Entrenador to update.
     */
    where: EntrenadorWhereUniqueInput
  }

  /**
   * Entrenador updateMany
   */
  export type EntrenadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entrenadors.
     */
    data: XOR<EntrenadorUpdateManyMutationInput, EntrenadorUncheckedUpdateManyInput>
    /**
     * Filter which Entrenadors to update
     */
    where?: EntrenadorWhereInput
    /**
     * Limit how many Entrenadors to update.
     */
    limit?: number
  }

  /**
   * Entrenador updateManyAndReturn
   */
  export type EntrenadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * The data used to update Entrenadors.
     */
    data: XOR<EntrenadorUpdateManyMutationInput, EntrenadorUncheckedUpdateManyInput>
    /**
     * Filter which Entrenadors to update
     */
    where?: EntrenadorWhereInput
    /**
     * Limit how many Entrenadors to update.
     */
    limit?: number
  }

  /**
   * Entrenador upsert
   */
  export type EntrenadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Entrenador to update in case it exists.
     */
    where: EntrenadorWhereUniqueInput
    /**
     * In case the Entrenador found by the `where` argument doesn't exist, create a new Entrenador with this data.
     */
    create: XOR<EntrenadorCreateInput, EntrenadorUncheckedCreateInput>
    /**
     * In case the Entrenador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntrenadorUpdateInput, EntrenadorUncheckedUpdateInput>
  }

  /**
   * Entrenador delete
   */
  export type EntrenadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
    /**
     * Filter which Entrenador to delete.
     */
    where: EntrenadorWhereUniqueInput
  }

  /**
   * Entrenador deleteMany
   */
  export type EntrenadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entrenadors to delete
     */
    where?: EntrenadorWhereInput
    /**
     * Limit how many Entrenadors to delete.
     */
    limit?: number
  }

  /**
   * Entrenador.disponibilidades
   */
  export type Entrenador$disponibilidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityInclude<ExtArgs> | null
    where?: TrainerAvailabilityWhereInput
    orderBy?: TrainerAvailabilityOrderByWithRelationInput | TrainerAvailabilityOrderByWithRelationInput[]
    cursor?: TrainerAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrainerAvailabilityScalarFieldEnum | TrainerAvailabilityScalarFieldEnum[]
  }

  /**
   * Entrenador.rutinas
   */
  export type Entrenador$rutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    cursor?: RutinaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Entrenador without action
   */
  export type EntrenadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entrenador
     */
    select?: EntrenadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Entrenador
     */
    omit?: EntrenadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntrenadorInclude<ExtArgs> | null
  }


  /**
   * Model TrainerAvailability
   */

  export type AggregateTrainerAvailability = {
    _count: TrainerAvailabilityCountAggregateOutputType | null
    _avg: TrainerAvailabilityAvgAggregateOutputType | null
    _sum: TrainerAvailabilitySumAggregateOutputType | null
    _min: TrainerAvailabilityMinAggregateOutputType | null
    _max: TrainerAvailabilityMaxAggregateOutputType | null
  }

  export type TrainerAvailabilityAvgAggregateOutputType = {
    id: number | null
    entrenadorId: number | null
    diaSemana: number | null
  }

  export type TrainerAvailabilitySumAggregateOutputType = {
    id: number | null
    entrenadorId: number | null
    diaSemana: number | null
  }

  export type TrainerAvailabilityMinAggregateOutputType = {
    id: number | null
    entrenadorId: number | null
    diaSemana: number | null
    horaInicio: string | null
    horaFin: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainerAvailabilityMaxAggregateOutputType = {
    id: number | null
    entrenadorId: number | null
    diaSemana: number | null
    horaInicio: string | null
    horaFin: string | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TrainerAvailabilityCountAggregateOutputType = {
    id: number
    entrenadorId: number
    diaSemana: number
    horaInicio: number
    horaFin: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TrainerAvailabilityAvgAggregateInputType = {
    id?: true
    entrenadorId?: true
    diaSemana?: true
  }

  export type TrainerAvailabilitySumAggregateInputType = {
    id?: true
    entrenadorId?: true
    diaSemana?: true
  }

  export type TrainerAvailabilityMinAggregateInputType = {
    id?: true
    entrenadorId?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainerAvailabilityMaxAggregateInputType = {
    id?: true
    entrenadorId?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TrainerAvailabilityCountAggregateInputType = {
    id?: true
    entrenadorId?: true
    diaSemana?: true
    horaInicio?: true
    horaFin?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TrainerAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainerAvailability to aggregate.
     */
    where?: TrainerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAvailabilities to fetch.
     */
    orderBy?: TrainerAvailabilityOrderByWithRelationInput | TrainerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrainerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrainerAvailabilities
    **/
    _count?: true | TrainerAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrainerAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrainerAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrainerAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrainerAvailabilityMaxAggregateInputType
  }

  export type GetTrainerAvailabilityAggregateType<T extends TrainerAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateTrainerAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrainerAvailability[P]>
      : GetScalarType<T[P], AggregateTrainerAvailability[P]>
  }




  export type TrainerAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrainerAvailabilityWhereInput
    orderBy?: TrainerAvailabilityOrderByWithAggregationInput | TrainerAvailabilityOrderByWithAggregationInput[]
    by: TrainerAvailabilityScalarFieldEnum[] | TrainerAvailabilityScalarFieldEnum
    having?: TrainerAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrainerAvailabilityCountAggregateInputType | true
    _avg?: TrainerAvailabilityAvgAggregateInputType
    _sum?: TrainerAvailabilitySumAggregateInputType
    _min?: TrainerAvailabilityMinAggregateInputType
    _max?: TrainerAvailabilityMaxAggregateInputType
  }

  export type TrainerAvailabilityGroupByOutputType = {
    id: number
    entrenadorId: number
    diaSemana: number
    horaInicio: string
    horaFin: string
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: TrainerAvailabilityCountAggregateOutputType | null
    _avg: TrainerAvailabilityAvgAggregateOutputType | null
    _sum: TrainerAvailabilitySumAggregateOutputType | null
    _min: TrainerAvailabilityMinAggregateOutputType | null
    _max: TrainerAvailabilityMaxAggregateOutputType | null
  }

  type GetTrainerAvailabilityGroupByPayload<T extends TrainerAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrainerAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrainerAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrainerAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], TrainerAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type TrainerAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entrenadorId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainerAvailability"]>

  export type TrainerAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entrenadorId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainerAvailability"]>

  export type TrainerAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entrenadorId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trainerAvailability"]>

  export type TrainerAvailabilitySelectScalar = {
    id?: boolean
    entrenadorId?: boolean
    diaSemana?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TrainerAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entrenadorId" | "diaSemana" | "horaInicio" | "horaFin" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["trainerAvailability"]>
  export type TrainerAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }
  export type TrainerAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }
  export type TrainerAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }

  export type $TrainerAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrainerAvailability"
    objects: {
      entrenador: Prisma.$EntrenadorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entrenadorId: number
      diaSemana: number
      horaInicio: string
      horaFin: string
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trainerAvailability"]>
    composites: {}
  }

  type TrainerAvailabilityGetPayload<S extends boolean | null | undefined | TrainerAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$TrainerAvailabilityPayload, S>

  type TrainerAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrainerAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrainerAvailabilityCountAggregateInputType | true
    }

  export interface TrainerAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrainerAvailability'], meta: { name: 'TrainerAvailability' } }
    /**
     * Find zero or one TrainerAvailability that matches the filter.
     * @param {TrainerAvailabilityFindUniqueArgs} args - Arguments to find a TrainerAvailability
     * @example
     * // Get one TrainerAvailability
     * const trainerAvailability = await prisma.trainerAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrainerAvailabilityFindUniqueArgs>(args: SelectSubset<T, TrainerAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__TrainerAvailabilityClient<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrainerAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrainerAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a TrainerAvailability
     * @example
     * // Get one TrainerAvailability
     * const trainerAvailability = await prisma.trainerAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrainerAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, TrainerAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrainerAvailabilityClient<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainerAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAvailabilityFindFirstArgs} args - Arguments to find a TrainerAvailability
     * @example
     * // Get one TrainerAvailability
     * const trainerAvailability = await prisma.trainerAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrainerAvailabilityFindFirstArgs>(args?: SelectSubset<T, TrainerAvailabilityFindFirstArgs<ExtArgs>>): Prisma__TrainerAvailabilityClient<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrainerAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAvailabilityFindFirstOrThrowArgs} args - Arguments to find a TrainerAvailability
     * @example
     * // Get one TrainerAvailability
     * const trainerAvailability = await prisma.trainerAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrainerAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, TrainerAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrainerAvailabilityClient<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrainerAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrainerAvailabilities
     * const trainerAvailabilities = await prisma.trainerAvailability.findMany()
     * 
     * // Get first 10 TrainerAvailabilities
     * const trainerAvailabilities = await prisma.trainerAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trainerAvailabilityWithIdOnly = await prisma.trainerAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrainerAvailabilityFindManyArgs>(args?: SelectSubset<T, TrainerAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrainerAvailability.
     * @param {TrainerAvailabilityCreateArgs} args - Arguments to create a TrainerAvailability.
     * @example
     * // Create one TrainerAvailability
     * const TrainerAvailability = await prisma.trainerAvailability.create({
     *   data: {
     *     // ... data to create a TrainerAvailability
     *   }
     * })
     * 
     */
    create<T extends TrainerAvailabilityCreateArgs>(args: SelectSubset<T, TrainerAvailabilityCreateArgs<ExtArgs>>): Prisma__TrainerAvailabilityClient<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrainerAvailabilities.
     * @param {TrainerAvailabilityCreateManyArgs} args - Arguments to create many TrainerAvailabilities.
     * @example
     * // Create many TrainerAvailabilities
     * const trainerAvailability = await prisma.trainerAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrainerAvailabilityCreateManyArgs>(args?: SelectSubset<T, TrainerAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrainerAvailabilities and returns the data saved in the database.
     * @param {TrainerAvailabilityCreateManyAndReturnArgs} args - Arguments to create many TrainerAvailabilities.
     * @example
     * // Create many TrainerAvailabilities
     * const trainerAvailability = await prisma.trainerAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrainerAvailabilities and only return the `id`
     * const trainerAvailabilityWithIdOnly = await prisma.trainerAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrainerAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, TrainerAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrainerAvailability.
     * @param {TrainerAvailabilityDeleteArgs} args - Arguments to delete one TrainerAvailability.
     * @example
     * // Delete one TrainerAvailability
     * const TrainerAvailability = await prisma.trainerAvailability.delete({
     *   where: {
     *     // ... filter to delete one TrainerAvailability
     *   }
     * })
     * 
     */
    delete<T extends TrainerAvailabilityDeleteArgs>(args: SelectSubset<T, TrainerAvailabilityDeleteArgs<ExtArgs>>): Prisma__TrainerAvailabilityClient<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrainerAvailability.
     * @param {TrainerAvailabilityUpdateArgs} args - Arguments to update one TrainerAvailability.
     * @example
     * // Update one TrainerAvailability
     * const trainerAvailability = await prisma.trainerAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrainerAvailabilityUpdateArgs>(args: SelectSubset<T, TrainerAvailabilityUpdateArgs<ExtArgs>>): Prisma__TrainerAvailabilityClient<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrainerAvailabilities.
     * @param {TrainerAvailabilityDeleteManyArgs} args - Arguments to filter TrainerAvailabilities to delete.
     * @example
     * // Delete a few TrainerAvailabilities
     * const { count } = await prisma.trainerAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrainerAvailabilityDeleteManyArgs>(args?: SelectSubset<T, TrainerAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainerAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrainerAvailabilities
     * const trainerAvailability = await prisma.trainerAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrainerAvailabilityUpdateManyArgs>(args: SelectSubset<T, TrainerAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrainerAvailabilities and returns the data updated in the database.
     * @param {TrainerAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many TrainerAvailabilities.
     * @example
     * // Update many TrainerAvailabilities
     * const trainerAvailability = await prisma.trainerAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrainerAvailabilities and only return the `id`
     * const trainerAvailabilityWithIdOnly = await prisma.trainerAvailability.updateManyAndReturn({
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
    updateManyAndReturn<T extends TrainerAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, TrainerAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrainerAvailability.
     * @param {TrainerAvailabilityUpsertArgs} args - Arguments to update or create a TrainerAvailability.
     * @example
     * // Update or create a TrainerAvailability
     * const trainerAvailability = await prisma.trainerAvailability.upsert({
     *   create: {
     *     // ... data to create a TrainerAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrainerAvailability we want to update
     *   }
     * })
     */
    upsert<T extends TrainerAvailabilityUpsertArgs>(args: SelectSubset<T, TrainerAvailabilityUpsertArgs<ExtArgs>>): Prisma__TrainerAvailabilityClient<$Result.GetResult<Prisma.$TrainerAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrainerAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAvailabilityCountArgs} args - Arguments to filter TrainerAvailabilities to count.
     * @example
     * // Count the number of TrainerAvailabilities
     * const count = await prisma.trainerAvailability.count({
     *   where: {
     *     // ... the filter for the TrainerAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends TrainerAvailabilityCountArgs>(
      args?: Subset<T, TrainerAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrainerAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrainerAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainerAvailabilityAggregateArgs>(args: Subset<T, TrainerAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetTrainerAvailabilityAggregateType<T>>

    /**
     * Group by TrainerAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainerAvailabilityGroupByArgs} args - Group by arguments.
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
      T extends TrainerAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrainerAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: TrainerAvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrainerAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainerAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrainerAvailability model
   */
  readonly fields: TrainerAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrainerAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrainerAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    entrenador<T extends EntrenadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntrenadorDefaultArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TrainerAvailability model
   */
  interface TrainerAvailabilityFieldRefs {
    readonly id: FieldRef<"TrainerAvailability", 'Int'>
    readonly entrenadorId: FieldRef<"TrainerAvailability", 'Int'>
    readonly diaSemana: FieldRef<"TrainerAvailability", 'Int'>
    readonly horaInicio: FieldRef<"TrainerAvailability", 'String'>
    readonly horaFin: FieldRef<"TrainerAvailability", 'String'>
    readonly activo: FieldRef<"TrainerAvailability", 'Boolean'>
    readonly createdAt: FieldRef<"TrainerAvailability", 'DateTime'>
    readonly updatedAt: FieldRef<"TrainerAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrainerAvailability findUnique
   */
  export type TrainerAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which TrainerAvailability to fetch.
     */
    where: TrainerAvailabilityWhereUniqueInput
  }

  /**
   * TrainerAvailability findUniqueOrThrow
   */
  export type TrainerAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which TrainerAvailability to fetch.
     */
    where: TrainerAvailabilityWhereUniqueInput
  }

  /**
   * TrainerAvailability findFirst
   */
  export type TrainerAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which TrainerAvailability to fetch.
     */
    where?: TrainerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAvailabilities to fetch.
     */
    orderBy?: TrainerAvailabilityOrderByWithRelationInput | TrainerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainerAvailabilities.
     */
    cursor?: TrainerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainerAvailabilities.
     */
    distinct?: TrainerAvailabilityScalarFieldEnum | TrainerAvailabilityScalarFieldEnum[]
  }

  /**
   * TrainerAvailability findFirstOrThrow
   */
  export type TrainerAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which TrainerAvailability to fetch.
     */
    where?: TrainerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAvailabilities to fetch.
     */
    orderBy?: TrainerAvailabilityOrderByWithRelationInput | TrainerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrainerAvailabilities.
     */
    cursor?: TrainerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainerAvailabilities.
     */
    distinct?: TrainerAvailabilityScalarFieldEnum | TrainerAvailabilityScalarFieldEnum[]
  }

  /**
   * TrainerAvailability findMany
   */
  export type TrainerAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which TrainerAvailabilities to fetch.
     */
    where?: TrainerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrainerAvailabilities to fetch.
     */
    orderBy?: TrainerAvailabilityOrderByWithRelationInput | TrainerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrainerAvailabilities.
     */
    cursor?: TrainerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrainerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrainerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrainerAvailabilities.
     */
    distinct?: TrainerAvailabilityScalarFieldEnum | TrainerAvailabilityScalarFieldEnum[]
  }

  /**
   * TrainerAvailability create
   */
  export type TrainerAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a TrainerAvailability.
     */
    data: XOR<TrainerAvailabilityCreateInput, TrainerAvailabilityUncheckedCreateInput>
  }

  /**
   * TrainerAvailability createMany
   */
  export type TrainerAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrainerAvailabilities.
     */
    data: TrainerAvailabilityCreateManyInput | TrainerAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrainerAvailability createManyAndReturn
   */
  export type TrainerAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many TrainerAvailabilities.
     */
    data: TrainerAvailabilityCreateManyInput | TrainerAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainerAvailability update
   */
  export type TrainerAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a TrainerAvailability.
     */
    data: XOR<TrainerAvailabilityUpdateInput, TrainerAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which TrainerAvailability to update.
     */
    where: TrainerAvailabilityWhereUniqueInput
  }

  /**
   * TrainerAvailability updateMany
   */
  export type TrainerAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrainerAvailabilities.
     */
    data: XOR<TrainerAvailabilityUpdateManyMutationInput, TrainerAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which TrainerAvailabilities to update
     */
    where?: TrainerAvailabilityWhereInput
    /**
     * Limit how many TrainerAvailabilities to update.
     */
    limit?: number
  }

  /**
   * TrainerAvailability updateManyAndReturn
   */
  export type TrainerAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update TrainerAvailabilities.
     */
    data: XOR<TrainerAvailabilityUpdateManyMutationInput, TrainerAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which TrainerAvailabilities to update
     */
    where?: TrainerAvailabilityWhereInput
    /**
     * Limit how many TrainerAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrainerAvailability upsert
   */
  export type TrainerAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the TrainerAvailability to update in case it exists.
     */
    where: TrainerAvailabilityWhereUniqueInput
    /**
     * In case the TrainerAvailability found by the `where` argument doesn't exist, create a new TrainerAvailability with this data.
     */
    create: XOR<TrainerAvailabilityCreateInput, TrainerAvailabilityUncheckedCreateInput>
    /**
     * In case the TrainerAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrainerAvailabilityUpdateInput, TrainerAvailabilityUncheckedUpdateInput>
  }

  /**
   * TrainerAvailability delete
   */
  export type TrainerAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which TrainerAvailability to delete.
     */
    where: TrainerAvailabilityWhereUniqueInput
  }

  /**
   * TrainerAvailability deleteMany
   */
  export type TrainerAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrainerAvailabilities to delete
     */
    where?: TrainerAvailabilityWhereInput
    /**
     * Limit how many TrainerAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * TrainerAvailability without action
   */
  export type TrainerAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainerAvailability
     */
    select?: TrainerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrainerAvailability
     */
    omit?: TrainerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrainerAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Rutina
   */

  export type AggregateRutina = {
    _count: RutinaCountAggregateOutputType | null
    _avg: RutinaAvgAggregateOutputType | null
    _sum: RutinaSumAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  export type RutinaAvgAggregateOutputType = {
    id: number | null
    miembroId: number | null
    entrenadorId: number | null
  }

  export type RutinaSumAggregateOutputType = {
    id: number | null
    miembroId: number | null
    entrenadorId: number | null
  }

  export type RutinaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    objetivo: string | null
    miembroId: number | null
    entrenadorId: number | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RutinaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    objetivo: string | null
    miembroId: number | null
    entrenadorId: number | null
    activo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RutinaCountAggregateOutputType = {
    id: number
    nombre: number
    objetivo: number
    miembroId: number
    entrenadorId: number
    diasEntrenamiento: number
    activo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RutinaAvgAggregateInputType = {
    id?: true
    miembroId?: true
    entrenadorId?: true
  }

  export type RutinaSumAggregateInputType = {
    id?: true
    miembroId?: true
    entrenadorId?: true
  }

  export type RutinaMinAggregateInputType = {
    id?: true
    nombre?: true
    objetivo?: true
    miembroId?: true
    entrenadorId?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RutinaMaxAggregateInputType = {
    id?: true
    nombre?: true
    objetivo?: true
    miembroId?: true
    entrenadorId?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RutinaCountAggregateInputType = {
    id?: true
    nombre?: true
    objetivo?: true
    miembroId?: true
    entrenadorId?: true
    diasEntrenamiento?: true
    activo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RutinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutina to aggregate.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rutinas
    **/
    _count?: true | RutinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutinaMaxAggregateInputType
  }

  export type GetRutinaAggregateType<T extends RutinaAggregateArgs> = {
        [P in keyof T & keyof AggregateRutina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutina[P]>
      : GetScalarType<T[P], AggregateRutina[P]>
  }




  export type RutinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaWhereInput
    orderBy?: RutinaOrderByWithAggregationInput | RutinaOrderByWithAggregationInput[]
    by: RutinaScalarFieldEnum[] | RutinaScalarFieldEnum
    having?: RutinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutinaCountAggregateInputType | true
    _avg?: RutinaAvgAggregateInputType
    _sum?: RutinaSumAggregateInputType
    _min?: RutinaMinAggregateInputType
    _max?: RutinaMaxAggregateInputType
  }

  export type RutinaGroupByOutputType = {
    id: number
    nombre: string
    objetivo: string
    miembroId: number
    entrenadorId: number
    diasEntrenamiento: string[]
    activo: boolean
    createdAt: Date
    updatedAt: Date
    _count: RutinaCountAggregateOutputType | null
    _avg: RutinaAvgAggregateOutputType | null
    _sum: RutinaSumAggregateOutputType | null
    _min: RutinaMinAggregateOutputType | null
    _max: RutinaMaxAggregateOutputType | null
  }

  type GetRutinaGroupByPayload<T extends RutinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutinaGroupByOutputType[P]>
            : GetScalarType<T[P], RutinaGroupByOutputType[P]>
        }
      >
    >


  export type RutinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    objetivo?: boolean
    miembroId?: boolean
    entrenadorId?: boolean
    diasEntrenamiento?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
    ejercicios?: boolean | Rutina$ejerciciosArgs<ExtArgs>
    historial?: boolean | Rutina$historialArgs<ExtArgs>
    _count?: boolean | RutinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    objetivo?: boolean
    miembroId?: boolean
    entrenadorId?: boolean
    diasEntrenamiento?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    objetivo?: boolean
    miembroId?: boolean
    entrenadorId?: boolean
    diasEntrenamiento?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutina"]>

  export type RutinaSelectScalar = {
    id?: boolean
    nombre?: boolean
    objetivo?: boolean
    miembroId?: boolean
    entrenadorId?: boolean
    diasEntrenamiento?: boolean
    activo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RutinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "objetivo" | "miembroId" | "entrenadorId" | "diasEntrenamiento" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["rutina"]>
  export type RutinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
    ejercicios?: boolean | Rutina$ejerciciosArgs<ExtArgs>
    historial?: boolean | Rutina$historialArgs<ExtArgs>
    _count?: boolean | RutinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RutinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }
  export type RutinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
    entrenador?: boolean | EntrenadorDefaultArgs<ExtArgs>
  }

  export type $RutinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rutina"
    objects: {
      miembro: Prisma.$MiembroPayload<ExtArgs>
      entrenador: Prisma.$EntrenadorPayload<ExtArgs>
      ejercicios: Prisma.$RutinaEjercicioPayload<ExtArgs>[]
      historial: Prisma.$RoutineHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      objetivo: string
      miembroId: number
      entrenadorId: number
      diasEntrenamiento: string[]
      activo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rutina"]>
    composites: {}
  }

  type RutinaGetPayload<S extends boolean | null | undefined | RutinaDefaultArgs> = $Result.GetResult<Prisma.$RutinaPayload, S>

  type RutinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutinaCountAggregateInputType | true
    }

  export interface RutinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rutina'], meta: { name: 'Rutina' } }
    /**
     * Find zero or one Rutina that matches the filter.
     * @param {RutinaFindUniqueArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutinaFindUniqueArgs>(args: SelectSubset<T, RutinaFindUniqueArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rutina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutinaFindUniqueOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutinaFindUniqueOrThrowArgs>(args: SelectSubset<T, RutinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutinaFindFirstArgs>(args?: SelectSubset<T, RutinaFindFirstArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rutina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindFirstOrThrowArgs} args - Arguments to find a Rutina
     * @example
     * // Get one Rutina
     * const rutina = await prisma.rutina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutinaFindFirstOrThrowArgs>(args?: SelectSubset<T, RutinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rutinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rutinas
     * const rutinas = await prisma.rutina.findMany()
     * 
     * // Get first 10 Rutinas
     * const rutinas = await prisma.rutina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutinaWithIdOnly = await prisma.rutina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutinaFindManyArgs>(args?: SelectSubset<T, RutinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rutina.
     * @param {RutinaCreateArgs} args - Arguments to create a Rutina.
     * @example
     * // Create one Rutina
     * const Rutina = await prisma.rutina.create({
     *   data: {
     *     // ... data to create a Rutina
     *   }
     * })
     * 
     */
    create<T extends RutinaCreateArgs>(args: SelectSubset<T, RutinaCreateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rutinas.
     * @param {RutinaCreateManyArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutinaCreateManyArgs>(args?: SelectSubset<T, RutinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rutinas and returns the data saved in the database.
     * @param {RutinaCreateManyAndReturnArgs} args - Arguments to create many Rutinas.
     * @example
     * // Create many Rutinas
     * const rutina = await prisma.rutina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rutinas and only return the `id`
     * const rutinaWithIdOnly = await prisma.rutina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutinaCreateManyAndReturnArgs>(args?: SelectSubset<T, RutinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rutina.
     * @param {RutinaDeleteArgs} args - Arguments to delete one Rutina.
     * @example
     * // Delete one Rutina
     * const Rutina = await prisma.rutina.delete({
     *   where: {
     *     // ... filter to delete one Rutina
     *   }
     * })
     * 
     */
    delete<T extends RutinaDeleteArgs>(args: SelectSubset<T, RutinaDeleteArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rutina.
     * @param {RutinaUpdateArgs} args - Arguments to update one Rutina.
     * @example
     * // Update one Rutina
     * const rutina = await prisma.rutina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutinaUpdateArgs>(args: SelectSubset<T, RutinaUpdateArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rutinas.
     * @param {RutinaDeleteManyArgs} args - Arguments to filter Rutinas to delete.
     * @example
     * // Delete a few Rutinas
     * const { count } = await prisma.rutina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutinaDeleteManyArgs>(args?: SelectSubset<T, RutinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rutinas
     * const rutina = await prisma.rutina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutinaUpdateManyArgs>(args: SelectSubset<T, RutinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rutinas and returns the data updated in the database.
     * @param {RutinaUpdateManyAndReturnArgs} args - Arguments to update many Rutinas.
     * @example
     * // Update many Rutinas
     * const rutina = await prisma.rutina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rutinas and only return the `id`
     * const rutinaWithIdOnly = await prisma.rutina.updateManyAndReturn({
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
    updateManyAndReturn<T extends RutinaUpdateManyAndReturnArgs>(args: SelectSubset<T, RutinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rutina.
     * @param {RutinaUpsertArgs} args - Arguments to update or create a Rutina.
     * @example
     * // Update or create a Rutina
     * const rutina = await prisma.rutina.upsert({
     *   create: {
     *     // ... data to create a Rutina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rutina we want to update
     *   }
     * })
     */
    upsert<T extends RutinaUpsertArgs>(args: SelectSubset<T, RutinaUpsertArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rutinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaCountArgs} args - Arguments to filter Rutinas to count.
     * @example
     * // Count the number of Rutinas
     * const count = await prisma.rutina.count({
     *   where: {
     *     // ... the filter for the Rutinas we want to count
     *   }
     * })
    **/
    count<T extends RutinaCountArgs>(
      args?: Subset<T, RutinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RutinaAggregateArgs>(args: Subset<T, RutinaAggregateArgs>): Prisma.PrismaPromise<GetRutinaAggregateType<T>>

    /**
     * Group by Rutina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaGroupByArgs} args - Group by arguments.
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
      T extends RutinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutinaGroupByArgs['orderBy'] }
        : { orderBy?: RutinaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RutinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rutina model
   */
  readonly fields: RutinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rutina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    miembro<T extends MiembroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MiembroDefaultArgs<ExtArgs>>): Prisma__MiembroClient<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    entrenador<T extends EntrenadorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EntrenadorDefaultArgs<ExtArgs>>): Prisma__EntrenadorClient<$Result.GetResult<Prisma.$EntrenadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicios<T extends Rutina$ejerciciosArgs<ExtArgs> = {}>(args?: Subset<T, Rutina$ejerciciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historial<T extends Rutina$historialArgs<ExtArgs> = {}>(args?: Subset<T, Rutina$historialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rutina model
   */
  interface RutinaFieldRefs {
    readonly id: FieldRef<"Rutina", 'Int'>
    readonly nombre: FieldRef<"Rutina", 'String'>
    readonly objetivo: FieldRef<"Rutina", 'String'>
    readonly miembroId: FieldRef<"Rutina", 'Int'>
    readonly entrenadorId: FieldRef<"Rutina", 'Int'>
    readonly diasEntrenamiento: FieldRef<"Rutina", 'String[]'>
    readonly activo: FieldRef<"Rutina", 'Boolean'>
    readonly createdAt: FieldRef<"Rutina", 'DateTime'>
    readonly updatedAt: FieldRef<"Rutina", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rutina findUnique
   */
  export type RutinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findUniqueOrThrow
   */
  export type RutinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina findFirst
   */
  export type RutinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findFirstOrThrow
   */
  export type RutinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutina to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina findMany
   */
  export type RutinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter, which Rutinas to fetch.
     */
    where?: RutinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rutinas to fetch.
     */
    orderBy?: RutinaOrderByWithRelationInput | RutinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rutinas.
     */
    cursor?: RutinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rutinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rutinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rutinas.
     */
    distinct?: RutinaScalarFieldEnum | RutinaScalarFieldEnum[]
  }

  /**
   * Rutina create
   */
  export type RutinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Rutina.
     */
    data: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
  }

  /**
   * Rutina createMany
   */
  export type RutinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rutina createManyAndReturn
   */
  export type RutinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * The data used to create many Rutinas.
     */
    data: RutinaCreateManyInput | RutinaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rutina update
   */
  export type RutinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Rutina.
     */
    data: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
    /**
     * Choose, which Rutina to update.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina updateMany
   */
  export type RutinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rutinas.
     */
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyInput>
    /**
     * Filter which Rutinas to update
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to update.
     */
    limit?: number
  }

  /**
   * Rutina updateManyAndReturn
   */
  export type RutinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * The data used to update Rutinas.
     */
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyInput>
    /**
     * Filter which Rutinas to update
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rutina upsert
   */
  export type RutinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Rutina to update in case it exists.
     */
    where: RutinaWhereUniqueInput
    /**
     * In case the Rutina found by the `where` argument doesn't exist, create a new Rutina with this data.
     */
    create: XOR<RutinaCreateInput, RutinaUncheckedCreateInput>
    /**
     * In case the Rutina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutinaUpdateInput, RutinaUncheckedUpdateInput>
  }

  /**
   * Rutina delete
   */
  export type RutinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
    /**
     * Filter which Rutina to delete.
     */
    where: RutinaWhereUniqueInput
  }

  /**
   * Rutina deleteMany
   */
  export type RutinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rutinas to delete
     */
    where?: RutinaWhereInput
    /**
     * Limit how many Rutinas to delete.
     */
    limit?: number
  }

  /**
   * Rutina.ejercicios
   */
  export type Rutina$ejerciciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    cursor?: RutinaEjercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * Rutina.historial
   */
  export type Rutina$historialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryInclude<ExtArgs> | null
    where?: RoutineHistoryWhereInput
    orderBy?: RoutineHistoryOrderByWithRelationInput | RoutineHistoryOrderByWithRelationInput[]
    cursor?: RoutineHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoutineHistoryScalarFieldEnum | RoutineHistoryScalarFieldEnum[]
  }

  /**
   * Rutina without action
   */
  export type RutinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rutina
     */
    select?: RutinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rutina
     */
    omit?: RutinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaInclude<ExtArgs> | null
  }


  /**
   * Model Ejercicio
   */

  export type AggregateEjercicio = {
    _count: EjercicioCountAggregateOutputType | null
    _avg: EjercicioAvgAggregateOutputType | null
    _sum: EjercicioSumAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  export type EjercicioAvgAggregateOutputType = {
    id: number | null
  }

  export type EjercicioSumAggregateOutputType = {
    id: number | null
  }

  export type EjercicioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EjercicioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EjercicioCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EjercicioAvgAggregateInputType = {
    id?: true
  }

  export type EjercicioSumAggregateInputType = {
    id?: true
  }

  export type EjercicioMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EjercicioMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EjercicioCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicio to aggregate.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ejercicios
    **/
    _count?: true | EjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EjercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EjercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EjercicioMaxAggregateInputType
  }

  export type GetEjercicioAggregateType<T extends EjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEjercicio[P]>
      : GetScalarType<T[P], AggregateEjercicio[P]>
  }




  export type EjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EjercicioWhereInput
    orderBy?: EjercicioOrderByWithAggregationInput | EjercicioOrderByWithAggregationInput[]
    by: EjercicioScalarFieldEnum[] | EjercicioScalarFieldEnum
    having?: EjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EjercicioCountAggregateInputType | true
    _avg?: EjercicioAvgAggregateInputType
    _sum?: EjercicioSumAggregateInputType
    _min?: EjercicioMinAggregateInputType
    _max?: EjercicioMaxAggregateInputType
  }

  export type EjercicioGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    createdAt: Date
    updatedAt: Date
    _count: EjercicioCountAggregateOutputType | null
    _avg: EjercicioAvgAggregateOutputType | null
    _sum: EjercicioSumAggregateOutputType | null
    _min: EjercicioMinAggregateOutputType | null
    _max: EjercicioMaxAggregateOutputType | null
  }

  type GetEjercicioGroupByPayload<T extends EjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], EjercicioGroupByOutputType[P]>
        }
      >
    >


  export type EjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutinas?: boolean | Ejercicio$rutinasArgs<ExtArgs>
    _count?: boolean | EjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ejercicio"]>

  export type EjercicioSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EjercicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "createdAt" | "updatedAt", ExtArgs["result"]["ejercicio"]>
  export type EjercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutinas?: boolean | Ejercicio$rutinasArgs<ExtArgs>
    _count?: boolean | EjercicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EjercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EjercicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ejercicio"
    objects: {
      rutinas: Prisma.$RutinaEjercicioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ejercicio"]>
    composites: {}
  }

  type EjercicioGetPayload<S extends boolean | null | undefined | EjercicioDefaultArgs> = $Result.GetResult<Prisma.$EjercicioPayload, S>

  type EjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EjercicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EjercicioCountAggregateInputType | true
    }

  export interface EjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ejercicio'], meta: { name: 'Ejercicio' } }
    /**
     * Find zero or one Ejercicio that matches the filter.
     * @param {EjercicioFindUniqueArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EjercicioFindUniqueArgs>(args: SelectSubset<T, EjercicioFindUniqueArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ejercicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EjercicioFindUniqueOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EjercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, EjercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EjercicioFindFirstArgs>(args?: SelectSubset<T, EjercicioFindFirstArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ejercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindFirstOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EjercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, EjercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany()
     * 
     * // Get first 10 Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EjercicioFindManyArgs>(args?: SelectSubset<T, EjercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ejercicio.
     * @param {EjercicioCreateArgs} args - Arguments to create a Ejercicio.
     * @example
     * // Create one Ejercicio
     * const Ejercicio = await prisma.ejercicio.create({
     *   data: {
     *     // ... data to create a Ejercicio
     *   }
     * })
     * 
     */
    create<T extends EjercicioCreateArgs>(args: SelectSubset<T, EjercicioCreateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ejercicios.
     * @param {EjercicioCreateManyArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EjercicioCreateManyArgs>(args?: SelectSubset<T, EjercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ejercicios and returns the data saved in the database.
     * @param {EjercicioCreateManyAndReturnArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ejercicios and only return the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EjercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, EjercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ejercicio.
     * @param {EjercicioDeleteArgs} args - Arguments to delete one Ejercicio.
     * @example
     * // Delete one Ejercicio
     * const Ejercicio = await prisma.ejercicio.delete({
     *   where: {
     *     // ... filter to delete one Ejercicio
     *   }
     * })
     * 
     */
    delete<T extends EjercicioDeleteArgs>(args: SelectSubset<T, EjercicioDeleteArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ejercicio.
     * @param {EjercicioUpdateArgs} args - Arguments to update one Ejercicio.
     * @example
     * // Update one Ejercicio
     * const ejercicio = await prisma.ejercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EjercicioUpdateArgs>(args: SelectSubset<T, EjercicioUpdateArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ejercicios.
     * @param {EjercicioDeleteManyArgs} args - Arguments to filter Ejercicios to delete.
     * @example
     * // Delete a few Ejercicios
     * const { count } = await prisma.ejercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EjercicioDeleteManyArgs>(args?: SelectSubset<T, EjercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EjercicioUpdateManyArgs>(args: SelectSubset<T, EjercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ejercicios and returns the data updated in the database.
     * @param {EjercicioUpdateManyAndReturnArgs} args - Arguments to update many Ejercicios.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ejercicios and only return the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.updateManyAndReturn({
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
    updateManyAndReturn<T extends EjercicioUpdateManyAndReturnArgs>(args: SelectSubset<T, EjercicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ejercicio.
     * @param {EjercicioUpsertArgs} args - Arguments to update or create a Ejercicio.
     * @example
     * // Update or create a Ejercicio
     * const ejercicio = await prisma.ejercicio.upsert({
     *   create: {
     *     // ... data to create a Ejercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ejercicio we want to update
     *   }
     * })
     */
    upsert<T extends EjercicioUpsertArgs>(args: SelectSubset<T, EjercicioUpsertArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioCountArgs} args - Arguments to filter Ejercicios to count.
     * @example
     * // Count the number of Ejercicios
     * const count = await prisma.ejercicio.count({
     *   where: {
     *     // ... the filter for the Ejercicios we want to count
     *   }
     * })
    **/
    count<T extends EjercicioCountArgs>(
      args?: Subset<T, EjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EjercicioAggregateArgs>(args: Subset<T, EjercicioAggregateArgs>): Prisma.PrismaPromise<GetEjercicioAggregateType<T>>

    /**
     * Group by Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioGroupByArgs} args - Group by arguments.
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
      T extends EjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EjercicioGroupByArgs['orderBy'] }
        : { orderBy?: EjercicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ejercicio model
   */
  readonly fields: EjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ejercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutinas<T extends Ejercicio$rutinasArgs<ExtArgs> = {}>(args?: Subset<T, Ejercicio$rutinasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ejercicio model
   */
  interface EjercicioFieldRefs {
    readonly id: FieldRef<"Ejercicio", 'Int'>
    readonly nombre: FieldRef<"Ejercicio", 'String'>
    readonly descripcion: FieldRef<"Ejercicio", 'String'>
    readonly createdAt: FieldRef<"Ejercicio", 'DateTime'>
    readonly updatedAt: FieldRef<"Ejercicio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ejercicio findUnique
   */
  export type EjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findUniqueOrThrow
   */
  export type EjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio findFirst
   */
  export type EjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findFirstOrThrow
   */
  export type EjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicio to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio findMany
   */
  export type EjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter, which Ejercicios to fetch.
     */
    where?: EjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ejercicios to fetch.
     */
    orderBy?: EjercicioOrderByWithRelationInput | EjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ejercicios.
     */
    cursor?: EjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ejercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ejercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ejercicios.
     */
    distinct?: EjercicioScalarFieldEnum | EjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio create
   */
  export type EjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Ejercicio.
     */
    data: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
  }

  /**
   * Ejercicio createMany
   */
  export type EjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ejercicio createManyAndReturn
   */
  export type EjercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data used to create many Ejercicios.
     */
    data: EjercicioCreateManyInput | EjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ejercicio update
   */
  export type EjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Ejercicio.
     */
    data: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
    /**
     * Choose, which Ejercicio to update.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio updateMany
   */
  export type EjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to update.
     */
    limit?: number
  }

  /**
   * Ejercicio updateManyAndReturn
   */
  export type EjercicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * The data used to update Ejercicios.
     */
    data: XOR<EjercicioUpdateManyMutationInput, EjercicioUncheckedUpdateManyInput>
    /**
     * Filter which Ejercicios to update
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to update.
     */
    limit?: number
  }

  /**
   * Ejercicio upsert
   */
  export type EjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Ejercicio to update in case it exists.
     */
    where: EjercicioWhereUniqueInput
    /**
     * In case the Ejercicio found by the `where` argument doesn't exist, create a new Ejercicio with this data.
     */
    create: XOR<EjercicioCreateInput, EjercicioUncheckedCreateInput>
    /**
     * In case the Ejercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EjercicioUpdateInput, EjercicioUncheckedUpdateInput>
  }

  /**
   * Ejercicio delete
   */
  export type EjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
    /**
     * Filter which Ejercicio to delete.
     */
    where: EjercicioWhereUniqueInput
  }

  /**
   * Ejercicio deleteMany
   */
  export type EjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ejercicios to delete
     */
    where?: EjercicioWhereInput
    /**
     * Limit how many Ejercicios to delete.
     */
    limit?: number
  }

  /**
   * Ejercicio.rutinas
   */
  export type Ejercicio$rutinasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    cursor?: RutinaEjercicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * Ejercicio without action
   */
  export type EjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ejercicio
     */
    select?: EjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ejercicio
     */
    omit?: EjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EjercicioInclude<ExtArgs> | null
  }


  /**
   * Model RutinaEjercicio
   */

  export type AggregateRutinaEjercicio = {
    _count: RutinaEjercicioCountAggregateOutputType | null
    _avg: RutinaEjercicioAvgAggregateOutputType | null
    _sum: RutinaEjercicioSumAggregateOutputType | null
    _min: RutinaEjercicioMinAggregateOutputType | null
    _max: RutinaEjercicioMaxAggregateOutputType | null
  }

  export type RutinaEjercicioAvgAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    series: number | null
    repeticiones: number | null
    tiempoDescansoSeg: number | null
    orden: number | null
  }

  export type RutinaEjercicioSumAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    series: number | null
    repeticiones: number | null
    tiempoDescansoSeg: number | null
    orden: number | null
  }

  export type RutinaEjercicioMinAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    series: number | null
    repeticiones: number | null
    tiempoDescansoSeg: number | null
    orden: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RutinaEjercicioMaxAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    ejercicioId: number | null
    series: number | null
    repeticiones: number | null
    tiempoDescansoSeg: number | null
    orden: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RutinaEjercicioCountAggregateOutputType = {
    id: number
    rutinaId: number
    ejercicioId: number
    series: number
    repeticiones: number
    tiempoDescansoSeg: number
    orden: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RutinaEjercicioAvgAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    tiempoDescansoSeg?: true
    orden?: true
  }

  export type RutinaEjercicioSumAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    tiempoDescansoSeg?: true
    orden?: true
  }

  export type RutinaEjercicioMinAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    tiempoDescansoSeg?: true
    orden?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RutinaEjercicioMaxAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    tiempoDescansoSeg?: true
    orden?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RutinaEjercicioCountAggregateInputType = {
    id?: true
    rutinaId?: true
    ejercicioId?: true
    series?: true
    repeticiones?: true
    tiempoDescansoSeg?: true
    orden?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RutinaEjercicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutinaEjercicio to aggregate.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RutinaEjercicios
    **/
    _count?: true | RutinaEjercicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RutinaEjercicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RutinaEjercicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RutinaEjercicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RutinaEjercicioMaxAggregateInputType
  }

  export type GetRutinaEjercicioAggregateType<T extends RutinaEjercicioAggregateArgs> = {
        [P in keyof T & keyof AggregateRutinaEjercicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRutinaEjercicio[P]>
      : GetScalarType<T[P], AggregateRutinaEjercicio[P]>
  }




  export type RutinaEjercicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RutinaEjercicioWhereInput
    orderBy?: RutinaEjercicioOrderByWithAggregationInput | RutinaEjercicioOrderByWithAggregationInput[]
    by: RutinaEjercicioScalarFieldEnum[] | RutinaEjercicioScalarFieldEnum
    having?: RutinaEjercicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RutinaEjercicioCountAggregateInputType | true
    _avg?: RutinaEjercicioAvgAggregateInputType
    _sum?: RutinaEjercicioSumAggregateInputType
    _min?: RutinaEjercicioMinAggregateInputType
    _max?: RutinaEjercicioMaxAggregateInputType
  }

  export type RutinaEjercicioGroupByOutputType = {
    id: number
    rutinaId: number
    ejercicioId: number
    series: number
    repeticiones: number
    tiempoDescansoSeg: number
    orden: number
    createdAt: Date
    updatedAt: Date
    _count: RutinaEjercicioCountAggregateOutputType | null
    _avg: RutinaEjercicioAvgAggregateOutputType | null
    _sum: RutinaEjercicioSumAggregateOutputType | null
    _min: RutinaEjercicioMinAggregateOutputType | null
    _max: RutinaEjercicioMaxAggregateOutputType | null
  }

  type GetRutinaEjercicioGroupByPayload<T extends RutinaEjercicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RutinaEjercicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RutinaEjercicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RutinaEjercicioGroupByOutputType[P]>
            : GetScalarType<T[P], RutinaEjercicioGroupByOutputType[P]>
        }
      >
    >


  export type RutinaEjercicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    tiempoDescansoSeg?: boolean
    orden?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutinaEjercicio"]>

  export type RutinaEjercicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    tiempoDescansoSeg?: boolean
    orden?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutinaEjercicio"]>

  export type RutinaEjercicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    tiempoDescansoSeg?: boolean
    orden?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rutinaEjercicio"]>

  export type RutinaEjercicioSelectScalar = {
    id?: boolean
    rutinaId?: boolean
    ejercicioId?: boolean
    series?: boolean
    repeticiones?: boolean
    tiempoDescansoSeg?: boolean
    orden?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RutinaEjercicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rutinaId" | "ejercicioId" | "series" | "repeticiones" | "tiempoDescansoSeg" | "orden" | "createdAt" | "updatedAt", ExtArgs["result"]["rutinaEjercicio"]>
  export type RutinaEjercicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type RutinaEjercicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }
  export type RutinaEjercicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
    ejercicio?: boolean | EjercicioDefaultArgs<ExtArgs>
  }

  export type $RutinaEjercicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RutinaEjercicio"
    objects: {
      rutina: Prisma.$RutinaPayload<ExtArgs>
      ejercicio: Prisma.$EjercicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rutinaId: number
      ejercicioId: number
      series: number
      repeticiones: number
      tiempoDescansoSeg: number
      orden: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rutinaEjercicio"]>
    composites: {}
  }

  type RutinaEjercicioGetPayload<S extends boolean | null | undefined | RutinaEjercicioDefaultArgs> = $Result.GetResult<Prisma.$RutinaEjercicioPayload, S>

  type RutinaEjercicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RutinaEjercicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RutinaEjercicioCountAggregateInputType | true
    }

  export interface RutinaEjercicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RutinaEjercicio'], meta: { name: 'RutinaEjercicio' } }
    /**
     * Find zero or one RutinaEjercicio that matches the filter.
     * @param {RutinaEjercicioFindUniqueArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RutinaEjercicioFindUniqueArgs>(args: SelectSubset<T, RutinaEjercicioFindUniqueArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RutinaEjercicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RutinaEjercicioFindUniqueOrThrowArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RutinaEjercicioFindUniqueOrThrowArgs>(args: SelectSubset<T, RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RutinaEjercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindFirstArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RutinaEjercicioFindFirstArgs>(args?: SelectSubset<T, RutinaEjercicioFindFirstArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RutinaEjercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindFirstOrThrowArgs} args - Arguments to find a RutinaEjercicio
     * @example
     * // Get one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RutinaEjercicioFindFirstOrThrowArgs>(args?: SelectSubset<T, RutinaEjercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RutinaEjercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RutinaEjercicios
     * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany()
     * 
     * // Get first 10 RutinaEjercicios
     * const rutinaEjercicios = await prisma.rutinaEjercicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rutinaEjercicioWithIdOnly = await prisma.rutinaEjercicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RutinaEjercicioFindManyArgs>(args?: SelectSubset<T, RutinaEjercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RutinaEjercicio.
     * @param {RutinaEjercicioCreateArgs} args - Arguments to create a RutinaEjercicio.
     * @example
     * // Create one RutinaEjercicio
     * const RutinaEjercicio = await prisma.rutinaEjercicio.create({
     *   data: {
     *     // ... data to create a RutinaEjercicio
     *   }
     * })
     * 
     */
    create<T extends RutinaEjercicioCreateArgs>(args: SelectSubset<T, RutinaEjercicioCreateArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RutinaEjercicios.
     * @param {RutinaEjercicioCreateManyArgs} args - Arguments to create many RutinaEjercicios.
     * @example
     * // Create many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RutinaEjercicioCreateManyArgs>(args?: SelectSubset<T, RutinaEjercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RutinaEjercicios and returns the data saved in the database.
     * @param {RutinaEjercicioCreateManyAndReturnArgs} args - Arguments to create many RutinaEjercicios.
     * @example
     * // Create many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RutinaEjercicios and only return the `id`
     * const rutinaEjercicioWithIdOnly = await prisma.rutinaEjercicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RutinaEjercicioCreateManyAndReturnArgs>(args?: SelectSubset<T, RutinaEjercicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RutinaEjercicio.
     * @param {RutinaEjercicioDeleteArgs} args - Arguments to delete one RutinaEjercicio.
     * @example
     * // Delete one RutinaEjercicio
     * const RutinaEjercicio = await prisma.rutinaEjercicio.delete({
     *   where: {
     *     // ... filter to delete one RutinaEjercicio
     *   }
     * })
     * 
     */
    delete<T extends RutinaEjercicioDeleteArgs>(args: SelectSubset<T, RutinaEjercicioDeleteArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RutinaEjercicio.
     * @param {RutinaEjercicioUpdateArgs} args - Arguments to update one RutinaEjercicio.
     * @example
     * // Update one RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RutinaEjercicioUpdateArgs>(args: SelectSubset<T, RutinaEjercicioUpdateArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RutinaEjercicios.
     * @param {RutinaEjercicioDeleteManyArgs} args - Arguments to filter RutinaEjercicios to delete.
     * @example
     * // Delete a few RutinaEjercicios
     * const { count } = await prisma.rutinaEjercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RutinaEjercicioDeleteManyArgs>(args?: SelectSubset<T, RutinaEjercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RutinaEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RutinaEjercicioUpdateManyArgs>(args: SelectSubset<T, RutinaEjercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RutinaEjercicios and returns the data updated in the database.
     * @param {RutinaEjercicioUpdateManyAndReturnArgs} args - Arguments to update many RutinaEjercicios.
     * @example
     * // Update many RutinaEjercicios
     * const rutinaEjercicio = await prisma.rutinaEjercicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RutinaEjercicios and only return the `id`
     * const rutinaEjercicioWithIdOnly = await prisma.rutinaEjercicio.updateManyAndReturn({
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
    updateManyAndReturn<T extends RutinaEjercicioUpdateManyAndReturnArgs>(args: SelectSubset<T, RutinaEjercicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RutinaEjercicio.
     * @param {RutinaEjercicioUpsertArgs} args - Arguments to update or create a RutinaEjercicio.
     * @example
     * // Update or create a RutinaEjercicio
     * const rutinaEjercicio = await prisma.rutinaEjercicio.upsert({
     *   create: {
     *     // ... data to create a RutinaEjercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RutinaEjercicio we want to update
     *   }
     * })
     */
    upsert<T extends RutinaEjercicioUpsertArgs>(args: SelectSubset<T, RutinaEjercicioUpsertArgs<ExtArgs>>): Prisma__RutinaEjercicioClient<$Result.GetResult<Prisma.$RutinaEjercicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RutinaEjercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioCountArgs} args - Arguments to filter RutinaEjercicios to count.
     * @example
     * // Count the number of RutinaEjercicios
     * const count = await prisma.rutinaEjercicio.count({
     *   where: {
     *     // ... the filter for the RutinaEjercicios we want to count
     *   }
     * })
    **/
    count<T extends RutinaEjercicioCountArgs>(
      args?: Subset<T, RutinaEjercicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RutinaEjercicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RutinaEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RutinaEjercicioAggregateArgs>(args: Subset<T, RutinaEjercicioAggregateArgs>): Prisma.PrismaPromise<GetRutinaEjercicioAggregateType<T>>

    /**
     * Group by RutinaEjercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RutinaEjercicioGroupByArgs} args - Group by arguments.
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
      T extends RutinaEjercicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RutinaEjercicioGroupByArgs['orderBy'] }
        : { orderBy?: RutinaEjercicioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RutinaEjercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRutinaEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RutinaEjercicio model
   */
  readonly fields: RutinaEjercicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RutinaEjercicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RutinaEjercicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutina<T extends RutinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutinaDefaultArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ejercicio<T extends EjercicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EjercicioDefaultArgs<ExtArgs>>): Prisma__EjercicioClient<$Result.GetResult<Prisma.$EjercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RutinaEjercicio model
   */
  interface RutinaEjercicioFieldRefs {
    readonly id: FieldRef<"RutinaEjercicio", 'Int'>
    readonly rutinaId: FieldRef<"RutinaEjercicio", 'Int'>
    readonly ejercicioId: FieldRef<"RutinaEjercicio", 'Int'>
    readonly series: FieldRef<"RutinaEjercicio", 'Int'>
    readonly repeticiones: FieldRef<"RutinaEjercicio", 'Int'>
    readonly tiempoDescansoSeg: FieldRef<"RutinaEjercicio", 'Int'>
    readonly orden: FieldRef<"RutinaEjercicio", 'Int'>
    readonly createdAt: FieldRef<"RutinaEjercicio", 'DateTime'>
    readonly updatedAt: FieldRef<"RutinaEjercicio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RutinaEjercicio findUnique
   */
  export type RutinaEjercicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio findUniqueOrThrow
   */
  export type RutinaEjercicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio findFirst
   */
  export type RutinaEjercicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutinaEjercicios.
     */
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio findFirstOrThrow
   */
  export type RutinaEjercicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicio to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutinaEjercicios.
     */
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio findMany
   */
  export type RutinaEjercicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter, which RutinaEjercicios to fetch.
     */
    where?: RutinaEjercicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RutinaEjercicios to fetch.
     */
    orderBy?: RutinaEjercicioOrderByWithRelationInput | RutinaEjercicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RutinaEjercicios.
     */
    cursor?: RutinaEjercicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RutinaEjercicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RutinaEjercicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RutinaEjercicios.
     */
    distinct?: RutinaEjercicioScalarFieldEnum | RutinaEjercicioScalarFieldEnum[]
  }

  /**
   * RutinaEjercicio create
   */
  export type RutinaEjercicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to create a RutinaEjercicio.
     */
    data: XOR<RutinaEjercicioCreateInput, RutinaEjercicioUncheckedCreateInput>
  }

  /**
   * RutinaEjercicio createMany
   */
  export type RutinaEjercicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RutinaEjercicios.
     */
    data: RutinaEjercicioCreateManyInput | RutinaEjercicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RutinaEjercicio createManyAndReturn
   */
  export type RutinaEjercicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * The data used to create many RutinaEjercicios.
     */
    data: RutinaEjercicioCreateManyInput | RutinaEjercicioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RutinaEjercicio update
   */
  export type RutinaEjercicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The data needed to update a RutinaEjercicio.
     */
    data: XOR<RutinaEjercicioUpdateInput, RutinaEjercicioUncheckedUpdateInput>
    /**
     * Choose, which RutinaEjercicio to update.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio updateMany
   */
  export type RutinaEjercicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RutinaEjercicios.
     */
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyInput>
    /**
     * Filter which RutinaEjercicios to update
     */
    where?: RutinaEjercicioWhereInput
    /**
     * Limit how many RutinaEjercicios to update.
     */
    limit?: number
  }

  /**
   * RutinaEjercicio updateManyAndReturn
   */
  export type RutinaEjercicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * The data used to update RutinaEjercicios.
     */
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyInput>
    /**
     * Filter which RutinaEjercicios to update
     */
    where?: RutinaEjercicioWhereInput
    /**
     * Limit how many RutinaEjercicios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RutinaEjercicio upsert
   */
  export type RutinaEjercicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * The filter to search for the RutinaEjercicio to update in case it exists.
     */
    where: RutinaEjercicioWhereUniqueInput
    /**
     * In case the RutinaEjercicio found by the `where` argument doesn't exist, create a new RutinaEjercicio with this data.
     */
    create: XOR<RutinaEjercicioCreateInput, RutinaEjercicioUncheckedCreateInput>
    /**
     * In case the RutinaEjercicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RutinaEjercicioUpdateInput, RutinaEjercicioUncheckedUpdateInput>
  }

  /**
   * RutinaEjercicio delete
   */
  export type RutinaEjercicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
    /**
     * Filter which RutinaEjercicio to delete.
     */
    where: RutinaEjercicioWhereUniqueInput
  }

  /**
   * RutinaEjercicio deleteMany
   */
  export type RutinaEjercicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RutinaEjercicios to delete
     */
    where?: RutinaEjercicioWhereInput
    /**
     * Limit how many RutinaEjercicios to delete.
     */
    limit?: number
  }

  /**
   * RutinaEjercicio without action
   */
  export type RutinaEjercicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RutinaEjercicio
     */
    select?: RutinaEjercicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RutinaEjercicio
     */
    omit?: RutinaEjercicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RutinaEjercicioInclude<ExtArgs> | null
  }


  /**
   * Model RoutineHistory
   */

  export type AggregateRoutineHistory = {
    _count: RoutineHistoryCountAggregateOutputType | null
    _avg: RoutineHistoryAvgAggregateOutputType | null
    _sum: RoutineHistorySumAggregateOutputType | null
    _min: RoutineHistoryMinAggregateOutputType | null
    _max: RoutineHistoryMaxAggregateOutputType | null
  }

  export type RoutineHistoryAvgAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    entrenadorId: number | null
    version: number | null
  }

  export type RoutineHistorySumAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    entrenadorId: number | null
    version: number | null
  }

  export type RoutineHistoryMinAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    entrenadorId: number | null
    cambios: string | null
    version: number | null
    createdAt: Date | null
  }

  export type RoutineHistoryMaxAggregateOutputType = {
    id: number | null
    rutinaId: number | null
    entrenadorId: number | null
    cambios: string | null
    version: number | null
    createdAt: Date | null
  }

  export type RoutineHistoryCountAggregateOutputType = {
    id: number
    rutinaId: number
    entrenadorId: number
    cambios: number
    version: number
    createdAt: number
    _all: number
  }


  export type RoutineHistoryAvgAggregateInputType = {
    id?: true
    rutinaId?: true
    entrenadorId?: true
    version?: true
  }

  export type RoutineHistorySumAggregateInputType = {
    id?: true
    rutinaId?: true
    entrenadorId?: true
    version?: true
  }

  export type RoutineHistoryMinAggregateInputType = {
    id?: true
    rutinaId?: true
    entrenadorId?: true
    cambios?: true
    version?: true
    createdAt?: true
  }

  export type RoutineHistoryMaxAggregateInputType = {
    id?: true
    rutinaId?: true
    entrenadorId?: true
    cambios?: true
    version?: true
    createdAt?: true
  }

  export type RoutineHistoryCountAggregateInputType = {
    id?: true
    rutinaId?: true
    entrenadorId?: true
    cambios?: true
    version?: true
    createdAt?: true
    _all?: true
  }

  export type RoutineHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineHistory to aggregate.
     */
    where?: RoutineHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineHistories to fetch.
     */
    orderBy?: RoutineHistoryOrderByWithRelationInput | RoutineHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoutineHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoutineHistories
    **/
    _count?: true | RoutineHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoutineHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoutineHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoutineHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoutineHistoryMaxAggregateInputType
  }

  export type GetRoutineHistoryAggregateType<T extends RoutineHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRoutineHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoutineHistory[P]>
      : GetScalarType<T[P], AggregateRoutineHistory[P]>
  }




  export type RoutineHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoutineHistoryWhereInput
    orderBy?: RoutineHistoryOrderByWithAggregationInput | RoutineHistoryOrderByWithAggregationInput[]
    by: RoutineHistoryScalarFieldEnum[] | RoutineHistoryScalarFieldEnum
    having?: RoutineHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoutineHistoryCountAggregateInputType | true
    _avg?: RoutineHistoryAvgAggregateInputType
    _sum?: RoutineHistorySumAggregateInputType
    _min?: RoutineHistoryMinAggregateInputType
    _max?: RoutineHistoryMaxAggregateInputType
  }

  export type RoutineHistoryGroupByOutputType = {
    id: number
    rutinaId: number
    entrenadorId: number | null
    cambios: string
    version: number
    createdAt: Date
    _count: RoutineHistoryCountAggregateOutputType | null
    _avg: RoutineHistoryAvgAggregateOutputType | null
    _sum: RoutineHistorySumAggregateOutputType | null
    _min: RoutineHistoryMinAggregateOutputType | null
    _max: RoutineHistoryMaxAggregateOutputType | null
  }

  type GetRoutineHistoryGroupByPayload<T extends RoutineHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoutineHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoutineHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoutineHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], RoutineHistoryGroupByOutputType[P]>
        }
      >
    >


  export type RoutineHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    entrenadorId?: boolean
    cambios?: boolean
    version?: boolean
    createdAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineHistory"]>

  export type RoutineHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    entrenadorId?: boolean
    cambios?: boolean
    version?: boolean
    createdAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineHistory"]>

  export type RoutineHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rutinaId?: boolean
    entrenadorId?: boolean
    cambios?: boolean
    version?: boolean
    createdAt?: boolean
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routineHistory"]>

  export type RoutineHistorySelectScalar = {
    id?: boolean
    rutinaId?: boolean
    entrenadorId?: boolean
    cambios?: boolean
    version?: boolean
    createdAt?: boolean
  }

  export type RoutineHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rutinaId" | "entrenadorId" | "cambios" | "version" | "createdAt", ExtArgs["result"]["routineHistory"]>
  export type RoutineHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }
  export type RoutineHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }
  export type RoutineHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rutina?: boolean | RutinaDefaultArgs<ExtArgs>
  }

  export type $RoutineHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoutineHistory"
    objects: {
      rutina: Prisma.$RutinaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      rutinaId: number
      entrenadorId: number | null
      cambios: string
      version: number
      createdAt: Date
    }, ExtArgs["result"]["routineHistory"]>
    composites: {}
  }

  type RoutineHistoryGetPayload<S extends boolean | null | undefined | RoutineHistoryDefaultArgs> = $Result.GetResult<Prisma.$RoutineHistoryPayload, S>

  type RoutineHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoutineHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoutineHistoryCountAggregateInputType | true
    }

  export interface RoutineHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoutineHistory'], meta: { name: 'RoutineHistory' } }
    /**
     * Find zero or one RoutineHistory that matches the filter.
     * @param {RoutineHistoryFindUniqueArgs} args - Arguments to find a RoutineHistory
     * @example
     * // Get one RoutineHistory
     * const routineHistory = await prisma.routineHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoutineHistoryFindUniqueArgs>(args: SelectSubset<T, RoutineHistoryFindUniqueArgs<ExtArgs>>): Prisma__RoutineHistoryClient<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoutineHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoutineHistoryFindUniqueOrThrowArgs} args - Arguments to find a RoutineHistory
     * @example
     * // Get one RoutineHistory
     * const routineHistory = await prisma.routineHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoutineHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RoutineHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoutineHistoryClient<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHistoryFindFirstArgs} args - Arguments to find a RoutineHistory
     * @example
     * // Get one RoutineHistory
     * const routineHistory = await prisma.routineHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoutineHistoryFindFirstArgs>(args?: SelectSubset<T, RoutineHistoryFindFirstArgs<ExtArgs>>): Prisma__RoutineHistoryClient<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoutineHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHistoryFindFirstOrThrowArgs} args - Arguments to find a RoutineHistory
     * @example
     * // Get one RoutineHistory
     * const routineHistory = await prisma.routineHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoutineHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RoutineHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoutineHistoryClient<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoutineHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoutineHistories
     * const routineHistories = await prisma.routineHistory.findMany()
     * 
     * // Get first 10 RoutineHistories
     * const routineHistories = await prisma.routineHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routineHistoryWithIdOnly = await prisma.routineHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoutineHistoryFindManyArgs>(args?: SelectSubset<T, RoutineHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoutineHistory.
     * @param {RoutineHistoryCreateArgs} args - Arguments to create a RoutineHistory.
     * @example
     * // Create one RoutineHistory
     * const RoutineHistory = await prisma.routineHistory.create({
     *   data: {
     *     // ... data to create a RoutineHistory
     *   }
     * })
     * 
     */
    create<T extends RoutineHistoryCreateArgs>(args: SelectSubset<T, RoutineHistoryCreateArgs<ExtArgs>>): Prisma__RoutineHistoryClient<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoutineHistories.
     * @param {RoutineHistoryCreateManyArgs} args - Arguments to create many RoutineHistories.
     * @example
     * // Create many RoutineHistories
     * const routineHistory = await prisma.routineHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoutineHistoryCreateManyArgs>(args?: SelectSubset<T, RoutineHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoutineHistories and returns the data saved in the database.
     * @param {RoutineHistoryCreateManyAndReturnArgs} args - Arguments to create many RoutineHistories.
     * @example
     * // Create many RoutineHistories
     * const routineHistory = await prisma.routineHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoutineHistories and only return the `id`
     * const routineHistoryWithIdOnly = await prisma.routineHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoutineHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RoutineHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoutineHistory.
     * @param {RoutineHistoryDeleteArgs} args - Arguments to delete one RoutineHistory.
     * @example
     * // Delete one RoutineHistory
     * const RoutineHistory = await prisma.routineHistory.delete({
     *   where: {
     *     // ... filter to delete one RoutineHistory
     *   }
     * })
     * 
     */
    delete<T extends RoutineHistoryDeleteArgs>(args: SelectSubset<T, RoutineHistoryDeleteArgs<ExtArgs>>): Prisma__RoutineHistoryClient<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoutineHistory.
     * @param {RoutineHistoryUpdateArgs} args - Arguments to update one RoutineHistory.
     * @example
     * // Update one RoutineHistory
     * const routineHistory = await prisma.routineHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoutineHistoryUpdateArgs>(args: SelectSubset<T, RoutineHistoryUpdateArgs<ExtArgs>>): Prisma__RoutineHistoryClient<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoutineHistories.
     * @param {RoutineHistoryDeleteManyArgs} args - Arguments to filter RoutineHistories to delete.
     * @example
     * // Delete a few RoutineHistories
     * const { count } = await prisma.routineHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoutineHistoryDeleteManyArgs>(args?: SelectSubset<T, RoutineHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoutineHistories
     * const routineHistory = await prisma.routineHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoutineHistoryUpdateManyArgs>(args: SelectSubset<T, RoutineHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoutineHistories and returns the data updated in the database.
     * @param {RoutineHistoryUpdateManyAndReturnArgs} args - Arguments to update many RoutineHistories.
     * @example
     * // Update many RoutineHistories
     * const routineHistory = await prisma.routineHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoutineHistories and only return the `id`
     * const routineHistoryWithIdOnly = await prisma.routineHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoutineHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RoutineHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoutineHistory.
     * @param {RoutineHistoryUpsertArgs} args - Arguments to update or create a RoutineHistory.
     * @example
     * // Update or create a RoutineHistory
     * const routineHistory = await prisma.routineHistory.upsert({
     *   create: {
     *     // ... data to create a RoutineHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoutineHistory we want to update
     *   }
     * })
     */
    upsert<T extends RoutineHistoryUpsertArgs>(args: SelectSubset<T, RoutineHistoryUpsertArgs<ExtArgs>>): Prisma__RoutineHistoryClient<$Result.GetResult<Prisma.$RoutineHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoutineHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHistoryCountArgs} args - Arguments to filter RoutineHistories to count.
     * @example
     * // Count the number of RoutineHistories
     * const count = await prisma.routineHistory.count({
     *   where: {
     *     // ... the filter for the RoutineHistories we want to count
     *   }
     * })
    **/
    count<T extends RoutineHistoryCountArgs>(
      args?: Subset<T, RoutineHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoutineHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoutineHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoutineHistoryAggregateArgs>(args: Subset<T, RoutineHistoryAggregateArgs>): Prisma.PrismaPromise<GetRoutineHistoryAggregateType<T>>

    /**
     * Group by RoutineHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoutineHistoryGroupByArgs} args - Group by arguments.
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
      T extends RoutineHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoutineHistoryGroupByArgs['orderBy'] }
        : { orderBy?: RoutineHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoutineHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoutineHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoutineHistory model
   */
  readonly fields: RoutineHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoutineHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoutineHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rutina<T extends RutinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RutinaDefaultArgs<ExtArgs>>): Prisma__RutinaClient<$Result.GetResult<Prisma.$RutinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RoutineHistory model
   */
  interface RoutineHistoryFieldRefs {
    readonly id: FieldRef<"RoutineHistory", 'Int'>
    readonly rutinaId: FieldRef<"RoutineHistory", 'Int'>
    readonly entrenadorId: FieldRef<"RoutineHistory", 'Int'>
    readonly cambios: FieldRef<"RoutineHistory", 'String'>
    readonly version: FieldRef<"RoutineHistory", 'Int'>
    readonly createdAt: FieldRef<"RoutineHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoutineHistory findUnique
   */
  export type RoutineHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RoutineHistory to fetch.
     */
    where: RoutineHistoryWhereUniqueInput
  }

  /**
   * RoutineHistory findUniqueOrThrow
   */
  export type RoutineHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RoutineHistory to fetch.
     */
    where: RoutineHistoryWhereUniqueInput
  }

  /**
   * RoutineHistory findFirst
   */
  export type RoutineHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RoutineHistory to fetch.
     */
    where?: RoutineHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineHistories to fetch.
     */
    orderBy?: RoutineHistoryOrderByWithRelationInput | RoutineHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineHistories.
     */
    cursor?: RoutineHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineHistories.
     */
    distinct?: RoutineHistoryScalarFieldEnum | RoutineHistoryScalarFieldEnum[]
  }

  /**
   * RoutineHistory findFirstOrThrow
   */
  export type RoutineHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RoutineHistory to fetch.
     */
    where?: RoutineHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineHistories to fetch.
     */
    orderBy?: RoutineHistoryOrderByWithRelationInput | RoutineHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoutineHistories.
     */
    cursor?: RoutineHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineHistories.
     */
    distinct?: RoutineHistoryScalarFieldEnum | RoutineHistoryScalarFieldEnum[]
  }

  /**
   * RoutineHistory findMany
   */
  export type RoutineHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryInclude<ExtArgs> | null
    /**
     * Filter, which RoutineHistories to fetch.
     */
    where?: RoutineHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoutineHistories to fetch.
     */
    orderBy?: RoutineHistoryOrderByWithRelationInput | RoutineHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoutineHistories.
     */
    cursor?: RoutineHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoutineHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoutineHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoutineHistories.
     */
    distinct?: RoutineHistoryScalarFieldEnum | RoutineHistoryScalarFieldEnum[]
  }

  /**
   * RoutineHistory create
   */
  export type RoutineHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a RoutineHistory.
     */
    data: XOR<RoutineHistoryCreateInput, RoutineHistoryUncheckedCreateInput>
  }

  /**
   * RoutineHistory createMany
   */
  export type RoutineHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoutineHistories.
     */
    data: RoutineHistoryCreateManyInput | RoutineHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoutineHistory createManyAndReturn
   */
  export type RoutineHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many RoutineHistories.
     */
    data: RoutineHistoryCreateManyInput | RoutineHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutineHistory update
   */
  export type RoutineHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a RoutineHistory.
     */
    data: XOR<RoutineHistoryUpdateInput, RoutineHistoryUncheckedUpdateInput>
    /**
     * Choose, which RoutineHistory to update.
     */
    where: RoutineHistoryWhereUniqueInput
  }

  /**
   * RoutineHistory updateMany
   */
  export type RoutineHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoutineHistories.
     */
    data: XOR<RoutineHistoryUpdateManyMutationInput, RoutineHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RoutineHistories to update
     */
    where?: RoutineHistoryWhereInput
    /**
     * Limit how many RoutineHistories to update.
     */
    limit?: number
  }

  /**
   * RoutineHistory updateManyAndReturn
   */
  export type RoutineHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * The data used to update RoutineHistories.
     */
    data: XOR<RoutineHistoryUpdateManyMutationInput, RoutineHistoryUncheckedUpdateManyInput>
    /**
     * Filter which RoutineHistories to update
     */
    where?: RoutineHistoryWhereInput
    /**
     * Limit how many RoutineHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoutineHistory upsert
   */
  export type RoutineHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the RoutineHistory to update in case it exists.
     */
    where: RoutineHistoryWhereUniqueInput
    /**
     * In case the RoutineHistory found by the `where` argument doesn't exist, create a new RoutineHistory with this data.
     */
    create: XOR<RoutineHistoryCreateInput, RoutineHistoryUncheckedCreateInput>
    /**
     * In case the RoutineHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoutineHistoryUpdateInput, RoutineHistoryUncheckedUpdateInput>
  }

  /**
   * RoutineHistory delete
   */
  export type RoutineHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryInclude<ExtArgs> | null
    /**
     * Filter which RoutineHistory to delete.
     */
    where: RoutineHistoryWhereUniqueInput
  }

  /**
   * RoutineHistory deleteMany
   */
  export type RoutineHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoutineHistories to delete
     */
    where?: RoutineHistoryWhereInput
    /**
     * Limit how many RoutineHistories to delete.
     */
    limit?: number
  }

  /**
   * RoutineHistory without action
   */
  export type RoutineHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoutineHistory
     */
    select?: RoutineHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoutineHistory
     */
    omit?: RoutineHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoutineHistoryInclude<ExtArgs> | null
  }


  /**
   * Model BodyMeasurement
   */

  export type AggregateBodyMeasurement = {
    _count: BodyMeasurementCountAggregateOutputType | null
    _avg: BodyMeasurementAvgAggregateOutputType | null
    _sum: BodyMeasurementSumAggregateOutputType | null
    _min: BodyMeasurementMinAggregateOutputType | null
    _max: BodyMeasurementMaxAggregateOutputType | null
  }

  export type BodyMeasurementAvgAggregateOutputType = {
    id: number | null
    miembroId: number | null
    entrenadorId: number | null
    peso: Decimal | null
    talla: Decimal | null
    porcentajeGrasa: Decimal | null
  }

  export type BodyMeasurementSumAggregateOutputType = {
    id: number | null
    miembroId: number | null
    entrenadorId: number | null
    peso: Decimal | null
    talla: Decimal | null
    porcentajeGrasa: Decimal | null
  }

  export type BodyMeasurementMinAggregateOutputType = {
    id: number | null
    miembroId: number | null
    entrenadorId: number | null
    peso: Decimal | null
    talla: Decimal | null
    porcentajeGrasa: Decimal | null
    fechaMedicion: Date | null
    notas: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BodyMeasurementMaxAggregateOutputType = {
    id: number | null
    miembroId: number | null
    entrenadorId: number | null
    peso: Decimal | null
    talla: Decimal | null
    porcentajeGrasa: Decimal | null
    fechaMedicion: Date | null
    notas: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BodyMeasurementCountAggregateOutputType = {
    id: number
    miembroId: number
    entrenadorId: number
    peso: number
    talla: number
    porcentajeGrasa: number
    fechaMedicion: number
    notas: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BodyMeasurementAvgAggregateInputType = {
    id?: true
    miembroId?: true
    entrenadorId?: true
    peso?: true
    talla?: true
    porcentajeGrasa?: true
  }

  export type BodyMeasurementSumAggregateInputType = {
    id?: true
    miembroId?: true
    entrenadorId?: true
    peso?: true
    talla?: true
    porcentajeGrasa?: true
  }

  export type BodyMeasurementMinAggregateInputType = {
    id?: true
    miembroId?: true
    entrenadorId?: true
    peso?: true
    talla?: true
    porcentajeGrasa?: true
    fechaMedicion?: true
    notas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BodyMeasurementMaxAggregateInputType = {
    id?: true
    miembroId?: true
    entrenadorId?: true
    peso?: true
    talla?: true
    porcentajeGrasa?: true
    fechaMedicion?: true
    notas?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BodyMeasurementCountAggregateInputType = {
    id?: true
    miembroId?: true
    entrenadorId?: true
    peso?: true
    talla?: true
    porcentajeGrasa?: true
    fechaMedicion?: true
    notas?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BodyMeasurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMeasurement to aggregate.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BodyMeasurements
    **/
    _count?: true | BodyMeasurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BodyMeasurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BodyMeasurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyMeasurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyMeasurementMaxAggregateInputType
  }

  export type GetBodyMeasurementAggregateType<T extends BodyMeasurementAggregateArgs> = {
        [P in keyof T & keyof AggregateBodyMeasurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBodyMeasurement[P]>
      : GetScalarType<T[P], AggregateBodyMeasurement[P]>
  }




  export type BodyMeasurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyMeasurementWhereInput
    orderBy?: BodyMeasurementOrderByWithAggregationInput | BodyMeasurementOrderByWithAggregationInput[]
    by: BodyMeasurementScalarFieldEnum[] | BodyMeasurementScalarFieldEnum
    having?: BodyMeasurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyMeasurementCountAggregateInputType | true
    _avg?: BodyMeasurementAvgAggregateInputType
    _sum?: BodyMeasurementSumAggregateInputType
    _min?: BodyMeasurementMinAggregateInputType
    _max?: BodyMeasurementMaxAggregateInputType
  }

  export type BodyMeasurementGroupByOutputType = {
    id: number
    miembroId: number
    entrenadorId: number | null
    peso: Decimal
    talla: Decimal
    porcentajeGrasa: Decimal
    fechaMedicion: Date
    notas: string | null
    createdAt: Date
    updatedAt: Date
    _count: BodyMeasurementCountAggregateOutputType | null
    _avg: BodyMeasurementAvgAggregateOutputType | null
    _sum: BodyMeasurementSumAggregateOutputType | null
    _min: BodyMeasurementMinAggregateOutputType | null
    _max: BodyMeasurementMaxAggregateOutputType | null
  }

  type GetBodyMeasurementGroupByPayload<T extends BodyMeasurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BodyMeasurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyMeasurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyMeasurementGroupByOutputType[P]>
            : GetScalarType<T[P], BodyMeasurementGroupByOutputType[P]>
        }
      >
    >


  export type BodyMeasurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    miembroId?: boolean
    entrenadorId?: boolean
    peso?: boolean
    talla?: boolean
    porcentajeGrasa?: boolean
    fechaMedicion?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    miembroId?: boolean
    entrenadorId?: boolean
    peso?: boolean
    talla?: boolean
    porcentajeGrasa?: boolean
    fechaMedicion?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    miembroId?: boolean
    entrenadorId?: boolean
    peso?: boolean
    talla?: boolean
    porcentajeGrasa?: boolean
    fechaMedicion?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bodyMeasurement"]>

  export type BodyMeasurementSelectScalar = {
    id?: boolean
    miembroId?: boolean
    entrenadorId?: boolean
    peso?: boolean
    talla?: boolean
    porcentajeGrasa?: boolean
    fechaMedicion?: boolean
    notas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BodyMeasurementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "miembroId" | "entrenadorId" | "peso" | "talla" | "porcentajeGrasa" | "fechaMedicion" | "notas" | "createdAt" | "updatedAt", ExtArgs["result"]["bodyMeasurement"]>
  export type BodyMeasurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }
  export type BodyMeasurementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }
  export type BodyMeasurementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembro?: boolean | MiembroDefaultArgs<ExtArgs>
  }

  export type $BodyMeasurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BodyMeasurement"
    objects: {
      miembro: Prisma.$MiembroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      miembroId: number
      entrenadorId: number | null
      peso: Prisma.Decimal
      talla: Prisma.Decimal
      porcentajeGrasa: Prisma.Decimal
      fechaMedicion: Date
      notas: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bodyMeasurement"]>
    composites: {}
  }

  type BodyMeasurementGetPayload<S extends boolean | null | undefined | BodyMeasurementDefaultArgs> = $Result.GetResult<Prisma.$BodyMeasurementPayload, S>

  type BodyMeasurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BodyMeasurementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BodyMeasurementCountAggregateInputType | true
    }

  export interface BodyMeasurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BodyMeasurement'], meta: { name: 'BodyMeasurement' } }
    /**
     * Find zero or one BodyMeasurement that matches the filter.
     * @param {BodyMeasurementFindUniqueArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BodyMeasurementFindUniqueArgs>(args: SelectSubset<T, BodyMeasurementFindUniqueArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BodyMeasurement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BodyMeasurementFindUniqueOrThrowArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BodyMeasurementFindUniqueOrThrowArgs>(args: SelectSubset<T, BodyMeasurementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyMeasurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindFirstArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BodyMeasurementFindFirstArgs>(args?: SelectSubset<T, BodyMeasurementFindFirstArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BodyMeasurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindFirstOrThrowArgs} args - Arguments to find a BodyMeasurement
     * @example
     * // Get one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BodyMeasurementFindFirstOrThrowArgs>(args?: SelectSubset<T, BodyMeasurementFindFirstOrThrowArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BodyMeasurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyMeasurements
     * const bodyMeasurements = await prisma.bodyMeasurement.findMany()
     * 
     * // Get first 10 BodyMeasurements
     * const bodyMeasurements = await prisma.bodyMeasurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BodyMeasurementFindManyArgs>(args?: SelectSubset<T, BodyMeasurementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BodyMeasurement.
     * @param {BodyMeasurementCreateArgs} args - Arguments to create a BodyMeasurement.
     * @example
     * // Create one BodyMeasurement
     * const BodyMeasurement = await prisma.bodyMeasurement.create({
     *   data: {
     *     // ... data to create a BodyMeasurement
     *   }
     * })
     * 
     */
    create<T extends BodyMeasurementCreateArgs>(args: SelectSubset<T, BodyMeasurementCreateArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BodyMeasurements.
     * @param {BodyMeasurementCreateManyArgs} args - Arguments to create many BodyMeasurements.
     * @example
     * // Create many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BodyMeasurementCreateManyArgs>(args?: SelectSubset<T, BodyMeasurementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BodyMeasurements and returns the data saved in the database.
     * @param {BodyMeasurementCreateManyAndReturnArgs} args - Arguments to create many BodyMeasurements.
     * @example
     * // Create many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BodyMeasurements and only return the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BodyMeasurementCreateManyAndReturnArgs>(args?: SelectSubset<T, BodyMeasurementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BodyMeasurement.
     * @param {BodyMeasurementDeleteArgs} args - Arguments to delete one BodyMeasurement.
     * @example
     * // Delete one BodyMeasurement
     * const BodyMeasurement = await prisma.bodyMeasurement.delete({
     *   where: {
     *     // ... filter to delete one BodyMeasurement
     *   }
     * })
     * 
     */
    delete<T extends BodyMeasurementDeleteArgs>(args: SelectSubset<T, BodyMeasurementDeleteArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BodyMeasurement.
     * @param {BodyMeasurementUpdateArgs} args - Arguments to update one BodyMeasurement.
     * @example
     * // Update one BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BodyMeasurementUpdateArgs>(args: SelectSubset<T, BodyMeasurementUpdateArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BodyMeasurements.
     * @param {BodyMeasurementDeleteManyArgs} args - Arguments to filter BodyMeasurements to delete.
     * @example
     * // Delete a few BodyMeasurements
     * const { count } = await prisma.bodyMeasurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BodyMeasurementDeleteManyArgs>(args?: SelectSubset<T, BodyMeasurementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyMeasurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BodyMeasurementUpdateManyArgs>(args: SelectSubset<T, BodyMeasurementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyMeasurements and returns the data updated in the database.
     * @param {BodyMeasurementUpdateManyAndReturnArgs} args - Arguments to update many BodyMeasurements.
     * @example
     * // Update many BodyMeasurements
     * const bodyMeasurement = await prisma.bodyMeasurement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BodyMeasurements and only return the `id`
     * const bodyMeasurementWithIdOnly = await prisma.bodyMeasurement.updateManyAndReturn({
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
    updateManyAndReturn<T extends BodyMeasurementUpdateManyAndReturnArgs>(args: SelectSubset<T, BodyMeasurementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BodyMeasurement.
     * @param {BodyMeasurementUpsertArgs} args - Arguments to update or create a BodyMeasurement.
     * @example
     * // Update or create a BodyMeasurement
     * const bodyMeasurement = await prisma.bodyMeasurement.upsert({
     *   create: {
     *     // ... data to create a BodyMeasurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyMeasurement we want to update
     *   }
     * })
     */
    upsert<T extends BodyMeasurementUpsertArgs>(args: SelectSubset<T, BodyMeasurementUpsertArgs<ExtArgs>>): Prisma__BodyMeasurementClient<$Result.GetResult<Prisma.$BodyMeasurementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BodyMeasurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementCountArgs} args - Arguments to filter BodyMeasurements to count.
     * @example
     * // Count the number of BodyMeasurements
     * const count = await prisma.bodyMeasurement.count({
     *   where: {
     *     // ... the filter for the BodyMeasurements we want to count
     *   }
     * })
    **/
    count<T extends BodyMeasurementCountArgs>(
      args?: Subset<T, BodyMeasurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyMeasurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BodyMeasurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BodyMeasurementAggregateArgs>(args: Subset<T, BodyMeasurementAggregateArgs>): Prisma.PrismaPromise<GetBodyMeasurementAggregateType<T>>

    /**
     * Group by BodyMeasurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMeasurementGroupByArgs} args - Group by arguments.
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
      T extends BodyMeasurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyMeasurementGroupByArgs['orderBy'] }
        : { orderBy?: BodyMeasurementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BodyMeasurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyMeasurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BodyMeasurement model
   */
  readonly fields: BodyMeasurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BodyMeasurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BodyMeasurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    miembro<T extends MiembroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MiembroDefaultArgs<ExtArgs>>): Prisma__MiembroClient<$Result.GetResult<Prisma.$MiembroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BodyMeasurement model
   */
  interface BodyMeasurementFieldRefs {
    readonly id: FieldRef<"BodyMeasurement", 'Int'>
    readonly miembroId: FieldRef<"BodyMeasurement", 'Int'>
    readonly entrenadorId: FieldRef<"BodyMeasurement", 'Int'>
    readonly peso: FieldRef<"BodyMeasurement", 'Decimal'>
    readonly talla: FieldRef<"BodyMeasurement", 'Decimal'>
    readonly porcentajeGrasa: FieldRef<"BodyMeasurement", 'Decimal'>
    readonly fechaMedicion: FieldRef<"BodyMeasurement", 'DateTime'>
    readonly notas: FieldRef<"BodyMeasurement", 'String'>
    readonly createdAt: FieldRef<"BodyMeasurement", 'DateTime'>
    readonly updatedAt: FieldRef<"BodyMeasurement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BodyMeasurement findUnique
   */
  export type BodyMeasurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement findUniqueOrThrow
   */
  export type BodyMeasurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement findFirst
   */
  export type BodyMeasurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMeasurements.
     */
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement findFirstOrThrow
   */
  export type BodyMeasurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurement to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMeasurements.
     */
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement findMany
   */
  export type BodyMeasurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter, which BodyMeasurements to fetch.
     */
    where?: BodyMeasurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMeasurements to fetch.
     */
    orderBy?: BodyMeasurementOrderByWithRelationInput | BodyMeasurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BodyMeasurements.
     */
    cursor?: BodyMeasurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMeasurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMeasurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMeasurements.
     */
    distinct?: BodyMeasurementScalarFieldEnum | BodyMeasurementScalarFieldEnum[]
  }

  /**
   * BodyMeasurement create
   */
  export type BodyMeasurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The data needed to create a BodyMeasurement.
     */
    data: XOR<BodyMeasurementCreateInput, BodyMeasurementUncheckedCreateInput>
  }

  /**
   * BodyMeasurement createMany
   */
  export type BodyMeasurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BodyMeasurements.
     */
    data: BodyMeasurementCreateManyInput | BodyMeasurementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BodyMeasurement createManyAndReturn
   */
  export type BodyMeasurementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * The data used to create many BodyMeasurements.
     */
    data: BodyMeasurementCreateManyInput | BodyMeasurementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyMeasurement update
   */
  export type BodyMeasurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The data needed to update a BodyMeasurement.
     */
    data: XOR<BodyMeasurementUpdateInput, BodyMeasurementUncheckedUpdateInput>
    /**
     * Choose, which BodyMeasurement to update.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement updateMany
   */
  export type BodyMeasurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BodyMeasurements.
     */
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyInput>
    /**
     * Filter which BodyMeasurements to update
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to update.
     */
    limit?: number
  }

  /**
   * BodyMeasurement updateManyAndReturn
   */
  export type BodyMeasurementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * The data used to update BodyMeasurements.
     */
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyInput>
    /**
     * Filter which BodyMeasurements to update
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BodyMeasurement upsert
   */
  export type BodyMeasurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * The filter to search for the BodyMeasurement to update in case it exists.
     */
    where: BodyMeasurementWhereUniqueInput
    /**
     * In case the BodyMeasurement found by the `where` argument doesn't exist, create a new BodyMeasurement with this data.
     */
    create: XOR<BodyMeasurementCreateInput, BodyMeasurementUncheckedCreateInput>
    /**
     * In case the BodyMeasurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BodyMeasurementUpdateInput, BodyMeasurementUncheckedUpdateInput>
  }

  /**
   * BodyMeasurement delete
   */
  export type BodyMeasurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
    /**
     * Filter which BodyMeasurement to delete.
     */
    where: BodyMeasurementWhereUniqueInput
  }

  /**
   * BodyMeasurement deleteMany
   */
  export type BodyMeasurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMeasurements to delete
     */
    where?: BodyMeasurementWhereInput
    /**
     * Limit how many BodyMeasurements to delete.
     */
    limit?: number
  }

  /**
   * BodyMeasurement without action
   */
  export type BodyMeasurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMeasurement
     */
    select?: BodyMeasurementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BodyMeasurement
     */
    omit?: BodyMeasurementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BodyMeasurementInclude<ExtArgs> | null
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


  export const PlanMembresiaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    codigo: 'codigo',
    duracionDias: 'duracionDias',
    precio: 'precio',
    beneficios: 'beneficios',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanMembresiaScalarFieldEnum = (typeof PlanMembresiaScalarFieldEnum)[keyof typeof PlanMembresiaScalarFieldEnum]


  export const PlanHistoryScalarFieldEnum: {
    id: 'id',
    planMembresiId: 'planMembresiId',
    precioAnterior: 'precioAnterior',
    precioNuevo: 'precioNuevo',
    beneficiosAnteriores: 'beneficiosAnteriores',
    beneficiosNuevos: 'beneficiosNuevos',
    usuarioId: 'usuarioId',
    fechaCambio: 'fechaCambio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanHistoryScalarFieldEnum = (typeof PlanHistoryScalarFieldEnum)[keyof typeof PlanHistoryScalarFieldEnum]


  export const MiembroScalarFieldEnum: {
    id: 'id',
    nombres: 'nombres',
    apellidos: 'apellidos',
    documentoIdentidad: 'documentoIdentidad',
    correoPersonal: 'correoPersonal',
    telefono: 'telefono',
    fechaNacimiento: 'fechaNacimiento',
    planMembresiaId: 'planMembresiaId',
    fechaInicio: 'fechaInicio',
    fechaVencimiento: 'fechaVencimiento',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MiembroScalarFieldEnum = (typeof MiembroScalarFieldEnum)[keyof typeof MiembroScalarFieldEnum]


  export const MemberAuditLogScalarFieldEnum: {
    id: 'id',
    miembroId: 'miembroId',
    usuarioId: 'usuarioId',
    cambios: 'cambios',
    valorAnterior: 'valorAnterior',
    valorNuevo: 'valorNuevo',
    fechaCambio: 'fechaCambio',
    createdAt: 'createdAt'
  };

  export type MemberAuditLogScalarFieldEnum = (typeof MemberAuditLogScalarFieldEnum)[keyof typeof MemberAuditLogScalarFieldEnum]


  export const EntrenadorScalarFieldEnum: {
    id: 'id',
    nombres: 'nombres',
    apellidos: 'apellidos',
    documentoIdentidad: 'documentoIdentidad',
    correoInstitucional: 'correoInstitucional',
    telefono: 'telefono',
    especialidad: 'especialidad',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EntrenadorScalarFieldEnum = (typeof EntrenadorScalarFieldEnum)[keyof typeof EntrenadorScalarFieldEnum]


  export const TrainerAvailabilityScalarFieldEnum: {
    id: 'id',
    entrenadorId: 'entrenadorId',
    diaSemana: 'diaSemana',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TrainerAvailabilityScalarFieldEnum = (typeof TrainerAvailabilityScalarFieldEnum)[keyof typeof TrainerAvailabilityScalarFieldEnum]


  export const RutinaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    objetivo: 'objetivo',
    miembroId: 'miembroId',
    entrenadorId: 'entrenadorId',
    diasEntrenamiento: 'diasEntrenamiento',
    activo: 'activo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RutinaScalarFieldEnum = (typeof RutinaScalarFieldEnum)[keyof typeof RutinaScalarFieldEnum]


  export const EjercicioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EjercicioScalarFieldEnum = (typeof EjercicioScalarFieldEnum)[keyof typeof EjercicioScalarFieldEnum]


  export const RutinaEjercicioScalarFieldEnum: {
    id: 'id',
    rutinaId: 'rutinaId',
    ejercicioId: 'ejercicioId',
    series: 'series',
    repeticiones: 'repeticiones',
    tiempoDescansoSeg: 'tiempoDescansoSeg',
    orden: 'orden',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RutinaEjercicioScalarFieldEnum = (typeof RutinaEjercicioScalarFieldEnum)[keyof typeof RutinaEjercicioScalarFieldEnum]


  export const RoutineHistoryScalarFieldEnum: {
    id: 'id',
    rutinaId: 'rutinaId',
    entrenadorId: 'entrenadorId',
    cambios: 'cambios',
    version: 'version',
    createdAt: 'createdAt'
  };

  export type RoutineHistoryScalarFieldEnum = (typeof RoutineHistoryScalarFieldEnum)[keyof typeof RoutineHistoryScalarFieldEnum]


  export const BodyMeasurementScalarFieldEnum: {
    id: 'id',
    miembroId: 'miembroId',
    entrenadorId: 'entrenadorId',
    peso: 'peso',
    talla: 'talla',
    porcentajeGrasa: 'porcentajeGrasa',
    fechaMedicion: 'fechaMedicion',
    notas: 'notas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BodyMeasurementScalarFieldEnum = (typeof BodyMeasurementScalarFieldEnum)[keyof typeof BodyMeasurementScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type PlanMembresiaWhereInput = {
    AND?: PlanMembresiaWhereInput | PlanMembresiaWhereInput[]
    OR?: PlanMembresiaWhereInput[]
    NOT?: PlanMembresiaWhereInput | PlanMembresiaWhereInput[]
    id?: IntFilter<"PlanMembresia"> | number
    nombre?: StringFilter<"PlanMembresia"> | string
    codigo?: StringFilter<"PlanMembresia"> | string
    duracionDias?: IntFilter<"PlanMembresia"> | number
    precio?: DecimalFilter<"PlanMembresia"> | Decimal | DecimalJsLike | number | string
    beneficios?: StringNullableListFilter<"PlanMembresia">
    activo?: BoolFilter<"PlanMembresia"> | boolean
    createdAt?: DateTimeFilter<"PlanMembresia"> | Date | string
    updatedAt?: DateTimeFilter<"PlanMembresia"> | Date | string
    miembros?: MiembroListRelationFilter
    historialCambios?: PlanHistoryListRelationFilter
  }

  export type PlanMembresiaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    duracionDias?: SortOrder
    precio?: SortOrder
    beneficios?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    miembros?: MiembroOrderByRelationAggregateInput
    historialCambios?: PlanHistoryOrderByRelationAggregateInput
  }

  export type PlanMembresiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    codigo?: string
    AND?: PlanMembresiaWhereInput | PlanMembresiaWhereInput[]
    OR?: PlanMembresiaWhereInput[]
    NOT?: PlanMembresiaWhereInput | PlanMembresiaWhereInput[]
    duracionDias?: IntFilter<"PlanMembresia"> | number
    precio?: DecimalFilter<"PlanMembresia"> | Decimal | DecimalJsLike | number | string
    beneficios?: StringNullableListFilter<"PlanMembresia">
    activo?: BoolFilter<"PlanMembresia"> | boolean
    createdAt?: DateTimeFilter<"PlanMembresia"> | Date | string
    updatedAt?: DateTimeFilter<"PlanMembresia"> | Date | string
    miembros?: MiembroListRelationFilter
    historialCambios?: PlanHistoryListRelationFilter
  }, "id" | "nombre" | "codigo">

  export type PlanMembresiaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    duracionDias?: SortOrder
    precio?: SortOrder
    beneficios?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanMembresiaCountOrderByAggregateInput
    _avg?: PlanMembresiaAvgOrderByAggregateInput
    _max?: PlanMembresiaMaxOrderByAggregateInput
    _min?: PlanMembresiaMinOrderByAggregateInput
    _sum?: PlanMembresiaSumOrderByAggregateInput
  }

  export type PlanMembresiaScalarWhereWithAggregatesInput = {
    AND?: PlanMembresiaScalarWhereWithAggregatesInput | PlanMembresiaScalarWhereWithAggregatesInput[]
    OR?: PlanMembresiaScalarWhereWithAggregatesInput[]
    NOT?: PlanMembresiaScalarWhereWithAggregatesInput | PlanMembresiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlanMembresia"> | number
    nombre?: StringWithAggregatesFilter<"PlanMembresia"> | string
    codigo?: StringWithAggregatesFilter<"PlanMembresia"> | string
    duracionDias?: IntWithAggregatesFilter<"PlanMembresia"> | number
    precio?: DecimalWithAggregatesFilter<"PlanMembresia"> | Decimal | DecimalJsLike | number | string
    beneficios?: StringNullableListFilter<"PlanMembresia">
    activo?: BoolWithAggregatesFilter<"PlanMembresia"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PlanMembresia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlanMembresia"> | Date | string
  }

  export type PlanHistoryWhereInput = {
    AND?: PlanHistoryWhereInput | PlanHistoryWhereInput[]
    OR?: PlanHistoryWhereInput[]
    NOT?: PlanHistoryWhereInput | PlanHistoryWhereInput[]
    id?: IntFilter<"PlanHistory"> | number
    planMembresiId?: IntFilter<"PlanHistory"> | number
    precioAnterior?: DecimalFilter<"PlanHistory"> | Decimal | DecimalJsLike | number | string
    precioNuevo?: DecimalFilter<"PlanHistory"> | Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: StringNullableListFilter<"PlanHistory">
    beneficiosNuevos?: StringNullableListFilter<"PlanHistory">
    usuarioId?: IntFilter<"PlanHistory"> | number
    fechaCambio?: DateTimeFilter<"PlanHistory"> | Date | string
    createdAt?: DateTimeFilter<"PlanHistory"> | Date | string
    updatedAt?: DateTimeFilter<"PlanHistory"> | Date | string
    planMembresia?: XOR<PlanMembresiaScalarRelationFilter, PlanMembresiaWhereInput>
  }

  export type PlanHistoryOrderByWithRelationInput = {
    id?: SortOrder
    planMembresiId?: SortOrder
    precioAnterior?: SortOrder
    precioNuevo?: SortOrder
    beneficiosAnteriores?: SortOrder
    beneficiosNuevos?: SortOrder
    usuarioId?: SortOrder
    fechaCambio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planMembresia?: PlanMembresiaOrderByWithRelationInput
  }

  export type PlanHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PlanHistoryWhereInput | PlanHistoryWhereInput[]
    OR?: PlanHistoryWhereInput[]
    NOT?: PlanHistoryWhereInput | PlanHistoryWhereInput[]
    planMembresiId?: IntFilter<"PlanHistory"> | number
    precioAnterior?: DecimalFilter<"PlanHistory"> | Decimal | DecimalJsLike | number | string
    precioNuevo?: DecimalFilter<"PlanHistory"> | Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: StringNullableListFilter<"PlanHistory">
    beneficiosNuevos?: StringNullableListFilter<"PlanHistory">
    usuarioId?: IntFilter<"PlanHistory"> | number
    fechaCambio?: DateTimeFilter<"PlanHistory"> | Date | string
    createdAt?: DateTimeFilter<"PlanHistory"> | Date | string
    updatedAt?: DateTimeFilter<"PlanHistory"> | Date | string
    planMembresia?: XOR<PlanMembresiaScalarRelationFilter, PlanMembresiaWhereInput>
  }, "id">

  export type PlanHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    planMembresiId?: SortOrder
    precioAnterior?: SortOrder
    precioNuevo?: SortOrder
    beneficiosAnteriores?: SortOrder
    beneficiosNuevos?: SortOrder
    usuarioId?: SortOrder
    fechaCambio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanHistoryCountOrderByAggregateInput
    _avg?: PlanHistoryAvgOrderByAggregateInput
    _max?: PlanHistoryMaxOrderByAggregateInput
    _min?: PlanHistoryMinOrderByAggregateInput
    _sum?: PlanHistorySumOrderByAggregateInput
  }

  export type PlanHistoryScalarWhereWithAggregatesInput = {
    AND?: PlanHistoryScalarWhereWithAggregatesInput | PlanHistoryScalarWhereWithAggregatesInput[]
    OR?: PlanHistoryScalarWhereWithAggregatesInput[]
    NOT?: PlanHistoryScalarWhereWithAggregatesInput | PlanHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PlanHistory"> | number
    planMembresiId?: IntWithAggregatesFilter<"PlanHistory"> | number
    precioAnterior?: DecimalWithAggregatesFilter<"PlanHistory"> | Decimal | DecimalJsLike | number | string
    precioNuevo?: DecimalWithAggregatesFilter<"PlanHistory"> | Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: StringNullableListFilter<"PlanHistory">
    beneficiosNuevos?: StringNullableListFilter<"PlanHistory">
    usuarioId?: IntWithAggregatesFilter<"PlanHistory"> | number
    fechaCambio?: DateTimeWithAggregatesFilter<"PlanHistory"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PlanHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlanHistory"> | Date | string
  }

  export type MiembroWhereInput = {
    AND?: MiembroWhereInput | MiembroWhereInput[]
    OR?: MiembroWhereInput[]
    NOT?: MiembroWhereInput | MiembroWhereInput[]
    id?: IntFilter<"Miembro"> | number
    nombres?: StringFilter<"Miembro"> | string
    apellidos?: StringFilter<"Miembro"> | string
    documentoIdentidad?: StringFilter<"Miembro"> | string
    correoPersonal?: StringFilter<"Miembro"> | string
    telefono?: StringNullableFilter<"Miembro"> | string | null
    fechaNacimiento?: DateTimeFilter<"Miembro"> | Date | string
    planMembresiaId?: IntFilter<"Miembro"> | number
    fechaInicio?: DateTimeFilter<"Miembro"> | Date | string
    fechaVencimiento?: DateTimeFilter<"Miembro"> | Date | string
    activo?: BoolFilter<"Miembro"> | boolean
    createdAt?: DateTimeFilter<"Miembro"> | Date | string
    updatedAt?: DateTimeFilter<"Miembro"> | Date | string
    planMembresia?: XOR<PlanMembresiaScalarRelationFilter, PlanMembresiaWhereInput>
    rutinas?: RutinaListRelationFilter
    medidasCorporales?: BodyMeasurementListRelationFilter
    auditLog?: MemberAuditLogListRelationFilter
  }

  export type MiembroOrderByWithRelationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    correoPersonal?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrder
    planMembresiaId?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    planMembresia?: PlanMembresiaOrderByWithRelationInput
    rutinas?: RutinaOrderByRelationAggregateInput
    medidasCorporales?: BodyMeasurementOrderByRelationAggregateInput
    auditLog?: MemberAuditLogOrderByRelationAggregateInput
  }

  export type MiembroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentoIdentidad?: string
    correoPersonal?: string
    AND?: MiembroWhereInput | MiembroWhereInput[]
    OR?: MiembroWhereInput[]
    NOT?: MiembroWhereInput | MiembroWhereInput[]
    nombres?: StringFilter<"Miembro"> | string
    apellidos?: StringFilter<"Miembro"> | string
    telefono?: StringNullableFilter<"Miembro"> | string | null
    fechaNacimiento?: DateTimeFilter<"Miembro"> | Date | string
    planMembresiaId?: IntFilter<"Miembro"> | number
    fechaInicio?: DateTimeFilter<"Miembro"> | Date | string
    fechaVencimiento?: DateTimeFilter<"Miembro"> | Date | string
    activo?: BoolFilter<"Miembro"> | boolean
    createdAt?: DateTimeFilter<"Miembro"> | Date | string
    updatedAt?: DateTimeFilter<"Miembro"> | Date | string
    planMembresia?: XOR<PlanMembresiaScalarRelationFilter, PlanMembresiaWhereInput>
    rutinas?: RutinaListRelationFilter
    medidasCorporales?: BodyMeasurementListRelationFilter
    auditLog?: MemberAuditLogListRelationFilter
  }, "id" | "documentoIdentidad" | "correoPersonal">

  export type MiembroOrderByWithAggregationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    correoPersonal?: SortOrder
    telefono?: SortOrderInput | SortOrder
    fechaNacimiento?: SortOrder
    planMembresiaId?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MiembroCountOrderByAggregateInput
    _avg?: MiembroAvgOrderByAggregateInput
    _max?: MiembroMaxOrderByAggregateInput
    _min?: MiembroMinOrderByAggregateInput
    _sum?: MiembroSumOrderByAggregateInput
  }

  export type MiembroScalarWhereWithAggregatesInput = {
    AND?: MiembroScalarWhereWithAggregatesInput | MiembroScalarWhereWithAggregatesInput[]
    OR?: MiembroScalarWhereWithAggregatesInput[]
    NOT?: MiembroScalarWhereWithAggregatesInput | MiembroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Miembro"> | number
    nombres?: StringWithAggregatesFilter<"Miembro"> | string
    apellidos?: StringWithAggregatesFilter<"Miembro"> | string
    documentoIdentidad?: StringWithAggregatesFilter<"Miembro"> | string
    correoPersonal?: StringWithAggregatesFilter<"Miembro"> | string
    telefono?: StringNullableWithAggregatesFilter<"Miembro"> | string | null
    fechaNacimiento?: DateTimeWithAggregatesFilter<"Miembro"> | Date | string
    planMembresiaId?: IntWithAggregatesFilter<"Miembro"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Miembro"> | Date | string
    fechaVencimiento?: DateTimeWithAggregatesFilter<"Miembro"> | Date | string
    activo?: BoolWithAggregatesFilter<"Miembro"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Miembro"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Miembro"> | Date | string
  }

  export type MemberAuditLogWhereInput = {
    AND?: MemberAuditLogWhereInput | MemberAuditLogWhereInput[]
    OR?: MemberAuditLogWhereInput[]
    NOT?: MemberAuditLogWhereInput | MemberAuditLogWhereInput[]
    id?: IntFilter<"MemberAuditLog"> | number
    miembroId?: IntFilter<"MemberAuditLog"> | number
    usuarioId?: IntFilter<"MemberAuditLog"> | number
    cambios?: StringFilter<"MemberAuditLog"> | string
    valorAnterior?: StringNullableFilter<"MemberAuditLog"> | string | null
    valorNuevo?: StringNullableFilter<"MemberAuditLog"> | string | null
    fechaCambio?: DateTimeFilter<"MemberAuditLog"> | Date | string
    createdAt?: DateTimeFilter<"MemberAuditLog"> | Date | string
    miembro?: XOR<MiembroScalarRelationFilter, MiembroWhereInput>
  }

  export type MemberAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    miembroId?: SortOrder
    usuarioId?: SortOrder
    cambios?: SortOrder
    valorAnterior?: SortOrderInput | SortOrder
    valorNuevo?: SortOrderInput | SortOrder
    fechaCambio?: SortOrder
    createdAt?: SortOrder
    miembro?: MiembroOrderByWithRelationInput
  }

  export type MemberAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MemberAuditLogWhereInput | MemberAuditLogWhereInput[]
    OR?: MemberAuditLogWhereInput[]
    NOT?: MemberAuditLogWhereInput | MemberAuditLogWhereInput[]
    miembroId?: IntFilter<"MemberAuditLog"> | number
    usuarioId?: IntFilter<"MemberAuditLog"> | number
    cambios?: StringFilter<"MemberAuditLog"> | string
    valorAnterior?: StringNullableFilter<"MemberAuditLog"> | string | null
    valorNuevo?: StringNullableFilter<"MemberAuditLog"> | string | null
    fechaCambio?: DateTimeFilter<"MemberAuditLog"> | Date | string
    createdAt?: DateTimeFilter<"MemberAuditLog"> | Date | string
    miembro?: XOR<MiembroScalarRelationFilter, MiembroWhereInput>
  }, "id">

  export type MemberAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    miembroId?: SortOrder
    usuarioId?: SortOrder
    cambios?: SortOrder
    valorAnterior?: SortOrderInput | SortOrder
    valorNuevo?: SortOrderInput | SortOrder
    fechaCambio?: SortOrder
    createdAt?: SortOrder
    _count?: MemberAuditLogCountOrderByAggregateInput
    _avg?: MemberAuditLogAvgOrderByAggregateInput
    _max?: MemberAuditLogMaxOrderByAggregateInput
    _min?: MemberAuditLogMinOrderByAggregateInput
    _sum?: MemberAuditLogSumOrderByAggregateInput
  }

  export type MemberAuditLogScalarWhereWithAggregatesInput = {
    AND?: MemberAuditLogScalarWhereWithAggregatesInput | MemberAuditLogScalarWhereWithAggregatesInput[]
    OR?: MemberAuditLogScalarWhereWithAggregatesInput[]
    NOT?: MemberAuditLogScalarWhereWithAggregatesInput | MemberAuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MemberAuditLog"> | number
    miembroId?: IntWithAggregatesFilter<"MemberAuditLog"> | number
    usuarioId?: IntWithAggregatesFilter<"MemberAuditLog"> | number
    cambios?: StringWithAggregatesFilter<"MemberAuditLog"> | string
    valorAnterior?: StringNullableWithAggregatesFilter<"MemberAuditLog"> | string | null
    valorNuevo?: StringNullableWithAggregatesFilter<"MemberAuditLog"> | string | null
    fechaCambio?: DateTimeWithAggregatesFilter<"MemberAuditLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MemberAuditLog"> | Date | string
  }

  export type EntrenadorWhereInput = {
    AND?: EntrenadorWhereInput | EntrenadorWhereInput[]
    OR?: EntrenadorWhereInput[]
    NOT?: EntrenadorWhereInput | EntrenadorWhereInput[]
    id?: IntFilter<"Entrenador"> | number
    nombres?: StringFilter<"Entrenador"> | string
    apellidos?: StringFilter<"Entrenador"> | string
    documentoIdentidad?: StringFilter<"Entrenador"> | string
    correoInstitucional?: StringFilter<"Entrenador"> | string
    telefono?: StringNullableFilter<"Entrenador"> | string | null
    especialidad?: StringFilter<"Entrenador"> | string
    createdAt?: DateTimeFilter<"Entrenador"> | Date | string
    updatedAt?: DateTimeFilter<"Entrenador"> | Date | string
    disponibilidades?: TrainerAvailabilityListRelationFilter
    rutinas?: RutinaListRelationFilter
  }

  export type EntrenadorOrderByWithRelationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    correoInstitucional?: SortOrder
    telefono?: SortOrderInput | SortOrder
    especialidad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    disponibilidades?: TrainerAvailabilityOrderByRelationAggregateInput
    rutinas?: RutinaOrderByRelationAggregateInput
  }

  export type EntrenadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    documentoIdentidad?: string
    correoInstitucional?: string
    AND?: EntrenadorWhereInput | EntrenadorWhereInput[]
    OR?: EntrenadorWhereInput[]
    NOT?: EntrenadorWhereInput | EntrenadorWhereInput[]
    nombres?: StringFilter<"Entrenador"> | string
    apellidos?: StringFilter<"Entrenador"> | string
    telefono?: StringNullableFilter<"Entrenador"> | string | null
    especialidad?: StringFilter<"Entrenador"> | string
    createdAt?: DateTimeFilter<"Entrenador"> | Date | string
    updatedAt?: DateTimeFilter<"Entrenador"> | Date | string
    disponibilidades?: TrainerAvailabilityListRelationFilter
    rutinas?: RutinaListRelationFilter
  }, "id" | "documentoIdentidad" | "correoInstitucional">

  export type EntrenadorOrderByWithAggregationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    correoInstitucional?: SortOrder
    telefono?: SortOrderInput | SortOrder
    especialidad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EntrenadorCountOrderByAggregateInput
    _avg?: EntrenadorAvgOrderByAggregateInput
    _max?: EntrenadorMaxOrderByAggregateInput
    _min?: EntrenadorMinOrderByAggregateInput
    _sum?: EntrenadorSumOrderByAggregateInput
  }

  export type EntrenadorScalarWhereWithAggregatesInput = {
    AND?: EntrenadorScalarWhereWithAggregatesInput | EntrenadorScalarWhereWithAggregatesInput[]
    OR?: EntrenadorScalarWhereWithAggregatesInput[]
    NOT?: EntrenadorScalarWhereWithAggregatesInput | EntrenadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Entrenador"> | number
    nombres?: StringWithAggregatesFilter<"Entrenador"> | string
    apellidos?: StringWithAggregatesFilter<"Entrenador"> | string
    documentoIdentidad?: StringWithAggregatesFilter<"Entrenador"> | string
    correoInstitucional?: StringWithAggregatesFilter<"Entrenador"> | string
    telefono?: StringNullableWithAggregatesFilter<"Entrenador"> | string | null
    especialidad?: StringWithAggregatesFilter<"Entrenador"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Entrenador"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Entrenador"> | Date | string
  }

  export type TrainerAvailabilityWhereInput = {
    AND?: TrainerAvailabilityWhereInput | TrainerAvailabilityWhereInput[]
    OR?: TrainerAvailabilityWhereInput[]
    NOT?: TrainerAvailabilityWhereInput | TrainerAvailabilityWhereInput[]
    id?: IntFilter<"TrainerAvailability"> | number
    entrenadorId?: IntFilter<"TrainerAvailability"> | number
    diaSemana?: IntFilter<"TrainerAvailability"> | number
    horaInicio?: StringFilter<"TrainerAvailability"> | string
    horaFin?: StringFilter<"TrainerAvailability"> | string
    activo?: BoolFilter<"TrainerAvailability"> | boolean
    createdAt?: DateTimeFilter<"TrainerAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"TrainerAvailability"> | Date | string
    entrenador?: XOR<EntrenadorScalarRelationFilter, EntrenadorWhereInput>
  }

  export type TrainerAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    entrenadorId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    entrenador?: EntrenadorOrderByWithRelationInput
  }

  export type TrainerAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    entrenadorId_diaSemana_horaInicio_horaFin?: TrainerAvailabilityEntrenadorIdDiaSemanaHoraInicioHoraFinCompoundUniqueInput
    AND?: TrainerAvailabilityWhereInput | TrainerAvailabilityWhereInput[]
    OR?: TrainerAvailabilityWhereInput[]
    NOT?: TrainerAvailabilityWhereInput | TrainerAvailabilityWhereInput[]
    entrenadorId?: IntFilter<"TrainerAvailability"> | number
    diaSemana?: IntFilter<"TrainerAvailability"> | number
    horaInicio?: StringFilter<"TrainerAvailability"> | string
    horaFin?: StringFilter<"TrainerAvailability"> | string
    activo?: BoolFilter<"TrainerAvailability"> | boolean
    createdAt?: DateTimeFilter<"TrainerAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"TrainerAvailability"> | Date | string
    entrenador?: XOR<EntrenadorScalarRelationFilter, EntrenadorWhereInput>
  }, "id" | "entrenadorId_diaSemana_horaInicio_horaFin">

  export type TrainerAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    entrenadorId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TrainerAvailabilityCountOrderByAggregateInput
    _avg?: TrainerAvailabilityAvgOrderByAggregateInput
    _max?: TrainerAvailabilityMaxOrderByAggregateInput
    _min?: TrainerAvailabilityMinOrderByAggregateInput
    _sum?: TrainerAvailabilitySumOrderByAggregateInput
  }

  export type TrainerAvailabilityScalarWhereWithAggregatesInput = {
    AND?: TrainerAvailabilityScalarWhereWithAggregatesInput | TrainerAvailabilityScalarWhereWithAggregatesInput[]
    OR?: TrainerAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: TrainerAvailabilityScalarWhereWithAggregatesInput | TrainerAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TrainerAvailability"> | number
    entrenadorId?: IntWithAggregatesFilter<"TrainerAvailability"> | number
    diaSemana?: IntWithAggregatesFilter<"TrainerAvailability"> | number
    horaInicio?: StringWithAggregatesFilter<"TrainerAvailability"> | string
    horaFin?: StringWithAggregatesFilter<"TrainerAvailability"> | string
    activo?: BoolWithAggregatesFilter<"TrainerAvailability"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TrainerAvailability"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TrainerAvailability"> | Date | string
  }

  export type RutinaWhereInput = {
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    id?: IntFilter<"Rutina"> | number
    nombre?: StringFilter<"Rutina"> | string
    objetivo?: StringFilter<"Rutina"> | string
    miembroId?: IntFilter<"Rutina"> | number
    entrenadorId?: IntFilter<"Rutina"> | number
    diasEntrenamiento?: StringNullableListFilter<"Rutina">
    activo?: BoolFilter<"Rutina"> | boolean
    createdAt?: DateTimeFilter<"Rutina"> | Date | string
    updatedAt?: DateTimeFilter<"Rutina"> | Date | string
    miembro?: XOR<MiembroScalarRelationFilter, MiembroWhereInput>
    entrenador?: XOR<EntrenadorScalarRelationFilter, EntrenadorWhereInput>
    ejercicios?: RutinaEjercicioListRelationFilter
    historial?: RoutineHistoryListRelationFilter
  }

  export type RutinaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    objetivo?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
    diasEntrenamiento?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    miembro?: MiembroOrderByWithRelationInput
    entrenador?: EntrenadorOrderByWithRelationInput
    ejercicios?: RutinaEjercicioOrderByRelationAggregateInput
    historial?: RoutineHistoryOrderByRelationAggregateInput
  }

  export type RutinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    miembroId?: number
    AND?: RutinaWhereInput | RutinaWhereInput[]
    OR?: RutinaWhereInput[]
    NOT?: RutinaWhereInput | RutinaWhereInput[]
    nombre?: StringFilter<"Rutina"> | string
    objetivo?: StringFilter<"Rutina"> | string
    entrenadorId?: IntFilter<"Rutina"> | number
    diasEntrenamiento?: StringNullableListFilter<"Rutina">
    activo?: BoolFilter<"Rutina"> | boolean
    createdAt?: DateTimeFilter<"Rutina"> | Date | string
    updatedAt?: DateTimeFilter<"Rutina"> | Date | string
    miembro?: XOR<MiembroScalarRelationFilter, MiembroWhereInput>
    entrenador?: XOR<EntrenadorScalarRelationFilter, EntrenadorWhereInput>
    ejercicios?: RutinaEjercicioListRelationFilter
    historial?: RoutineHistoryListRelationFilter
  }, "id" | "miembroId">

  export type RutinaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    objetivo?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
    diasEntrenamiento?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RutinaCountOrderByAggregateInput
    _avg?: RutinaAvgOrderByAggregateInput
    _max?: RutinaMaxOrderByAggregateInput
    _min?: RutinaMinOrderByAggregateInput
    _sum?: RutinaSumOrderByAggregateInput
  }

  export type RutinaScalarWhereWithAggregatesInput = {
    AND?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    OR?: RutinaScalarWhereWithAggregatesInput[]
    NOT?: RutinaScalarWhereWithAggregatesInput | RutinaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rutina"> | number
    nombre?: StringWithAggregatesFilter<"Rutina"> | string
    objetivo?: StringWithAggregatesFilter<"Rutina"> | string
    miembroId?: IntWithAggregatesFilter<"Rutina"> | number
    entrenadorId?: IntWithAggregatesFilter<"Rutina"> | number
    diasEntrenamiento?: StringNullableListFilter<"Rutina">
    activo?: BoolWithAggregatesFilter<"Rutina"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Rutina"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rutina"> | Date | string
  }

  export type EjercicioWhereInput = {
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    id?: IntFilter<"Ejercicio"> | number
    nombre?: StringFilter<"Ejercicio"> | string
    descripcion?: StringNullableFilter<"Ejercicio"> | string | null
    createdAt?: DateTimeFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeFilter<"Ejercicio"> | Date | string
    rutinas?: RutinaEjercicioListRelationFilter
  }

  export type EjercicioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rutinas?: RutinaEjercicioOrderByRelationAggregateInput
  }

  export type EjercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: EjercicioWhereInput | EjercicioWhereInput[]
    OR?: EjercicioWhereInput[]
    NOT?: EjercicioWhereInput | EjercicioWhereInput[]
    descripcion?: StringNullableFilter<"Ejercicio"> | string | null
    createdAt?: DateTimeFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeFilter<"Ejercicio"> | Date | string
    rutinas?: RutinaEjercicioListRelationFilter
  }, "id" | "nombre">

  export type EjercicioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EjercicioCountOrderByAggregateInput
    _avg?: EjercicioAvgOrderByAggregateInput
    _max?: EjercicioMaxOrderByAggregateInput
    _min?: EjercicioMinOrderByAggregateInput
    _sum?: EjercicioSumOrderByAggregateInput
  }

  export type EjercicioScalarWhereWithAggregatesInput = {
    AND?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    OR?: EjercicioScalarWhereWithAggregatesInput[]
    NOT?: EjercicioScalarWhereWithAggregatesInput | EjercicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ejercicio"> | number
    nombre?: StringWithAggregatesFilter<"Ejercicio"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Ejercicio"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ejercicio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ejercicio"> | Date | string
  }

  export type RutinaEjercicioWhereInput = {
    AND?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    OR?: RutinaEjercicioWhereInput[]
    NOT?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    id?: IntFilter<"RutinaEjercicio"> | number
    rutinaId?: IntFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntFilter<"RutinaEjercicio"> | number
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: IntFilter<"RutinaEjercicio"> | number
    tiempoDescansoSeg?: IntFilter<"RutinaEjercicio"> | number
    orden?: IntFilter<"RutinaEjercicio"> | number
    createdAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    updatedAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }

  export type RutinaEjercicioOrderByWithRelationInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    tiempoDescansoSeg?: SortOrder
    orden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rutina?: RutinaOrderByWithRelationInput
    ejercicio?: EjercicioOrderByWithRelationInput
  }

  export type RutinaEjercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rutinaId_ejercicioId?: RutinaEjercicioRutinaIdEjercicioIdCompoundUniqueInput
    AND?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    OR?: RutinaEjercicioWhereInput[]
    NOT?: RutinaEjercicioWhereInput | RutinaEjercicioWhereInput[]
    rutinaId?: IntFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntFilter<"RutinaEjercicio"> | number
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: IntFilter<"RutinaEjercicio"> | number
    tiempoDescansoSeg?: IntFilter<"RutinaEjercicio"> | number
    orden?: IntFilter<"RutinaEjercicio"> | number
    createdAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    updatedAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
    ejercicio?: XOR<EjercicioScalarRelationFilter, EjercicioWhereInput>
  }, "id" | "rutinaId_ejercicioId">

  export type RutinaEjercicioOrderByWithAggregationInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    tiempoDescansoSeg?: SortOrder
    orden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RutinaEjercicioCountOrderByAggregateInput
    _avg?: RutinaEjercicioAvgOrderByAggregateInput
    _max?: RutinaEjercicioMaxOrderByAggregateInput
    _min?: RutinaEjercicioMinOrderByAggregateInput
    _sum?: RutinaEjercicioSumOrderByAggregateInput
  }

  export type RutinaEjercicioScalarWhereWithAggregatesInput = {
    AND?: RutinaEjercicioScalarWhereWithAggregatesInput | RutinaEjercicioScalarWhereWithAggregatesInput[]
    OR?: RutinaEjercicioScalarWhereWithAggregatesInput[]
    NOT?: RutinaEjercicioScalarWhereWithAggregatesInput | RutinaEjercicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    rutinaId?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    series?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    repeticiones?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    tiempoDescansoSeg?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    orden?: IntWithAggregatesFilter<"RutinaEjercicio"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RutinaEjercicio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RutinaEjercicio"> | Date | string
  }

  export type RoutineHistoryWhereInput = {
    AND?: RoutineHistoryWhereInput | RoutineHistoryWhereInput[]
    OR?: RoutineHistoryWhereInput[]
    NOT?: RoutineHistoryWhereInput | RoutineHistoryWhereInput[]
    id?: IntFilter<"RoutineHistory"> | number
    rutinaId?: IntFilter<"RoutineHistory"> | number
    entrenadorId?: IntNullableFilter<"RoutineHistory"> | number | null
    cambios?: StringFilter<"RoutineHistory"> | string
    version?: IntFilter<"RoutineHistory"> | number
    createdAt?: DateTimeFilter<"RoutineHistory"> | Date | string
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
  }

  export type RoutineHistoryOrderByWithRelationInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    entrenadorId?: SortOrderInput | SortOrder
    cambios?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    rutina?: RutinaOrderByWithRelationInput
  }

  export type RoutineHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoutineHistoryWhereInput | RoutineHistoryWhereInput[]
    OR?: RoutineHistoryWhereInput[]
    NOT?: RoutineHistoryWhereInput | RoutineHistoryWhereInput[]
    rutinaId?: IntFilter<"RoutineHistory"> | number
    entrenadorId?: IntNullableFilter<"RoutineHistory"> | number | null
    cambios?: StringFilter<"RoutineHistory"> | string
    version?: IntFilter<"RoutineHistory"> | number
    createdAt?: DateTimeFilter<"RoutineHistory"> | Date | string
    rutina?: XOR<RutinaScalarRelationFilter, RutinaWhereInput>
  }, "id">

  export type RoutineHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    entrenadorId?: SortOrderInput | SortOrder
    cambios?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
    _count?: RoutineHistoryCountOrderByAggregateInput
    _avg?: RoutineHistoryAvgOrderByAggregateInput
    _max?: RoutineHistoryMaxOrderByAggregateInput
    _min?: RoutineHistoryMinOrderByAggregateInput
    _sum?: RoutineHistorySumOrderByAggregateInput
  }

  export type RoutineHistoryScalarWhereWithAggregatesInput = {
    AND?: RoutineHistoryScalarWhereWithAggregatesInput | RoutineHistoryScalarWhereWithAggregatesInput[]
    OR?: RoutineHistoryScalarWhereWithAggregatesInput[]
    NOT?: RoutineHistoryScalarWhereWithAggregatesInput | RoutineHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoutineHistory"> | number
    rutinaId?: IntWithAggregatesFilter<"RoutineHistory"> | number
    entrenadorId?: IntNullableWithAggregatesFilter<"RoutineHistory"> | number | null
    cambios?: StringWithAggregatesFilter<"RoutineHistory"> | string
    version?: IntWithAggregatesFilter<"RoutineHistory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoutineHistory"> | Date | string
  }

  export type BodyMeasurementWhereInput = {
    AND?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    OR?: BodyMeasurementWhereInput[]
    NOT?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    id?: IntFilter<"BodyMeasurement"> | number
    miembroId?: IntFilter<"BodyMeasurement"> | number
    entrenadorId?: IntNullableFilter<"BodyMeasurement"> | number | null
    peso?: DecimalFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    talla?: DecimalFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    porcentajeGrasa?: DecimalFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    fechaMedicion?: DateTimeFilter<"BodyMeasurement"> | Date | string
    notas?: StringNullableFilter<"BodyMeasurement"> | string | null
    createdAt?: DateTimeFilter<"BodyMeasurement"> | Date | string
    updatedAt?: DateTimeFilter<"BodyMeasurement"> | Date | string
    miembro?: XOR<MiembroScalarRelationFilter, MiembroWhereInput>
  }

  export type BodyMeasurementOrderByWithRelationInput = {
    id?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrderInput | SortOrder
    peso?: SortOrder
    talla?: SortOrder
    porcentajeGrasa?: SortOrder
    fechaMedicion?: SortOrder
    notas?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    miembro?: MiembroOrderByWithRelationInput
  }

  export type BodyMeasurementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    OR?: BodyMeasurementWhereInput[]
    NOT?: BodyMeasurementWhereInput | BodyMeasurementWhereInput[]
    miembroId?: IntFilter<"BodyMeasurement"> | number
    entrenadorId?: IntNullableFilter<"BodyMeasurement"> | number | null
    peso?: DecimalFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    talla?: DecimalFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    porcentajeGrasa?: DecimalFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    fechaMedicion?: DateTimeFilter<"BodyMeasurement"> | Date | string
    notas?: StringNullableFilter<"BodyMeasurement"> | string | null
    createdAt?: DateTimeFilter<"BodyMeasurement"> | Date | string
    updatedAt?: DateTimeFilter<"BodyMeasurement"> | Date | string
    miembro?: XOR<MiembroScalarRelationFilter, MiembroWhereInput>
  }, "id">

  export type BodyMeasurementOrderByWithAggregationInput = {
    id?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrderInput | SortOrder
    peso?: SortOrder
    talla?: SortOrder
    porcentajeGrasa?: SortOrder
    fechaMedicion?: SortOrder
    notas?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BodyMeasurementCountOrderByAggregateInput
    _avg?: BodyMeasurementAvgOrderByAggregateInput
    _max?: BodyMeasurementMaxOrderByAggregateInput
    _min?: BodyMeasurementMinOrderByAggregateInput
    _sum?: BodyMeasurementSumOrderByAggregateInput
  }

  export type BodyMeasurementScalarWhereWithAggregatesInput = {
    AND?: BodyMeasurementScalarWhereWithAggregatesInput | BodyMeasurementScalarWhereWithAggregatesInput[]
    OR?: BodyMeasurementScalarWhereWithAggregatesInput[]
    NOT?: BodyMeasurementScalarWhereWithAggregatesInput | BodyMeasurementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BodyMeasurement"> | number
    miembroId?: IntWithAggregatesFilter<"BodyMeasurement"> | number
    entrenadorId?: IntNullableWithAggregatesFilter<"BodyMeasurement"> | number | null
    peso?: DecimalWithAggregatesFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    talla?: DecimalWithAggregatesFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    porcentajeGrasa?: DecimalWithAggregatesFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    fechaMedicion?: DateTimeWithAggregatesFilter<"BodyMeasurement"> | Date | string
    notas?: StringNullableWithAggregatesFilter<"BodyMeasurement"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BodyMeasurement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BodyMeasurement"> | Date | string
  }

  export type PlanMembresiaCreateInput = {
    nombre: string
    codigo: string
    duracionDias: number
    precio: Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaCreatebeneficiosInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    miembros?: MiembroCreateNestedManyWithoutPlanMembresiaInput
    historialCambios?: PlanHistoryCreateNestedManyWithoutPlanMembresiaInput
  }

  export type PlanMembresiaUncheckedCreateInput = {
    id?: number
    nombre: string
    codigo: string
    duracionDias: number
    precio: Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaCreatebeneficiosInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    miembros?: MiembroUncheckedCreateNestedManyWithoutPlanMembresiaInput
    historialCambios?: PlanHistoryUncheckedCreateNestedManyWithoutPlanMembresiaInput
  }

  export type PlanMembresiaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    duracionDias?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaUpdatebeneficiosInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroUpdateManyWithoutPlanMembresiaNestedInput
    historialCambios?: PlanHistoryUpdateManyWithoutPlanMembresiaNestedInput
  }

  export type PlanMembresiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    duracionDias?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaUpdatebeneficiosInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroUncheckedUpdateManyWithoutPlanMembresiaNestedInput
    historialCambios?: PlanHistoryUncheckedUpdateManyWithoutPlanMembresiaNestedInput
  }

  export type PlanMembresiaCreateManyInput = {
    id?: number
    nombre: string
    codigo: string
    duracionDias: number
    precio: Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaCreatebeneficiosInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanMembresiaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    duracionDias?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaUpdatebeneficiosInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanMembresiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    duracionDias?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaUpdatebeneficiosInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanHistoryCreateInput = {
    precioAnterior: Decimal | DecimalJsLike | number | string
    precioNuevo: Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryCreatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryCreatebeneficiosNuevosInput | string[]
    usuarioId: number
    fechaCambio?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    planMembresia: PlanMembresiaCreateNestedOneWithoutHistorialCambiosInput
  }

  export type PlanHistoryUncheckedCreateInput = {
    id?: number
    planMembresiId: number
    precioAnterior: Decimal | DecimalJsLike | number | string
    precioNuevo: Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryCreatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryCreatebeneficiosNuevosInput | string[]
    usuarioId: number
    fechaCambio?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanHistoryUpdateInput = {
    precioAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioNuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryUpdatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryUpdatebeneficiosNuevosInput | string[]
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planMembresia?: PlanMembresiaUpdateOneRequiredWithoutHistorialCambiosNestedInput
  }

  export type PlanHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    planMembresiId?: IntFieldUpdateOperationsInput | number
    precioAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioNuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryUpdatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryUpdatebeneficiosNuevosInput | string[]
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanHistoryCreateManyInput = {
    id?: number
    planMembresiId: number
    precioAnterior: Decimal | DecimalJsLike | number | string
    precioNuevo: Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryCreatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryCreatebeneficiosNuevosInput | string[]
    usuarioId: number
    fechaCambio?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanHistoryUpdateManyMutationInput = {
    precioAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioNuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryUpdatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryUpdatebeneficiosNuevosInput | string[]
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    planMembresiId?: IntFieldUpdateOperationsInput | number
    precioAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioNuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryUpdatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryUpdatebeneficiosNuevosInput | string[]
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiembroCreateInput = {
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    planMembresia: PlanMembresiaCreateNestedOneWithoutMiembrosInput
    rutinas?: RutinaCreateNestedManyWithoutMiembroInput
    medidasCorporales?: BodyMeasurementCreateNestedManyWithoutMiembroInput
    auditLog?: MemberAuditLogCreateNestedManyWithoutMiembroInput
  }

  export type MiembroUncheckedCreateInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    planMembresiaId: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutMiembroInput
    medidasCorporales?: BodyMeasurementUncheckedCreateNestedManyWithoutMiembroInput
    auditLog?: MemberAuditLogUncheckedCreateNestedManyWithoutMiembroInput
  }

  export type MiembroUpdateInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planMembresia?: PlanMembresiaUpdateOneRequiredWithoutMiembrosNestedInput
    rutinas?: RutinaUpdateManyWithoutMiembroNestedInput
    medidasCorporales?: BodyMeasurementUpdateManyWithoutMiembroNestedInput
    auditLog?: MemberAuditLogUpdateManyWithoutMiembroNestedInput
  }

  export type MiembroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    planMembresiaId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaUncheckedUpdateManyWithoutMiembroNestedInput
    medidasCorporales?: BodyMeasurementUncheckedUpdateManyWithoutMiembroNestedInput
    auditLog?: MemberAuditLogUncheckedUpdateManyWithoutMiembroNestedInput
  }

  export type MiembroCreateManyInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    planMembresiaId: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MiembroUpdateManyMutationInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiembroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    planMembresiaId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberAuditLogCreateInput = {
    usuarioId: number
    cambios: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fechaCambio?: Date | string
    createdAt?: Date | string
    miembro: MiembroCreateNestedOneWithoutAuditLogInput
  }

  export type MemberAuditLogUncheckedCreateInput = {
    id?: number
    miembroId: number
    usuarioId: number
    cambios: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fechaCambio?: Date | string
    createdAt?: Date | string
  }

  export type MemberAuditLogUpdateInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    cambios?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembro?: MiembroUpdateOneRequiredWithoutAuditLogNestedInput
  }

  export type MemberAuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    miembroId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cambios?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberAuditLogCreateManyInput = {
    id?: number
    miembroId: number
    usuarioId: number
    cambios: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fechaCambio?: Date | string
    createdAt?: Date | string
  }

  export type MemberAuditLogUpdateManyMutationInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    cambios?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberAuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    miembroId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cambios?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrenadorCreateInput = {
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoInstitucional: string
    telefono?: string | null
    especialidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disponibilidades?: TrainerAvailabilityCreateNestedManyWithoutEntrenadorInput
    rutinas?: RutinaCreateNestedManyWithoutEntrenadorInput
  }

  export type EntrenadorUncheckedCreateInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoInstitucional: string
    telefono?: string | null
    especialidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disponibilidades?: TrainerAvailabilityUncheckedCreateNestedManyWithoutEntrenadorInput
    rutinas?: RutinaUncheckedCreateNestedManyWithoutEntrenadorInput
  }

  export type EntrenadorUpdateInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoInstitucional?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disponibilidades?: TrainerAvailabilityUpdateManyWithoutEntrenadorNestedInput
    rutinas?: RutinaUpdateManyWithoutEntrenadorNestedInput
  }

  export type EntrenadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoInstitucional?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disponibilidades?: TrainerAvailabilityUncheckedUpdateManyWithoutEntrenadorNestedInput
    rutinas?: RutinaUncheckedUpdateManyWithoutEntrenadorNestedInput
  }

  export type EntrenadorCreateManyInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoInstitucional: string
    telefono?: string | null
    especialidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntrenadorUpdateManyMutationInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoInstitucional?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntrenadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoInstitucional?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAvailabilityCreateInput = {
    diaSemana: number
    horaInicio: string
    horaFin: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    entrenador: EntrenadorCreateNestedOneWithoutDisponibilidadesInput
  }

  export type TrainerAvailabilityUncheckedCreateInput = {
    id?: number
    entrenadorId: number
    diaSemana: number
    horaInicio: string
    horaFin: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainerAvailabilityUpdateInput = {
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entrenador?: EntrenadorUpdateOneRequiredWithoutDisponibilidadesNestedInput
  }

  export type TrainerAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenadorId?: IntFieldUpdateOperationsInput | number
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAvailabilityCreateManyInput = {
    id?: number
    entrenadorId: number
    diaSemana: number
    horaInicio: string
    horaFin: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainerAvailabilityUpdateManyMutationInput = {
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenadorId?: IntFieldUpdateOperationsInput | number
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaCreateInput = {
    nombre: string
    objetivo: string
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    miembro: MiembroCreateNestedOneWithoutRutinasInput
    entrenador: EntrenadorCreateNestedOneWithoutRutinasInput
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
    historial?: RoutineHistoryCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateInput = {
    id?: number
    nombre: string
    objetivo: string
    miembroId: number
    entrenadorId: number
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
    historial?: RoutineHistoryUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembro?: MiembroUpdateOneRequiredWithoutRutinasNestedInput
    entrenador?: EntrenadorUpdateOneRequiredWithoutRutinasNestedInput
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
    historial?: RoutineHistoryUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    miembroId?: IntFieldUpdateOperationsInput | number
    entrenadorId?: IntFieldUpdateOperationsInput | number
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
    historial?: RoutineHistoryUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaCreateManyInput = {
    id?: number
    nombre: string
    objetivo: string
    miembroId: number
    entrenadorId: number
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    miembroId?: IntFieldUpdateOperationsInput | number
    entrenadorId?: IntFieldUpdateOperationsInput | number
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioCreateInput = {
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaEjercicioCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput
  }

  export type EjercicioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaEjercicioUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput
  }

  export type EjercicioCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EjercicioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateInput = {
    series: number
    repeticiones: number
    tiempoDescansoSeg: number
    orden: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rutina: RutinaCreateNestedOneWithoutEjerciciosInput
    ejercicio: EjercicioCreateNestedOneWithoutRutinasInput
  }

  export type RutinaEjercicioUncheckedCreateInput = {
    id?: number
    rutinaId: number
    ejercicioId: number
    series: number
    repeticiones: number
    tiempoDescansoSeg: number
    orden: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaEjercicioUpdateInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    tiempoDescansoSeg?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutina?: RutinaUpdateOneRequiredWithoutEjerciciosNestedInput
    ejercicio?: EjercicioUpdateOneRequiredWithoutRutinasNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    tiempoDescansoSeg?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateManyInput = {
    id?: number
    rutinaId: number
    ejercicioId: number
    series: number
    repeticiones: number
    tiempoDescansoSeg: number
    orden: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaEjercicioUpdateManyMutationInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    tiempoDescansoSeg?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    tiempoDescansoSeg?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHistoryCreateInput = {
    entrenadorId?: number | null
    cambios: string
    version: number
    createdAt?: Date | string
    rutina: RutinaCreateNestedOneWithoutHistorialInput
  }

  export type RoutineHistoryUncheckedCreateInput = {
    id?: number
    rutinaId: number
    entrenadorId?: number | null
    cambios: string
    version: number
    createdAt?: Date | string
  }

  export type RoutineHistoryUpdateInput = {
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    cambios?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutina?: RutinaUpdateOneRequiredWithoutHistorialNestedInput
  }

  export type RoutineHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    cambios?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHistoryCreateManyInput = {
    id?: number
    rutinaId: number
    entrenadorId?: number | null
    cambios: string
    version: number
    createdAt?: Date | string
  }

  export type RoutineHistoryUpdateManyMutationInput = {
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    cambios?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    cambios?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMeasurementCreateInput = {
    entrenadorId?: number | null
    peso: Decimal | DecimalJsLike | number | string
    talla: Decimal | DecimalJsLike | number | string
    porcentajeGrasa: Decimal | DecimalJsLike | number | string
    fechaMedicion: Date | string
    notas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    miembro: MiembroCreateNestedOneWithoutMedidasCorporalesInput
  }

  export type BodyMeasurementUncheckedCreateInput = {
    id?: number
    miembroId: number
    entrenadorId?: number | null
    peso: Decimal | DecimalJsLike | number | string
    talla: Decimal | DecimalJsLike | number | string
    porcentajeGrasa: Decimal | DecimalJsLike | number | string
    fechaMedicion: Date | string
    notas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BodyMeasurementUpdateInput = {
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    talla?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentajeGrasa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaMedicion?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembro?: MiembroUpdateOneRequiredWithoutMedidasCorporalesNestedInput
  }

  export type BodyMeasurementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    miembroId?: IntFieldUpdateOperationsInput | number
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    talla?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentajeGrasa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaMedicion?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMeasurementCreateManyInput = {
    id?: number
    miembroId: number
    entrenadorId?: number | null
    peso: Decimal | DecimalJsLike | number | string
    talla: Decimal | DecimalJsLike | number | string
    porcentajeGrasa: Decimal | DecimalJsLike | number | string
    fechaMedicion: Date | string
    notas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BodyMeasurementUpdateManyMutationInput = {
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    talla?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentajeGrasa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaMedicion?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMeasurementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    miembroId?: IntFieldUpdateOperationsInput | number
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    talla?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentajeGrasa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaMedicion?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type MiembroListRelationFilter = {
    every?: MiembroWhereInput
    some?: MiembroWhereInput
    none?: MiembroWhereInput
  }

  export type PlanHistoryListRelationFilter = {
    every?: PlanHistoryWhereInput
    some?: PlanHistoryWhereInput
    none?: PlanHistoryWhereInput
  }

  export type MiembroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanMembresiaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    duracionDias?: SortOrder
    precio?: SortOrder
    beneficios?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMembresiaAvgOrderByAggregateInput = {
    id?: SortOrder
    duracionDias?: SortOrder
    precio?: SortOrder
  }

  export type PlanMembresiaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    duracionDias?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMembresiaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    codigo?: SortOrder
    duracionDias?: SortOrder
    precio?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMembresiaSumOrderByAggregateInput = {
    id?: SortOrder
    duracionDias?: SortOrder
    precio?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PlanMembresiaScalarRelationFilter = {
    is?: PlanMembresiaWhereInput
    isNot?: PlanMembresiaWhereInput
  }

  export type PlanHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    planMembresiId?: SortOrder
    precioAnterior?: SortOrder
    precioNuevo?: SortOrder
    beneficiosAnteriores?: SortOrder
    beneficiosNuevos?: SortOrder
    usuarioId?: SortOrder
    fechaCambio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    planMembresiId?: SortOrder
    precioAnterior?: SortOrder
    precioNuevo?: SortOrder
    usuarioId?: SortOrder
  }

  export type PlanHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    planMembresiId?: SortOrder
    precioAnterior?: SortOrder
    precioNuevo?: SortOrder
    usuarioId?: SortOrder
    fechaCambio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    planMembresiId?: SortOrder
    precioAnterior?: SortOrder
    precioNuevo?: SortOrder
    usuarioId?: SortOrder
    fechaCambio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanHistorySumOrderByAggregateInput = {
    id?: SortOrder
    planMembresiId?: SortOrder
    precioAnterior?: SortOrder
    precioNuevo?: SortOrder
    usuarioId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RutinaListRelationFilter = {
    every?: RutinaWhereInput
    some?: RutinaWhereInput
    none?: RutinaWhereInput
  }

  export type BodyMeasurementListRelationFilter = {
    every?: BodyMeasurementWhereInput
    some?: BodyMeasurementWhereInput
    none?: BodyMeasurementWhereInput
  }

  export type MemberAuditLogListRelationFilter = {
    every?: MemberAuditLogWhereInput
    some?: MemberAuditLogWhereInput
    none?: MemberAuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RutinaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BodyMeasurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberAuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MiembroCountOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    correoPersonal?: SortOrder
    telefono?: SortOrder
    fechaNacimiento?: SortOrder
    planMembresiaId?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MiembroAvgOrderByAggregateInput = {
    id?: SortOrder
    planMembresiaId?: SortOrder
  }

  export type MiembroMaxOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    correoPersonal?: SortOrder
    telefono?: SortOrder
    fechaNacimiento?: SortOrder
    planMembresiaId?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MiembroMinOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    correoPersonal?: SortOrder
    telefono?: SortOrder
    fechaNacimiento?: SortOrder
    planMembresiaId?: SortOrder
    fechaInicio?: SortOrder
    fechaVencimiento?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MiembroSumOrderByAggregateInput = {
    id?: SortOrder
    planMembresiaId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type MiembroScalarRelationFilter = {
    is?: MiembroWhereInput
    isNot?: MiembroWhereInput
  }

  export type MemberAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    usuarioId?: SortOrder
    cambios?: SortOrder
    valorAnterior?: SortOrder
    valorNuevo?: SortOrder
    fechaCambio?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberAuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    usuarioId?: SortOrder
  }

  export type MemberAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    usuarioId?: SortOrder
    cambios?: SortOrder
    valorAnterior?: SortOrder
    valorNuevo?: SortOrder
    fechaCambio?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    usuarioId?: SortOrder
    cambios?: SortOrder
    valorAnterior?: SortOrder
    valorNuevo?: SortOrder
    fechaCambio?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberAuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    usuarioId?: SortOrder
  }

  export type TrainerAvailabilityListRelationFilter = {
    every?: TrainerAvailabilityWhereInput
    some?: TrainerAvailabilityWhereInput
    none?: TrainerAvailabilityWhereInput
  }

  export type TrainerAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntrenadorCountOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    correoInstitucional?: SortOrder
    telefono?: SortOrder
    especialidad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntrenadorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EntrenadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    correoInstitucional?: SortOrder
    telefono?: SortOrder
    especialidad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntrenadorMinOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    documentoIdentidad?: SortOrder
    correoInstitucional?: SortOrder
    telefono?: SortOrder
    especialidad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntrenadorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EntrenadorScalarRelationFilter = {
    is?: EntrenadorWhereInput
    isNot?: EntrenadorWhereInput
  }

  export type TrainerAvailabilityEntrenadorIdDiaSemanaHoraInicioHoraFinCompoundUniqueInput = {
    entrenadorId: number
    diaSemana: number
    horaInicio: string
    horaFin: string
  }

  export type TrainerAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    entrenadorId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainerAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    entrenadorId?: SortOrder
    diaSemana?: SortOrder
  }

  export type TrainerAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    entrenadorId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainerAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    entrenadorId?: SortOrder
    diaSemana?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TrainerAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    entrenadorId?: SortOrder
    diaSemana?: SortOrder
  }

  export type RutinaEjercicioListRelationFilter = {
    every?: RutinaEjercicioWhereInput
    some?: RutinaEjercicioWhereInput
    none?: RutinaEjercicioWhereInput
  }

  export type RoutineHistoryListRelationFilter = {
    every?: RoutineHistoryWhereInput
    some?: RoutineHistoryWhereInput
    none?: RoutineHistoryWhereInput
  }

  export type RutinaEjercicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoutineHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RutinaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    objetivo?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
    diasEntrenamiento?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaAvgOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
  }

  export type RutinaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    objetivo?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    objetivo?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaSumOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
  }

  export type EjercicioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EjercicioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EjercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EjercicioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EjercicioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RutinaScalarRelationFilter = {
    is?: RutinaWhereInput
    isNot?: RutinaWhereInput
  }

  export type EjercicioScalarRelationFilter = {
    is?: EjercicioWhereInput
    isNot?: EjercicioWhereInput
  }

  export type RutinaEjercicioRutinaIdEjercicioIdCompoundUniqueInput = {
    rutinaId: number
    ejercicioId: number
  }

  export type RutinaEjercicioCountOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    tiempoDescansoSeg?: SortOrder
    orden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaEjercicioAvgOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    tiempoDescansoSeg?: SortOrder
    orden?: SortOrder
  }

  export type RutinaEjercicioMaxOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    tiempoDescansoSeg?: SortOrder
    orden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaEjercicioMinOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    tiempoDescansoSeg?: SortOrder
    orden?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RutinaEjercicioSumOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    ejercicioId?: SortOrder
    series?: SortOrder
    repeticiones?: SortOrder
    tiempoDescansoSeg?: SortOrder
    orden?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RoutineHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    entrenadorId?: SortOrder
    cambios?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type RoutineHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    entrenadorId?: SortOrder
    version?: SortOrder
  }

  export type RoutineHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    entrenadorId?: SortOrder
    cambios?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type RoutineHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    entrenadorId?: SortOrder
    cambios?: SortOrder
    version?: SortOrder
    createdAt?: SortOrder
  }

  export type RoutineHistorySumOrderByAggregateInput = {
    id?: SortOrder
    rutinaId?: SortOrder
    entrenadorId?: SortOrder
    version?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BodyMeasurementCountOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
    peso?: SortOrder
    talla?: SortOrder
    porcentajeGrasa?: SortOrder
    fechaMedicion?: SortOrder
    notas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BodyMeasurementAvgOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
    peso?: SortOrder
    talla?: SortOrder
    porcentajeGrasa?: SortOrder
  }

  export type BodyMeasurementMaxOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
    peso?: SortOrder
    talla?: SortOrder
    porcentajeGrasa?: SortOrder
    fechaMedicion?: SortOrder
    notas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BodyMeasurementMinOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
    peso?: SortOrder
    talla?: SortOrder
    porcentajeGrasa?: SortOrder
    fechaMedicion?: SortOrder
    notas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BodyMeasurementSumOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
    entrenadorId?: SortOrder
    peso?: SortOrder
    talla?: SortOrder
    porcentajeGrasa?: SortOrder
  }

  export type PlanMembresiaCreatebeneficiosInput = {
    set: string[]
  }

  export type MiembroCreateNestedManyWithoutPlanMembresiaInput = {
    create?: XOR<MiembroCreateWithoutPlanMembresiaInput, MiembroUncheckedCreateWithoutPlanMembresiaInput> | MiembroCreateWithoutPlanMembresiaInput[] | MiembroUncheckedCreateWithoutPlanMembresiaInput[]
    connectOrCreate?: MiembroCreateOrConnectWithoutPlanMembresiaInput | MiembroCreateOrConnectWithoutPlanMembresiaInput[]
    createMany?: MiembroCreateManyPlanMembresiaInputEnvelope
    connect?: MiembroWhereUniqueInput | MiembroWhereUniqueInput[]
  }

  export type PlanHistoryCreateNestedManyWithoutPlanMembresiaInput = {
    create?: XOR<PlanHistoryCreateWithoutPlanMembresiaInput, PlanHistoryUncheckedCreateWithoutPlanMembresiaInput> | PlanHistoryCreateWithoutPlanMembresiaInput[] | PlanHistoryUncheckedCreateWithoutPlanMembresiaInput[]
    connectOrCreate?: PlanHistoryCreateOrConnectWithoutPlanMembresiaInput | PlanHistoryCreateOrConnectWithoutPlanMembresiaInput[]
    createMany?: PlanHistoryCreateManyPlanMembresiaInputEnvelope
    connect?: PlanHistoryWhereUniqueInput | PlanHistoryWhereUniqueInput[]
  }

  export type MiembroUncheckedCreateNestedManyWithoutPlanMembresiaInput = {
    create?: XOR<MiembroCreateWithoutPlanMembresiaInput, MiembroUncheckedCreateWithoutPlanMembresiaInput> | MiembroCreateWithoutPlanMembresiaInput[] | MiembroUncheckedCreateWithoutPlanMembresiaInput[]
    connectOrCreate?: MiembroCreateOrConnectWithoutPlanMembresiaInput | MiembroCreateOrConnectWithoutPlanMembresiaInput[]
    createMany?: MiembroCreateManyPlanMembresiaInputEnvelope
    connect?: MiembroWhereUniqueInput | MiembroWhereUniqueInput[]
  }

  export type PlanHistoryUncheckedCreateNestedManyWithoutPlanMembresiaInput = {
    create?: XOR<PlanHistoryCreateWithoutPlanMembresiaInput, PlanHistoryUncheckedCreateWithoutPlanMembresiaInput> | PlanHistoryCreateWithoutPlanMembresiaInput[] | PlanHistoryUncheckedCreateWithoutPlanMembresiaInput[]
    connectOrCreate?: PlanHistoryCreateOrConnectWithoutPlanMembresiaInput | PlanHistoryCreateOrConnectWithoutPlanMembresiaInput[]
    createMany?: PlanHistoryCreateManyPlanMembresiaInputEnvelope
    connect?: PlanHistoryWhereUniqueInput | PlanHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PlanMembresiaUpdatebeneficiosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MiembroUpdateManyWithoutPlanMembresiaNestedInput = {
    create?: XOR<MiembroCreateWithoutPlanMembresiaInput, MiembroUncheckedCreateWithoutPlanMembresiaInput> | MiembroCreateWithoutPlanMembresiaInput[] | MiembroUncheckedCreateWithoutPlanMembresiaInput[]
    connectOrCreate?: MiembroCreateOrConnectWithoutPlanMembresiaInput | MiembroCreateOrConnectWithoutPlanMembresiaInput[]
    upsert?: MiembroUpsertWithWhereUniqueWithoutPlanMembresiaInput | MiembroUpsertWithWhereUniqueWithoutPlanMembresiaInput[]
    createMany?: MiembroCreateManyPlanMembresiaInputEnvelope
    set?: MiembroWhereUniqueInput | MiembroWhereUniqueInput[]
    disconnect?: MiembroWhereUniqueInput | MiembroWhereUniqueInput[]
    delete?: MiembroWhereUniqueInput | MiembroWhereUniqueInput[]
    connect?: MiembroWhereUniqueInput | MiembroWhereUniqueInput[]
    update?: MiembroUpdateWithWhereUniqueWithoutPlanMembresiaInput | MiembroUpdateWithWhereUniqueWithoutPlanMembresiaInput[]
    updateMany?: MiembroUpdateManyWithWhereWithoutPlanMembresiaInput | MiembroUpdateManyWithWhereWithoutPlanMembresiaInput[]
    deleteMany?: MiembroScalarWhereInput | MiembroScalarWhereInput[]
  }

  export type PlanHistoryUpdateManyWithoutPlanMembresiaNestedInput = {
    create?: XOR<PlanHistoryCreateWithoutPlanMembresiaInput, PlanHistoryUncheckedCreateWithoutPlanMembresiaInput> | PlanHistoryCreateWithoutPlanMembresiaInput[] | PlanHistoryUncheckedCreateWithoutPlanMembresiaInput[]
    connectOrCreate?: PlanHistoryCreateOrConnectWithoutPlanMembresiaInput | PlanHistoryCreateOrConnectWithoutPlanMembresiaInput[]
    upsert?: PlanHistoryUpsertWithWhereUniqueWithoutPlanMembresiaInput | PlanHistoryUpsertWithWhereUniqueWithoutPlanMembresiaInput[]
    createMany?: PlanHistoryCreateManyPlanMembresiaInputEnvelope
    set?: PlanHistoryWhereUniqueInput | PlanHistoryWhereUniqueInput[]
    disconnect?: PlanHistoryWhereUniqueInput | PlanHistoryWhereUniqueInput[]
    delete?: PlanHistoryWhereUniqueInput | PlanHistoryWhereUniqueInput[]
    connect?: PlanHistoryWhereUniqueInput | PlanHistoryWhereUniqueInput[]
    update?: PlanHistoryUpdateWithWhereUniqueWithoutPlanMembresiaInput | PlanHistoryUpdateWithWhereUniqueWithoutPlanMembresiaInput[]
    updateMany?: PlanHistoryUpdateManyWithWhereWithoutPlanMembresiaInput | PlanHistoryUpdateManyWithWhereWithoutPlanMembresiaInput[]
    deleteMany?: PlanHistoryScalarWhereInput | PlanHistoryScalarWhereInput[]
  }

  export type MiembroUncheckedUpdateManyWithoutPlanMembresiaNestedInput = {
    create?: XOR<MiembroCreateWithoutPlanMembresiaInput, MiembroUncheckedCreateWithoutPlanMembresiaInput> | MiembroCreateWithoutPlanMembresiaInput[] | MiembroUncheckedCreateWithoutPlanMembresiaInput[]
    connectOrCreate?: MiembroCreateOrConnectWithoutPlanMembresiaInput | MiembroCreateOrConnectWithoutPlanMembresiaInput[]
    upsert?: MiembroUpsertWithWhereUniqueWithoutPlanMembresiaInput | MiembroUpsertWithWhereUniqueWithoutPlanMembresiaInput[]
    createMany?: MiembroCreateManyPlanMembresiaInputEnvelope
    set?: MiembroWhereUniqueInput | MiembroWhereUniqueInput[]
    disconnect?: MiembroWhereUniqueInput | MiembroWhereUniqueInput[]
    delete?: MiembroWhereUniqueInput | MiembroWhereUniqueInput[]
    connect?: MiembroWhereUniqueInput | MiembroWhereUniqueInput[]
    update?: MiembroUpdateWithWhereUniqueWithoutPlanMembresiaInput | MiembroUpdateWithWhereUniqueWithoutPlanMembresiaInput[]
    updateMany?: MiembroUpdateManyWithWhereWithoutPlanMembresiaInput | MiembroUpdateManyWithWhereWithoutPlanMembresiaInput[]
    deleteMany?: MiembroScalarWhereInput | MiembroScalarWhereInput[]
  }

  export type PlanHistoryUncheckedUpdateManyWithoutPlanMembresiaNestedInput = {
    create?: XOR<PlanHistoryCreateWithoutPlanMembresiaInput, PlanHistoryUncheckedCreateWithoutPlanMembresiaInput> | PlanHistoryCreateWithoutPlanMembresiaInput[] | PlanHistoryUncheckedCreateWithoutPlanMembresiaInput[]
    connectOrCreate?: PlanHistoryCreateOrConnectWithoutPlanMembresiaInput | PlanHistoryCreateOrConnectWithoutPlanMembresiaInput[]
    upsert?: PlanHistoryUpsertWithWhereUniqueWithoutPlanMembresiaInput | PlanHistoryUpsertWithWhereUniqueWithoutPlanMembresiaInput[]
    createMany?: PlanHistoryCreateManyPlanMembresiaInputEnvelope
    set?: PlanHistoryWhereUniqueInput | PlanHistoryWhereUniqueInput[]
    disconnect?: PlanHistoryWhereUniqueInput | PlanHistoryWhereUniqueInput[]
    delete?: PlanHistoryWhereUniqueInput | PlanHistoryWhereUniqueInput[]
    connect?: PlanHistoryWhereUniqueInput | PlanHistoryWhereUniqueInput[]
    update?: PlanHistoryUpdateWithWhereUniqueWithoutPlanMembresiaInput | PlanHistoryUpdateWithWhereUniqueWithoutPlanMembresiaInput[]
    updateMany?: PlanHistoryUpdateManyWithWhereWithoutPlanMembresiaInput | PlanHistoryUpdateManyWithWhereWithoutPlanMembresiaInput[]
    deleteMany?: PlanHistoryScalarWhereInput | PlanHistoryScalarWhereInput[]
  }

  export type PlanHistoryCreatebeneficiosAnterioresInput = {
    set: string[]
  }

  export type PlanHistoryCreatebeneficiosNuevosInput = {
    set: string[]
  }

  export type PlanMembresiaCreateNestedOneWithoutHistorialCambiosInput = {
    create?: XOR<PlanMembresiaCreateWithoutHistorialCambiosInput, PlanMembresiaUncheckedCreateWithoutHistorialCambiosInput>
    connectOrCreate?: PlanMembresiaCreateOrConnectWithoutHistorialCambiosInput
    connect?: PlanMembresiaWhereUniqueInput
  }

  export type PlanHistoryUpdatebeneficiosAnterioresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlanHistoryUpdatebeneficiosNuevosInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlanMembresiaUpdateOneRequiredWithoutHistorialCambiosNestedInput = {
    create?: XOR<PlanMembresiaCreateWithoutHistorialCambiosInput, PlanMembresiaUncheckedCreateWithoutHistorialCambiosInput>
    connectOrCreate?: PlanMembresiaCreateOrConnectWithoutHistorialCambiosInput
    upsert?: PlanMembresiaUpsertWithoutHistorialCambiosInput
    connect?: PlanMembresiaWhereUniqueInput
    update?: XOR<XOR<PlanMembresiaUpdateToOneWithWhereWithoutHistorialCambiosInput, PlanMembresiaUpdateWithoutHistorialCambiosInput>, PlanMembresiaUncheckedUpdateWithoutHistorialCambiosInput>
  }

  export type PlanMembresiaCreateNestedOneWithoutMiembrosInput = {
    create?: XOR<PlanMembresiaCreateWithoutMiembrosInput, PlanMembresiaUncheckedCreateWithoutMiembrosInput>
    connectOrCreate?: PlanMembresiaCreateOrConnectWithoutMiembrosInput
    connect?: PlanMembresiaWhereUniqueInput
  }

  export type RutinaCreateNestedManyWithoutMiembroInput = {
    create?: XOR<RutinaCreateWithoutMiembroInput, RutinaUncheckedCreateWithoutMiembroInput> | RutinaCreateWithoutMiembroInput[] | RutinaUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutMiembroInput | RutinaCreateOrConnectWithoutMiembroInput[]
    createMany?: RutinaCreateManyMiembroInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type BodyMeasurementCreateNestedManyWithoutMiembroInput = {
    create?: XOR<BodyMeasurementCreateWithoutMiembroInput, BodyMeasurementUncheckedCreateWithoutMiembroInput> | BodyMeasurementCreateWithoutMiembroInput[] | BodyMeasurementUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutMiembroInput | BodyMeasurementCreateOrConnectWithoutMiembroInput[]
    createMany?: BodyMeasurementCreateManyMiembroInputEnvelope
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
  }

  export type MemberAuditLogCreateNestedManyWithoutMiembroInput = {
    create?: XOR<MemberAuditLogCreateWithoutMiembroInput, MemberAuditLogUncheckedCreateWithoutMiembroInput> | MemberAuditLogCreateWithoutMiembroInput[] | MemberAuditLogUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: MemberAuditLogCreateOrConnectWithoutMiembroInput | MemberAuditLogCreateOrConnectWithoutMiembroInput[]
    createMany?: MemberAuditLogCreateManyMiembroInputEnvelope
    connect?: MemberAuditLogWhereUniqueInput | MemberAuditLogWhereUniqueInput[]
  }

  export type RutinaUncheckedCreateNestedManyWithoutMiembroInput = {
    create?: XOR<RutinaCreateWithoutMiembroInput, RutinaUncheckedCreateWithoutMiembroInput> | RutinaCreateWithoutMiembroInput[] | RutinaUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutMiembroInput | RutinaCreateOrConnectWithoutMiembroInput[]
    createMany?: RutinaCreateManyMiembroInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type BodyMeasurementUncheckedCreateNestedManyWithoutMiembroInput = {
    create?: XOR<BodyMeasurementCreateWithoutMiembroInput, BodyMeasurementUncheckedCreateWithoutMiembroInput> | BodyMeasurementCreateWithoutMiembroInput[] | BodyMeasurementUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutMiembroInput | BodyMeasurementCreateOrConnectWithoutMiembroInput[]
    createMany?: BodyMeasurementCreateManyMiembroInputEnvelope
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
  }

  export type MemberAuditLogUncheckedCreateNestedManyWithoutMiembroInput = {
    create?: XOR<MemberAuditLogCreateWithoutMiembroInput, MemberAuditLogUncheckedCreateWithoutMiembroInput> | MemberAuditLogCreateWithoutMiembroInput[] | MemberAuditLogUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: MemberAuditLogCreateOrConnectWithoutMiembroInput | MemberAuditLogCreateOrConnectWithoutMiembroInput[]
    createMany?: MemberAuditLogCreateManyMiembroInputEnvelope
    connect?: MemberAuditLogWhereUniqueInput | MemberAuditLogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PlanMembresiaUpdateOneRequiredWithoutMiembrosNestedInput = {
    create?: XOR<PlanMembresiaCreateWithoutMiembrosInput, PlanMembresiaUncheckedCreateWithoutMiembrosInput>
    connectOrCreate?: PlanMembresiaCreateOrConnectWithoutMiembrosInput
    upsert?: PlanMembresiaUpsertWithoutMiembrosInput
    connect?: PlanMembresiaWhereUniqueInput
    update?: XOR<XOR<PlanMembresiaUpdateToOneWithWhereWithoutMiembrosInput, PlanMembresiaUpdateWithoutMiembrosInput>, PlanMembresiaUncheckedUpdateWithoutMiembrosInput>
  }

  export type RutinaUpdateManyWithoutMiembroNestedInput = {
    create?: XOR<RutinaCreateWithoutMiembroInput, RutinaUncheckedCreateWithoutMiembroInput> | RutinaCreateWithoutMiembroInput[] | RutinaUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutMiembroInput | RutinaCreateOrConnectWithoutMiembroInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutMiembroInput | RutinaUpsertWithWhereUniqueWithoutMiembroInput[]
    createMany?: RutinaCreateManyMiembroInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutMiembroInput | RutinaUpdateWithWhereUniqueWithoutMiembroInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutMiembroInput | RutinaUpdateManyWithWhereWithoutMiembroInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type BodyMeasurementUpdateManyWithoutMiembroNestedInput = {
    create?: XOR<BodyMeasurementCreateWithoutMiembroInput, BodyMeasurementUncheckedCreateWithoutMiembroInput> | BodyMeasurementCreateWithoutMiembroInput[] | BodyMeasurementUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutMiembroInput | BodyMeasurementCreateOrConnectWithoutMiembroInput[]
    upsert?: BodyMeasurementUpsertWithWhereUniqueWithoutMiembroInput | BodyMeasurementUpsertWithWhereUniqueWithoutMiembroInput[]
    createMany?: BodyMeasurementCreateManyMiembroInputEnvelope
    set?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    disconnect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    delete?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    update?: BodyMeasurementUpdateWithWhereUniqueWithoutMiembroInput | BodyMeasurementUpdateWithWhereUniqueWithoutMiembroInput[]
    updateMany?: BodyMeasurementUpdateManyWithWhereWithoutMiembroInput | BodyMeasurementUpdateManyWithWhereWithoutMiembroInput[]
    deleteMany?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
  }

  export type MemberAuditLogUpdateManyWithoutMiembroNestedInput = {
    create?: XOR<MemberAuditLogCreateWithoutMiembroInput, MemberAuditLogUncheckedCreateWithoutMiembroInput> | MemberAuditLogCreateWithoutMiembroInput[] | MemberAuditLogUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: MemberAuditLogCreateOrConnectWithoutMiembroInput | MemberAuditLogCreateOrConnectWithoutMiembroInput[]
    upsert?: MemberAuditLogUpsertWithWhereUniqueWithoutMiembroInput | MemberAuditLogUpsertWithWhereUniqueWithoutMiembroInput[]
    createMany?: MemberAuditLogCreateManyMiembroInputEnvelope
    set?: MemberAuditLogWhereUniqueInput | MemberAuditLogWhereUniqueInput[]
    disconnect?: MemberAuditLogWhereUniqueInput | MemberAuditLogWhereUniqueInput[]
    delete?: MemberAuditLogWhereUniqueInput | MemberAuditLogWhereUniqueInput[]
    connect?: MemberAuditLogWhereUniqueInput | MemberAuditLogWhereUniqueInput[]
    update?: MemberAuditLogUpdateWithWhereUniqueWithoutMiembroInput | MemberAuditLogUpdateWithWhereUniqueWithoutMiembroInput[]
    updateMany?: MemberAuditLogUpdateManyWithWhereWithoutMiembroInput | MemberAuditLogUpdateManyWithWhereWithoutMiembroInput[]
    deleteMany?: MemberAuditLogScalarWhereInput | MemberAuditLogScalarWhereInput[]
  }

  export type RutinaUncheckedUpdateManyWithoutMiembroNestedInput = {
    create?: XOR<RutinaCreateWithoutMiembroInput, RutinaUncheckedCreateWithoutMiembroInput> | RutinaCreateWithoutMiembroInput[] | RutinaUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutMiembroInput | RutinaCreateOrConnectWithoutMiembroInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutMiembroInput | RutinaUpsertWithWhereUniqueWithoutMiembroInput[]
    createMany?: RutinaCreateManyMiembroInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutMiembroInput | RutinaUpdateWithWhereUniqueWithoutMiembroInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutMiembroInput | RutinaUpdateManyWithWhereWithoutMiembroInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type BodyMeasurementUncheckedUpdateManyWithoutMiembroNestedInput = {
    create?: XOR<BodyMeasurementCreateWithoutMiembroInput, BodyMeasurementUncheckedCreateWithoutMiembroInput> | BodyMeasurementCreateWithoutMiembroInput[] | BodyMeasurementUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: BodyMeasurementCreateOrConnectWithoutMiembroInput | BodyMeasurementCreateOrConnectWithoutMiembroInput[]
    upsert?: BodyMeasurementUpsertWithWhereUniqueWithoutMiembroInput | BodyMeasurementUpsertWithWhereUniqueWithoutMiembroInput[]
    createMany?: BodyMeasurementCreateManyMiembroInputEnvelope
    set?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    disconnect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    delete?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    connect?: BodyMeasurementWhereUniqueInput | BodyMeasurementWhereUniqueInput[]
    update?: BodyMeasurementUpdateWithWhereUniqueWithoutMiembroInput | BodyMeasurementUpdateWithWhereUniqueWithoutMiembroInput[]
    updateMany?: BodyMeasurementUpdateManyWithWhereWithoutMiembroInput | BodyMeasurementUpdateManyWithWhereWithoutMiembroInput[]
    deleteMany?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
  }

  export type MemberAuditLogUncheckedUpdateManyWithoutMiembroNestedInput = {
    create?: XOR<MemberAuditLogCreateWithoutMiembroInput, MemberAuditLogUncheckedCreateWithoutMiembroInput> | MemberAuditLogCreateWithoutMiembroInput[] | MemberAuditLogUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: MemberAuditLogCreateOrConnectWithoutMiembroInput | MemberAuditLogCreateOrConnectWithoutMiembroInput[]
    upsert?: MemberAuditLogUpsertWithWhereUniqueWithoutMiembroInput | MemberAuditLogUpsertWithWhereUniqueWithoutMiembroInput[]
    createMany?: MemberAuditLogCreateManyMiembroInputEnvelope
    set?: MemberAuditLogWhereUniqueInput | MemberAuditLogWhereUniqueInput[]
    disconnect?: MemberAuditLogWhereUniqueInput | MemberAuditLogWhereUniqueInput[]
    delete?: MemberAuditLogWhereUniqueInput | MemberAuditLogWhereUniqueInput[]
    connect?: MemberAuditLogWhereUniqueInput | MemberAuditLogWhereUniqueInput[]
    update?: MemberAuditLogUpdateWithWhereUniqueWithoutMiembroInput | MemberAuditLogUpdateWithWhereUniqueWithoutMiembroInput[]
    updateMany?: MemberAuditLogUpdateManyWithWhereWithoutMiembroInput | MemberAuditLogUpdateManyWithWhereWithoutMiembroInput[]
    deleteMany?: MemberAuditLogScalarWhereInput | MemberAuditLogScalarWhereInput[]
  }

  export type MiembroCreateNestedOneWithoutAuditLogInput = {
    create?: XOR<MiembroCreateWithoutAuditLogInput, MiembroUncheckedCreateWithoutAuditLogInput>
    connectOrCreate?: MiembroCreateOrConnectWithoutAuditLogInput
    connect?: MiembroWhereUniqueInput
  }

  export type MiembroUpdateOneRequiredWithoutAuditLogNestedInput = {
    create?: XOR<MiembroCreateWithoutAuditLogInput, MiembroUncheckedCreateWithoutAuditLogInput>
    connectOrCreate?: MiembroCreateOrConnectWithoutAuditLogInput
    upsert?: MiembroUpsertWithoutAuditLogInput
    connect?: MiembroWhereUniqueInput
    update?: XOR<XOR<MiembroUpdateToOneWithWhereWithoutAuditLogInput, MiembroUpdateWithoutAuditLogInput>, MiembroUncheckedUpdateWithoutAuditLogInput>
  }

  export type TrainerAvailabilityCreateNestedManyWithoutEntrenadorInput = {
    create?: XOR<TrainerAvailabilityCreateWithoutEntrenadorInput, TrainerAvailabilityUncheckedCreateWithoutEntrenadorInput> | TrainerAvailabilityCreateWithoutEntrenadorInput[] | TrainerAvailabilityUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: TrainerAvailabilityCreateOrConnectWithoutEntrenadorInput | TrainerAvailabilityCreateOrConnectWithoutEntrenadorInput[]
    createMany?: TrainerAvailabilityCreateManyEntrenadorInputEnvelope
    connect?: TrainerAvailabilityWhereUniqueInput | TrainerAvailabilityWhereUniqueInput[]
  }

  export type RutinaCreateNestedManyWithoutEntrenadorInput = {
    create?: XOR<RutinaCreateWithoutEntrenadorInput, RutinaUncheckedCreateWithoutEntrenadorInput> | RutinaCreateWithoutEntrenadorInput[] | RutinaUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutEntrenadorInput | RutinaCreateOrConnectWithoutEntrenadorInput[]
    createMany?: RutinaCreateManyEntrenadorInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type TrainerAvailabilityUncheckedCreateNestedManyWithoutEntrenadorInput = {
    create?: XOR<TrainerAvailabilityCreateWithoutEntrenadorInput, TrainerAvailabilityUncheckedCreateWithoutEntrenadorInput> | TrainerAvailabilityCreateWithoutEntrenadorInput[] | TrainerAvailabilityUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: TrainerAvailabilityCreateOrConnectWithoutEntrenadorInput | TrainerAvailabilityCreateOrConnectWithoutEntrenadorInput[]
    createMany?: TrainerAvailabilityCreateManyEntrenadorInputEnvelope
    connect?: TrainerAvailabilityWhereUniqueInput | TrainerAvailabilityWhereUniqueInput[]
  }

  export type RutinaUncheckedCreateNestedManyWithoutEntrenadorInput = {
    create?: XOR<RutinaCreateWithoutEntrenadorInput, RutinaUncheckedCreateWithoutEntrenadorInput> | RutinaCreateWithoutEntrenadorInput[] | RutinaUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutEntrenadorInput | RutinaCreateOrConnectWithoutEntrenadorInput[]
    createMany?: RutinaCreateManyEntrenadorInputEnvelope
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
  }

  export type TrainerAvailabilityUpdateManyWithoutEntrenadorNestedInput = {
    create?: XOR<TrainerAvailabilityCreateWithoutEntrenadorInput, TrainerAvailabilityUncheckedCreateWithoutEntrenadorInput> | TrainerAvailabilityCreateWithoutEntrenadorInput[] | TrainerAvailabilityUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: TrainerAvailabilityCreateOrConnectWithoutEntrenadorInput | TrainerAvailabilityCreateOrConnectWithoutEntrenadorInput[]
    upsert?: TrainerAvailabilityUpsertWithWhereUniqueWithoutEntrenadorInput | TrainerAvailabilityUpsertWithWhereUniqueWithoutEntrenadorInput[]
    createMany?: TrainerAvailabilityCreateManyEntrenadorInputEnvelope
    set?: TrainerAvailabilityWhereUniqueInput | TrainerAvailabilityWhereUniqueInput[]
    disconnect?: TrainerAvailabilityWhereUniqueInput | TrainerAvailabilityWhereUniqueInput[]
    delete?: TrainerAvailabilityWhereUniqueInput | TrainerAvailabilityWhereUniqueInput[]
    connect?: TrainerAvailabilityWhereUniqueInput | TrainerAvailabilityWhereUniqueInput[]
    update?: TrainerAvailabilityUpdateWithWhereUniqueWithoutEntrenadorInput | TrainerAvailabilityUpdateWithWhereUniqueWithoutEntrenadorInput[]
    updateMany?: TrainerAvailabilityUpdateManyWithWhereWithoutEntrenadorInput | TrainerAvailabilityUpdateManyWithWhereWithoutEntrenadorInput[]
    deleteMany?: TrainerAvailabilityScalarWhereInput | TrainerAvailabilityScalarWhereInput[]
  }

  export type RutinaUpdateManyWithoutEntrenadorNestedInput = {
    create?: XOR<RutinaCreateWithoutEntrenadorInput, RutinaUncheckedCreateWithoutEntrenadorInput> | RutinaCreateWithoutEntrenadorInput[] | RutinaUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutEntrenadorInput | RutinaCreateOrConnectWithoutEntrenadorInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutEntrenadorInput | RutinaUpsertWithWhereUniqueWithoutEntrenadorInput[]
    createMany?: RutinaCreateManyEntrenadorInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutEntrenadorInput | RutinaUpdateWithWhereUniqueWithoutEntrenadorInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutEntrenadorInput | RutinaUpdateManyWithWhereWithoutEntrenadorInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type TrainerAvailabilityUncheckedUpdateManyWithoutEntrenadorNestedInput = {
    create?: XOR<TrainerAvailabilityCreateWithoutEntrenadorInput, TrainerAvailabilityUncheckedCreateWithoutEntrenadorInput> | TrainerAvailabilityCreateWithoutEntrenadorInput[] | TrainerAvailabilityUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: TrainerAvailabilityCreateOrConnectWithoutEntrenadorInput | TrainerAvailabilityCreateOrConnectWithoutEntrenadorInput[]
    upsert?: TrainerAvailabilityUpsertWithWhereUniqueWithoutEntrenadorInput | TrainerAvailabilityUpsertWithWhereUniqueWithoutEntrenadorInput[]
    createMany?: TrainerAvailabilityCreateManyEntrenadorInputEnvelope
    set?: TrainerAvailabilityWhereUniqueInput | TrainerAvailabilityWhereUniqueInput[]
    disconnect?: TrainerAvailabilityWhereUniqueInput | TrainerAvailabilityWhereUniqueInput[]
    delete?: TrainerAvailabilityWhereUniqueInput | TrainerAvailabilityWhereUniqueInput[]
    connect?: TrainerAvailabilityWhereUniqueInput | TrainerAvailabilityWhereUniqueInput[]
    update?: TrainerAvailabilityUpdateWithWhereUniqueWithoutEntrenadorInput | TrainerAvailabilityUpdateWithWhereUniqueWithoutEntrenadorInput[]
    updateMany?: TrainerAvailabilityUpdateManyWithWhereWithoutEntrenadorInput | TrainerAvailabilityUpdateManyWithWhereWithoutEntrenadorInput[]
    deleteMany?: TrainerAvailabilityScalarWhereInput | TrainerAvailabilityScalarWhereInput[]
  }

  export type RutinaUncheckedUpdateManyWithoutEntrenadorNestedInput = {
    create?: XOR<RutinaCreateWithoutEntrenadorInput, RutinaUncheckedCreateWithoutEntrenadorInput> | RutinaCreateWithoutEntrenadorInput[] | RutinaUncheckedCreateWithoutEntrenadorInput[]
    connectOrCreate?: RutinaCreateOrConnectWithoutEntrenadorInput | RutinaCreateOrConnectWithoutEntrenadorInput[]
    upsert?: RutinaUpsertWithWhereUniqueWithoutEntrenadorInput | RutinaUpsertWithWhereUniqueWithoutEntrenadorInput[]
    createMany?: RutinaCreateManyEntrenadorInputEnvelope
    set?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    disconnect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    delete?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    connect?: RutinaWhereUniqueInput | RutinaWhereUniqueInput[]
    update?: RutinaUpdateWithWhereUniqueWithoutEntrenadorInput | RutinaUpdateWithWhereUniqueWithoutEntrenadorInput[]
    updateMany?: RutinaUpdateManyWithWhereWithoutEntrenadorInput | RutinaUpdateManyWithWhereWithoutEntrenadorInput[]
    deleteMany?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
  }

  export type EntrenadorCreateNestedOneWithoutDisponibilidadesInput = {
    create?: XOR<EntrenadorCreateWithoutDisponibilidadesInput, EntrenadorUncheckedCreateWithoutDisponibilidadesInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutDisponibilidadesInput
    connect?: EntrenadorWhereUniqueInput
  }

  export type EntrenadorUpdateOneRequiredWithoutDisponibilidadesNestedInput = {
    create?: XOR<EntrenadorCreateWithoutDisponibilidadesInput, EntrenadorUncheckedCreateWithoutDisponibilidadesInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutDisponibilidadesInput
    upsert?: EntrenadorUpsertWithoutDisponibilidadesInput
    connect?: EntrenadorWhereUniqueInput
    update?: XOR<XOR<EntrenadorUpdateToOneWithWhereWithoutDisponibilidadesInput, EntrenadorUpdateWithoutDisponibilidadesInput>, EntrenadorUncheckedUpdateWithoutDisponibilidadesInput>
  }

  export type RutinaCreatediasEntrenamientoInput = {
    set: string[]
  }

  export type MiembroCreateNestedOneWithoutRutinasInput = {
    create?: XOR<MiembroCreateWithoutRutinasInput, MiembroUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: MiembroCreateOrConnectWithoutRutinasInput
    connect?: MiembroWhereUniqueInput
  }

  export type EntrenadorCreateNestedOneWithoutRutinasInput = {
    create?: XOR<EntrenadorCreateWithoutRutinasInput, EntrenadorUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutRutinasInput
    connect?: EntrenadorWhereUniqueInput
  }

  export type RutinaEjercicioCreateNestedManyWithoutRutinaInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type RoutineHistoryCreateNestedManyWithoutRutinaInput = {
    create?: XOR<RoutineHistoryCreateWithoutRutinaInput, RoutineHistoryUncheckedCreateWithoutRutinaInput> | RoutineHistoryCreateWithoutRutinaInput[] | RoutineHistoryUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RoutineHistoryCreateOrConnectWithoutRutinaInput | RoutineHistoryCreateOrConnectWithoutRutinaInput[]
    createMany?: RoutineHistoryCreateManyRutinaInputEnvelope
    connect?: RoutineHistoryWhereUniqueInput | RoutineHistoryWhereUniqueInput[]
  }

  export type RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type RoutineHistoryUncheckedCreateNestedManyWithoutRutinaInput = {
    create?: XOR<RoutineHistoryCreateWithoutRutinaInput, RoutineHistoryUncheckedCreateWithoutRutinaInput> | RoutineHistoryCreateWithoutRutinaInput[] | RoutineHistoryUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RoutineHistoryCreateOrConnectWithoutRutinaInput | RoutineHistoryCreateOrConnectWithoutRutinaInput[]
    createMany?: RoutineHistoryCreateManyRutinaInputEnvelope
    connect?: RoutineHistoryWhereUniqueInput | RoutineHistoryWhereUniqueInput[]
  }

  export type RutinaUpdatediasEntrenamientoInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MiembroUpdateOneRequiredWithoutRutinasNestedInput = {
    create?: XOR<MiembroCreateWithoutRutinasInput, MiembroUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: MiembroCreateOrConnectWithoutRutinasInput
    upsert?: MiembroUpsertWithoutRutinasInput
    connect?: MiembroWhereUniqueInput
    update?: XOR<XOR<MiembroUpdateToOneWithWhereWithoutRutinasInput, MiembroUpdateWithoutRutinasInput>, MiembroUncheckedUpdateWithoutRutinasInput>
  }

  export type EntrenadorUpdateOneRequiredWithoutRutinasNestedInput = {
    create?: XOR<EntrenadorCreateWithoutRutinasInput, EntrenadorUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: EntrenadorCreateOrConnectWithoutRutinasInput
    upsert?: EntrenadorUpsertWithoutRutinasInput
    connect?: EntrenadorWhereUniqueInput
    update?: XOR<XOR<EntrenadorUpdateToOneWithWhereWithoutRutinasInput, EntrenadorUpdateWithoutRutinasInput>, EntrenadorUncheckedUpdateWithoutRutinasInput>
  }

  export type RutinaEjercicioUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput | RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type RoutineHistoryUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<RoutineHistoryCreateWithoutRutinaInput, RoutineHistoryUncheckedCreateWithoutRutinaInput> | RoutineHistoryCreateWithoutRutinaInput[] | RoutineHistoryUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RoutineHistoryCreateOrConnectWithoutRutinaInput | RoutineHistoryCreateOrConnectWithoutRutinaInput[]
    upsert?: RoutineHistoryUpsertWithWhereUniqueWithoutRutinaInput | RoutineHistoryUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: RoutineHistoryCreateManyRutinaInputEnvelope
    set?: RoutineHistoryWhereUniqueInput | RoutineHistoryWhereUniqueInput[]
    disconnect?: RoutineHistoryWhereUniqueInput | RoutineHistoryWhereUniqueInput[]
    delete?: RoutineHistoryWhereUniqueInput | RoutineHistoryWhereUniqueInput[]
    connect?: RoutineHistoryWhereUniqueInput | RoutineHistoryWhereUniqueInput[]
    update?: RoutineHistoryUpdateWithWhereUniqueWithoutRutinaInput | RoutineHistoryUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: RoutineHistoryUpdateManyWithWhereWithoutRutinaInput | RoutineHistoryUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: RoutineHistoryScalarWhereInput | RoutineHistoryScalarWhereInput[]
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput> | RutinaEjercicioCreateWithoutRutinaInput[] | RutinaEjercicioUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutRutinaInput | RutinaEjercicioCreateOrConnectWithoutRutinaInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: RutinaEjercicioCreateManyRutinaInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput | RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput | RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type RoutineHistoryUncheckedUpdateManyWithoutRutinaNestedInput = {
    create?: XOR<RoutineHistoryCreateWithoutRutinaInput, RoutineHistoryUncheckedCreateWithoutRutinaInput> | RoutineHistoryCreateWithoutRutinaInput[] | RoutineHistoryUncheckedCreateWithoutRutinaInput[]
    connectOrCreate?: RoutineHistoryCreateOrConnectWithoutRutinaInput | RoutineHistoryCreateOrConnectWithoutRutinaInput[]
    upsert?: RoutineHistoryUpsertWithWhereUniqueWithoutRutinaInput | RoutineHistoryUpsertWithWhereUniqueWithoutRutinaInput[]
    createMany?: RoutineHistoryCreateManyRutinaInputEnvelope
    set?: RoutineHistoryWhereUniqueInput | RoutineHistoryWhereUniqueInput[]
    disconnect?: RoutineHistoryWhereUniqueInput | RoutineHistoryWhereUniqueInput[]
    delete?: RoutineHistoryWhereUniqueInput | RoutineHistoryWhereUniqueInput[]
    connect?: RoutineHistoryWhereUniqueInput | RoutineHistoryWhereUniqueInput[]
    update?: RoutineHistoryUpdateWithWhereUniqueWithoutRutinaInput | RoutineHistoryUpdateWithWhereUniqueWithoutRutinaInput[]
    updateMany?: RoutineHistoryUpdateManyWithWhereWithoutRutinaInput | RoutineHistoryUpdateManyWithWhereWithoutRutinaInput[]
    deleteMany?: RoutineHistoryScalarWhereInput | RoutineHistoryScalarWhereInput[]
  }

  export type RutinaEjercicioCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type RutinaEjercicioUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
  }

  export type RutinaEjercicioUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput | RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput> | RutinaEjercicioCreateWithoutEjercicioInput[] | RutinaEjercicioUncheckedCreateWithoutEjercicioInput[]
    connectOrCreate?: RutinaEjercicioCreateOrConnectWithoutEjercicioInput | RutinaEjercicioCreateOrConnectWithoutEjercicioInput[]
    upsert?: RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput[]
    createMany?: RutinaEjercicioCreateManyEjercicioInputEnvelope
    set?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    disconnect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    delete?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    connect?: RutinaEjercicioWhereUniqueInput | RutinaEjercicioWhereUniqueInput[]
    update?: RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput | RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput[]
    updateMany?: RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput | RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput[]
    deleteMany?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
  }

  export type RutinaCreateNestedOneWithoutEjerciciosInput = {
    create?: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutEjerciciosInput
    connect?: RutinaWhereUniqueInput
  }

  export type EjercicioCreateNestedOneWithoutRutinasInput = {
    create?: XOR<EjercicioCreateWithoutRutinasInput, EjercicioUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRutinasInput
    connect?: EjercicioWhereUniqueInput
  }

  export type RutinaUpdateOneRequiredWithoutEjerciciosNestedInput = {
    create?: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutEjerciciosInput
    upsert?: RutinaUpsertWithoutEjerciciosInput
    connect?: RutinaWhereUniqueInput
    update?: XOR<XOR<RutinaUpdateToOneWithWhereWithoutEjerciciosInput, RutinaUpdateWithoutEjerciciosInput>, RutinaUncheckedUpdateWithoutEjerciciosInput>
  }

  export type EjercicioUpdateOneRequiredWithoutRutinasNestedInput = {
    create?: XOR<EjercicioCreateWithoutRutinasInput, EjercicioUncheckedCreateWithoutRutinasInput>
    connectOrCreate?: EjercicioCreateOrConnectWithoutRutinasInput
    upsert?: EjercicioUpsertWithoutRutinasInput
    connect?: EjercicioWhereUniqueInput
    update?: XOR<XOR<EjercicioUpdateToOneWithWhereWithoutRutinasInput, EjercicioUpdateWithoutRutinasInput>, EjercicioUncheckedUpdateWithoutRutinasInput>
  }

  export type RutinaCreateNestedOneWithoutHistorialInput = {
    create?: XOR<RutinaCreateWithoutHistorialInput, RutinaUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutHistorialInput
    connect?: RutinaWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RutinaUpdateOneRequiredWithoutHistorialNestedInput = {
    create?: XOR<RutinaCreateWithoutHistorialInput, RutinaUncheckedCreateWithoutHistorialInput>
    connectOrCreate?: RutinaCreateOrConnectWithoutHistorialInput
    upsert?: RutinaUpsertWithoutHistorialInput
    connect?: RutinaWhereUniqueInput
    update?: XOR<XOR<RutinaUpdateToOneWithWhereWithoutHistorialInput, RutinaUpdateWithoutHistorialInput>, RutinaUncheckedUpdateWithoutHistorialInput>
  }

  export type MiembroCreateNestedOneWithoutMedidasCorporalesInput = {
    create?: XOR<MiembroCreateWithoutMedidasCorporalesInput, MiembroUncheckedCreateWithoutMedidasCorporalesInput>
    connectOrCreate?: MiembroCreateOrConnectWithoutMedidasCorporalesInput
    connect?: MiembroWhereUniqueInput
  }

  export type MiembroUpdateOneRequiredWithoutMedidasCorporalesNestedInput = {
    create?: XOR<MiembroCreateWithoutMedidasCorporalesInput, MiembroUncheckedCreateWithoutMedidasCorporalesInput>
    connectOrCreate?: MiembroCreateOrConnectWithoutMedidasCorporalesInput
    upsert?: MiembroUpsertWithoutMedidasCorporalesInput
    connect?: MiembroWhereUniqueInput
    update?: XOR<XOR<MiembroUpdateToOneWithWhereWithoutMedidasCorporalesInput, MiembroUpdateWithoutMedidasCorporalesInput>, MiembroUncheckedUpdateWithoutMedidasCorporalesInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MiembroCreateWithoutPlanMembresiaInput = {
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaCreateNestedManyWithoutMiembroInput
    medidasCorporales?: BodyMeasurementCreateNestedManyWithoutMiembroInput
    auditLog?: MemberAuditLogCreateNestedManyWithoutMiembroInput
  }

  export type MiembroUncheckedCreateWithoutPlanMembresiaInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutMiembroInput
    medidasCorporales?: BodyMeasurementUncheckedCreateNestedManyWithoutMiembroInput
    auditLog?: MemberAuditLogUncheckedCreateNestedManyWithoutMiembroInput
  }

  export type MiembroCreateOrConnectWithoutPlanMembresiaInput = {
    where: MiembroWhereUniqueInput
    create: XOR<MiembroCreateWithoutPlanMembresiaInput, MiembroUncheckedCreateWithoutPlanMembresiaInput>
  }

  export type MiembroCreateManyPlanMembresiaInputEnvelope = {
    data: MiembroCreateManyPlanMembresiaInput | MiembroCreateManyPlanMembresiaInput[]
    skipDuplicates?: boolean
  }

  export type PlanHistoryCreateWithoutPlanMembresiaInput = {
    precioAnterior: Decimal | DecimalJsLike | number | string
    precioNuevo: Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryCreatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryCreatebeneficiosNuevosInput | string[]
    usuarioId: number
    fechaCambio?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanHistoryUncheckedCreateWithoutPlanMembresiaInput = {
    id?: number
    precioAnterior: Decimal | DecimalJsLike | number | string
    precioNuevo: Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryCreatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryCreatebeneficiosNuevosInput | string[]
    usuarioId: number
    fechaCambio?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanHistoryCreateOrConnectWithoutPlanMembresiaInput = {
    where: PlanHistoryWhereUniqueInput
    create: XOR<PlanHistoryCreateWithoutPlanMembresiaInput, PlanHistoryUncheckedCreateWithoutPlanMembresiaInput>
  }

  export type PlanHistoryCreateManyPlanMembresiaInputEnvelope = {
    data: PlanHistoryCreateManyPlanMembresiaInput | PlanHistoryCreateManyPlanMembresiaInput[]
    skipDuplicates?: boolean
  }

  export type MiembroUpsertWithWhereUniqueWithoutPlanMembresiaInput = {
    where: MiembroWhereUniqueInput
    update: XOR<MiembroUpdateWithoutPlanMembresiaInput, MiembroUncheckedUpdateWithoutPlanMembresiaInput>
    create: XOR<MiembroCreateWithoutPlanMembresiaInput, MiembroUncheckedCreateWithoutPlanMembresiaInput>
  }

  export type MiembroUpdateWithWhereUniqueWithoutPlanMembresiaInput = {
    where: MiembroWhereUniqueInput
    data: XOR<MiembroUpdateWithoutPlanMembresiaInput, MiembroUncheckedUpdateWithoutPlanMembresiaInput>
  }

  export type MiembroUpdateManyWithWhereWithoutPlanMembresiaInput = {
    where: MiembroScalarWhereInput
    data: XOR<MiembroUpdateManyMutationInput, MiembroUncheckedUpdateManyWithoutPlanMembresiaInput>
  }

  export type MiembroScalarWhereInput = {
    AND?: MiembroScalarWhereInput | MiembroScalarWhereInput[]
    OR?: MiembroScalarWhereInput[]
    NOT?: MiembroScalarWhereInput | MiembroScalarWhereInput[]
    id?: IntFilter<"Miembro"> | number
    nombres?: StringFilter<"Miembro"> | string
    apellidos?: StringFilter<"Miembro"> | string
    documentoIdentidad?: StringFilter<"Miembro"> | string
    correoPersonal?: StringFilter<"Miembro"> | string
    telefono?: StringNullableFilter<"Miembro"> | string | null
    fechaNacimiento?: DateTimeFilter<"Miembro"> | Date | string
    planMembresiaId?: IntFilter<"Miembro"> | number
    fechaInicio?: DateTimeFilter<"Miembro"> | Date | string
    fechaVencimiento?: DateTimeFilter<"Miembro"> | Date | string
    activo?: BoolFilter<"Miembro"> | boolean
    createdAt?: DateTimeFilter<"Miembro"> | Date | string
    updatedAt?: DateTimeFilter<"Miembro"> | Date | string
  }

  export type PlanHistoryUpsertWithWhereUniqueWithoutPlanMembresiaInput = {
    where: PlanHistoryWhereUniqueInput
    update: XOR<PlanHistoryUpdateWithoutPlanMembresiaInput, PlanHistoryUncheckedUpdateWithoutPlanMembresiaInput>
    create: XOR<PlanHistoryCreateWithoutPlanMembresiaInput, PlanHistoryUncheckedCreateWithoutPlanMembresiaInput>
  }

  export type PlanHistoryUpdateWithWhereUniqueWithoutPlanMembresiaInput = {
    where: PlanHistoryWhereUniqueInput
    data: XOR<PlanHistoryUpdateWithoutPlanMembresiaInput, PlanHistoryUncheckedUpdateWithoutPlanMembresiaInput>
  }

  export type PlanHistoryUpdateManyWithWhereWithoutPlanMembresiaInput = {
    where: PlanHistoryScalarWhereInput
    data: XOR<PlanHistoryUpdateManyMutationInput, PlanHistoryUncheckedUpdateManyWithoutPlanMembresiaInput>
  }

  export type PlanHistoryScalarWhereInput = {
    AND?: PlanHistoryScalarWhereInput | PlanHistoryScalarWhereInput[]
    OR?: PlanHistoryScalarWhereInput[]
    NOT?: PlanHistoryScalarWhereInput | PlanHistoryScalarWhereInput[]
    id?: IntFilter<"PlanHistory"> | number
    planMembresiId?: IntFilter<"PlanHistory"> | number
    precioAnterior?: DecimalFilter<"PlanHistory"> | Decimal | DecimalJsLike | number | string
    precioNuevo?: DecimalFilter<"PlanHistory"> | Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: StringNullableListFilter<"PlanHistory">
    beneficiosNuevos?: StringNullableListFilter<"PlanHistory">
    usuarioId?: IntFilter<"PlanHistory"> | number
    fechaCambio?: DateTimeFilter<"PlanHistory"> | Date | string
    createdAt?: DateTimeFilter<"PlanHistory"> | Date | string
    updatedAt?: DateTimeFilter<"PlanHistory"> | Date | string
  }

  export type PlanMembresiaCreateWithoutHistorialCambiosInput = {
    nombre: string
    codigo: string
    duracionDias: number
    precio: Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaCreatebeneficiosInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    miembros?: MiembroCreateNestedManyWithoutPlanMembresiaInput
  }

  export type PlanMembresiaUncheckedCreateWithoutHistorialCambiosInput = {
    id?: number
    nombre: string
    codigo: string
    duracionDias: number
    precio: Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaCreatebeneficiosInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    miembros?: MiembroUncheckedCreateNestedManyWithoutPlanMembresiaInput
  }

  export type PlanMembresiaCreateOrConnectWithoutHistorialCambiosInput = {
    where: PlanMembresiaWhereUniqueInput
    create: XOR<PlanMembresiaCreateWithoutHistorialCambiosInput, PlanMembresiaUncheckedCreateWithoutHistorialCambiosInput>
  }

  export type PlanMembresiaUpsertWithoutHistorialCambiosInput = {
    update: XOR<PlanMembresiaUpdateWithoutHistorialCambiosInput, PlanMembresiaUncheckedUpdateWithoutHistorialCambiosInput>
    create: XOR<PlanMembresiaCreateWithoutHistorialCambiosInput, PlanMembresiaUncheckedCreateWithoutHistorialCambiosInput>
    where?: PlanMembresiaWhereInput
  }

  export type PlanMembresiaUpdateToOneWithWhereWithoutHistorialCambiosInput = {
    where?: PlanMembresiaWhereInput
    data: XOR<PlanMembresiaUpdateWithoutHistorialCambiosInput, PlanMembresiaUncheckedUpdateWithoutHistorialCambiosInput>
  }

  export type PlanMembresiaUpdateWithoutHistorialCambiosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    duracionDias?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaUpdatebeneficiosInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroUpdateManyWithoutPlanMembresiaNestedInput
  }

  export type PlanMembresiaUncheckedUpdateWithoutHistorialCambiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    duracionDias?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaUpdatebeneficiosInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembros?: MiembroUncheckedUpdateManyWithoutPlanMembresiaNestedInput
  }

  export type PlanMembresiaCreateWithoutMiembrosInput = {
    nombre: string
    codigo: string
    duracionDias: number
    precio: Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaCreatebeneficiosInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    historialCambios?: PlanHistoryCreateNestedManyWithoutPlanMembresiaInput
  }

  export type PlanMembresiaUncheckedCreateWithoutMiembrosInput = {
    id?: number
    nombre: string
    codigo: string
    duracionDias: number
    precio: Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaCreatebeneficiosInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    historialCambios?: PlanHistoryUncheckedCreateNestedManyWithoutPlanMembresiaInput
  }

  export type PlanMembresiaCreateOrConnectWithoutMiembrosInput = {
    where: PlanMembresiaWhereUniqueInput
    create: XOR<PlanMembresiaCreateWithoutMiembrosInput, PlanMembresiaUncheckedCreateWithoutMiembrosInput>
  }

  export type RutinaCreateWithoutMiembroInput = {
    nombre: string
    objetivo: string
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    entrenador: EntrenadorCreateNestedOneWithoutRutinasInput
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
    historial?: RoutineHistoryCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutMiembroInput = {
    id?: number
    nombre: string
    objetivo: string
    entrenadorId: number
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
    historial?: RoutineHistoryUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutMiembroInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutMiembroInput, RutinaUncheckedCreateWithoutMiembroInput>
  }

  export type RutinaCreateManyMiembroInputEnvelope = {
    data: RutinaCreateManyMiembroInput | RutinaCreateManyMiembroInput[]
    skipDuplicates?: boolean
  }

  export type BodyMeasurementCreateWithoutMiembroInput = {
    entrenadorId?: number | null
    peso: Decimal | DecimalJsLike | number | string
    talla: Decimal | DecimalJsLike | number | string
    porcentajeGrasa: Decimal | DecimalJsLike | number | string
    fechaMedicion: Date | string
    notas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BodyMeasurementUncheckedCreateWithoutMiembroInput = {
    id?: number
    entrenadorId?: number | null
    peso: Decimal | DecimalJsLike | number | string
    talla: Decimal | DecimalJsLike | number | string
    porcentajeGrasa: Decimal | DecimalJsLike | number | string
    fechaMedicion: Date | string
    notas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BodyMeasurementCreateOrConnectWithoutMiembroInput = {
    where: BodyMeasurementWhereUniqueInput
    create: XOR<BodyMeasurementCreateWithoutMiembroInput, BodyMeasurementUncheckedCreateWithoutMiembroInput>
  }

  export type BodyMeasurementCreateManyMiembroInputEnvelope = {
    data: BodyMeasurementCreateManyMiembroInput | BodyMeasurementCreateManyMiembroInput[]
    skipDuplicates?: boolean
  }

  export type MemberAuditLogCreateWithoutMiembroInput = {
    usuarioId: number
    cambios: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fechaCambio?: Date | string
    createdAt?: Date | string
  }

  export type MemberAuditLogUncheckedCreateWithoutMiembroInput = {
    id?: number
    usuarioId: number
    cambios: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fechaCambio?: Date | string
    createdAt?: Date | string
  }

  export type MemberAuditLogCreateOrConnectWithoutMiembroInput = {
    where: MemberAuditLogWhereUniqueInput
    create: XOR<MemberAuditLogCreateWithoutMiembroInput, MemberAuditLogUncheckedCreateWithoutMiembroInput>
  }

  export type MemberAuditLogCreateManyMiembroInputEnvelope = {
    data: MemberAuditLogCreateManyMiembroInput | MemberAuditLogCreateManyMiembroInput[]
    skipDuplicates?: boolean
  }

  export type PlanMembresiaUpsertWithoutMiembrosInput = {
    update: XOR<PlanMembresiaUpdateWithoutMiembrosInput, PlanMembresiaUncheckedUpdateWithoutMiembrosInput>
    create: XOR<PlanMembresiaCreateWithoutMiembrosInput, PlanMembresiaUncheckedCreateWithoutMiembrosInput>
    where?: PlanMembresiaWhereInput
  }

  export type PlanMembresiaUpdateToOneWithWhereWithoutMiembrosInput = {
    where?: PlanMembresiaWhereInput
    data: XOR<PlanMembresiaUpdateWithoutMiembrosInput, PlanMembresiaUncheckedUpdateWithoutMiembrosInput>
  }

  export type PlanMembresiaUpdateWithoutMiembrosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    duracionDias?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaUpdatebeneficiosInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historialCambios?: PlanHistoryUpdateManyWithoutPlanMembresiaNestedInput
  }

  export type PlanMembresiaUncheckedUpdateWithoutMiembrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    codigo?: StringFieldUpdateOperationsInput | string
    duracionDias?: IntFieldUpdateOperationsInput | number
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficios?: PlanMembresiaUpdatebeneficiosInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historialCambios?: PlanHistoryUncheckedUpdateManyWithoutPlanMembresiaNestedInput
  }

  export type RutinaUpsertWithWhereUniqueWithoutMiembroInput = {
    where: RutinaWhereUniqueInput
    update: XOR<RutinaUpdateWithoutMiembroInput, RutinaUncheckedUpdateWithoutMiembroInput>
    create: XOR<RutinaCreateWithoutMiembroInput, RutinaUncheckedCreateWithoutMiembroInput>
  }

  export type RutinaUpdateWithWhereUniqueWithoutMiembroInput = {
    where: RutinaWhereUniqueInput
    data: XOR<RutinaUpdateWithoutMiembroInput, RutinaUncheckedUpdateWithoutMiembroInput>
  }

  export type RutinaUpdateManyWithWhereWithoutMiembroInput = {
    where: RutinaScalarWhereInput
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyWithoutMiembroInput>
  }

  export type RutinaScalarWhereInput = {
    AND?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
    OR?: RutinaScalarWhereInput[]
    NOT?: RutinaScalarWhereInput | RutinaScalarWhereInput[]
    id?: IntFilter<"Rutina"> | number
    nombre?: StringFilter<"Rutina"> | string
    objetivo?: StringFilter<"Rutina"> | string
    miembroId?: IntFilter<"Rutina"> | number
    entrenadorId?: IntFilter<"Rutina"> | number
    diasEntrenamiento?: StringNullableListFilter<"Rutina">
    activo?: BoolFilter<"Rutina"> | boolean
    createdAt?: DateTimeFilter<"Rutina"> | Date | string
    updatedAt?: DateTimeFilter<"Rutina"> | Date | string
  }

  export type BodyMeasurementUpsertWithWhereUniqueWithoutMiembroInput = {
    where: BodyMeasurementWhereUniqueInput
    update: XOR<BodyMeasurementUpdateWithoutMiembroInput, BodyMeasurementUncheckedUpdateWithoutMiembroInput>
    create: XOR<BodyMeasurementCreateWithoutMiembroInput, BodyMeasurementUncheckedCreateWithoutMiembroInput>
  }

  export type BodyMeasurementUpdateWithWhereUniqueWithoutMiembroInput = {
    where: BodyMeasurementWhereUniqueInput
    data: XOR<BodyMeasurementUpdateWithoutMiembroInput, BodyMeasurementUncheckedUpdateWithoutMiembroInput>
  }

  export type BodyMeasurementUpdateManyWithWhereWithoutMiembroInput = {
    where: BodyMeasurementScalarWhereInput
    data: XOR<BodyMeasurementUpdateManyMutationInput, BodyMeasurementUncheckedUpdateManyWithoutMiembroInput>
  }

  export type BodyMeasurementScalarWhereInput = {
    AND?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
    OR?: BodyMeasurementScalarWhereInput[]
    NOT?: BodyMeasurementScalarWhereInput | BodyMeasurementScalarWhereInput[]
    id?: IntFilter<"BodyMeasurement"> | number
    miembroId?: IntFilter<"BodyMeasurement"> | number
    entrenadorId?: IntNullableFilter<"BodyMeasurement"> | number | null
    peso?: DecimalFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    talla?: DecimalFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    porcentajeGrasa?: DecimalFilter<"BodyMeasurement"> | Decimal | DecimalJsLike | number | string
    fechaMedicion?: DateTimeFilter<"BodyMeasurement"> | Date | string
    notas?: StringNullableFilter<"BodyMeasurement"> | string | null
    createdAt?: DateTimeFilter<"BodyMeasurement"> | Date | string
    updatedAt?: DateTimeFilter<"BodyMeasurement"> | Date | string
  }

  export type MemberAuditLogUpsertWithWhereUniqueWithoutMiembroInput = {
    where: MemberAuditLogWhereUniqueInput
    update: XOR<MemberAuditLogUpdateWithoutMiembroInput, MemberAuditLogUncheckedUpdateWithoutMiembroInput>
    create: XOR<MemberAuditLogCreateWithoutMiembroInput, MemberAuditLogUncheckedCreateWithoutMiembroInput>
  }

  export type MemberAuditLogUpdateWithWhereUniqueWithoutMiembroInput = {
    where: MemberAuditLogWhereUniqueInput
    data: XOR<MemberAuditLogUpdateWithoutMiembroInput, MemberAuditLogUncheckedUpdateWithoutMiembroInput>
  }

  export type MemberAuditLogUpdateManyWithWhereWithoutMiembroInput = {
    where: MemberAuditLogScalarWhereInput
    data: XOR<MemberAuditLogUpdateManyMutationInput, MemberAuditLogUncheckedUpdateManyWithoutMiembroInput>
  }

  export type MemberAuditLogScalarWhereInput = {
    AND?: MemberAuditLogScalarWhereInput | MemberAuditLogScalarWhereInput[]
    OR?: MemberAuditLogScalarWhereInput[]
    NOT?: MemberAuditLogScalarWhereInput | MemberAuditLogScalarWhereInput[]
    id?: IntFilter<"MemberAuditLog"> | number
    miembroId?: IntFilter<"MemberAuditLog"> | number
    usuarioId?: IntFilter<"MemberAuditLog"> | number
    cambios?: StringFilter<"MemberAuditLog"> | string
    valorAnterior?: StringNullableFilter<"MemberAuditLog"> | string | null
    valorNuevo?: StringNullableFilter<"MemberAuditLog"> | string | null
    fechaCambio?: DateTimeFilter<"MemberAuditLog"> | Date | string
    createdAt?: DateTimeFilter<"MemberAuditLog"> | Date | string
  }

  export type MiembroCreateWithoutAuditLogInput = {
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    planMembresia: PlanMembresiaCreateNestedOneWithoutMiembrosInput
    rutinas?: RutinaCreateNestedManyWithoutMiembroInput
    medidasCorporales?: BodyMeasurementCreateNestedManyWithoutMiembroInput
  }

  export type MiembroUncheckedCreateWithoutAuditLogInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    planMembresiaId: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutMiembroInput
    medidasCorporales?: BodyMeasurementUncheckedCreateNestedManyWithoutMiembroInput
  }

  export type MiembroCreateOrConnectWithoutAuditLogInput = {
    where: MiembroWhereUniqueInput
    create: XOR<MiembroCreateWithoutAuditLogInput, MiembroUncheckedCreateWithoutAuditLogInput>
  }

  export type MiembroUpsertWithoutAuditLogInput = {
    update: XOR<MiembroUpdateWithoutAuditLogInput, MiembroUncheckedUpdateWithoutAuditLogInput>
    create: XOR<MiembroCreateWithoutAuditLogInput, MiembroUncheckedCreateWithoutAuditLogInput>
    where?: MiembroWhereInput
  }

  export type MiembroUpdateToOneWithWhereWithoutAuditLogInput = {
    where?: MiembroWhereInput
    data: XOR<MiembroUpdateWithoutAuditLogInput, MiembroUncheckedUpdateWithoutAuditLogInput>
  }

  export type MiembroUpdateWithoutAuditLogInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planMembresia?: PlanMembresiaUpdateOneRequiredWithoutMiembrosNestedInput
    rutinas?: RutinaUpdateManyWithoutMiembroNestedInput
    medidasCorporales?: BodyMeasurementUpdateManyWithoutMiembroNestedInput
  }

  export type MiembroUncheckedUpdateWithoutAuditLogInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    planMembresiaId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaUncheckedUpdateManyWithoutMiembroNestedInput
    medidasCorporales?: BodyMeasurementUncheckedUpdateManyWithoutMiembroNestedInput
  }

  export type TrainerAvailabilityCreateWithoutEntrenadorInput = {
    diaSemana: number
    horaInicio: string
    horaFin: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainerAvailabilityUncheckedCreateWithoutEntrenadorInput = {
    id?: number
    diaSemana: number
    horaInicio: string
    horaFin: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainerAvailabilityCreateOrConnectWithoutEntrenadorInput = {
    where: TrainerAvailabilityWhereUniqueInput
    create: XOR<TrainerAvailabilityCreateWithoutEntrenadorInput, TrainerAvailabilityUncheckedCreateWithoutEntrenadorInput>
  }

  export type TrainerAvailabilityCreateManyEntrenadorInputEnvelope = {
    data: TrainerAvailabilityCreateManyEntrenadorInput | TrainerAvailabilityCreateManyEntrenadorInput[]
    skipDuplicates?: boolean
  }

  export type RutinaCreateWithoutEntrenadorInput = {
    nombre: string
    objetivo: string
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    miembro: MiembroCreateNestedOneWithoutRutinasInput
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
    historial?: RoutineHistoryCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutEntrenadorInput = {
    id?: number
    nombre: string
    objetivo: string
    miembroId: number
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
    historial?: RoutineHistoryUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutEntrenadorInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutEntrenadorInput, RutinaUncheckedCreateWithoutEntrenadorInput>
  }

  export type RutinaCreateManyEntrenadorInputEnvelope = {
    data: RutinaCreateManyEntrenadorInput | RutinaCreateManyEntrenadorInput[]
    skipDuplicates?: boolean
  }

  export type TrainerAvailabilityUpsertWithWhereUniqueWithoutEntrenadorInput = {
    where: TrainerAvailabilityWhereUniqueInput
    update: XOR<TrainerAvailabilityUpdateWithoutEntrenadorInput, TrainerAvailabilityUncheckedUpdateWithoutEntrenadorInput>
    create: XOR<TrainerAvailabilityCreateWithoutEntrenadorInput, TrainerAvailabilityUncheckedCreateWithoutEntrenadorInput>
  }

  export type TrainerAvailabilityUpdateWithWhereUniqueWithoutEntrenadorInput = {
    where: TrainerAvailabilityWhereUniqueInput
    data: XOR<TrainerAvailabilityUpdateWithoutEntrenadorInput, TrainerAvailabilityUncheckedUpdateWithoutEntrenadorInput>
  }

  export type TrainerAvailabilityUpdateManyWithWhereWithoutEntrenadorInput = {
    where: TrainerAvailabilityScalarWhereInput
    data: XOR<TrainerAvailabilityUpdateManyMutationInput, TrainerAvailabilityUncheckedUpdateManyWithoutEntrenadorInput>
  }

  export type TrainerAvailabilityScalarWhereInput = {
    AND?: TrainerAvailabilityScalarWhereInput | TrainerAvailabilityScalarWhereInput[]
    OR?: TrainerAvailabilityScalarWhereInput[]
    NOT?: TrainerAvailabilityScalarWhereInput | TrainerAvailabilityScalarWhereInput[]
    id?: IntFilter<"TrainerAvailability"> | number
    entrenadorId?: IntFilter<"TrainerAvailability"> | number
    diaSemana?: IntFilter<"TrainerAvailability"> | number
    horaInicio?: StringFilter<"TrainerAvailability"> | string
    horaFin?: StringFilter<"TrainerAvailability"> | string
    activo?: BoolFilter<"TrainerAvailability"> | boolean
    createdAt?: DateTimeFilter<"TrainerAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"TrainerAvailability"> | Date | string
  }

  export type RutinaUpsertWithWhereUniqueWithoutEntrenadorInput = {
    where: RutinaWhereUniqueInput
    update: XOR<RutinaUpdateWithoutEntrenadorInput, RutinaUncheckedUpdateWithoutEntrenadorInput>
    create: XOR<RutinaCreateWithoutEntrenadorInput, RutinaUncheckedCreateWithoutEntrenadorInput>
  }

  export type RutinaUpdateWithWhereUniqueWithoutEntrenadorInput = {
    where: RutinaWhereUniqueInput
    data: XOR<RutinaUpdateWithoutEntrenadorInput, RutinaUncheckedUpdateWithoutEntrenadorInput>
  }

  export type RutinaUpdateManyWithWhereWithoutEntrenadorInput = {
    where: RutinaScalarWhereInput
    data: XOR<RutinaUpdateManyMutationInput, RutinaUncheckedUpdateManyWithoutEntrenadorInput>
  }

  export type EntrenadorCreateWithoutDisponibilidadesInput = {
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoInstitucional: string
    telefono?: string | null
    especialidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaCreateNestedManyWithoutEntrenadorInput
  }

  export type EntrenadorUncheckedCreateWithoutDisponibilidadesInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoInstitucional: string
    telefono?: string | null
    especialidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutEntrenadorInput
  }

  export type EntrenadorCreateOrConnectWithoutDisponibilidadesInput = {
    where: EntrenadorWhereUniqueInput
    create: XOR<EntrenadorCreateWithoutDisponibilidadesInput, EntrenadorUncheckedCreateWithoutDisponibilidadesInput>
  }

  export type EntrenadorUpsertWithoutDisponibilidadesInput = {
    update: XOR<EntrenadorUpdateWithoutDisponibilidadesInput, EntrenadorUncheckedUpdateWithoutDisponibilidadesInput>
    create: XOR<EntrenadorCreateWithoutDisponibilidadesInput, EntrenadorUncheckedCreateWithoutDisponibilidadesInput>
    where?: EntrenadorWhereInput
  }

  export type EntrenadorUpdateToOneWithWhereWithoutDisponibilidadesInput = {
    where?: EntrenadorWhereInput
    data: XOR<EntrenadorUpdateWithoutDisponibilidadesInput, EntrenadorUncheckedUpdateWithoutDisponibilidadesInput>
  }

  export type EntrenadorUpdateWithoutDisponibilidadesInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoInstitucional?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaUpdateManyWithoutEntrenadorNestedInput
  }

  export type EntrenadorUncheckedUpdateWithoutDisponibilidadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoInstitucional?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaUncheckedUpdateManyWithoutEntrenadorNestedInput
  }

  export type MiembroCreateWithoutRutinasInput = {
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    planMembresia: PlanMembresiaCreateNestedOneWithoutMiembrosInput
    medidasCorporales?: BodyMeasurementCreateNestedManyWithoutMiembroInput
    auditLog?: MemberAuditLogCreateNestedManyWithoutMiembroInput
  }

  export type MiembroUncheckedCreateWithoutRutinasInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    planMembresiaId: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medidasCorporales?: BodyMeasurementUncheckedCreateNestedManyWithoutMiembroInput
    auditLog?: MemberAuditLogUncheckedCreateNestedManyWithoutMiembroInput
  }

  export type MiembroCreateOrConnectWithoutRutinasInput = {
    where: MiembroWhereUniqueInput
    create: XOR<MiembroCreateWithoutRutinasInput, MiembroUncheckedCreateWithoutRutinasInput>
  }

  export type EntrenadorCreateWithoutRutinasInput = {
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoInstitucional: string
    telefono?: string | null
    especialidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disponibilidades?: TrainerAvailabilityCreateNestedManyWithoutEntrenadorInput
  }

  export type EntrenadorUncheckedCreateWithoutRutinasInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoInstitucional: string
    telefono?: string | null
    especialidad: string
    createdAt?: Date | string
    updatedAt?: Date | string
    disponibilidades?: TrainerAvailabilityUncheckedCreateNestedManyWithoutEntrenadorInput
  }

  export type EntrenadorCreateOrConnectWithoutRutinasInput = {
    where: EntrenadorWhereUniqueInput
    create: XOR<EntrenadorCreateWithoutRutinasInput, EntrenadorUncheckedCreateWithoutRutinasInput>
  }

  export type RutinaEjercicioCreateWithoutRutinaInput = {
    series: number
    repeticiones: number
    tiempoDescansoSeg: number
    orden: number
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicio: EjercicioCreateNestedOneWithoutRutinasInput
  }

  export type RutinaEjercicioUncheckedCreateWithoutRutinaInput = {
    id?: number
    ejercicioId: number
    series: number
    repeticiones: number
    tiempoDescansoSeg: number
    orden: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaEjercicioCreateOrConnectWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    create: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput>
  }

  export type RutinaEjercicioCreateManyRutinaInputEnvelope = {
    data: RutinaEjercicioCreateManyRutinaInput | RutinaEjercicioCreateManyRutinaInput[]
    skipDuplicates?: boolean
  }

  export type RoutineHistoryCreateWithoutRutinaInput = {
    entrenadorId?: number | null
    cambios: string
    version: number
    createdAt?: Date | string
  }

  export type RoutineHistoryUncheckedCreateWithoutRutinaInput = {
    id?: number
    entrenadorId?: number | null
    cambios: string
    version: number
    createdAt?: Date | string
  }

  export type RoutineHistoryCreateOrConnectWithoutRutinaInput = {
    where: RoutineHistoryWhereUniqueInput
    create: XOR<RoutineHistoryCreateWithoutRutinaInput, RoutineHistoryUncheckedCreateWithoutRutinaInput>
  }

  export type RoutineHistoryCreateManyRutinaInputEnvelope = {
    data: RoutineHistoryCreateManyRutinaInput | RoutineHistoryCreateManyRutinaInput[]
    skipDuplicates?: boolean
  }

  export type MiembroUpsertWithoutRutinasInput = {
    update: XOR<MiembroUpdateWithoutRutinasInput, MiembroUncheckedUpdateWithoutRutinasInput>
    create: XOR<MiembroCreateWithoutRutinasInput, MiembroUncheckedCreateWithoutRutinasInput>
    where?: MiembroWhereInput
  }

  export type MiembroUpdateToOneWithWhereWithoutRutinasInput = {
    where?: MiembroWhereInput
    data: XOR<MiembroUpdateWithoutRutinasInput, MiembroUncheckedUpdateWithoutRutinasInput>
  }

  export type MiembroUpdateWithoutRutinasInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planMembresia?: PlanMembresiaUpdateOneRequiredWithoutMiembrosNestedInput
    medidasCorporales?: BodyMeasurementUpdateManyWithoutMiembroNestedInput
    auditLog?: MemberAuditLogUpdateManyWithoutMiembroNestedInput
  }

  export type MiembroUncheckedUpdateWithoutRutinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    planMembresiaId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medidasCorporales?: BodyMeasurementUncheckedUpdateManyWithoutMiembroNestedInput
    auditLog?: MemberAuditLogUncheckedUpdateManyWithoutMiembroNestedInput
  }

  export type EntrenadorUpsertWithoutRutinasInput = {
    update: XOR<EntrenadorUpdateWithoutRutinasInput, EntrenadorUncheckedUpdateWithoutRutinasInput>
    create: XOR<EntrenadorCreateWithoutRutinasInput, EntrenadorUncheckedCreateWithoutRutinasInput>
    where?: EntrenadorWhereInput
  }

  export type EntrenadorUpdateToOneWithWhereWithoutRutinasInput = {
    where?: EntrenadorWhereInput
    data: XOR<EntrenadorUpdateWithoutRutinasInput, EntrenadorUncheckedUpdateWithoutRutinasInput>
  }

  export type EntrenadorUpdateWithoutRutinasInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoInstitucional?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disponibilidades?: TrainerAvailabilityUpdateManyWithoutEntrenadorNestedInput
  }

  export type EntrenadorUncheckedUpdateWithoutRutinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoInstitucional?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    especialidad?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disponibilidades?: TrainerAvailabilityUncheckedUpdateManyWithoutEntrenadorNestedInput
  }

  export type RutinaEjercicioUpsertWithWhereUniqueWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    update: XOR<RutinaEjercicioUpdateWithoutRutinaInput, RutinaEjercicioUncheckedUpdateWithoutRutinaInput>
    create: XOR<RutinaEjercicioCreateWithoutRutinaInput, RutinaEjercicioUncheckedCreateWithoutRutinaInput>
  }

  export type RutinaEjercicioUpdateWithWhereUniqueWithoutRutinaInput = {
    where: RutinaEjercicioWhereUniqueInput
    data: XOR<RutinaEjercicioUpdateWithoutRutinaInput, RutinaEjercicioUncheckedUpdateWithoutRutinaInput>
  }

  export type RutinaEjercicioUpdateManyWithWhereWithoutRutinaInput = {
    where: RutinaEjercicioScalarWhereInput
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyWithoutRutinaInput>
  }

  export type RutinaEjercicioScalarWhereInput = {
    AND?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
    OR?: RutinaEjercicioScalarWhereInput[]
    NOT?: RutinaEjercicioScalarWhereInput | RutinaEjercicioScalarWhereInput[]
    id?: IntFilter<"RutinaEjercicio"> | number
    rutinaId?: IntFilter<"RutinaEjercicio"> | number
    ejercicioId?: IntFilter<"RutinaEjercicio"> | number
    series?: IntFilter<"RutinaEjercicio"> | number
    repeticiones?: IntFilter<"RutinaEjercicio"> | number
    tiempoDescansoSeg?: IntFilter<"RutinaEjercicio"> | number
    orden?: IntFilter<"RutinaEjercicio"> | number
    createdAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
    updatedAt?: DateTimeFilter<"RutinaEjercicio"> | Date | string
  }

  export type RoutineHistoryUpsertWithWhereUniqueWithoutRutinaInput = {
    where: RoutineHistoryWhereUniqueInput
    update: XOR<RoutineHistoryUpdateWithoutRutinaInput, RoutineHistoryUncheckedUpdateWithoutRutinaInput>
    create: XOR<RoutineHistoryCreateWithoutRutinaInput, RoutineHistoryUncheckedCreateWithoutRutinaInput>
  }

  export type RoutineHistoryUpdateWithWhereUniqueWithoutRutinaInput = {
    where: RoutineHistoryWhereUniqueInput
    data: XOR<RoutineHistoryUpdateWithoutRutinaInput, RoutineHistoryUncheckedUpdateWithoutRutinaInput>
  }

  export type RoutineHistoryUpdateManyWithWhereWithoutRutinaInput = {
    where: RoutineHistoryScalarWhereInput
    data: XOR<RoutineHistoryUpdateManyMutationInput, RoutineHistoryUncheckedUpdateManyWithoutRutinaInput>
  }

  export type RoutineHistoryScalarWhereInput = {
    AND?: RoutineHistoryScalarWhereInput | RoutineHistoryScalarWhereInput[]
    OR?: RoutineHistoryScalarWhereInput[]
    NOT?: RoutineHistoryScalarWhereInput | RoutineHistoryScalarWhereInput[]
    id?: IntFilter<"RoutineHistory"> | number
    rutinaId?: IntFilter<"RoutineHistory"> | number
    entrenadorId?: IntNullableFilter<"RoutineHistory"> | number | null
    cambios?: StringFilter<"RoutineHistory"> | string
    version?: IntFilter<"RoutineHistory"> | number
    createdAt?: DateTimeFilter<"RoutineHistory"> | Date | string
  }

  export type RutinaEjercicioCreateWithoutEjercicioInput = {
    series: number
    repeticiones: number
    tiempoDescansoSeg: number
    orden: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rutina: RutinaCreateNestedOneWithoutEjerciciosInput
  }

  export type RutinaEjercicioUncheckedCreateWithoutEjercicioInput = {
    id?: number
    rutinaId: number
    series: number
    repeticiones: number
    tiempoDescansoSeg: number
    orden: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaEjercicioCreateOrConnectWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    create: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type RutinaEjercicioCreateManyEjercicioInputEnvelope = {
    data: RutinaEjercicioCreateManyEjercicioInput | RutinaEjercicioCreateManyEjercicioInput[]
    skipDuplicates?: boolean
  }

  export type RutinaEjercicioUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    update: XOR<RutinaEjercicioUpdateWithoutEjercicioInput, RutinaEjercicioUncheckedUpdateWithoutEjercicioInput>
    create: XOR<RutinaEjercicioCreateWithoutEjercicioInput, RutinaEjercicioUncheckedCreateWithoutEjercicioInput>
  }

  export type RutinaEjercicioUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: RutinaEjercicioWhereUniqueInput
    data: XOR<RutinaEjercicioUpdateWithoutEjercicioInput, RutinaEjercicioUncheckedUpdateWithoutEjercicioInput>
  }

  export type RutinaEjercicioUpdateManyWithWhereWithoutEjercicioInput = {
    where: RutinaEjercicioScalarWhereInput
    data: XOR<RutinaEjercicioUpdateManyMutationInput, RutinaEjercicioUncheckedUpdateManyWithoutEjercicioInput>
  }

  export type RutinaCreateWithoutEjerciciosInput = {
    nombre: string
    objetivo: string
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    miembro: MiembroCreateNestedOneWithoutRutinasInput
    entrenador: EntrenadorCreateNestedOneWithoutRutinasInput
    historial?: RoutineHistoryCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutEjerciciosInput = {
    id?: number
    nombre: string
    objetivo: string
    miembroId: number
    entrenadorId: number
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    historial?: RoutineHistoryUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutEjerciciosInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
  }

  export type EjercicioCreateWithoutRutinasInput = {
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EjercicioUncheckedCreateWithoutRutinasInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EjercicioCreateOrConnectWithoutRutinasInput = {
    where: EjercicioWhereUniqueInput
    create: XOR<EjercicioCreateWithoutRutinasInput, EjercicioUncheckedCreateWithoutRutinasInput>
  }

  export type RutinaUpsertWithoutEjerciciosInput = {
    update: XOR<RutinaUpdateWithoutEjerciciosInput, RutinaUncheckedUpdateWithoutEjerciciosInput>
    create: XOR<RutinaCreateWithoutEjerciciosInput, RutinaUncheckedCreateWithoutEjerciciosInput>
    where?: RutinaWhereInput
  }

  export type RutinaUpdateToOneWithWhereWithoutEjerciciosInput = {
    where?: RutinaWhereInput
    data: XOR<RutinaUpdateWithoutEjerciciosInput, RutinaUncheckedUpdateWithoutEjerciciosInput>
  }

  export type RutinaUpdateWithoutEjerciciosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembro?: MiembroUpdateOneRequiredWithoutRutinasNestedInput
    entrenador?: EntrenadorUpdateOneRequiredWithoutRutinasNestedInput
    historial?: RoutineHistoryUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutEjerciciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    miembroId?: IntFieldUpdateOperationsInput | number
    entrenadorId?: IntFieldUpdateOperationsInput | number
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historial?: RoutineHistoryUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type EjercicioUpsertWithoutRutinasInput = {
    update: XOR<EjercicioUpdateWithoutRutinasInput, EjercicioUncheckedUpdateWithoutRutinasInput>
    create: XOR<EjercicioCreateWithoutRutinasInput, EjercicioUncheckedCreateWithoutRutinasInput>
    where?: EjercicioWhereInput
  }

  export type EjercicioUpdateToOneWithWhereWithoutRutinasInput = {
    where?: EjercicioWhereInput
    data: XOR<EjercicioUpdateWithoutRutinasInput, EjercicioUncheckedUpdateWithoutRutinasInput>
  }

  export type EjercicioUpdateWithoutRutinasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EjercicioUncheckedUpdateWithoutRutinasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaCreateWithoutHistorialInput = {
    nombre: string
    objetivo: string
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    miembro: MiembroCreateNestedOneWithoutRutinasInput
    entrenador: EntrenadorCreateNestedOneWithoutRutinasInput
    ejercicios?: RutinaEjercicioCreateNestedManyWithoutRutinaInput
  }

  export type RutinaUncheckedCreateWithoutHistorialInput = {
    id?: number
    nombre: string
    objetivo: string
    miembroId: number
    entrenadorId: number
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ejercicios?: RutinaEjercicioUncheckedCreateNestedManyWithoutRutinaInput
  }

  export type RutinaCreateOrConnectWithoutHistorialInput = {
    where: RutinaWhereUniqueInput
    create: XOR<RutinaCreateWithoutHistorialInput, RutinaUncheckedCreateWithoutHistorialInput>
  }

  export type RutinaUpsertWithoutHistorialInput = {
    update: XOR<RutinaUpdateWithoutHistorialInput, RutinaUncheckedUpdateWithoutHistorialInput>
    create: XOR<RutinaCreateWithoutHistorialInput, RutinaUncheckedCreateWithoutHistorialInput>
    where?: RutinaWhereInput
  }

  export type RutinaUpdateToOneWithWhereWithoutHistorialInput = {
    where?: RutinaWhereInput
    data: XOR<RutinaUpdateWithoutHistorialInput, RutinaUncheckedUpdateWithoutHistorialInput>
  }

  export type RutinaUpdateWithoutHistorialInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembro?: MiembroUpdateOneRequiredWithoutRutinasNestedInput
    entrenador?: EntrenadorUpdateOneRequiredWithoutRutinasNestedInput
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutHistorialInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    miembroId?: IntFieldUpdateOperationsInput | number
    entrenadorId?: IntFieldUpdateOperationsInput | number
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type MiembroCreateWithoutMedidasCorporalesInput = {
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    planMembresia: PlanMembresiaCreateNestedOneWithoutMiembrosInput
    rutinas?: RutinaCreateNestedManyWithoutMiembroInput
    auditLog?: MemberAuditLogCreateNestedManyWithoutMiembroInput
  }

  export type MiembroUncheckedCreateWithoutMedidasCorporalesInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    planMembresiaId: number
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    rutinas?: RutinaUncheckedCreateNestedManyWithoutMiembroInput
    auditLog?: MemberAuditLogUncheckedCreateNestedManyWithoutMiembroInput
  }

  export type MiembroCreateOrConnectWithoutMedidasCorporalesInput = {
    where: MiembroWhereUniqueInput
    create: XOR<MiembroCreateWithoutMedidasCorporalesInput, MiembroUncheckedCreateWithoutMedidasCorporalesInput>
  }

  export type MiembroUpsertWithoutMedidasCorporalesInput = {
    update: XOR<MiembroUpdateWithoutMedidasCorporalesInput, MiembroUncheckedUpdateWithoutMedidasCorporalesInput>
    create: XOR<MiembroCreateWithoutMedidasCorporalesInput, MiembroUncheckedCreateWithoutMedidasCorporalesInput>
    where?: MiembroWhereInput
  }

  export type MiembroUpdateToOneWithWhereWithoutMedidasCorporalesInput = {
    where?: MiembroWhereInput
    data: XOR<MiembroUpdateWithoutMedidasCorporalesInput, MiembroUncheckedUpdateWithoutMedidasCorporalesInput>
  }

  export type MiembroUpdateWithoutMedidasCorporalesInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planMembresia?: PlanMembresiaUpdateOneRequiredWithoutMiembrosNestedInput
    rutinas?: RutinaUpdateManyWithoutMiembroNestedInput
    auditLog?: MemberAuditLogUpdateManyWithoutMiembroNestedInput
  }

  export type MiembroUncheckedUpdateWithoutMedidasCorporalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    planMembresiaId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaUncheckedUpdateManyWithoutMiembroNestedInput
    auditLog?: MemberAuditLogUncheckedUpdateManyWithoutMiembroNestedInput
  }

  export type MiembroCreateManyPlanMembresiaInput = {
    id?: number
    nombres: string
    apellidos: string
    documentoIdentidad: string
    correoPersonal: string
    telefono?: string | null
    fechaNacimiento: Date | string
    fechaInicio: Date | string
    fechaVencimiento: Date | string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanHistoryCreateManyPlanMembresiaInput = {
    id?: number
    precioAnterior: Decimal | DecimalJsLike | number | string
    precioNuevo: Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryCreatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryCreatebeneficiosNuevosInput | string[]
    usuarioId: number
    fechaCambio?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MiembroUpdateWithoutPlanMembresiaInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaUpdateManyWithoutMiembroNestedInput
    medidasCorporales?: BodyMeasurementUpdateManyWithoutMiembroNestedInput
    auditLog?: MemberAuditLogUpdateManyWithoutMiembroNestedInput
  }

  export type MiembroUncheckedUpdateWithoutPlanMembresiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutinas?: RutinaUncheckedUpdateManyWithoutMiembroNestedInput
    medidasCorporales?: BodyMeasurementUncheckedUpdateManyWithoutMiembroNestedInput
    auditLog?: MemberAuditLogUncheckedUpdateManyWithoutMiembroNestedInput
  }

  export type MiembroUncheckedUpdateManyWithoutPlanMembresiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    documentoIdentidad?: StringFieldUpdateOperationsInput | string
    correoPersonal?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaVencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanHistoryUpdateWithoutPlanMembresiaInput = {
    precioAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioNuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryUpdatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryUpdatebeneficiosNuevosInput | string[]
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanHistoryUncheckedUpdateWithoutPlanMembresiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    precioAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioNuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryUpdatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryUpdatebeneficiosNuevosInput | string[]
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanHistoryUncheckedUpdateManyWithoutPlanMembresiaInput = {
    id?: IntFieldUpdateOperationsInput | number
    precioAnterior?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioNuevo?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    beneficiosAnteriores?: PlanHistoryUpdatebeneficiosAnterioresInput | string[]
    beneficiosNuevos?: PlanHistoryUpdatebeneficiosNuevosInput | string[]
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaCreateManyMiembroInput = {
    id?: number
    nombre: string
    objetivo: string
    entrenadorId: number
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BodyMeasurementCreateManyMiembroInput = {
    id?: number
    entrenadorId?: number | null
    peso: Decimal | DecimalJsLike | number | string
    talla: Decimal | DecimalJsLike | number | string
    porcentajeGrasa: Decimal | DecimalJsLike | number | string
    fechaMedicion: Date | string
    notas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberAuditLogCreateManyMiembroInput = {
    id?: number
    usuarioId: number
    cambios: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fechaCambio?: Date | string
    createdAt?: Date | string
  }

  export type RutinaUpdateWithoutMiembroInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    entrenador?: EntrenadorUpdateOneRequiredWithoutRutinasNestedInput
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
    historial?: RoutineHistoryUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutMiembroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    entrenadorId?: IntFieldUpdateOperationsInput | number
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
    historial?: RoutineHistoryUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateManyWithoutMiembroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    entrenadorId?: IntFieldUpdateOperationsInput | number
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMeasurementUpdateWithoutMiembroInput = {
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    talla?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentajeGrasa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaMedicion?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMeasurementUncheckedUpdateWithoutMiembroInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    talla?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentajeGrasa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaMedicion?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMeasurementUncheckedUpdateManyWithoutMiembroInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    talla?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    porcentajeGrasa?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fechaMedicion?: DateTimeFieldUpdateOperationsInput | Date | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberAuditLogUpdateWithoutMiembroInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    cambios?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberAuditLogUncheckedUpdateWithoutMiembroInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cambios?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberAuditLogUncheckedUpdateManyWithoutMiembroInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    cambios?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fechaCambio?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAvailabilityCreateManyEntrenadorInput = {
    id?: number
    diaSemana: number
    horaInicio: string
    horaFin: string
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaCreateManyEntrenadorInput = {
    id?: number
    nombre: string
    objetivo: string
    miembroId: number
    diasEntrenamiento?: RutinaCreatediasEntrenamientoInput | string[]
    activo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TrainerAvailabilityUpdateWithoutEntrenadorInput = {
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAvailabilityUncheckedUpdateWithoutEntrenadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrainerAvailabilityUncheckedUpdateManyWithoutEntrenadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    diaSemana?: IntFieldUpdateOperationsInput | number
    horaInicio?: StringFieldUpdateOperationsInput | string
    horaFin?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaUpdateWithoutEntrenadorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembro?: MiembroUpdateOneRequiredWithoutRutinasNestedInput
    ejercicios?: RutinaEjercicioUpdateManyWithoutRutinaNestedInput
    historial?: RoutineHistoryUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateWithoutEntrenadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    miembroId?: IntFieldUpdateOperationsInput | number
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicios?: RutinaEjercicioUncheckedUpdateManyWithoutRutinaNestedInput
    historial?: RoutineHistoryUncheckedUpdateManyWithoutRutinaNestedInput
  }

  export type RutinaUncheckedUpdateManyWithoutEntrenadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    miembroId?: IntFieldUpdateOperationsInput | number
    diasEntrenamiento?: RutinaUpdatediasEntrenamientoInput | string[]
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateManyRutinaInput = {
    id?: number
    ejercicioId: number
    series: number
    repeticiones: number
    tiempoDescansoSeg: number
    orden: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoutineHistoryCreateManyRutinaInput = {
    id?: number
    entrenadorId?: number | null
    cambios: string
    version: number
    createdAt?: Date | string
  }

  export type RutinaEjercicioUpdateWithoutRutinaInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    tiempoDescansoSeg?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ejercicio?: EjercicioUpdateOneRequiredWithoutRutinasNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    tiempoDescansoSeg?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    ejercicioId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    tiempoDescansoSeg?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHistoryUpdateWithoutRutinaInput = {
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    cambios?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHistoryUncheckedUpdateWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    cambios?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoutineHistoryUncheckedUpdateManyWithoutRutinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    entrenadorId?: NullableIntFieldUpdateOperationsInput | number | null
    cambios?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioCreateManyEjercicioInput = {
    id?: number
    rutinaId: number
    series: number
    repeticiones: number
    tiempoDescansoSeg: number
    orden: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RutinaEjercicioUpdateWithoutEjercicioInput = {
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    tiempoDescansoSeg?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rutina?: RutinaUpdateOneRequiredWithoutEjerciciosNestedInput
  }

  export type RutinaEjercicioUncheckedUpdateWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    tiempoDescansoSeg?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RutinaEjercicioUncheckedUpdateManyWithoutEjercicioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rutinaId?: IntFieldUpdateOperationsInput | number
    series?: IntFieldUpdateOperationsInput | number
    repeticiones?: IntFieldUpdateOperationsInput | number
    tiempoDescansoSeg?: IntFieldUpdateOperationsInput | number
    orden?: IntFieldUpdateOperationsInput | number
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