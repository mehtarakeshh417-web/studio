
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { Application } from './actions';
import Link from 'next/link';
import { format } from 'date-fns';

type ApplicationListProps = {
  applications: Application[];
};

export function ApplicationList({ applications }: ApplicationListProps) {
  if (applications.length === 0) {
    return (
      <div className="text-center bg-card p-12 rounded-lg border border-dashed mt-6">
        <h3 className="font-headline text-xl font-bold">No Applications Yet</h3>
        <p className="text-muted-foreground mt-2">
          When candidates apply for jobs, their applications will appear here.
        </p>
      </div>
    );
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Candidate Applications</CardTitle>
        <CardDescription>
          A list of all candidates who have applied for jobs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidate</TableHead>
              <TableHead>Applied For</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">CV</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell>
                  <div className="font-medium">{app.name}</div>
                  <div className="text-sm text-muted-foreground">{app.email}</div>
                  <div className="text-sm text-muted-foreground">{app.phone}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{app.jobTitle}</Badge>
                </TableCell>
                <TableCell>{format(new Date(app.appliedAt), "PPP")}</TableCell>
                <TableCell className="text-right">
                  <Button asChild variant="outline" size="sm">
                    <Link href={app.cvPath} target="_blank" download>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
