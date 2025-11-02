
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { ApplicationForm } from './ApplicationForm';

function ApplyPageContent() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get('jobId');
  const jobTitle = searchParams.get('jobTitle');

  if (!jobId || !jobTitle) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold text-destructive">Invalid Job Link</h1>
        <p className="text-muted-foreground mt-4">
          The job you are trying to apply for does not exist or the link is broken.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <div className="container py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-muted-foreground">Apply for the position of</p>
            <h1 className="font-headline text-4xl font-bold">{jobTitle}</h1>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-sm border">
            <ApplicationForm jobId={jobId} jobTitle={jobTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ApplyPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ApplyPageContent />
        </Suspense>
    )
}
