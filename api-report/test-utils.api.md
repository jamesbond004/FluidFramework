## API Report File for "@fluidframework/test-utils"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ContainerRuntime } from '@fluidframework/container-runtime';
import { FluidDataStoreRuntime } from '@fluidframework/datastore';
import { IChannelFactory } from '@fluidframework/datastore-definitions';
import { ICodeLoader } from '@fluidframework/container-definitions';
import { IContainer } from '@fluidframework/container-definitions';
import { IContainerContext } from '@fluidframework/container-definitions';
import { IContainerRuntime } from '@fluidframework/container-runtime-definitions';
import { IContainerRuntimeOptions } from '@fluidframework/container-runtime';
import { IDetachedBlobStorage } from '@fluidframework/container-loader';
import { IDocumentServiceFactory } from '@fluidframework/driver-definitions';
import { IFluidCodeDetails } from '@fluidframework/core-interfaces';
import { IFluidDataStoreChannel } from '@fluidframework/runtime-definitions';
import { IFluidDataStoreContext } from '@fluidframework/runtime-definitions';
import { IFluidDataStoreFactory } from '@fluidframework/runtime-definitions';
import { IFluidDataStoreRuntime } from '@fluidframework/datastore-definitions';
import { IFluidHandle } from '@fluidframework/core-interfaces';
import { IFluidLoadable } from '@fluidframework/core-interfaces';
import { IFluidModule } from '@fluidframework/container-definitions';
import { IHostLoader } from '@fluidframework/container-definitions';
import { ILoaderOptions } from '@fluidframework/container-definitions';
import { IProvideFluidCodeDetailsComparer } from '@fluidframework/core-interfaces';
import { IProvideFluidDataStoreFactory } from '@fluidframework/runtime-definitions';
import { IProvideFluidDataStoreRegistry } from '@fluidframework/runtime-definitions';
import { IProvideRuntimeFactory } from '@fluidframework/container-definitions';
import { IRequest } from '@fluidframework/core-interfaces';
import { IRequestHeader } from '@fluidframework/core-interfaces';
import { IResolvedUrl } from '@fluidframework/driver-definitions';
import { IResponse } from '@fluidframework/core-interfaces';
import { IRuntime } from '@fluidframework/container-definitions';
import { ISharedMap } from '@fluidframework/map';
import { ITelemetryBaseLogger } from '@fluidframework/common-definitions';
import { ITestDriver } from '@fluidframework/test-driver-definitions';
import { IUrlResolver } from '@fluidframework/driver-definitions';
import { Loader } from '@fluidframework/container-loader';
import { RuntimeRequestHandler } from '@fluidframework/request-handler';

// @public (undocumented)
export type ChannelFactoryRegistry = Iterable<[string | undefined, IChannelFactory]>;

// @public
export function createAndAttachContainer(source: IFluidCodeDetails, loader: IHostLoader, attachRequest: IRequest): Promise<IContainer>;

// @public (undocumented)
export const createDocumentId: () => string;

// @public
export function createLoader(packageEntries: Iterable<[IFluidCodeDetails, fluidEntryPoint]>, documentServiceFactory: IDocumentServiceFactory, urlResolver: IUrlResolver, logger?: ITelemetryBaseLogger, options?: ILoaderOptions): IHostLoader;

// @public
export const createTestContainerRuntimeFactory: (containerRuntimeCtor: typeof ContainerRuntime) => {
    new (type: string, dataStoreFactory: IFluidDataStoreFactory, runtimeOptions?: IContainerRuntimeOptions, requestHandlers?: RuntimeRequestHandler[]): {
        type: string;
        dataStoreFactory: IFluidDataStoreFactory;
        runtimeOptions: IContainerRuntimeOptions;
        requestHandlers: RuntimeRequestHandler[];
        instantiateFirstTime(runtime: ContainerRuntime): Promise<void>;
        instantiateFromExisting(runtime: ContainerRuntime): Promise<void>;
        preInitialize(context: IContainerContext, existing: boolean): Promise<IRuntime & IContainerRuntime>;
        readonly IRuntimeFactory: any;
        instantiateRuntime(context: IContainerContext, existing?: boolean | undefined): Promise<IRuntime>;
        hasInitialized(_runtime: IContainerRuntime): Promise<void>;
    };
};

// @public (undocumented)
export enum DataObjectFactoryType {
    // (undocumented)
    Primed = 0,
    // (undocumented)
    Test = 1
}

// @public (undocumented)
export const defaultTimeoutDurationMs = 250;

// @public (undocumented)
export type fluidEntryPoint = SupportedExportInterfaces | IFluidModule;

// @public (undocumented)
export interface IOpProcessingController {
    // (undocumented)
    pauseProcessing(...containers: IContainer[]): Promise<void>;
    // (undocumented)
    processIncoming(...containers: IContainer[]): Promise<void>;
    // (undocumented)
    processOutgoing(...containers: IContainer[]): Promise<void>;
    // (undocumented)
    resumeProcessing(...containers: IContainer[]): void;
}

// @public (undocumented)
export interface IProvideTestFluidObject {
    // (undocumented)
    readonly ITestFluidObject: ITestFluidObject;
}

// @public (undocumented)
export interface ITestContainerConfig {
    fluidDataObjectType?: DataObjectFactoryType;
    loaderOptions?: ITestLoaderOptions;
    registry?: ChannelFactoryRegistry;
    runtimeOptions?: IContainerRuntimeOptions;
}

// @public (undocumented)
export interface ITestFluidObject extends IProvideTestFluidObject, IFluidLoadable {
    // (undocumented)
    readonly channel: IFluidDataStoreChannel;
    // (undocumented)
    readonly context: IFluidDataStoreContext;
    // (undocumented)
    getSharedObject<T = any>(id: string): Promise<T>;
    // (undocumented)
    root: ISharedMap;
    // (undocumented)
    readonly runtime: IFluidDataStoreRuntime;
}

// @public (undocumented)
export interface ITestLoaderOptions extends ILoaderOptions {
    // (undocumented)
    logger?: ITelemetryBaseLogger;
}

// @public (undocumented)
export interface ITestObjectProvider {
    // (undocumented)
    createContainer(entryPoint: fluidEntryPoint, options?: ITestLoaderOptions): Promise<IContainer>;
    // (undocumented)
    createFluidEntryPoint: (testContainerConfig?: ITestContainerConfig) => fluidEntryPoint;
    // (undocumented)
    createLoader(packageEntries: Iterable<[IFluidCodeDetails, fluidEntryPoint]>, options?: ITestLoaderOptions, detachedBlobStorage?: IDetachedBlobStorage): IHostLoader;
    // (undocumented)
    defaultCodeDetails: IFluidCodeDetails;
    // (undocumented)
    documentId: string;
    // (undocumented)
    documentServiceFactory: IDocumentServiceFactory;
    // (undocumented)
    driver: ITestDriver;
    // (undocumented)
    ensureSynchronized(): Promise<void>;
    // (undocumented)
    loadContainer(entryPoint: fluidEntryPoint, options?: ITestLoaderOptions, requestHeader?: IRequestHeader): Promise<IContainer>;
    // (undocumented)
    loadTestContainer(testContainerConfig?: ITestContainerConfig, requestHeader?: IRequestHeader): Promise<IContainer>;
    // (undocumented)
    logger: ITelemetryBaseLogger;
    // (undocumented)
    makeTestContainer(testContainerConfig?: ITestContainerConfig): Promise<IContainer>;
    makeTestLoader(testContainerConfig?: ITestContainerConfig, detachedBlobStorage?: IDetachedBlobStorage): IHostLoader;
    // (undocumented)
    opProcessingController: IOpProcessingController;
    // (undocumented)
    reset(): void;
    // (undocumented)
    updateDocumentId(url: IResolvedUrl | undefined): void;
    // (undocumented)
    urlResolver: IUrlResolver;
}

// @public (undocumented)
export class LoaderContainerTracker implements IOpProcessingController {
    add<LoaderType extends IHostLoader>(loader: LoaderType): void;
    ensureSynchronized(...containers: IContainer[]): Promise<void>;
    pauseProcessing(...containers: IContainer[]): Promise<void>;
    processIncoming(...containers: IContainer[]): Promise<void>;
    processOutgoing(...containers: IContainer[]): Promise<void>;
    reset(): void;
    resumeProcessing(...containers: IContainer[]): IContainer[];
    }

// @public
export class LocalCodeLoader implements ICodeLoader {
    constructor(packageEntries: Iterable<[IFluidCodeDetails, fluidEntryPoint]>, runtimeOptions?: IContainerRuntimeOptions);
    load(source: IFluidCodeDetails): Promise<IFluidModule>;
}

// @public (undocumented)
export type SupportedExportInterfaces = Partial<IProvideRuntimeFactory & IProvideFluidDataStoreFactory & IProvideFluidDataStoreRegistry & IProvideFluidCodeDetailsComparer>;

// @public
export const TestContainerRuntimeFactory: {
    new (type: string, dataStoreFactory: IFluidDataStoreFactory, runtimeOptions?: IContainerRuntimeOptions, requestHandlers?: RuntimeRequestHandler[]): {
        type: string;
        dataStoreFactory: IFluidDataStoreFactory;
        runtimeOptions: IContainerRuntimeOptions;
        requestHandlers: RuntimeRequestHandler[];
        instantiateFirstTime(runtime: ContainerRuntime): Promise<void>;
        instantiateFromExisting(runtime: ContainerRuntime): Promise<void>;
        preInitialize(context: IContainerContext, existing: boolean): Promise<IRuntime & IContainerRuntime>;
        readonly IRuntimeFactory: any;
        instantiateRuntime(context: IContainerContext, existing?: boolean | undefined): Promise<IRuntime>;
        hasInitialized(_runtime: IContainerRuntime): Promise<void>;
    };
};

// @public
export class TestFluidObject implements ITestFluidObject {
    constructor(runtime: IFluidDataStoreRuntime, channel: IFluidDataStoreChannel, context: IFluidDataStoreContext, factoryEntriesMap: Map<string, IChannelFactory>);
    // (undocumented)
    readonly channel: IFluidDataStoreChannel;
    // (undocumented)
    readonly context: IFluidDataStoreContext;
    getSharedObject<T = any>(id: string): Promise<T>;
    // (undocumented)
    get handle(): IFluidHandle<this>;
    // (undocumented)
    get IFluidLoadable(): this;
    // (undocumented)
    get ITestFluidObject(): this;
    // (undocumented)
    static load(runtime: IFluidDataStoreRuntime, channel: IFluidDataStoreChannel, context: IFluidDataStoreContext, factoryEntries: Map<string, IChannelFactory>, existing: boolean): Promise<TestFluidObject>;
    // (undocumented)
    request(request: IRequest): Promise<IResponse>;
    // (undocumented)
    root: ISharedMap;
    // (undocumented)
    readonly runtime: IFluidDataStoreRuntime;
}

// @public
export class TestFluidObjectFactory implements IFluidDataStoreFactory {
    constructor(factoryEntries: ChannelFactoryRegistry, type?: string);
    // (undocumented)
    get IFluidDataStoreFactory(): this;
    // (undocumented)
    instantiateDataStore(context: IFluidDataStoreContext, existing: boolean): Promise<FluidDataStoreRuntime>;
    // (undocumented)
    readonly type: string;
}

// @public
export class TestObjectProvider {
    constructor(LoaderConstructor: typeof Loader, driver: ITestDriver, createFluidEntryPoint: (testContainerConfig?: ITestContainerConfig) => fluidEntryPoint);
    createContainer(entryPoint: fluidEntryPoint, options?: ITestLoaderOptions): Promise<IContainer>;
    // (undocumented)
    readonly createFluidEntryPoint: (testContainerConfig?: ITestContainerConfig) => fluidEntryPoint;
    createLoader(packageEntries: Iterable<[IFluidCodeDetails, fluidEntryPoint]>, options?: ITestLoaderOptions, detachedBlobStorage?: IDetachedBlobStorage): Loader;
    // (undocumented)
    get defaultCodeDetails(): IFluidCodeDetails;
    // (undocumented)
    get documentId(): string;
    // (undocumented)
    get documentServiceFactory(): IDocumentServiceFactory;
    // (undocumented)
    readonly driver: ITestDriver;
    // (undocumented)
    ensureSynchronized(): Promise<void>;
    // (undocumented)
    loadContainer(entryPoint: fluidEntryPoint, options?: ITestLoaderOptions, requestHeader?: IRequestHeader): Promise<IContainer>;
    // (undocumented)
    readonly LoaderConstructor: typeof Loader;
    loadTestContainer(testContainerConfig?: ITestContainerConfig, requestHeader?: IRequestHeader): Promise<IContainer>;
    // (undocumented)
    get logger(): ITelemetryBaseLogger;
    makeTestContainer(testContainerConfig?: ITestContainerConfig): Promise<IContainer>;
    makeTestLoader(testContainerConfig?: ITestContainerConfig, detachedBlobStorage?: IDetachedBlobStorage): Loader;
    // (undocumented)
    get opProcessingController(): IOpProcessingController;
    // (undocumented)
    reset(): void;
    // (undocumented)
    updateDocumentId(resolvedUrl: IResolvedUrl | undefined): void;
    // (undocumented)
    get urlResolver(): IUrlResolver;
    }

// @public (undocumented)
export function timeoutAwait<T = void>(promise: PromiseLike<T>, timeoutOptions?: TimeoutWithError | TimeoutWithValue<T>): Promise<T>;

// @public (undocumented)
export function timeoutPromise<T = void>(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void, timeoutOptions?: TimeoutWithError | TimeoutWithValue<T>): Promise<T>;

// @public (undocumented)
export interface TimeoutWithError {
    // (undocumented)
    durationMs?: number;
    // (undocumented)
    errorMsg?: string;
    // (undocumented)
    reject?: true;
}

// @public (undocumented)
export interface TimeoutWithValue<T = void> {
    // (undocumented)
    durationMs?: number;
    // (undocumented)
    reject: false;
    // (undocumented)
    value: T;
}


// (No @packageDocumentation comment for this package)

```
