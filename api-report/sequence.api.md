## API Report File for "@fluidframework/sequence"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { BaseSegment } from '@fluidframework/merge-tree';
import { Client } from '@fluidframework/merge-tree';
import { Deferred } from '@fluidframework/common-utils';
import { FluidObject } from '@fluidframework/core-interfaces';
import { IChannelAttributes } from '@fluidframework/datastore-definitions';
import { IChannelFactory } from '@fluidframework/datastore-definitions';
import { IChannelServices } from '@fluidframework/datastore-definitions';
import { IChannelStorageService } from '@fluidframework/datastore-definitions';
import { ICombiningOp } from '@fluidframework/merge-tree';
import { IEvent } from '@fluidframework/common-definitions';
import { IEventThisPlaceHolder } from '@fluidframework/common-definitions';
import { IFluidDataStoreRuntime } from '@fluidframework/datastore-definitions';
import { IFluidHandle } from '@fluidframework/core-interfaces';
import { IFluidLoadable } from '@fluidframework/core-interfaces';
import { IFluidObject } from '@fluidframework/core-interfaces';
import { IFluidSerializer } from '@fluidframework/shared-object-base';
import { IInterval } from '@fluidframework/merge-tree';
import { IJSONSegment } from '@fluidframework/merge-tree';
import { IMergeTreeDeltaCallbackArgs } from '@fluidframework/merge-tree';
import { IMergeTreeDeltaOpArgs } from '@fluidframework/merge-tree';
import { IMergeTreeGroupMsg } from '@fluidframework/merge-tree';
import { IMergeTreeInsertMsg } from '@fluidframework/merge-tree';
import { IMergeTreeMaintenanceCallbackArgs } from '@fluidframework/merge-tree';
import { IMergeTreeOp } from '@fluidframework/merge-tree';
import { IMergeTreeRemoveMsg } from '@fluidframework/merge-tree';
import { IntervalConflictResolver } from '@fluidframework/merge-tree';
import { IntervalType } from '@fluidframework/merge-tree';
import { IRelativePosition } from '@fluidframework/merge-tree';
import { ISegment } from '@fluidframework/merge-tree';
import { ISegmentAction } from '@fluidframework/merge-tree';
import { ISequencedDocumentMessage } from '@fluidframework/protocol-definitions';
import { ISharedObject } from '@fluidframework/shared-object-base';
import { ISharedObjectEvents } from '@fluidframework/shared-object-base';
import { ISummaryTreeWithStats } from '@fluidframework/runtime-definitions';
import { Jsonable } from '@fluidframework/datastore-definitions';
import { LocalReference } from '@fluidframework/merge-tree';
import { Marker } from '@fluidframework/merge-tree';
import { MergeTreeDeltaOperationType } from '@fluidframework/merge-tree';
import { MergeTreeDeltaOperationTypes } from '@fluidframework/merge-tree';
import { MergeTreeMaintenanceType } from '@fluidframework/merge-tree';
import { PropertiesManager } from '@fluidframework/merge-tree';
import { PropertySet } from '@fluidframework/merge-tree';
import { RangeStackMap } from '@fluidframework/merge-tree';
import { ReferencePosition } from '@fluidframework/merge-tree';
import { ReferenceType } from '@fluidframework/merge-tree';
import { Serializable } from '@fluidframework/datastore-definitions';
import { SharedObject } from '@fluidframework/shared-object-base';
import { SummarySerializer } from '@fluidframework/shared-object-base';
import { TextSegment } from '@fluidframework/merge-tree';
import { TypedEventEmitter } from '@fluidframework/common-utils';

// @public (undocumented)
export type DeserializeCallback = (properties: PropertySet) => void;

// @public (undocumented)
export interface IIntervalCollectionEvent<TInterval extends ISerializableInterval> extends IEvent {
    // (undocumented)
    (event: "addInterval" | "deleteInterval", listener: (interval: TInterval, local: boolean, op: ISequencedDocumentMessage) => void): any;
    // (undocumented)
    (event: "propertyChanged", listener: (interval: TInterval, propertyArgs: PropertySet) => void): any;
}

// @public (undocumented)
export interface IIntervalHelpers<TInterval extends ISerializableInterval> {
    // (undocumented)
    compareEnds(a: TInterval, b: TInterval): number;
    // (undocumented)
    create(label: string, start: number, end: number, client: Client, intervalType?: IntervalType): TInterval;
}

// @public (undocumented)
export interface IJSONRunSegment<T> extends IJSONSegment {
    // (undocumented)
    items: Serializable<T>[];
}

// @public (undocumented)
export class Interval implements ISerializableInterval {
    constructor(start: number, end: number, props?: PropertySet);
    // (undocumented)
    addProperties(newProps: PropertySet, collaborating?: boolean, seq?: number, op?: ICombiningOp): PropertySet | undefined;
    // (undocumented)
    addPropertySet(props: PropertySet): void;
    // (undocumented)
    auxProps: PropertySet[];
    // (undocumented)
    clone(): Interval;
    // (undocumented)
    compare(b: Interval): number;
    // (undocumented)
    compareEnd(b: Interval): number;
    // (undocumented)
    compareStart(b: Interval): number;
    // (undocumented)
    end: number;
    // (undocumented)
    getAdditionalPropertySets(): PropertySet[];
    // (undocumented)
    getIntervalId(): string | undefined;
    // (undocumented)
    getProperties(): PropertySet;
    // (undocumented)
    modify(label: string, start: number, end: number): Interval;
    // (undocumented)
    overlaps(b: Interval): boolean;
    // (undocumented)
    properties: PropertySet;
    // (undocumented)
    propertyManager: PropertiesManager;
    // (undocumented)
    serialize(client: Client): ISerializedInterval;
    // (undocumented)
    start: number;
    // (undocumented)
    union(b: Interval): Interval;
}

// @public (undocumented)
export class IntervalCollection<TInterval extends ISerializableInterval> extends TypedEventEmitter<IIntervalCollectionEvent<TInterval>> {
    // (undocumented)
    [Symbol.iterator](): IntervalCollectionIterator<TInterval>;
    constructor(helpers: IIntervalHelpers<TInterval>, requiresClient: boolean, emitter: IValueOpEmitter, serializedIntervals: ISerializedInterval[]);
    // (undocumented)
    add(start: number, end: number, intervalType: IntervalType, props?: PropertySet): TInterval;
    // (undocumented)
    addConflictResolver(conflictResolver: IntervalConflictResolver<TInterval>): void;
    // (undocumented)
    addInternal(serializedInterval: ISerializedInterval, local: boolean, op: ISequencedDocumentMessage): TInterval;
    // (undocumented)
    attachDeserializer(onDeserialize: DeserializeCallback): void;
    // (undocumented)
    get attached(): boolean;
    // (undocumented)
    attachGraph(client: Client, label: string): void;
    // (undocumented)
    change(id: string, start?: number, end?: number): TInterval | undefined;
    // (undocumented)
    changeInterval(serializedInterval: ISerializedInterval, local: boolean, op: ISequencedDocumentMessage): void;
    // (undocumented)
    changeProperties(id: string, props: PropertySet): void;
    // (undocumented)
    CreateBackwardIteratorWithEndPosition(endPosition: number): IntervalCollectionIterator<TInterval>;
    // (undocumented)
    CreateBackwardIteratorWithStartPosition(startPosition: number): IntervalCollectionIterator<TInterval>;
    // (undocumented)
    CreateForwardIteratorWithEndPosition(endPosition: number): IntervalCollectionIterator<TInterval>;
    // (undocumented)
    CreateForwardIteratorWithStartPosition(startPosition: number): IntervalCollectionIterator<TInterval>;
    // (undocumented)
    deleteInterval(serializedInterval: ISerializedInterval, local: boolean, op: ISequencedDocumentMessage): void;
    // (undocumented)
    findOverlappingIntervals(startPosition: number, endPosition: number): TInterval[];
    // (undocumented)
    gatherIterationResults(results: TInterval[], iteratesForward: boolean, start?: number, end?: number): void;
    // (undocumented)
    getIntervalById(id: string): TInterval;
    // (undocumented)
    map(fn: (interval: TInterval) => void): void;
    // (undocumented)
    nextInterval(pos: number): TInterval;
    // (undocumented)
    previousInterval(pos: number): TInterval;
    // (undocumented)
    removeIntervalById(id: string): TInterval;
    // (undocumented)
    serializeInternal(): ISerializedInterval[];
}

// @public (undocumented)
export class IntervalCollectionIterator<TInterval extends ISerializableInterval> {
    constructor(collection: IntervalCollection<TInterval>, iteratesForward?: boolean, start?: number, end?: number);
    // (undocumented)
    next(): {
        value: TInterval;
        done: boolean;
    };
    }

// @public
export interface ISequenceDeltaRange<TOperation extends MergeTreeDeltaOperationTypes = MergeTreeDeltaOperationTypes> {
    // (undocumented)
    operation: TOperation;
    position: number;
    // (undocumented)
    propertyDeltas: PropertySet;
    segment: ISegment;
}

// @public (undocumented)
export interface ISerializableInterval extends IInterval {
    // (undocumented)
    addProperties(props: PropertySet, collaborating?: boolean, seq?: number): PropertySet | undefined;
    // (undocumented)
    getIntervalId(): string | undefined;
    // (undocumented)
    properties: PropertySet;
    // (undocumented)
    propertyManager: PropertiesManager;
    // (undocumented)
    serialize(client: Client): ISerializedInterval;
}

// @public (undocumented)
export interface ISerializedInterval {
    // (undocumented)
    end: number;
    // (undocumented)
    intervalType: IntervalType;
    // (undocumented)
    properties?: PropertySet;
    // (undocumented)
    sequenceNumber: number;
    // (undocumented)
    start: number;
}

// @public (undocumented)
export interface ISharedIntervalCollection<TInterval extends ISerializableInterval> {
    // (undocumented)
    getIntervalCollection(label: string): IntervalCollection<TInterval>;
    // (undocumented)
    waitIntervalCollection(label: string): Promise<IntervalCollection<TInterval>>;
}

// @public
export interface ISharedSegmentSequenceEvents extends ISharedObjectEvents {
    // (undocumented)
    (event: "sequenceDelta", listener: (event: SequenceDeltaEvent, target: IEventThisPlaceHolder) => void): any;
    // (undocumented)
    (event: "maintenance", listener: (event: SequenceMaintenanceEvent, target: IEventThisPlaceHolder) => void): any;
}

// @public
export interface ISharedString extends SharedSegmentSequence<SharedStringSegment> {
    insertMarker(pos: number, refType: ReferenceType, props?: PropertySet): IMergeTreeInsertMsg;
    insertText(pos: number, text: string, props?: PropertySet): void;
    posFromRelativePos(relativePos: IRelativePosition): number;
}

// @public
export interface IValueOpEmitter {
    // @alpha
    emit(opName: string, previousValue: any, params: any): void;
}

// @public @deprecated (undocumented)
export type MatrixSegment = RunSegment | PaddingSegment;

// @public @deprecated (undocumented)
export const maxCellPosition: number;

// @public @deprecated (undocumented)
export const maxCol = 2097152;

// @public @deprecated (undocumented)
export const maxCols: number;

// @public @deprecated (undocumented)
export const maxRow = 4294967295;

// @public @deprecated (undocumented)
export const maxRows: number;

// @public @deprecated
export class PaddingSegment extends BaseSegment {
    constructor(size: number);
    // (undocumented)
    append(segment: ISegment): void;
    // (undocumented)
    canAppend(segment: ISegment): boolean;
    // (undocumented)
    clone(start?: number, end?: number): PaddingSegment;
    // (undocumented)
    protected createSplitSegmentAt(pos: number): PaddingSegment;
    // (undocumented)
    static fromJSONObject(spec: any): PaddingSegment;
    // (undocumented)
    static is(segment: ISegment): segment is PaddingSegment;
    // (undocumented)
    removeRange(start: number, end: number): boolean;
    // (undocumented)
    toJSONObject(): {
        pad: number;
        props: PropertySet;
    };
    // (undocumented)
    toString(): string;
    // (undocumented)
    readonly type = "PaddingSegment";
    // (undocumented)
    static readonly typeString = "PaddingSegment";
}

// @public @deprecated (undocumented)
export function positionToRowCol(position: number): {
    row: number;
    col: number;
};

// @public @deprecated (undocumented)
export const rowColToPosition: (row: number, col: number) => number;

// @public @deprecated (undocumented)
export class RunSegment extends SubSequence<SparseMatrixItem> {
    constructor(items: SparseMatrixItem[]);
    // (undocumented)
    append(segment: ISegment): this;
    // (undocumented)
    clone(start?: number, end?: number): RunSegment;
    // (undocumented)
    protected createSplitSegmentAt(pos: number): RunSegment;
    // (undocumented)
    static fromJSONObject(spec: any): RunSegment;
    // (undocumented)
    getTag(pos: number): any;
    // (undocumented)
    static is(segment: ISegment): segment is RunSegment;
    // (undocumented)
    items: SparseMatrixItem[];
    // (undocumented)
    removeRange(start: number, end: number): boolean;
    // (undocumented)
    setTag(pos: number, tag: any): void;
    // (undocumented)
    readonly type = "RunSegment";
    // (undocumented)
    static readonly typeString = "RunSegment";
}

// @public
export class SequenceDeltaEvent extends SequenceEvent<MergeTreeDeltaOperationType> {
    constructor(opArgs: IMergeTreeDeltaOpArgs, deltaArgs: IMergeTreeDeltaCallbackArgs, mergeTreeClient: Client);
    readonly isLocal: boolean;
    // (undocumented)
    readonly opArgs: IMergeTreeDeltaOpArgs;
}

// @public
export abstract class SequenceEvent<TOperation extends MergeTreeDeltaOperationTypes = MergeTreeDeltaOperationTypes> {
    constructor(deltaArgs: IMergeTreeDeltaCallbackArgs<TOperation>, mergeTreeClient: Client);
    get clientId(): string;
    // (undocumented)
    readonly deltaArgs: IMergeTreeDeltaCallbackArgs<TOperation>;
    // (undocumented)
    readonly deltaOperation: TOperation;
    get first(): Readonly<ISequenceDeltaRange<TOperation>> | undefined;
    // (undocumented)
    readonly isEmpty: boolean;
    get last(): Readonly<ISequenceDeltaRange<TOperation>> | undefined;
    get ranges(): readonly Readonly<ISequenceDeltaRange<TOperation>>[];
    }

// @public (undocumented)
export class SequenceInterval implements ISerializableInterval {
    constructor(start: LocalReference, end: LocalReference, intervalType: IntervalType, props?: PropertySet);
    // (undocumented)
    addProperties(newProps: PropertySet, collab?: boolean, seq?: number, op?: ICombiningOp): PropertySet | undefined;
    // (undocumented)
    clone(): SequenceInterval;
    // (undocumented)
    compare(b: SequenceInterval): number;
    // (undocumented)
    compareEnd(b: SequenceInterval): number;
    // (undocumented)
    compareStart(b: SequenceInterval): number;
    // (undocumented)
    end: LocalReference;
    // (undocumented)
    getIntervalId(): string | undefined;
    // (undocumented)
    intervalType: IntervalType;
    // (undocumented)
    modify(label: string, start: number, end: number): SequenceInterval;
    // (undocumented)
    overlaps(b: SequenceInterval): boolean;
    // (undocumented)
    overlapsPos(bstart: number, bend: number): boolean;
    // (undocumented)
    properties: PropertySet;
    // (undocumented)
    propertyManager: PropertiesManager;
    // (undocumented)
    serialize(client: Client): ISerializedInterval;
    // (undocumented)
    start: LocalReference;
    // (undocumented)
    union(b: SequenceInterval): SequenceInterval;
}

// @public
export class SequenceMaintenanceEvent extends SequenceEvent<MergeTreeMaintenanceType> {
    constructor(opArgs: IMergeTreeDeltaOpArgs | undefined, deltaArgs: IMergeTreeMaintenanceCallbackArgs, mergeTreeClient: Client);
    // (undocumented)
    readonly opArgs: IMergeTreeDeltaOpArgs | undefined;
}

// @public (undocumented)
export class SharedIntervalCollection<TInterval extends ISerializableInterval = Interval> extends SharedObject implements ISharedIntervalCollection<TInterval> {
    // (undocumented)
    readonly [Symbol.toStringTag]: string;
    constructor(id: string, runtime: IFluidDataStoreRuntime, attributes: IChannelAttributes);
    // (undocumented)
    protected applyStashedOp(): void;
    static create(runtime: IFluidDataStoreRuntime, id?: string): SharedIntervalCollection<Interval>;
    static getFactory(): IChannelFactory;
    // (undocumented)
    getIntervalCollection(label: string): IntervalCollection<TInterval>;
    protected getIntervalCollectionPath(label: string): string;
    // (undocumented)
    protected loadCore(storage: IChannelStorageService): Promise<void>;
    // (undocumented)
    protected onDisconnect(): void;
    // (undocumented)
    protected processCore(message: ISequencedDocumentMessage, local: boolean, localOpMetadata: unknown): void;
    // (undocumented)
    protected registerCore(): void;
    // (undocumented)
    protected reSubmitCore(content: any, localOpMetadata: unknown): void;
    // (undocumented)
    protected summarizeCore(serializer: IFluidSerializer): ISummaryTreeWithStats;
    // (undocumented)
    waitIntervalCollection(label: string): Promise<IntervalCollection<TInterval>>;
}

// @public
export class SharedIntervalCollectionFactory implements IChannelFactory {
    // (undocumented)
    static readonly Attributes: IChannelAttributes;
    // (undocumented)
    get attributes(): IChannelAttributes;
    // (undocumented)
    create(runtime: IFluidDataStoreRuntime, id: string): SharedIntervalCollection;
    // (undocumented)
    load(runtime: IFluidDataStoreRuntime, id: string, services: IChannelServices, attributes: IChannelAttributes): Promise<SharedIntervalCollection>;
    // (undocumented)
    static readonly Type = "https://graph.microsoft.com/types/sharedIntervalCollection";
    // (undocumented)
    get type(): string;
}

// @public @deprecated
export class SharedNumberSequence extends SharedSequence<number> {
    // @deprecated
    constructor(document: IFluidDataStoreRuntime, id: string, attributes: IChannelAttributes);
    // @deprecated
    static create(runtime: IFluidDataStoreRuntime, id?: string): SharedNumberSequence;
    // @deprecated
    static getFactory(): SharedNumberSequenceFactory;
    // @deprecated (undocumented)
    getRange(start: number, end?: number): number[];
    // (undocumented)
    id: string;
}

// @public @deprecated (undocumented)
export class SharedNumberSequenceFactory implements IChannelFactory {
    // @deprecated (undocumented)
    static readonly Attributes: IChannelAttributes;
    // @deprecated (undocumented)
    get attributes(): IChannelAttributes;
    // @deprecated (undocumented)
    create(document: IFluidDataStoreRuntime, id: string): ISharedObject;
    // @deprecated (undocumented)
    load(runtime: IFluidDataStoreRuntime, id: string, services: IChannelServices, attributes: IChannelAttributes): Promise<ISharedObject>;
    // @deprecated (undocumented)
    static segmentFromSpec(segSpec: IJSONSegment): SubSequence<number>;
    // @deprecated (undocumented)
    static Type: string;
    // @deprecated (undocumented)
    get type(): string;
}

// @public @deprecated
export class SharedObjectSequence<T> extends SharedSequence<T> {
    // @deprecated
    constructor(document: IFluidDataStoreRuntime, id: string, attributes: IChannelAttributes);
    // @deprecated
    static create<T>(runtime: IFluidDataStoreRuntime, id?: string): SharedObjectSequence<T>;
    // @deprecated
    static getFactory(): SharedObjectSequenceFactory;
    // @deprecated (undocumented)
    getRange(start: number, end?: number): Serializable<T>[];
    // (undocumented)
    id: string;
}

// @public @deprecated (undocumented)
export class SharedObjectSequenceFactory implements IChannelFactory {
    // @deprecated (undocumented)
    static readonly Attributes: IChannelAttributes;
    // @deprecated (undocumented)
    get attributes(): IChannelAttributes;
    // @deprecated (undocumented)
    create(document: IFluidDataStoreRuntime, id: string): ISharedObject;
    // @deprecated (undocumented)
    load(runtime: IFluidDataStoreRuntime, id: string, services: IChannelServices, attributes: IChannelAttributes): Promise<ISharedObject>;
    // @deprecated (undocumented)
    static segmentFromSpec(segSpec: IJSONSegment): SubSequence<object>;
    // @deprecated (undocumented)
    static Type: string;
    // @deprecated (undocumented)
    get type(): string;
}

// @public (undocumented)
export abstract class SharedSegmentSequence<T extends ISegment> extends SharedObject<ISharedSegmentSequenceEvents> implements ISharedIntervalCollection<SequenceInterval> {
    constructor(dataStoreRuntime: IFluidDataStoreRuntime, id: string, attributes: IChannelAttributes, segmentFromSpec: (spec: IJSONSegment) => ISegment);
    // (undocumented)
    addLocalReference(lref: LocalReference): void;
    annotateRange(start: number, end: number, props: PropertySet, combiningOp?: ICombiningOp): void;
    // (undocumented)
    protected applyStashedOp(): void;
    // (undocumented)
    protected client: Client;
    // (undocumented)
    createPositionReference(segment: T, offset: number, refType: ReferenceType): LocalReference;
    // (undocumented)
    protected didAttach(): void;
    // (undocumented)
    getContainingSegment(pos: number): {
        segment: T;
        offset: number;
    };
    // (undocumented)
    getCurrentSeq(): number;
    // (undocumented)
    getIntervalCollection(label: string): IntervalCollection<SequenceInterval>;
    getLength(): number;
    getPosition(segment: ISegment): number;
    // (undocumented)
    getPropertiesAtPosition(pos: number): PropertySet;
    // (undocumented)
    getRangeExtentsOfPosition(pos: number): {
        posStart: number;
        posAfterEnd: number;
    };
    // (undocumented)
    getStackContext(startPos: number, rangeLabels: string[]): RangeStackMap;
    // (undocumented)
    groupOperation(groupOp: IMergeTreeGroupMsg): void;
    // (undocumented)
    id: string;
    // (undocumented)
    protected initializeLocalCore(): void;
    // (undocumented)
    insertAtReferencePosition(pos: ReferencePosition, segment: T): void;
    // (undocumented)
    protected loadCore(storage: IChannelStorageService): Promise<void>;
    // (undocumented)
    get loaded(): Promise<void>;
    // (undocumented)
    protected loadedDeferred: Deferred<void>;
    // (undocumented)
    localRefToPos(localRef: LocalReference): number;
    // (undocumented)
    protected onConnect(): void;
    // (undocumented)
    protected onDisconnect(): void;
    posFromRelativePos(relativePos: IRelativePosition): number;
    // (undocumented)
    protected processCore(message: ISequencedDocumentMessage, local: boolean, localOpMetadata: unknown): void;
    protected processGCDataCore(serializer: SummarySerializer): void;
    // (undocumented)
    protected registerCore(): void;
    // (undocumented)
    removeLocalReference(lref: LocalReference): void;
    // (undocumented)
    removeRange(start: number, end: number): IMergeTreeRemoveMsg;
    protected replaceRange(start: number, end: number, segment: ISegment): void;
    resolveRemoteClientPosition(remoteClientPosition: number, remoteClientRefSeq: number, remoteClientId: string): number;
    // (undocumented)
    protected reSubmitCore(content: any, localOpMetadata: unknown): void;
    // (undocumented)
    readonly segmentFromSpec: (spec: IJSONSegment) => ISegment;
    // (undocumented)
    submitSequenceMessage(message: IMergeTreeOp): void;
    // (undocumented)
    protected summarizeCore(serializer: IFluidSerializer): ISummaryTreeWithStats;
    // (undocumented)
    waitIntervalCollection(label: string): Promise<IntervalCollection<SequenceInterval>>;
    walkSegments<TClientData>(handler: ISegmentAction<TClientData>, start?: number, end?: number, accum?: TClientData, splitRange?: boolean): void;
}

// @public (undocumented)
export class SharedSequence<T> extends SharedSegmentSequence<SubSequence<T>> {
    constructor(document: IFluidDataStoreRuntime, id: string, attributes: IChannelAttributes, specToSegment: (spec: IJSONSegment) => ISegment);
    getItemCount(): number;
    getItems(start: number, end?: number): Serializable<T>[];
    // (undocumented)
    id: string;
    // (undocumented)
    insert(pos: number, items: Serializable<T>[], props?: PropertySet): void;
    // (undocumented)
    remove(start: number, end: number): void;
}

// @public
export class SharedString extends SharedSegmentSequence<SharedStringSegment> implements ISharedString {
    constructor(document: IFluidDataStoreRuntime, id: string, attributes: IChannelAttributes);
    annotateMarker(marker: Marker, props: PropertySet, combiningOp?: ICombiningOp): void;
    annotateMarkerNotifyConsensus(marker: Marker, props: PropertySet, callback: (m: Marker) => void): void;
    static create(runtime: IFluidDataStoreRuntime, id?: string): SharedString;
    // (undocumented)
    findTile(startPos: number | undefined, tileLabel: string, preceding?: boolean): {
        tile: ReferencePosition;
        pos: number;
    };
    static getFactory(): SharedStringFactory;
    // (undocumented)
    getMarkerFromId(id: string): ISegment;
    getText(start?: number, end?: number): string;
    // (undocumented)
    getTextAndMarkers(label: string): {
        parallelText: string[];
        parallelMarkers: Marker[];
    };
    // (undocumented)
    getTextRangeWithMarkers(start: number, end: number): string;
    // (undocumented)
    getTextRangeWithPlaceholders(start: number, end: number): string;
    getTextWithPlaceholders(): string;
    // (undocumented)
    id: string;
    insertMarker(pos: number, refType: ReferenceType, props?: PropertySet): IMergeTreeInsertMsg;
    insertMarkerRelative(relativePos1: IRelativePosition, refType: ReferenceType, props?: PropertySet): void;
    insertText(pos: number, text: string, props?: PropertySet): void;
    insertTextRelative(relativePos1: IRelativePosition, text: string, props?: PropertySet): void;
    // (undocumented)
    get ISharedString(): ISharedString;
    removeText(start: number, end: number): IMergeTreeRemoveMsg;
    replaceText(start: number, end: number, text: string, props?: PropertySet): void;
}

// @public (undocumented)
export class SharedStringFactory implements IChannelFactory {
    // (undocumented)
    static readonly Attributes: IChannelAttributes;
    // (undocumented)
    get attributes(): IChannelAttributes;
    // (undocumented)
    create(document: IFluidDataStoreRuntime, id: string): SharedString;
    // (undocumented)
    load(runtime: IFluidDataStoreRuntime, id: string, services: IChannelServices, attributes: IChannelAttributes): Promise<SharedString>;
    // (undocumented)
    static segmentFromSpec(spec: any): SharedStringSegment;
    // (undocumented)
    static Type: string;
    // (undocumented)
    get type(): string;
}

// @public (undocumented)
export type SharedStringSegment = TextSegment | Marker;

// @public @deprecated (undocumented)
export class SparseMatrix extends SharedSegmentSequence<MatrixSegment> {
    constructor(document: IFluidDataStoreRuntime, id: string, attributes: IChannelAttributes);
    // (undocumented)
    annotatePosition(row: number, col: number, props: PropertySet): void;
    static create(runtime: IFluidDataStoreRuntime, id?: string): SparseMatrix;
    static getFactory(): IChannelFactory;
    // (undocumented)
    getItem(row: number, col: number): Jsonable<string | number | boolean | IFluidHandle<IFluidObject & FluidObject & IFluidLoadable>>;
    // (undocumented)
    getPositionProperties(row: number, col: number): PropertySet;
    // (undocumented)
    getTag(row: number, col: number): any;
    // (undocumented)
    id: string;
    // (undocumented)
    insertCols(col: number, numCols: number): void;
    // (undocumented)
    insertRows(row: number, numRows: number): void;
    // (undocumented)
    get numRows(): number;
    // (undocumented)
    removeCols(col: number, numCols: number): void;
    // (undocumented)
    removeRows(row: number, numRows: number): void;
    // (undocumented)
    setItems(row: number, col: number, values: SparseMatrixItem[], props?: PropertySet): void;
    // (undocumented)
    setTag(row: number, col: number, tag: any): void;
}

// @public @deprecated (undocumented)
export class SparseMatrixFactory implements IChannelFactory {
    // (undocumented)
    static Attributes: IChannelAttributes;
    // (undocumented)
    get attributes(): IChannelAttributes;
    // (undocumented)
    create(document: IFluidDataStoreRuntime, id: string): ISharedObject;
    // (undocumented)
    load(runtime: IFluidDataStoreRuntime, id: string, services: IChannelServices, attributes: IChannelAttributes): Promise<ISharedObject>;
    // (undocumented)
    static segmentFromSpec(spec: IJSONSegment): ISegment;
    // (undocumented)
    static Type: string;
    // (undocumented)
    get type(): string;
}

// @public @deprecated (undocumented)
export type SparseMatrixItem = Serializable;

// @public (undocumented)
export class SubSequence<T> extends BaseSegment {
    constructor(items: Serializable<T>[]);
    // (undocumented)
    append(segment: ISegment): void;
    // (undocumented)
    canAppend(segment: ISegment): boolean;
    // (undocumented)
    clone(start?: number, end?: number): SubSequence<T>;
    // (undocumented)
    protected createSplitSegmentAt(pos: number): SubSequence<T>;
    // (undocumented)
    static fromJSONObject<U>(spec: Serializable): SubSequence<U>;
    // (undocumented)
    static is(segment: ISegment): segment is SubSequence<any>;
    // (undocumented)
    items: Serializable<T>[];
    // (undocumented)
    removeRange(start: number, end: number): boolean;
    // (undocumented)
    toJSONObject(): IJSONRunSegment<T>;
    // (undocumented)
    toString(): string;
    // (undocumented)
    readonly type: string;
    // (undocumented)
    static readonly typeString: string;
}


// (No @packageDocumentation comment for this package)

```
