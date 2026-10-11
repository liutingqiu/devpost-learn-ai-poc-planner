// SPDX-License-Identifier: MIT
import test from 'node:test';
import assert from 'node:assert/strict';
import { DevpostLearnPlannerEngine } from '../dist/index.js';

test('1. createInterviewSession locks structured requirements and defines scope', () => {
  const session = DevpostLearnPlannerEngine.createInterviewSession(
    'AuditFlow AI',
    'Developers waste hours debugging hallucinated smart contract tests',
    'Analyze an ABI and synthesize 5 deterministic Foundry invariant tests'
  );

  assert.equal(session.projectName, 'AuditFlow AI');
  assert.equal(session.step, '2-plan');
  assert.equal(session.isLockedForImplementation, true);
  assert.equal(session.requirements.length, 4);
  assert.equal(session.requirements[0].id, 'REQ-1');
});

test('2. generateScaffold outputs complete architecture markdown and test template', () => {
  const session = DevpostLearnPlannerEngine.createInterviewSession(
    'AuditFlow AI',
    'Problem statement sample',
    'One thing done end-to-end'
  );

  const scaffold = DevpostLearnPlannerEngine.generateScaffold(session);
  assert.ok(scaffold.architectureSummary.includes('Architecture Plan: AuditFlow AI'));
  assert.ok(scaffold.architectureSummary.includes('REQ-1'));
  assert.ok(scaffold.coreModuleFile.includes('runEndToEndPoC'));
  assert.ok(scaffold.testFileTemplate.includes('runEndToEndPoC'));
  assert.equal(scaffold.submissionReadinessScore, 98);
});

test('3. Rejects invalid or empty inputs gracefully', () => {
  assert.throws(() => {
    DevpostLearnPlannerEngine.createInterviewSession('', 'Problem', 'Scope');
  }, /Project name cannot be empty/);

  assert.throws(() => {
    DevpostLearnPlannerEngine.createInterviewSession('App', '', 'Scope');
  }, /Target user problem must be clearly articulated/);

  assert.throws(() => {
    DevpostLearnPlannerEngine.createInterviewSession('App', 'Problem', '');
  }, /Must define the exact one thing the app does end-to-end/);
});
