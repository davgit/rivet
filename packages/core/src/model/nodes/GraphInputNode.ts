import { ChartNode, NodeId, NodeInputDefinition, PortId, NodeOutputDefinition } from '../NodeBase.js';
import { nanoid } from 'nanoid';
import { EditorDefinition, NodeImpl, nodeDefinition } from '../NodeImpl.js';
import { DataType, DataValue, getDefaultValue, isArrayDataType } from '../DataValue.js';
import { GraphInputs, Inputs, Outputs } from '../GraphProcessor.js';
import { InternalProcessContext } from '../ProcessContext.js';
import { coerceTypeOptional, inferType } from '../../index.js';

export type GraphInputNode = ChartNode<'graphInput', GraphInputNodeData>;

export type GraphInputNodeData = {
  id: string;
  dataType: DataType;
  defaultValue?: unknown;
  useDefaultValueInput?: boolean;
};

export class GraphInputNodeImpl extends NodeImpl<GraphInputNode> {
  static create(id: string = 'input', dataType: DataType = 'string'): GraphInputNode {
    const chartNode: GraphInputNode = {
      type: 'graphInput',
      title: 'Graph Input',
      id: nanoid() as NodeId,
      visualData: {
        x: 0,
        y: 0,
        width: 300,
      },
      data: {
        id,
        dataType,
        defaultValue: undefined,
        useDefaultValueInput: false,
      },
    };

    return chartNode;
  }

  getInputDefinitions(): NodeInputDefinition[] {
    if (this.data.useDefaultValueInput) {
      return [
        {
          id: 'default' as PortId,
          title: 'Default Value',
          dataType: this.chartNode.data.dataType as DataType,
        },
      ];
    }

    return [];
  }

  getOutputDefinitions(): NodeOutputDefinition[] {
    return [
      {
        id: 'data' as PortId,
        title: this.data.id,
        dataType: this.chartNode.data.dataType as DataType,
      },
    ];
  }

  getEditors(): EditorDefinition<GraphInputNode>[] {
    return [
      {
        type: 'string',
        label: 'ID',
        dataKey: 'id',
      },
      {
        type: 'dataTypeSelector',
        label: 'Data Type',
        dataKey: 'dataType',
      },
      {
        type: 'anyData',
        label: 'Default Value',
        dataKey: 'defaultValue',
        useInputToggleDataKey: 'useDefaultValueInput',
      },
    ];
  }

  async process(inputs: Inputs, context: InternalProcessContext): Promise<Record<string, DataValue>> {
    let inputValue =
      context.graphInputs[this.data.id] == null
        ? undefined
        : coerceTypeOptional(context.graphInputs[this.data.id], this.data.dataType);

    if (inputValue == null && this.data.useDefaultValueInput) {
      inputValue = coerceTypeOptional(inputs['default' as PortId], this.data.dataType);
    }

    if (inputValue == null) {
      inputValue =
        coerceTypeOptional(inferType(this.data.defaultValue), this.data.dataType) ||
        getDefaultValue(this.data.dataType);
    }

    // Resolve undefined for array inputs to empty array
    if (inputValue == null && isArrayDataType(this.data.dataType)) {
      inputValue = { type: this.data.dataType, value: [] } as DataValue;
    }

    const value = {
      type: this.data.dataType,
      value: inputValue,
    } as DataValue;

    return { ['data' as PortId]: value };
  }
}

export const graphInputNode = nodeDefinition(GraphInputNodeImpl, 'Graph Input');