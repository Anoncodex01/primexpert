export type JobType = "Tender" | "Contract" | "Full-Time" | "Part-Time";
export type ExperienceLevel = "Entry" | "Mid" | "Senior";

export interface Job {
  id: string;
  title: string;
  type: JobType;
  description: string;
  daysRemaining: number;
  location: string;
  compensation: string;
  experienceMin: number;
  experienceMax: number;
  experienceLevel: ExperienceLevel;
  postedDate?: string;
}

export const JOBS: Job[] = [
  { id: "1", title: "Procurement of eCooking Test Equipment for MEPS Compliance Verification", type: "Tender", description: "Procurement of eCooking test equipment for MEPS compliance verification and related services.", daysRemaining: 14, location: "Tanzania", compensation: "As per tender", experienceMin: 2, experienceMax: 10, experienceLevel: "Mid", postedDate: "4 Feb, 2025" },
  { id: "2", title: "16 Research Assistants", type: "Contract", description: "We are seeking 16 research assistants to support fieldwork in Bungoma County (Kenya) and Kagera Region (Tanzania).", daysRemaining: 21, location: "Kenya & Tanzania", compensation: "Negotiable", experienceMin: 0, experienceMax: 3, experienceLevel: "Entry", postedDate: "28 Jan, 2025" },
  { id: "3", title: "12 Enumerators", type: "Contract", description: "On behalf of our partner, we are seeking 12 enumerators for a survey in Songwe region.", daysRemaining: 10, location: "Tanzania", compensation: "Negotiable", experienceMin: 0, experienceMax: 2, experienceLevel: "Entry", postedDate: "8 Feb, 2025" },
  { id: "4", title: "M&E Specialists", type: "Contract", description: "Experienced monitoring and evaluation specialists for short-term assignments across East Africa.", daysRemaining: 30, location: "East Africa", compensation: "Negotiable", experienceMin: 5, experienceMax: 15, experienceLevel: "Senior", postedDate: "1 Feb, 2025" },
  { id: "5", title: "Data Analyst", type: "Full-Time", description: "We are looking for a Data Analyst to support research and M&E projects.", daysRemaining: 15, location: "Dar es Salaam", compensation: "Competitive", experienceMin: 2, experienceMax: 6, experienceLevel: "Mid", postedDate: "3 Feb, 2025" },
  { id: "6", title: "Research Team Lead", type: "Contract", description: "Lead research teams on baseline and impact evaluations in East Africa.", daysRemaining: 7, location: "Remote / Tanzania", compensation: "Negotiable", experienceMin: 7, experienceMax: 20, experienceLevel: "Senior", postedDate: "11 Feb, 2025" },
];

export function getJobById(id: string): Job | undefined {
  return JOBS.find((j) => j.id === id);
}
