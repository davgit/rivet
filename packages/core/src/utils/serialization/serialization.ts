// @ts-ignore
import * as yaml from 'yaml';
import { graphV3Deserializer, projectV3Deserializer } from './serialization_v3.js';
import { Project, NodeGraph } from '../../index.js';
import { getError } from '../errors.js';
import { yamlProblem } from './serializationUtils.js';
import {
  graphV4Deserializer,
  graphV4Serializer,
  projectV4Deserializer,
  projectV4Serializer,
} from './serialization_v4.js';
import { graphV2Deserializer, projectV2Deserializer } from './serialization_v2.js';
import { graphV1Deserializer, projectV1Deserializer } from './serialization_v1.js';

export function serializeProject(project: Project): unknown {
  return projectV4Serializer(project);
}

export function deserializeProject(serializedProject: unknown): Project {
  try {
    return projectV4Deserializer(serializedProject);
  } catch (err) {
    if (err instanceof yaml.YAMLError) {
      yamlProblem(err);
    }
    console.warn(`Failed to deserialize project v4: ${getError(err).stack}`);

    try {
      return projectV3Deserializer(serializedProject);
    } catch (err) {
      if (err instanceof yaml.YAMLError) {
        yamlProblem(err);
      }
      console.warn(`Failed to deserialize project v3: ${getError(err).stack}`);

      try {
        return projectV2Deserializer(serializedProject);
      } catch (err) {
        if (err instanceof yaml.YAMLError) {
          yamlProblem(err);
        }
        console.warn(`Failed to deserialize project v2: ${getError(err).stack}`);

        try {
          return projectV1Deserializer(serializedProject);
        } catch (err) {
          console.warn(`Failed to deserialize project v1: ${getError(err).stack}`);
          throw new Error('Could not deserialize project');
        }
      }
    }
  }
}

export function serializeGraph(graph: NodeGraph): unknown {
  return graphV4Serializer(graph);
}

export function deserializeGraph(serializedGraph: unknown): NodeGraph {
  try {
    return graphV4Deserializer(serializedGraph);
  } catch (err) {
    try {
      return graphV3Deserializer(serializedGraph);
    } catch (err) {
      try {
        return graphV2Deserializer(serializedGraph);
      } catch (err) {
        try {
          return graphV1Deserializer(serializedGraph);
        } catch (err) {
          throw new Error('Could not deserialize graph');
        }
      }
    }
  }
}
