import type { ChartData, ChartOptions, ChartType, DefaultDataPoint, Plugin } from "chart.js";
import type { Writable } from "svelte/store";

export const CONTEXT_CHART = 'chart-context' as const;
export const CONTEXT_TITLE = 'title-context' as const;
export const DATASET_CONTEXT = 'dataset-context' as const;


export type chartContextData<TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel= unknown> = {
  type: string;
  data: Writable<ChartData<TType, TData, TLabel>>
  options: Writable<ChartOptions<TType>>
  plugins: Writable<Plugin<TType>[]>
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type DeepPartial<T> = T extends Function
? T
: T extends Array<infer U>
  ? _DeepPartialArray<U>
  : T extends object
    ? _DeepPartialObject<T>
    : T | undefined;

export type _DeepPartialArray<T> = Array<DeepPartial<T>>
export type _DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> };