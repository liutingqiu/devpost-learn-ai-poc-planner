// SPDX-License-Identifier: MIT

export type SkillStep = '1-start' | '2-plan' | '3-build' | '4-test' | '5-submit';

export interface PoCRequirement {
  id: string;
  category: 'CORE_FUNCTIONALITY' | 'DATA_FLOW' | 'SAFETY_GUARDRAIL' | 'USER_EXPERIENCE';
  description: string;
  acceptanceCriteria: string;
}

export interface InterviewPlanState {
  projectName: string;
  targetUserProblem: string;
  oneThingEndToEnd: string;
  step: SkillStep;
  requirements: PoCRequirement[];
  isLockedForImplementation: boolean;
}

export interface GeneratedScaffoldArtifact {
  architectureSummary: string;
  coreModuleFile: string;
  testFileTemplate: string;
  submissionReadinessScore: number;
}
