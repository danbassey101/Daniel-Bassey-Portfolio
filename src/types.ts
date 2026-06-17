/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  category: 'programming' | 'bi_vis' | 'cloud' | 'all';
  level: number; // 1-100
  iconName: string;
  subTools?: string[];
  description: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  metrics?: { label: string; value: string; description: string }[];
}

export interface ProjectData {
  title: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  technologies: string[];
  architectureSteps?: { name: string; icon: string; desc: string }[];
}
