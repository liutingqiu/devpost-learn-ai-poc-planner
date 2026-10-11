import { InterviewPlanState, GeneratedScaffoldArtifact } from '../types.js';
export declare class DevpostLearnPlannerEngine {
    /**
     * Initializes or advances the skill-driven interview process.
     * Ensures that the AI coding agent clarifies the problem and locks requirements
     * BEFORE generating any code, preventing hallucination churn.
     */
    static createInterviewSession(projectName: string, targetUserProblem: string, oneThingEndToEnd: string): InterviewPlanState;
    /**
     * Generates the reproducible scaffold and submission artifacts
     * complying with Devpost Learn AI Basics standards.
     */
    static generateScaffold(state: InterviewPlanState): GeneratedScaffoldArtifact;
}
