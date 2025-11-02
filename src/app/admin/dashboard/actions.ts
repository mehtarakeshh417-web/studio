
'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';

export type Job = {
  id: string;
  title: string;
  description: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
};

const jobsFilePath = path.join(process.cwd(), 'src', 'lib', 'jobs.json');

async function readJobsFile(): Promise<Job[]> {
  try {
    const data = await fs.readFile(jobsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return []; // Return empty array if file doesn't exist
    }
    throw error;
  }
}

async function writeJobsFile(jobs: Job[]): Promise<void> {
  await fs.writeFile(jobsFilePath, JSON.stringify(jobs, null, 2), 'utf-8');
}

export async function getJobs(): Promise<Job[]> {
  return await readJobsFile();
}

export async function addJob(newJobData: Omit<Job, 'id'>): Promise<void> {
  const jobs = await readJobsFile();
  const newJob: Job = {
    id: new Date().toISOString() + Math.random().toString(36).substr(2, 9),
    ...newJobData,
  };
  const updatedJobs = [newJob, ...jobs];
  await writeJobsFile(updatedJobs);
  revalidatePath('/careers');
  revalidatePath('/admin/dashboard');
}

export async function deleteJob(id: string): Promise<void> {
  const jobs = await readJobsFile();
  const updatedJobs = jobs.filter((job) => job.id !== id);
  await writeJobsFile(updatedJobs);
  revalidatePath('/careers');
  revalidatePath('/admin/dashboard');
}
