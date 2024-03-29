// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export interface ITextExplanationDashboardProps {
  /*
   * The interface design for the dashboard
   */
  dataSummary: IDatasetSummary;
  requestQuestionAnsweringMetrics?: (
    selectionIndexes: number[][],
    abortSignal: AbortSignal
  ) => Promise<any[]>;
}

export interface IDatasetSummary {
  /*
   * information about the document given
   */
  text: string[];
  classNames?: string[];
  localExplanations: number[][] | number[][][];
  baseValues?: number[][];
  prediction?: number[];
  predictedY?: number[] | number[][] | string[] | string | number;
  trueY?: number[] | number[][] | string[] | string | number;
}
